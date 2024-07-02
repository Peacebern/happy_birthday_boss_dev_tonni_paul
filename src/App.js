import './App.css';
import BithdayCard from './components/BithdayCard';
import NavBar from './components/NavBar';
import Confetti from "react-confetti";



function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <BithdayCard />
      <Confetti />
    </div>
  );
}

export default App;
