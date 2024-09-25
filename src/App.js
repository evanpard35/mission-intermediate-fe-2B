import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // Movie data
  const continueWatching = [
    {
      title: 'Don\'t Look Up',
      img: '/img/lanjut-nonton/up.png',
      rating: '4.5/5',
    },
    {
      title: 'All of Us Are Dead',
      img: '/img/lanjut-nonton/aredead.png',
      rating: '4.2/5',
    },
    {
      title: 'Blue Lock',
      img: '/img/lanjut-nonton/bluelock.png',
      rating: '4.6/5',
    },
    {
      title: 'A Man Called Otto',
      img: '/img/lanjut-nonton/otto.png',
      rating: '4.6/5',
    },
    {
      title: 'Dilan',
      img: '/img/lanjut-nonton/dilan.png',
      rating: '4.2/5',
    },
    {
      title: 'Black Adam',
      img: '/img/lanjut-nonton/blackadam.png',
      rating: '4.7/5',
    },
    {
      title: 'Devil All The Time',
      img: '/img/lanjut-nonton/devil.png',
      rating: '4.8/5',
    },
    {
      title: 'Ted Lasso',
      img: '/img/lanjut-nonton/tedlasso.png',
      rating: '4.4/5',
    },
    {
      title: 'Doctor Strange',
      img: '/img/lanjut-nonton/doctorstrange.png',
      rating: '4.6/5',
    },
  ];

  const topRated = [
    {
      title: 'All of Us Are Dead',
      img: '/img/top-rating/allofusaredead.png',
      rating: '4.2/5',
    },
    {
      title: 'Big Hero 6',
      img: '/img/top-rating/bighero6.png',
      rating: '4.7/5',
    },
    {
      title: 'Jurrasic World',
      img: '/img/top-rating/jurrasicworld.png',
      rating: '4.3/5',
    },
    {
      title: 'Sonic',
      img: '/img/top-rating/sonic.png',
      rating: '4.3/5',
    },
    {
      title: 'Suzume',
      img: '/img/top-rating/suzume.png',
      rating: '4.3/5',
    },
    {
      title: 'Black Adam',
      img: '/img/top-rating/blackadam.png',
      rating: '4.7/5',
    },
    {
      title: 'Devil All The Time',
      img: '/img/top-rating/devil.png',
      rating: '4.8/5',
    },
    {
      title: 'Doctor Strange',
      img: '/img/top-rating/doctor.png',
      rating: '4.6/5',
    },
  ];

  const filmTrending = [
    {
      title: 'The Tomorrow War',
      img: '/img/trending/tomorrowwar.png',
      rating: '4.5/5',
    },
    {
      title: 'Quantumania',
      img: '/img/trending/quantumania.png',
      rating: '4.7/5',
    },
    {
      title: 'Guardians of The Galaxy',
      img: '/img/trending/guardians.png',
      rating: '4.3/5',
    },
    {
      title: 'A Man Called Otto',
      img: '/img/trending/otto.png',
      rating: '4.7/5',
    },
    {
      title: 'The Little Mermaid',
      img: '/img/trending/mermaid.png',
      rating: '4.6/5',
    },
    {
      title: 'My Hero Academia',
      img: '/img/trending/academia.png',
      rating: '4.1/5',
    },
    {
      title: 'Alice in Borderland',
      img: '/img/trending/alice.png',
      rating: '4.3/5',
    },
    {
      title: 'Megan',
      img: '/img/trending/megan.png',
      rating: '4.4/5',
    },
  ];

  const rilisBaru = [
    {
      title: 'The Little Mermaid',
      img: '/img/rilis-baru/mermaid.png',
      rating: '4.5/5',
    },
    {
      title: 'Duty After School',
      img: '/img/rilis-baru/dutyafterschool.png',
      rating: '4.7/5',
    },
    {
      title: 'Big Hero 6',
      img: '/img/rilis-baru/bighero.png',
      rating: '4.7/5',
    },
    {
      title: 'All of Us Are Dead',
      img: '/img/rilis-baru/dead.png',
      rating: '4.2/5',
    },
    {
      title: 'Missing',
      img: '/img/rilis-baru/missing.png',
      rating: '4.3/5',
    },
    {
      title: 'Happiness',
      img: '/img/rilis-baru/happiness.png',
      rating: '4.5/5',
    },
    {
      title: 'Spiderman',
      img: '/img/rilis-baru/spiderman.png',
      rating: '4.4/5',
    },
    {
      title: 'Ice Age',
      img: '/img/rilis-baru/iceage.png',
      rating: '4.3/5',
    },
  ];

  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <div className="hero">
                <img src={'./img/dutyafterschool.png'} alt="Duty After School" className="hero-image" />
                <div className="hero-content">
                  <h1>Duty After School</h1>
                  <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusaasaan, </p>
                  <p>Departemen pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah.</p>
                  <p>Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                  <button className="btn-mulai">Mulai</button>
                  <button className="btn-selengkapnya">Selengkapnya</button>
                  <button className="btn-umur">18+</button>
                </div>
              </div>

              <Carousel title="Melanjutkan Tonton Film" movies={continueWatching} />
              <Carousel title="Top Rating Film dan Series Hari Ini" movies={topRated} />
              <Carousel title="Film Trending" movies={filmTrending} />
              <Carousel title="Rilis Baru" movies={rilisBaru} />

              <Footer />
            </div>
          }
        />

        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Register Page Route */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes >
    </Router >


  );
};

export default App;

