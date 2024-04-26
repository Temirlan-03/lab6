// src/Home.js
import React from 'react';
import Button from './Button';
import Container from './Container';

const Home = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <Button onClick={() => alert("Button clicked!")} text="Click Me" />
    </Container>
  );
}

export default Home;
