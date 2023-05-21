import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';

window.history.replaceState({}, document.title);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
