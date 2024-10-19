// Fields
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var backgroundImages = [
  "1.jpg", // Thay thế bằng đường dẫn thực tế
  "2.jpg", // Thay thế bằng đường dẫn thực tế
  "3.jpg", // Thay thế bằng đường dẫn thực tế
  "4.jpg", // Thay thế bằng đường dẫn thực tế
];
var currentImageIndex = 0;

window.onload = function () {
  scaleCanvas();
  drawBackground();
  setInterval(switchImage, 2000); // Thay hình nền mỗi 2 giây
};

window.onresize = scaleCanvas; // Điều chỉnh kích thước canvas khi thay đổi kích thước cửa sổ

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var img = new Image();
  img.src = backgroundImages[currentImageIndex];
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
}

function switchImage() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  drawBackground();
}

function scaleCanvas() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight);
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.width = w;
  canvas.height = h;
  drawBackground(); // Vẽ lại hình nền sau khi thay đổi kích thước
}
