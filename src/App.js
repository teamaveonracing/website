import './App.css';
import Nav from "./Website_container/Navbar/Nav";
import ContactUs from './Website_container/Footer/Footer';
import Slider from './Website_container/Slider/Slider'
import Profile from './Website_container/Home/Profile'
function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Slider />
      <ContactUs />
    </div>
  );
}

export default App;
