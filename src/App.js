import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import { Container } from '@mui/material';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <TopNav />
      <Sidebar />
      <Container style={{overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        <Header />
        <About />
        
      </Container>
    </div>
  );
}

export default App;
