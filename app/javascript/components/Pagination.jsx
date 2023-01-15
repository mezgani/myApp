import React, { useState, useEffect } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API or database here
    // and update the data state
  }, []);

  const handleClick = (newPage) => {
    setCurrentPage(newPage);
    // Fetch new data for the new page here
    // and update the data state
  };

  return (
    <div>
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handleClick(currentPage + 1)}>Next</button>
      <div>
        {data.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      </div>
  );
};

export default Pagination;
