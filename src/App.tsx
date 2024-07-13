import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage.tsx';
import TripPage from './pages/TripPage/TripPage';
import BookingsPage from './pages/BookingsPage/BookingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/trip/:tripId" element={<TripPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
