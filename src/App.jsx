import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './slice/DataSlice';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './component/HomePage';
import Catagory from './component/Catagory';

const API_KEY=import.meta.env.VITE_APP_API_KEY
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to navigate between routes
  const [selectedCategory, setSelectedCategory] = useState('general'); // Default category

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=${API_KEY}`);
        const data = await res.json();

        dispatch(setData(data.articles));
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [selectedCategory, dispatch]);

  const handleNav = (category) => {
    setSelectedCategory(category); // Update the selected category
    navigate('/catagory'); // Navigate to the category page
  };

  return (
    <div style={{ width: '100%', height: '', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <button onClick={() => { handleNav('business') }}>business</button>
        <button onClick={() => { handleNav('sports') }}>sports</button>
        <button onClick={() => { handleNav('science') }}>science</button>
      </div>

      <div style={{ width: '100%', height: '80vh' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catagory' element={<Catagory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
