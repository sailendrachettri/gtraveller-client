import './App.css';
import Company from './components/Company';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ScrollToAnchor from './components/ScrollToAnchor';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Terms } from './components/Terms';
import { Refund } from './components/Refund';
import { Disclaimer } from './components/Disclaimer';

function App() {

  return (
    <>
      <Navbar />
      <ScrollToAnchor /> {/*same page navigation code */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} /> {/* if path doesn't exist the redirect to homepage */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/company" element={<Company />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
