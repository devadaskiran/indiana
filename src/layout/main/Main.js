import React from 'react';
import { Footer, Header } from '../../components';

const Main = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default Main;
