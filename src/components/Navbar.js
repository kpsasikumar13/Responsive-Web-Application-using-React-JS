import React from "react"
import { FaAlignLeft,FaCartPlus} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav>
    <div className="navbar">
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <FaAlignLeft className="sidebox" />
      </label>
      <h1 className="logo">
        Premium
        <br />
        Foods
      </h1>
      <input type="checkbox" id="check1" />
      <label for="check" className="checkbtn">
        <FaCartPlus className="sidebox" />
      </label>
      <div className="links">
        <ul>
        <li><a className="links1" href="">
          <s>About</s>
        </a></li>
        <li><a className="links1" href="">Services</a></li>
        <li><a className="links1" href="">Cuisine</a></li>
        <li><a className="links1" href="">Gallery</a></li>
        <li><a className="links1" href="">Contact</a></li>
        <li><a className="links1" href="">Book</a></li>
        </ul>
      </div>
      <button className="btn">Cart</button>
    </div>
    </nav>
  )
}

export default Navbar
