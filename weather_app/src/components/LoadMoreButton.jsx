import React, { useState, useEffect, useCallback } from 'react';

const LoadMoreComponent = () => {
  const [items, setItems] = useState([]); // List of items
  const [page, setPage] = useState(1);    // Page or offset for loading more items
  const [loading, setLoading] = useState(false); // Loading indicator

  // Function to fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);

      const newData = await response.json();
      setItems((prevItems) => [...prevItems, ...newData]); // Append new items
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Fetch initial data and when the page changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to handle the load more button click
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {loading ? <p>Loading...</p> : <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default LoadMoreComponent;
