import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="flex flex-wrap overflow-hidden bg-black bg-opacity-50 max-h-[1000vh]">
      <Header />
      <Slider />
    </div>
  ); 
}

export default App;
