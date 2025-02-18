import React, { useEffect, useState } from 'react';

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setData(data.results);
        setLoading(false);
        // console.log(data.results);
      })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user,index) => (
          <li key={index}>
            {user.cell} {user.name.last} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetch;
