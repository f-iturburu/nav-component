const header = document.querySelector("header")

const Navbar = ()=>{
 const user = JSON.parse(localStorage.getItem("user")) || undefined
 return header.innerHTML = `
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/views/about-us.html">About us</a>
        </li>
        ${user ? '' : `<li class="nav-item">
        <a class="nav-link" href="/views/login.html">Login</a>
      </li>`}
        ${user?.role == "user" ? `<li class="nav-item">
        <a class="nav-link">Logueado como usuario</a>
      </li>` : ''}
      ${user?.role == "admin" ? `<li class="nav-item">
      <a class="nav-link">Logueado como admin</a>
    </li>` : ''}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 `
}

export default Navbar