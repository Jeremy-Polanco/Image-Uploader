import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Image } from './pages';
import { Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/image' element={<Image />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
