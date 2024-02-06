var marker;

function initMap() {

    var uluru = {lat: -12.0045316, lng: -77.0693622};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    marker = new google.maps.Marker({
        position: uluru,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title:"Centro de Reflexoterapia Hermanas de san Pablo de chartres"
    });
    marker.addListener('click', toggleBounce);
}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }




