import './App.css';
import Company from './components/Company';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';


import { Routes, Route } from 'react-router-dom';
import ScrollToAnchor from './components/ScrollToAnchor';
// import Alert from './components/Alert';
// import { useState } from 'react';

function App() {

  // show alert
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) =>{
  //   setAlert({msg : message, type: type })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // }

  return (
    <>
      {/* <Alert message="This is the message" /> */}
      <Navbar />
      <ScrollToAnchor /> {/*same page navigation code */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} /> {/* if path doesn't exist the redirect to homepage */}
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
