const BASE_URL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

export const fetchRetreats = async (page = 1, filter = {}) => {
  const { type, location, price, date } = filter;
  const query = new URLSearchParams({
    page,
    limit: 5,
    ...(type && type !== 'All' && { type }),
    ...(location && location !== 'All' && { location }),
    ...(price && price !== 'All' && { price: price.replace('-', '_') }), // Adjust price format if needed
    ...(date && date !== 'All' && { date })
  }).toString();

  try {
    const response = await fetch(`${BASE_URL}?${query}`);
    const data = await response.json();
    // Ensure data is always an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching retreats:', error);
    return [];
  }
};

