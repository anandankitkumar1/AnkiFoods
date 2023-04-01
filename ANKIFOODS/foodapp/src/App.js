
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import RoutesComp from './Others/Routes';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <RoutesComp/>
      <Footer/>
    </div>
  );
}

export default App;
