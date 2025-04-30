import React from "react";

export default function Header() {
  return (
    <header>
      <h1>
        <span className="title-red">Sartre's List</span>
      </h1>
      <p className="subtitle">Better-Dressed People</p>
      <nav>
        <ul>
          <li>
            <a href="#">Women's</a>
          </li>
          <li>
            <a href="#">Men's</a>
          </li>
          <li>
            <a href="#" className="active">
              On the Street
            </a>
          </li>
          <li>
            <a href="#">The Catwalk</a>
          </li>
          <li>
            <a href="#">AdWatch</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
