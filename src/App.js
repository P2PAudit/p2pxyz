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
import NotFound from './components/NotFound';
import Blogs from './components/Blogs';
import BlogPage from './components/BlogPage';
import Thankyou from './components/Thankyou';
import Reports from './components/Reports/Reports';
import Reportspage from './components/Reports/Reportspage';
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
            <Route path='*' element={<NotFound />}/>
            <Route path='thankyou/' element={<Thankyou />}/>
            <Route path='services/' element={<Services />} />
            <Route path='katana/' element={<Katanasection />} />
            <Route path='auditorform/' element={<Auditor />} />
            <Route path='requestform/' element={<Request />} />
            <Route path='katanaform/' element={<Katanaform />} />
            <Route path='codereviewform/' element={<Codereview />} />
            <Route path='walletauditform/' element={<Walletaudit />} />
            <Route path='reports/' element={<Reports />} />
            <Route path='reports/:title' element={<Reportspage />} />
            <Route path='blogs/' element={<Blogs />} />
            <Route path='blogs/:title' element={<BlogPage />} />
          </Routes>
          <Footer />
          <Banner />
        </div>
    </Router>
  );
}

export default App;
