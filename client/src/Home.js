import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="bg-primary text-white text-center py-3">
        <h1>Welcome to DemoApp</h1>
      </header>

      <main className="my-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Home Component</h2>
            <p className="card-text">
              This is the body of the Home component. You can add more content here.
            </p>
            <div>
              <h3>Data from PHP API:</h3>
              <ul>
                {data.map(item => (
                  <li key={item.id}>
                    {item.name} ({item.email})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-light text-center py-3 mt-4">
        <p>&copy; 2024 DemoApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
