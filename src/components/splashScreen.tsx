import logo from '../imgs/splash1bg.png';
import "../styles/splash.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      {/* <h1 className="splash-logo">Welcome to my Weather Forecast</h1> */}

            <img src={logo} alt='logo' className='splash-logo' />
        
    </div>
  );
};

export default SplashScreen;
