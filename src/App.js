import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';
import { requests } from './request';

function App() {
  return (
    <div>
    <Navigationbar/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending" fetchUrl={requests. fetchTrending}/>
    <Row title="TopRated" fetchUrl={requests. fetchTopRated}/>
    <Row title="ComedyMovies" fetchUrl={requests. fetchComedyMovies}/>
    <Row title="HorrorMovies" fetchUrl={requests.  fetchHorrorMovies}/>
    <Row title="RomanceMovies" fetchUrl={requests.   fetchRomanceMovies}/>
    <Row title="Documentries" fetchUrl={requests.   fetchDocumentaries}/>
    </div>
  );
}

export default App;
