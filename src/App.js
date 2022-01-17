import './App.css';
import Nav from "./Website_container/Navbar/Nav";
import ContactUs from './Website_container/Footer/Footer';
import Slider from './Website_container/Slider/Slider'
import Profile from './Website_container/Home/Profile'
import Events from './Website_container/Events/Events';
function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Slider />
      <Events />
      <ContactUs />
    </div>
  );
}

export default App;
