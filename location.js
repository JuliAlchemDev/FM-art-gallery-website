const map = L.map("map").setView([41.481, -71.31], 15);
// 99 KING STREET Newport RI 02840 United States of America
// 41.481511376653835, -71.31036273125875
// https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png
// https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}
// L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png", {
//   maxZoom: 19,
//     attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>',
// }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const iconLocation = L.icon({
  iconUrl: "./assets/icons/navigation/icon-location.svg",

  iconSize: [66, 88],
});
const marker = L.marker([41.481511376653835, -71.31036273125875], {
  icon: iconLocation,
}).addTo(map);
