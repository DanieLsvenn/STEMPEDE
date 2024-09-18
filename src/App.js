import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Header />
      <main>
        <NavBar/>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default App;
