import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Auditor from './components/Forms/Auditor'
import Request from './components/Forms/Request';
import Katana from './components/Forms/Katana';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route index element={<Body />} />
            <Route path='p2pxyz/' element={<Body />} />
            <Route path='auditor/' element={<Auditor />} />
            <Route path='request/' element={<Request />} />
            <Route path='katana/' element={<Katana />} />
          </Routes>
          <Footer />
          <Banner />
        </div>
    </Router>
  );
}

export default App;
