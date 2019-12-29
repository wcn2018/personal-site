import React from 'react';
import Gallery from './gallery.js'
import './App.css';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
  <Router align = "center">
    <div className = "l-r_with_arrows">
      <div id = "main-l-arrow">
        <t> left </t>
      </div>
      <div className = "t-d_with_arrows">
        <div>top arrow</div>
        <div className = "Posters">
          <div className = "Poster">
            <img src = "defaultpic.jpg"></img>
          </div>
        </div>
        <div>bottom arrow</div>
      </div>
      <div id = "main-r-arrow">
        <t>right</t>
      </div>
      <Route path = "/gallery" component = {Gallery}/>    
    </div>
  </Router>
    // <div id = "topmenu">
    //   <t>
    //     peepeepoopoo
    //   </t>
    //   <Router>
    //     <Route path = "/gallery" component = {Gallery}/>    
    //   </Router>
    // </div>
  );
}

export default App;
