import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AllPeeps from './components/peepsComponents/AllPeeps';
import PostPeep from './components/peepsComponents/PostPeep';
import Register from './components/userComponents/Register';
import Login from './components/userComponents/Login';
import Logout from './components/userComponents/Logout';

function App() {

  const [peeps, setPeeps] = useState([]);
  const [getError, setGetError] = useState({ message: `` });
  const [user, setUser] = useState({});
  const url = process.env.REACT_APP_PEEPSURL;

  useEffect(() => {
    const getData = async () => {
      setPeeps(await getPeeps());
    }
    getData();
  }, []);

  const getPeeps = async () => {
    try {
      const res = await axios.get(url);
      return res.data.length ? res.data : new Error(`Oops! No peeps to display`);
    }
    catch (err) {
      setGetError({ message: `Peeps not available from server: ${err.message}` });
      return [];
    }
  };

  return (
    <Router>
      <header className="pb-5 mb-5">
        <Header user={user} />
      </header>
      <main className="my-5 py-5">
        <Routes>
          <Route path="/" element={<>
            <div className="row justify-content-md-center pb-5">
              <h1 className="col-md-auto display-6" style={{ fontSize: "6em" }}>Latest peeps...</h1>
            </div>
            <AllPeeps peepsData={{ peeps, getError }} />
          </>} />
          <Route path="/post" element={
            user && user._id ? <PostPeep setPeeps={setPeeps} getPeeps={getPeeps} user={user} url={url} /> :
              <Login url={url} setUser={setUser} />} />
          <Route path="/register" element={<Register url={url} />} />
          <Route path="/login" element={<Login url={url} setUser={setUser} />} />
          <Route path="/logout" element={<Logout setUser={setUser} />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </main>
      <footer className="fixed-bottom text-dark mt-5 bg-white">
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
