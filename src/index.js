import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/nav/Nav';
import Cards from './Components/cards/Cards';
import News from './Components/news/News';
import Slider from './Components/slider/Slider';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import More from './Components/more/More';
import Chart from './Components/chart/Chart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Nav/>
   <Cards/>
   <News/>
   <Footer/>
   <Slider/>
   <Chart/>
   <Header/>
   <More/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
