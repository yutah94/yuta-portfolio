import React from 'react';
import { Link } from 'react-router-dom';
import '../menu.css'

function Menu() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark bob">
      <h1 class="navbar-brand" href="#">Yuta's Portfolio</h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/work-experience">Work Experience</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;