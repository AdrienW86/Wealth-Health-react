import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/list' element={ <List /> }/>
      <Route path='*' element={ <NotFound /> }/>
     </Routes>
    </div>
  );
}

export default App;
