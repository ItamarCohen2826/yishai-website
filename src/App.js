import './App.css';
import logo from './images/logo.png';
import Home from './components/Home';
import About from './components/About';
import Calculators from './components/Calculators';
import Riddles from './components/Riddles';
import LastYear from './components/LastYear';
import SandY from './components/SandY';
import Contact from './components/Contact';
import Hackathon from './components/Hackathon';
import Lom from './components/Lom';
import AU from './components/calculators/AU';
import KM from './components/calculators/KM';
import LY from './components/calculators/LY';
import LYtoKM from './components/calculators/LYtoKM';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "calculators", element: <Calculators />},
    { path: "riddles", element: <Riddles /> },
    { path: "last", element: <LastYear /> },
    { path: "sandy", element: <SandY /> },
    { path: "aucalc", element: <AU /> },
    { path: "kmcalc", element: <KM />},
    { path: "lycalc", element: <LY /> },
    { path: "kmlycalc", element: <LYtoKM   /> },
    { path: "hackathon", element: <Hackathon /> },
    { path: "contact", element: <Contact /> },
    { path: "lom", element: <Lom /> },
    // ...
  ]);
  return routes;
}; 




const MenuBar = () => {
  const getLinkClassNames = ({ isActive }) => [
    "content-tab",
    isActive ? "active-tab" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className='App-header'>
      <div className="logo-container">
        <div className="logo-shifter" style={{float: "right"}}>
          <img alt="" height={75} width={75} src={logo} />
        </div>
      </div>
      <div className="container">
        <div className="menubar">
          <NavLink
            id="home"
            className={getLinkClassNames}
            to="/"
          >
            בית
          </NavLink>
          <NavLink
            id="about"
            className={getLinkClassNames}
            to="/about"
          >
            עלינו
          </NavLink>
          <NavLink
            id="calcs"
            className={getLinkClassNames}
            to="/calculators"
          >
            מחשבונים
          </NavLink>
          <NavLink
            id="riddles"
            className={getLinkClassNames}
            to="/riddles"
          >
            חידות שבועיות
          </NavLink>
          <NavLink
            id="sandy"
            className={getLinkClassNames}
            to="/sandy"
          >
            SandY
          </NavLink>
          <NavLink 
          id="hackathon"
          className={getLinkClassNames}
          to="/hackathon"
          >
            האקאתון והרצאות
          </NavLink>
          <NavLink 
          id="contact"
          className={getLinkClassNames}
          to="/contact"
          >
            צרו קשר
          </NavLink>
          <NavLink
            id="lom"
            className={getLinkClassNames}
            to="/lom"
          >
            L.O.M
          </NavLink>
        </div>
        
      </div>
    </header>
  );
}

function AppWrapper() {
  return (
   <div className="App">
     <Router>
       <MenuBar />
       <App />
     </Router>
     <div className='stars'></div>
     <div className='twinkling'></div>
     <div className='clouds'></div>
   </div>
 ); 
 
}


export default AppWrapper;
