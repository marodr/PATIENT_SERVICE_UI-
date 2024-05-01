import { useLocation } from "react-router-dom";
import logo_main from '../public/logo_main.png';


const Home = () => {
  const location = useLocation();

  if (location.pathname === "/home" || location.pathname === "/") {
    return (
      <>
        <h1>Home</h1>
        <img src={logo_main} alt="Logo image" height={200} width={200}/>
        
      </>
    );
  }
};


export default Home;