import React from 'react';
import { Footer, Header } from '../../components';

const Main = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Main;
