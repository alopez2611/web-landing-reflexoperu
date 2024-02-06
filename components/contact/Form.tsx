export default function Form() {
  return (
    <section class="mapArea">
      <div id="map"></div>
      <section class="whiteSection full-width clearfix" id="margin-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-xs-12 text-center">
              <div class="homeContactContent">
                <h2 id="titulo-verde">Comunícate con nosotros</h2>
                <p>
                  Si deseas más información acerca de nosotros, por favor llena
                  tus datos y envía tu mensaje, en breve nos comunicaremos
                  contigo.
                </p>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="homeContactContent">
                <form action="/contacto" method="POST" role="form">
                  <div class="row">
                    <div class="col-sm-6 col-xs-12">
                      <div class="form-group">
                        <i class="fa fa-user"></i>
                        <input
                          class="form-control border-color-2"
                          id="exampleInputEmail1"
                          type="text"
                          name="name"
                          placeholder="Nombres y Apellidos"
                          maxLength={40}
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <div class="form-group">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <input
                          class="form-control border-color-2"
                          id="exampleInputEmail2"
                          type="text"
                          name="email"
                          placeholder="Email"
                          required
                          pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <div class="form-group">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <input
                          class="form-control border-color-2"
                          id="exampleInputEmail3"
                          type="number"
                          name="phone"
                          placeholder="Teléfono o Celular"
                          required
                          maxLength={9}
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <div class="form-group">
                        <i class="fa fa-book" aria-hidden="true"></i>
                        <input
                          class="form-control border-color-2"
                          id="exampleInputEmail4"
                          type="text"
                          name="subject"
                          placeholder="Asunto"
                          required
                          maxLength={100}
                        />
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="form-group">
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <textarea
                          class="form-control border-color-2"
                          placeholder="Escríbenos tu mensaje"
                          name="message"
                          maxLength={90}
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="formBtnArea">
                        <button
                          class="btn"
                          style="background-color: #b5d56a"
                          type="submit"
                          disabled
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
