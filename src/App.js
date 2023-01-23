import Packages from './Components/Cards/Packages';
import DayExamples from './Components/DayExamples/DayExamples';
import NavoiMap from './Components/Navbar/NavoiMap/NavoiMap';
import DayExamplesPage from './Pages/DayExamplesPage';
import MainPage from './Pages/MainPage';
import NaturePage from './Pages/NaturePage';
import UpComingPage from './Pages/UpComingPage';
import UsefulPage from './Pages/UsefulPage';
import PackagesPage from './Pages/PackagesPage';
import OurClientsPage from './Pages/OurClientsPage';
import FooterPages from './Pages/FooterPages';
import Places from './Pages/Places';
import BestPlaces from './Pages/BestPlaces';
import Slider1 from './image/slider1.png'

function App() {
  return (
    <div className='overflow-hidden'>
      <MainPage />
      <Places />
      <BestPlaces />
      <NavoiMap />
      <DayExamplesPage />
      <UpComingPage />
      <PackagesPage />
      <UsefulPage />
      <OurClientsPage />
      <FooterPages />
    </div>
  );
}

export default App;
