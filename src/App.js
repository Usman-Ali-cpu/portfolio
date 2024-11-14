import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import { Container } from '@mui/material';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <TopNav />
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
