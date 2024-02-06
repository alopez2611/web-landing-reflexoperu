export default function PreHeader() {
  return (
    <div>
      <div class="top-info-bar bg-color-v hidden-xs">
        <div class="container">
          <div class="row">
            <ul class="list-inline topList text-center">
              <li>
                <i class="fa fa-envelope bg-color-a" aria-hidden="true"></i>
                <a
                  href="mailto:hola@reflexoperu.com"
                  style="font-weight: bold; color: #fff"
                >
                  reflexoperu@reflexoperu.com
                </a>
              </li>
              <li>
                <i class="fa fa-phone bg-color-a" aria-hidden="true"></i>
                <a href="tel:015330628">
                  <span style="font-weight: bold; color: #fff">
                    +01 533 0628
                  </span>
                </a>
              </li>
              <li>
                <i class="fa fa-clock-o bg-color-a" aria-hidden="true"></i>
                <span style="font-weight: bold; color: #fff">
                  lunes a sábado - 7:00 am a 12:00 pm
                </span>
              </li>
              <li>
                <i> </i>
                <span style="font-weight: bold; color: #fff">
                  Encuéntranos en:
                </span>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/reflexoperu/">
                  <i
                    class="fab fa-facebook-f bg-color-fb"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/user/Reflexoperu"
                >
                  <i
                    class="fab fa-youtube bg-color-youtube"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/user/Reflexoperu"
                >
                  <i class="fab fa-twitter bg-color-tw" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="">
                  <i
                    class="i fab fa-instagram bg-color-instagram"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              {/* <li>
                <button
                  class="btn verify-btn"
                  type="button"
                  style="background-color: #ec971f"
                  data-toggle="modal"
                  data-target="#verifyModal"
                >
                  VERIFICAR TERAPEUTA
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* <div
        class="modal fade"
        id="verifyModal"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">
                Buscar Reflexoterapeuta
              </h4>
            </div>
            <div class="modal-body">
              <form action="/consulta-terapeuta" method="POST" role="form">
                <div class="row">
                  <h5>Datos del terapeuta</h5>
                  <div class="col-lg-12">
                    <label for="nameInput">Nombre</label>
                    <div class="form-group">
                      <i class="fa fa-user"></i>
                      <input
                        class="form-control"
                        type="text"
                        id="nameInput"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <label form="carneInput">Número de carné </label>
                    <div class="form-group">
                      <i class="fa fa-credit-card" aria-hidden="true"></i>
                      <input
                        class="form-control"
                        type="text"
                        id="carneInput"
                        name="carne"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <label for="dniInput">DNI</label>
                    <div class="form-group">
                      <i class="fa fa-id-card" aria-hidden="true"></i>
                      <input
                        class="form-control"
                        type="text"
                        name="dni"
                        id="dniInput"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <br />
                  <h5>Datos del consultante</h5>
                  <div class="col-lg-12">
                    <label for="emailInput">Email</label>
                    <div class="form-group">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <input
                        class="form-control"
                        type="email"
                        id="emailInput"
                        name="email"
                        pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button class="btn" type="submit">
                    CONSULTAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bs-example-modal-sm"
        id="successModal"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
      >
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            Tu consulta se ha realizado con éxito. Se le enviará la respuesta al
            correo registrado.
          </div>
        </div>
      </div> */}
    </div>
  );
}
