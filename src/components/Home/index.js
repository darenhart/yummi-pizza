import React, { useEffect } from 'react';
import ItemService from '../../services/ItemService';

const Home = () => {
  useEffect(() => {
    const fetch = async () => {
      const result = await ItemService.get();
      console.log(result.data);
    };
    console.log('LOADED');
    fetch();
  }, []);

  return <div>Home</div>;
};

export default Home;
