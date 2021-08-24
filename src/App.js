import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/about/About'; 
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Layout from './pages/layout/Layout';


function App() {
  return (
    <div >

   

      <Router>
        <Switch>
          <Layout>


            <Route exact path="/React-Portfolio/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route>
            {/* <Route exact path="/contact" component={Contact} ></Route> */}
            <Route exact path="/portfolio" component={Portfolio} ></Route>
            <Route exact path="/resume" component={Resume} ></Route>
          </Layout>


        </Switch>



      </Router>
      
    </div>
  );
}

export default App;
