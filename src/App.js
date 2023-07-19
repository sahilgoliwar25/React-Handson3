
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormClass from './components/FormClass';
import FormDisplay from './components/FormDisplay';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FormClass/>}></Route>
        <Route path='/display' element={<FormDisplay/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
