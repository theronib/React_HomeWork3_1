import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Biography from './AuthorPage/biography';
import Home from './AuthorPage/home';
import FamousArtwork from './AuthorPage/mostfamousartwork';
import OtherWorks from './AuthorPage/otherworks';
import PersonalPage from './PersonalPage/personalpage';
import RegistrationPage from './PersonalPage/registrationpage';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="home">React Homework</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="home">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="bio">Biography</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="artwork">The Most Famous Artwork</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="artworks">Artworks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">|</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="personalpage">Personal Page</a>
            </li>
          </ul>
          <a href="registrationpage">
            <button class="btn btn-sm btn-outline-secondary" id="registration" type="button">
              Registration
            </button>
          </a>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home></Home>}>Home</Route>
          <Route path='bio' element={<Biography></Biography>}>Biography</Route>
          <Route path='artwork' element={<FamousArtwork></FamousArtwork>}>The Most Famous Artwork</Route>
          <Route path='artworks' element={<OtherWorks></OtherWorks>}>Artworks</Route>
          <Route path='personalpage' element={<PersonalPage></PersonalPage>}>Personal Page</Route>
          <Route path='registrationpage' element={<RegistrationPage></RegistrationPage>}>Registration Page</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
