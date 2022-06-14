
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import "primeflex/primeflex.css";
import PrimeReact from 'primereact/api';

import Tabla from "./components/menu/Tabla"
import "firebase/auth";

function App() {
 
PrimeReact.ripple = true;
PrimeReact.inputStyle = 'filled';

PrimeReact.zIndex = {
  modal: 1100,    // dialog, sidebar
  overlay: 1000,  // dropdown, overlaypanel
  menu: 1000,     // overlay menus
  tooltip: 1100,   // tooltip
  toast: 1200     // toast
};
PrimeReact.autoZIndex = true;
PrimeReact.appendTo = 'self'; 
PrimeReact.cssTransition = false; 


  return (
    <div className="App">
     <Tabla></Tabla>

      </div>

  );
}

export default App;
