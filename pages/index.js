import React from 'react';
import Head from 'next/head';
import "../styles.scss"

import Navbar from './components/navbar'

import Home from './components/home';
function App() {
  return (
  <div id="wrapper">
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </Head>
      <Navbar />
      <Home name="Alligator" />
  </div>
  );
}

export default App;