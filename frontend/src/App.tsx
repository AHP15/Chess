import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './pages/routes';
import axios from 'axios';

import './App.css';

function App() {
  const fetchData = async () => {
    const req = await axios.get('http://localhost:8080');
    console.log(req.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => {
          const route = <Route key={path} path={path} element={element} />;
          return route;
        })}{' '}
        {/* 404 redirect to / */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
