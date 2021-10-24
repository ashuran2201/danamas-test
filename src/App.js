import Header from './Components/Header/Header.jsx'
import SidebarMenu from './Components/Sidebar/SidebarMenu.jsx';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <SidebarMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/post">
            <Post />
          </Route>
          <Route path="/map">
          <Map />
        </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;