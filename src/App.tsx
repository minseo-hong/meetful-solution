import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Name from './pages/Problem/Name';
import Job from './pages/Problem/Job';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem">
          <Route path="name" element={<Name />} />
          <Route path="job" element={<Job />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
