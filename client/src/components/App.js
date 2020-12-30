import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = (props) => {  
  return(
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
        </div>
      </div>
    </div>
  )
}

export default hot(App)
