import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Problem from './pages/Problem';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
