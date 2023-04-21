import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Auditor from './components/Forms/Auditor'
import Request from './components/Forms/Request';
import Katanaform from './components/Forms/Katanaform';
import Katanasection from './components/Katanasection';
import Services from './components/Services';
import Codereview from './components/Forms/Codereview';
import Walletaudit from './components/Forms/Walletaudit';
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
            <Route path='services/' element={<Services />} />
            <Route path='katana/' element={<Katanasection />} />
            <Route path='auditorform/' element={<Auditor />} />
            <Route path='requestform/' element={<Request />} />
            <Route path='katanaform/' element={<Katanaform />} />
            <Route path='codereviewform/' element={<Codereview />} />
            <Route path='walletauditform/' element={<Walletaudit />} />
          </Routes>
          <Footer />
          <Banner />
        </div>
    </Router>
  );
}

export default App;
