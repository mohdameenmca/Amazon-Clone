import React from 'react'
import { Link } from 'react-router-dom'
import Searchbox from './Searchbox'

export default function Header({cartItem}){
    return(
        <div>
            <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to="/">
          <img width="70px" src="/amazonclone.png" />
          </Link>
        </div>
      </div>
      <Searchbox/>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to='/cart'>
        <div>
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">{cartItem.length}</span>
        </div>
        </Link>
      </div>
    </nav>
        </div>
    )
}