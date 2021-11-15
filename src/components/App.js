import About from '../components/About/About';
import Guest from '../components/Guest/Guest';
import Layout from './Layout';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/pet-react-form/" element={<Layout />}>
          <Route index path="/pet-react-form/" element={<Guest />} />
          <Route path="/pet-react-form/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
