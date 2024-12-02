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
  const [loading, setLoading] = useState(false); // Loading state

  // Effect to filter data whenever searchInput changes
  useEffect(() => {
    setLoading(true); // Set loading to true when starting to filter
    const timer = setTimeout(() => {
      setFilteredData(
        dataList.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
      setLoading(false); // Set loading to false when filtering is done
    }, 500); // Simulating a delay for loading state (can be removed in real scenarios)

    return () => clearTimeout(timer); // Clean up timeout on component unmount or input change
  }, [searchInput, dataList]);

  const clearSearch = () => {
    setSearchInput('');
  };

  return (
    <div>
      <h1>Data Filtering</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={clearSearch}>Clear Search</button>
      {loading ? ( // Show loading spinner or message
        <p>Loading...</p>
      ) : (
        <ul>
          {/* Display filtered list */}
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
