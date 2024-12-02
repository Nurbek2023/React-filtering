import { useState, useEffect } from 'react';

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
  const [filteredData, setFilteredData] = useState(dataList);  // Add a state to store filtered data

  // Effect to filter data whenever searchInput changes
  useEffect(() => {
    setFilteredData(
      dataList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, dataList]);

  return (
    <div>
      <h1 style={{ fontSize: '24px', color: '#4CAF50' }}>Data Filtering</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} // Update state on input change
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '200px',
        }}
      />
      <ul>
        {/* Display filtered list */}
        {filteredData.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '8px',
              borderBottom: '1px solid #ddd',
              marginBottom: '5px',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
