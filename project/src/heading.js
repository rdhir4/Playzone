import React, { Component } from 'react';
import App from "./App";

class Heading extends Component {
    render() { 
        return ( 
<div>
    <div>
<h1 className="text-center font-weight-bold p-4 bg-danger display-3 text-white">2048</h1>
</div>

<App />
<div className="text-white p-3"style={{backgroundColor:"cornsilk"}}>
    <div className="text-md-right text-dark">This Project was Created by =  <p style={{wordSpacing:60,display:'inline'}}>Sachit(T-2)  Harsh(X-1)  Raghav(X-1)</p>
    <p style={{wordSpacing:55}}>1910990475 1910990146 1910990159</p>
    </div>
</div>
</div>

         );
    }
}
 
export default Heading;