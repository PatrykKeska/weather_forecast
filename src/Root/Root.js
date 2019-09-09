import React from 'react';
import MainTemplate from '../Templates/MainTemplate';
import MainPage from '../views/MainPage';



function Root() {


  return (
 <MainTemplate>
    <div className="App">
    <MainPage/>
      </div>
      </MainTemplate>
  );
}

export default Root;
