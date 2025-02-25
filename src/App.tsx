// import './App.css';
// // import Home from './components/Home/Home';
// // import MainLayout from './components/Layouts/MainLayout';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainLayout from './components/Layouts/MainLayout';
// import Home from './components/Home/Home';
// import Discover from './components/Discover/Discover';
// import Booking from './components/Booking/Booking';
// import Location from './components/Location/Location';
// import Choose from './components/Choose/Choose';
// import Details from './components/YachtDetails/YachtDetails';
// import BookingDetails from './components/Booking/BookingDetails';
// import Total from './components/Total/Total';
// import YachtForm from './components/YatchForm/YatchForm';

// function App() {
//   return (
//     <Router> 
//       <Routes>
//         <Route path="/" element={<MainLayout><Home/></MainLayout>} />
//         <Route path="/discover" element={<MainLayout><Discover/></MainLayout>} />
//         <Route path="/bookings" element={<MainLayout><Booking/></MainLayout>} />
//         <Route path="/location" element={<MainLayout><Location/></MainLayout>} />
//         <Route path="/choose" element={<MainLayout><Choose/></MainLayout>} />
//         <Route path="/details" element={<MainLayout><Details/></MainLayout>} />
//         <Route path="/yatch-details" element={<MainLayout><YachtForm/></MainLayout>} />
//         <Route path="/booking-details" element={<MainLayout><BookingDetails/></MainLayout>} />
//         <Route path="/to-pay" element={<MainLayout><Total/></MainLayout>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLayout from './components/Layouts/MainLayout';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Details from './components/YachtDetails/YachtDetails';
import BookingDetails from './components/Booking/BookingDetails';
import YachtForm from './components/YatchForm/YatchForm';
import Review from './components/YachtDetails/YatchReview';
import SignUp from './components/LoginSignup/SignUp';
import Login from './components/LoginSignup/Login';
import Account from './components/Account/Account';
import BookingData from './components/Booking/BookingData';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout><Home/></MainLayout>} />
        <Route path="/my-bookings" element={<MainLayout><Booking/></MainLayout>} />
        <Route path="/booking/:id" element={<MainLayout><BookingData/></MainLayout>} />
        <Route path="/yatch-details/:id" element={<MainLayout><Details/></MainLayout>} />
        <Route path="/booking-details" element={<MainLayout><BookingDetails/></MainLayout>} />
        <Route path="/yatch-form" element={<MainLayout><YachtForm/></MainLayout>} />
        <Route path="/account" element={<MainLayout><Account/></MainLayout>} />
        <Route path="/yatch-review" element={<MainLayout><Review/></MainLayout>} />
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;