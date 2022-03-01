import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  
  const [activeHeader, setHeaderActive] = useState(false);
  
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10)setHeaderActive(true);
      else setHeaderActive(false);
    }
    window.addEventListener('scroll',scrollListener);
    return () => {window.removeEventListener('scroll',scrollListener);}
  },[]);


  return (
    <div>
      <Header active={activeHeader} />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
