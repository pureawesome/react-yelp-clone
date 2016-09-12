export function searchNearby(google, map, request) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status, pagination) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(results, pagination);
      } else {
        reject(results, status);
      }
    })
  });
}
export function getDetails(google, map, placeId) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {placeId}

    service.getDetails(request, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.log(status);
        return reject(status);
      } else {
        console.log(place);
        resolve(place);
      }
    })
  });
}
