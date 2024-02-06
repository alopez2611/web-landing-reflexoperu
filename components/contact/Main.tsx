export default function Main() {
  return (
    <section
      class="mainContent full-width clearfix conactSection"
      id="margin-top"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-xs-12 col-md-4">
            <div class="media addressContent">
              <span class="media-left bg-color-3" href="#">
                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
              </span>
              <div class="media-body">
                <h3 class="media-heading">Dirección:</h3>
                <p>Calle Las Golondrinas 153.</p>
                <p>Urb. Los Nogales. Los Olivos</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12 col-md-4">
            <div class="media addressContent">
              <span class="media-left bg-color-3" href="#">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
              <div class="media-body">
                <h3 class="media-heading">Teléfono:</h3>
                <p>01 533 - 0628</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12 col-md-4">
            <div class="media addressContent">
              <span class="media-left bg-color-3" href="#">
                <i class="far fa-envelope" aria-hidden="true"></i>
              </span>
              <div class="media-body">
                <h3 class="media-heading">Email:</h3>
                <p>
                  <a
                    href="mailto:reflexoperu@reflexoperu.com"
                    style="color: #222222"
                  >
                    reflexoperu@reflexoperu.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
