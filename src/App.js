import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Watches from './components/Watches/Watches';
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Header/>}>
           <Route index element={<Watches/>}/>
           <Route path='/watches' element={<Watches/>}/>
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
