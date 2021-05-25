
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Holamundo from './components/Holamundo';




function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            inicio
         </Link>
          <Link to="/Contacto" className="btn btn-dark">
            Contacto
         </Link>
         <Link to="/nosotros" className="btn btn-dark">
           nosotros
         </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/holamundo">
          <Holamundo />
          </Route>
          <Route path="/nosotros">   
            <Contacto />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
{/*<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
https://getbootstrap.com/docs/5.0/forms/form-control/ 
*/}