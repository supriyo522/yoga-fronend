import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RetreatList from './components/RetreatList';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { fetchRetreats } from './api';
import './App.css';

function App() {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ type: '', location: '', price: '', date: '' });

  useEffect(() => {
    const getRetreats = async () => {
      try {
        const data = await fetchRetreats(page, filter);
        if (Array.isArray(data)) {
          setRetreats(data);
          setFilteredRetreats(data);
        } else {
          console.error('Unexpected data format:', data);
          setRetreats([]);
          setFilteredRetreats([]);
        }
      } catch (error) {
        console.error('Error fetching retreats:', error);
        setRetreats([]);
        setFilteredRetreats([]);
      }
    };
    getRetreats();
  }, [page]);

  useEffect(() => {
    filterRetreats(searchTerm, filter);
  }, [searchTerm, filter, retreats]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filterRetreats = (searchTerm, filter) => {
    let result = retreats.filter(retreat =>
      retreat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filter.type) {
      result = result.filter(retreat => retreat.type === filter.type);
    }
    if (filter.location) {
      result = result.filter(retreat => retreat.location === filter.location);
    }
    if (filter.price) {
      const [minPrice, maxPrice] = filter.price.split('-').map(Number);
      result = result.filter(retreat => retreat.price >= minPrice && (maxPrice ? retreat.price <= maxPrice : true));
    }
    if (filter.date) {
      const selectedDate = new Date(filter.date).getTime() / 1000; // Convert date to timestamp in seconds
      result = result.filter(retreat => retreat.date === selectedDate);
    }
    setFilteredRetreats(result);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Filter onFilterChange={handleFilter} />
        <SearchBar onSearch={handleSearch} />
        <RetreatList retreats={filteredRetreats} />
        <Pagination currentPage={page} onPageChange={setPage} />
      </div>
    </div>
  );
}

export default App;



