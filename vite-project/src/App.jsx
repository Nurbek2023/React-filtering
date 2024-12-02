import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dataList, setDataList] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Ella' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hannah' },
    { id: 9, name: 'Isaac' },
    { id: 10, name: 'Jack' },
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(dataList);
  const [loading, setLoading] = useState(false);

  // Effect to filter data whenever searchInput changes
  useEffect(() => {
    setLoading(true); // Set loading to true when starting filtering
    const timer = setTimeout(() => {
      setFilteredData(
        dataList.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
      setLoading(false); // Set loading to false when filtering is done
    }, 500); // Simulate a delay

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, [searchInput, dataList]);

  const clearSearch = () => {
    setSearchInput('');
  };

  return (
    <div className="container">
      <h1>Data Filtering</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="clear-btn" onClick={clearSearch}>
          Clear
        </button>
      </div>

      {/* Display loading spinner while filtering */}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => <li key={item.id}>{item.name}</li>)
          ) : (
            <li className="no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
