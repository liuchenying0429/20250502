let capture;

function setup() {
  // 產生全螢幕的畫布，背景顏色為 #ccd5ae
  createCanvas(windowWidth, windowHeight);
  background('#ccd5ae');

  // 擷取攝影機的影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始影像，僅顯示在畫布上
}

function draw() {
  // 將攝影機影像顯示在視窗的中間
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
}
