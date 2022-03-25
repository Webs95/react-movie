function Header() {
  return (
    <nav className="blue darken-3">
      <div className="nav-wrapper">
        <a href="#" className=" brand-logo">
          Moovies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
