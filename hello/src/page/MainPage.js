import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Index from '../components/common/Index';

const MainPage = () => {
  const [message, setMessage] = useState('');

  const api = axios.create({ baseURL: 'http://54.180.113.96:8080' });

  useEffect(() => {
    api
      .get('/demo')
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.name);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Index message={message} />
    </>
  );
};

export default MainPage;
