export default function PreFooter() {
  return (
    <div class="copyRight2 clearfix" id="margin-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center">
            <h1 style="color: #fff">Suscríbete</h1>
            <p style="color: #fff">Entérate de nuestras novedades</p>
          </div>
          <form
            class="form-inline text-center"
            action="/subscribirme"
            method="POST"
          >
            <div class="container">
              <div class="form-group">
                <input
                  class="form-control"
                  id="exampleInputName2"
                  type="text"
                  name="names"
                  placeholder="Nombres"
                  style="margin-right: 10px"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="exampleInputEmail2"
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  style="margin-right: 10px"
                  required
                  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                />
              </div>
              <button class="btn btn-warning" type="submit" disabled>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
