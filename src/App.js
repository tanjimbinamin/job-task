import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rider from './Component/Rider/Rider';
import Learner from './Component/Learner/Learner.jsx';
import Login from './Component/Login/Login';

function App() {
  return (
    // <AuthProvider>
      <Router>
      
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/rider">
                <Rider></Rider>
            </Route>
            <Route path="/learner">
               <Learner></Learner>
            </Route>
            <Route path="/login">
               <Login></Login>
            </Route>
          </Switch>
          
          <Footer></Footer>
        </Router>
    // </AuthProvider>
  );
}

export default App;
