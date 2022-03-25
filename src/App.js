import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Watches from './components/Watches/Watches';
function App() {
  return (
    <div className="App">
      <Watches/>
    </div>
  );
}

export default App;
