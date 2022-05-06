import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <div className="NavBar"> 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Libroteca</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Estrenos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Clásicos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Argentinos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Temáticos</a>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>


        </div>
    );
  }
  
  export default NavBar;