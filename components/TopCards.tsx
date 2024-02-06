export default function TopCards() {
  return (
    <section class="clearfix linkSection hidden-xs">
      <div
        class="sectionLinkArea hidden-xs scrolling"
        style="padding-top: 86px; padding-bottom: 5px"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-3" style="padding-right: 2px; padding-left: 0px">
              <a
                class="sectionLink bg-color-a"
                id="coursesLink"
                href="#"
                style="border-radius: 15px 0px 0px 15px; height: 140px"
              >
                <i
                  class="far fa-hospital fa-5x linkIcon border-color-a"
                  aria-hidden="true"
                  style="top: 3px; margin-left: -53px; color=#ec971f"
                ></i>
                <span class="linkText" style="line-height: 230px">
                  Centro de Terapia
                </span>
              </a>
            </div>
            <div class="col-sm-3" style="padding-right: 2px; padding-left: 0px">
              <a
                class="sectionLink bg-color-a"
                id="teamLink"
                href="#"
                style="border-radius: 0px; height: 140px"
              >
                <i
                  class="fas fa-graduation-cap linkIcon border-color-a"
                  aria-hidden="true"
                  style="top: 3px; margin-left: -53px; color=#ec971f"
                ></i>
                <span class="linkText" style="line-height: 230px">
                  Escuela
                </span>
              </a>
            </div>
            <div class="col-sm-3" style="padding-right: 2px; padding-left: 0px">
              <a
                class="sectionLink bg-color-a"
                id="galleryLink"
                href="#"
                style="border-radius: 0px; height: 140px"
              >
                <i
                  class="far fa-calendar-alt linkIcon border-color-a"
                  aria-hidden="true"
                  style="top: 3px; margin-left: -53px; color=#ec971f"
                ></i>
                <span class="linkText" style="line-height: 230px">
                  Eventos
                </span>
              </a>
            </div>
            <div class="col-sm-3" style="padding-right: 0px; padding-left: 0px">
              <a
                class="sectionLink bg-color-a"
                id="newsLink"
                href="#"
                style="border-radius: 0px 15px 15px 0px; height: 140px"
              >
                <i
                  class="fas fa-book linkIcon border-color-a"
                  aria-hidden="true"
                  style="top: 3px; margin-left: -53px; color=#ec971f"
                ></i>
                <span class="linkText" style="line-height: 230px">
                  Revista
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
