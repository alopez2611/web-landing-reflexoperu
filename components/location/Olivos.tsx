export default function LosOlivos() {
  return (
    <div>
      <div class="container10">
        <img
          class="img-responsive"
          src="https://res.cloudinary.com/reflexoperu/image/upload/v1525247798/DSC_3744.jpg"
          alt="Nature"
          style="width: 100%; height: 550px; filter: alpha(opacity=50)"
        />
        <div
          class="text-block"
          style="top: 80px; right: -1; left: 20px; right: 800px"
        >
          <strong>
            <div style="padding-bottom: 20px">
              <span style="font-size: 21px; color: white">Dirección</span>
            </div>
            <a href="#mapa">
              <p style="font-size: 27px; color: white; padding-bottom: 0px">
                Las Golondrinas 153. Urb. Los Nogales
              </p>
              <p style="font-size: 27px; color: white; padding-bottom: 20px">
                Alt. Cuadra 6 de Angélica Gamarra
              </p>
            </a>
            <span style="font-size: 21px; color: white">
              Horario de Atención
            </span>
            <a href="tel:015330628">
              <p style="font-size: 27px; color: white; padding-bottom: 20px">
                lunes a sábado - 7:00 am a 12:00 pm
              </p>
            </a>
            <span style="font-size: 21px; color: white">Teléfono</span>
            <a href="tel:015330628">
              <p style="font-size: 27px; color: white; padding-bottom: 0px">
                (01) 533 0628
              </p>
            </a>
          </strong>
        </div>
      </div>
      <div
        class="container"
        style="
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  "
      >
        <div class="section mapArea" id="mapa">
          <div class="container center">
            <iframe
              width="1150"
              height="450"
              frameBorder="0"
              style="border: 0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCvcZSbHD3tVJABc4xP4QBrtpRW4Ww1Hk8&amp;q=Centro+de+reflexoterapia+Hermanas+san+Pablo+de+chartes&amp;zoom=16"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
