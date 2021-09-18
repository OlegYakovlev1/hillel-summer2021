import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Switch, BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import About from './components/about/About';
import Navigation from './components/common/Navigation';
import Contacts from './components/contacts/Contacts';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Container>
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/contacts" exact>
                <Contacts />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
