import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { NewPage } from './NewPage/NewPage';
import { EditPage } from './EditPage/EditPage';


function App() {

  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/new' element={<NewPage />}/>
        <Route path='/edit/:id' element={<EditPage />}/>
        <Route path='*' element={<p>Page Not Found</p>}/>


      </Routes>
    </HashRouter>
  );
}

export default App;
