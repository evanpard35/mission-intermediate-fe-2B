import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import MyListPage from './components/MyListPage';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  const [myMovies, setMyMovies] = useState([]);

  const addToMyList = (movie) => {
    setMyMovies((prevMovies) => {
      if (!prevMovies.find((m) => m.title === movie.title)) {
        return [...prevMovies, movie];
      }
      return prevMovies;
    });
  };

  const removeFromMyList = (movieTitle) => {
    setMyMovies((prevMovies) => prevMovies.filter(movie => movie.title !== movieTitle));
  };

  // Movie data
  const continueWatching = [
    {
      title: 'Don\'t Look Up',
      img: '/img/lanjut-nonton/up.png',
      rating: '4.5/5',
      description: 'Description Don\'t Look Up',
    },
    {
      title: 'All of Us Are Dead',
      img: '/img/lanjut-nonton/aredead.png',
      rating: '4.2/5',
      description: 'Description All of Us Are Dead',
    },
    {
      title: 'Blue Lock',
      img: '/img/lanjut-nonton/bluelock.png',
      rating: '4.6/5',
      description: 'Description Blue Lock',
    },
    {
      title: 'A Man Called Otto',
      img: '/img/lanjut-nonton/otto.png',
      rating: '4.6/5',
      description: 'Description A Man Called Otto',
    },
    {
      title: 'Dilan',
      img: '/img/lanjut-nonton/dilan.png',
      rating: '4.2/5',
      description: 'Description Dilan',
    },
    {
      title: 'Black Adam',
      img: '/img/lanjut-nonton/blackadam.png',
      rating: '4.7/5',
      description: 'Description Black Adam',
    },
    {
      title: 'Devil All The Time',
      img: '/img/lanjut-nonton/devil.png',
      rating: '4.8/5',
      description: 'Description Devil All The Time',
    },
    {
      title: 'Ted Lasso',
      img: '/img/lanjut-nonton/tedlasso.png',
      rating: '4.4/5',
      description: 'Description Ted Lasso',
    },
    {
      title: 'Doctor Strange',
      img: '/img/lanjut-nonton/doctorstrange.png',
      rating: '4.6/5',
      description: 'Description Doctor Strange',
    },
  ];

  const topRated = [
    {
      title: 'All of Us Are Dead',
      img: '/img/top-rating/allofusaredead.png',
      rating: '4.2/5',
      description: 'Description All of Us Are Dead',
    },
    {
      title: 'Big Hero 6',
      img: '/img/top-rating/bighero6.png',
      rating: '4.7/5',
      description: 'Description Big Hero 6',
    },
    {
      title: 'Jurrasic World',
      img: '/img/top-rating/jurrasicworld.png',
      rating: '4.3/5',
      description: 'Description Jurrasic World',
    },
    {
      title: 'Sonic',
      img: '/img/top-rating/sonic.png',
      rating: '4.3/5',
      description: 'Description Sonic',
    },
    {
      title: 'Suzume',
      img: '/img/top-rating/suzume.png',
      rating: '4.3/5',
      description: 'Description Suzume',
    },
    {
      title: 'Black Adam',
      img: '/img/top-rating/blackadam.png',
      rating: '4.7/5',
      description: 'Description Black Adam',
    },
    {
      title: 'Devil All The Time',
      img: '/img/top-rating/devil.png',
      rating: '4.8/5',
      description: 'Description Devil All The Time',
    },
    {
      title: 'Doctor Strange',
      img: '/img/top-rating/doctor.png',
      rating: '4.6/5',
      description: 'Description Doctor Strange',
    },
  ];

  const filmTrending = [
    {
      title: 'The Tomorrow War',
      img: '/img/trending/tomorrowwar.png',
      rating: '4.5/5',
      description: 'Description The Tomorrow War',
    },
    {
      title: 'Quantumania',
      img: '/img/trending/quantumania.png',
      rating: '4.7/5',
      description: 'Description Quantumania',
    },
    {
      title: 'Guardians of The Galaxy',
      img: '/img/trending/guardians.png',
      rating: '4.3/5',
      description: 'Description Guardians of The Galaxy',
    },
    {
      title: 'A Man Called Otto',
      img: '/img/trending/otto.png',
      rating: '4.7/5',
      description: 'Description A Man Called Otto',
    },
    {
      title: 'The Little Mermaid',
      img: '/img/trending/mermaid.png',
      rating: '4.6/5',
      description: 'Description The Little Mermaid',
    },
    {
      title: 'My Hero Academia',
      img: '/img/trending/academia.png',
      rating: '4.1/5',
      description: 'Description My Hero Academia',
    },
    {
      title: 'Alice in Borderland',
      img: '/img/trending/alice.png',
      rating: '4.3/5',
      description: 'Description Alice in Borderland',
    },
    {
      title: 'Megan',
      img: '/img/trending/megan.png',
      rating: '4.4/5',
      description: 'Description Megan',
    },
  ];

  const rilisBaru = [
    {
      title: 'The Little Mermaid',
      img: '/img/rilis-baru/mermaid.png',
      rating: '4.5/5',
      description: 'Description The Little Mermaid',
    },
    {
      title: 'Duty After School',
      img: '/img/rilis-baru/dutyafterschool.png',
      rating: '4.7/5',
      description: 'Description Duty After School',
    },
    {
      title: 'Big Hero 6',
      img: '/img/rilis-baru/bighero.png',
      rating: '4.7/5',
      description: 'Description Big Hero 6',
    },
    {
      title: 'All of Us Are Dead',
      img: '/img/rilis-baru/dead.png',
      rating: '4.2/5',
      description: 'Description All of Us Are Dead',
    },
    {
      title: 'Missing',
      img: '/img/rilis-baru/missing.png',
      rating: '4.3/5',
      description: 'Description Missing',
    },
    {
      title: 'Happiness',
      img: '/img/rilis-baru/happiness.png',
      rating: '4.5/5',
      description: 'Description Happiness',
    },
    {
      title: 'Spiderman',
      img: '/img/rilis-baru/spiderman.png',
      rating: '4.4/5',
      description: 'Description Spiderman',
    },
    {
      title: 'Ice Age',
      img: '/img/rilis-baru/iceage.png',
      rating: '4.3/5',
      description: 'Description Ice Age',
    },
  ];

  const isAuthenticated = () => {
    return !!localStorage.getItem('user');
  };



  return (
    <Router>
      <Layout> 
        <Routes>
        <Route
          path="/"
            element={isAuthenticated() ? (
            <div className="App">

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

                <Carousel title="Melanjutkan Tonton Film" movies={continueWatching} addToMyList={addToMyList} />
                <Carousel title="Top Rating Film dan Series Hari Ini" movies={topRated} addToMyList={addToMyList} />
                <Carousel title="Film Trending" movies={filmTrending} addToMyList={addToMyList} />
                <Carousel title="Rilis Baru" movies={rilisBaru} addToMyList={addToMyList} />
              </div>
            ) : (
              <Navigate to="/login" />
            )}
          />

          <Route
            path="/my-list"
            element={isAuthenticated() ? (
              <div>
                <MyListPage myMovies={myMovies} removeFromMyList={removeFromMyList} />

              </div>
            ) : (
              <Navigate to="/login" />
            )}
          />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/my-list"
            element={isAuthenticated() ? (
              <MyListPage />
            ) : (
              <Navigate to="/login" />
            )}
          />
      </Routes >
      </Layout>
    </Router>
  );
};

export default App;

