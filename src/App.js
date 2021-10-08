// ./App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FinancialApp from "./components/FinancialApp";
import Details from "./components/FinancialApp/Details";
import Welcome from "./components/FinancialApp/Welcome";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Router>
        <Header />

        {/* TODO EL CONTENIDO DINÁMICO POR RUTA */}
        <Switch>
          {/* NESTED ROUTES - PROFUNDIDAD EN RUTAS */}
          <Route
            path="/financial-app"
            render={(props) => {
              return (
                <>
                  <FinancialApp>
                    <Route exact path={`${props.match.url}/:currency`} component={Details} />
                    <Route exact path={`${props.match.url}/`} component={Welcome} />
                  </FinancialApp>
                </>
              );
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
