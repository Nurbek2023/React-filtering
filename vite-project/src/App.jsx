import { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

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

  useEffect(() => {
    setFilteredData(
      dataList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, dataList]);

  // Function to clear the search input
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
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
