import PreHeader from "./Pre-header.tsx";
export default function Header() {
  return (
    <header class="header-wrapper" id="pageTop">
      <PreHeader />
      <nav
        class="navbar navbar-default lightHeader menu1"
        id="menuBar"
        role="navigation"
      >
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a
              class="navbar-brand"
              href="/"
              style="padding-bottom: 5px; padding-top: 15px; height: 90px"
            >
              <img id="logo-pes" src="/img/logo.png" alt="Reflexoperu" />
            </a>
          </div>
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="singleDrop color-1">
                <a
                  href="/"
                  data-toggle=""
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span style="color: black; font-weight: 900; font-size: 16px">
                    Inicio
                  </span>
                </a>
              </li>
              <li class="dropdown singleDrop color-1">
                <a
                  class="dropdown-toggle"
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span style="color: black; font-weight: 900; font-size: 16px">
                    Conócenos
                  </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li>
                    <a href="/conocenos">Nosotros</a>
                  </li>
                  <li>
                    <a href="/conocenos/congregacion">La Congregación</a>
                  </li>
                  <li>
                    <a href="/conocenos/hna-juana">Hermana Juana Cattin</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown singleDrop color-1">
                <a
                  class="dropdown-toggle"
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span style="color: black; font-weight: 900; font-size: 16px">
                    Sedes
                  </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li>
                    <a href="/sedes/los-olivos">Los Olivos</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown singleDrop color-1">
                <a
                  class="dropdown-toggle"
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span style="color: black; font-weight: 900; font-size: 16px">
                    Reflexoterapia
                  </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li>
                    <a href="#">Reseña</a>
                  </li>
                  <li>
                    <a href="#">Beneficios</a>
                  </li>
                  <li>
                    <a href="#">Como actua</a>
                  </li>
                  <li>
                    <a href="#">Fundamentos </a>
                  </li>
                  <li>
                    <a href="#">Diagrama de los pies</a>
                  </li>
                  <li>
                    <a href="#">Preguntas frecuentes</a>
                  </li>
                </ul>
              </li>
              <li class="singleDrop color-1">
                <a href="#">
                  <span style="color: black; font-weight: 900; font-size: 16px">
                    Noticias
                  </span>
                </a>
              </li>
              <li class="singleDrop color-1">
                <a href="/contacto">
                  <span style="color: black; font-weight: 900; font-size: 16px">
                    Contacto
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
