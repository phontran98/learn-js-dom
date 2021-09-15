const boxEl = document.querySelector('.box');

boxEl.addEventListener('mouseover', function (event) {
  console.log('mouseover', event);
});

boxEl.addEventListener('mouseout', function (event) {
  console.log('mouseout', event);
});

boxEl.addEventListener('mousemove', function (event) {
  console.log('mousemove', event);

  const screen = document.querySelector('.screen');
  const page = document.querySelector('.page');
  const client = document.querySelector('.client');
  const offset = document.querySelector('.offset');
  const XY = document.querySelector('.XY');
  const layer = document.querySelector('.layer');
  screen.innerHTML = `ScreenX: ${event.screenX}px - ScreenY: ${event.screenY}px`;
  page.innerHTML = `PageX: ${event.pageX}px - PageY: ${event.pageY}px`;
  client.innerHTML = `ClientX: ${event.clientX}px - ClientY: ${event.clientY}px`;
  offset.innerHTML = `OffsetX: ${event.offsetX}px - OffsetY: ${event.offsetY}px`;
  XY.innerHTML = `X: ${event.x}px - Y: ${event.y}px`;
  layer.innerHTML = `LayerX: ${event.layerX}px - LayerY: ${event.layerY}px`;
});

boxEl.addEventListener('mouseleave', function (event) {
  console.log('mousemove', event);
});

/*
-- offsetX là khoảng cách từ mouse đến viền bên trái của phần tử đó
-- offsetY là khoảng cách từ mouse đến viền bên trên của phần tử đó

--screenX từ con chỏ chuột đến viền bên trái của màng hình máy tính
--screenX từ con chỏ chuột đến viền bên trên của màng hình máy tính

--pageX từ con chỏ chuột đến viền biên trái của body
--pageY từ con chỏ chuột đến viền biên trên của body

-- clientX từ con trỏ chuột đến viền viewport bên trái
-- clientY từ con trỏ chuột đến viewport bên trên
*/
