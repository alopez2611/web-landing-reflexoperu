import PreFooter from "./Pre-footer.tsx";

export default function Footer() {
  return (
    <div>
      <PreFooter />
      <footer>
        <div
          class="footerInfoArea full-width clearfix"
          id="footer-general"
          style="background-color: #ec971f"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <div class="footerTitle">
                  <a href="/">
                    <img
                      src="/img/logo.png"
                      style="width: 270px; height: 80px"
                    />
                  </a>
                </div>
                <div class="footerInfo">
                  <p id="claro-p" style="padding-top: 30px">
                    El masaje como tratamiento contra dolencias y enfermedades
                    se conoce en la historia de la humanidad desde tiempos
                    remotos. En Asia la medicina se ha desarrollado desde hace
                    5000 años y existe una relación entre los canales
                    energéticos (meridianos) de la Medicina Tradicional China y
                    las zonas de reflejas encontradas por los pioneros de la
                    reflexología. La representación más antigua de la
                    reflexología es el relieve de la tumba del médico egipcio
                    Ankmahor datado 2500 – 2330 años a. C.aliqua.
                  </p>
                </div>
              </div>
              <div class="col-sm-3 col-xs-12" style="padding-left: 50px">
                <div class="footerTitle">
                  <h4>Mapa de Sitio</h4>
                </div>
                <div class="footerInfo">
                  <ul class="list-unstyled footerList">
                    <li>
                      <a href="/conocenos/hermanaJuana">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Hna. Juana Cattin
                      </a>
                    </li>
                    <li>
                      <a href="/sedes">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Sedes
                      </a>
                    </li>
                    <li>
                      <a href="/reflexoterapia">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Reflexoterapia
                      </a>
                    </li>
                    <li>
                      <a href="/escuela">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Escuela
                      </a>
                    </li>
                    <li>
                      <a href="/centro_terapia">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Centro de terapia
                      </a>
                    </li>
                    <li>
                      <a href="/eventos">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Eventos
                      </a>
                    </li>
                    <li>
                      <a href="/revista">
                        <i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                        Revista
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4 col-xs-12" style="padding-left: 50px">
                <div class="footerTitle">
                  <h4>Noticias Recientes</h4>
                </div>
                <div class="footerInfo">
                  <ul class="list-unstyled postLink">
                    <li>
                      <div class="media">
                        <a
                          class="media-left"
                          href="/noticias/vive-la-vida-con-reflexoterapia"
                        >
                          <img
                            class="media-object img-rounded border-color-1"
                            src="https://res.cloudinary.com/reflexoperu/image/upload/v1551554788/Diapositiva1-1.jpg"
                            alt="Image"
                          />
                        </a>
                        <div class="media-body">
                          <h5 class="media-heading">
                            <a
                              href="/noticias/vive-la-vida-con-reflexoterapia"
                              style="font-size: 15px"
                            >
                              ¡Vive la vida con Reflexoterapia!
                            </a>
                          </h5>
                          <p>Marzo</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="media">
                        <a class="media-left" href="/escuela">
                          <img
                            class="media-object img-rounded border-color-1"
                            src="https://res.cloudinary.com/reflexoperu/image/upload/v1551553145/Diapositiva1.jpg"
                            alt="Image"
                          />
                        </a>
                        <div class="media-body">
                          <h5 class="media-heading">
                            <a href="/escuela" style="font-size: 15px">
                              Curso teórico práctico de reflexología
                            </a>
                          </h5>
                          <p>Admisión junio 2019</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyRight clearfix">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <div class="copyRightText">
                  <p>
                    2023 &copy Centro de Reflexoterapia Hermanas de San Pablo de
                    Chartres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
