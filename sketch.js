// 宣告變數來儲存攝影機的影像和繪圖緩衝區
let capture;
let graphics;

function setup() {
  // 設定畫布的大小為全螢幕，並將背景顏色設為 #ccd5ae
  createCanvas(windowWidth, windowHeight);
  background('#ccd5ae'); // 背景顏色為柔和的綠色調 (#ccd5ae)

  // 啟用攝影機，擷取影像
  capture = createCapture(VIDEO); // 使用 p5.js 的 createCapture 函數來啟用攝影機
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定攝影機影像的寬高為視窗大小的 80%
  capture.hide(); // 隱藏攝影機的原始影像，僅在畫布上顯示

  // 使用 createGraphics 產生一個與攝影機影像相同大小的繪圖緩衝區
  graphics = createGraphics(capture.width, capture.height);
  graphics.background(255, 0, 0, 150); // 設定緩衝區的背景為半透明紅色
}

function draw() {
  // 將畫布的繪圖座標系統水平翻轉，解決攝影機畫面左右顛倒的問題
  push(); // 儲存當前的繪圖設定
  translate(width, 0); // 將原點移動到畫布的右上角
  scale(-1, 1); // 水平翻轉畫布

  // 將攝影機的影像繪製在畫布上，並置中顯示
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);

  // 將繪圖緩衝區的內容繪製在攝影機影像的上方
  image(graphics, (width - capture.width) / 2, (height - capture.height) / 2);

  pop(); // 恢復繪圖設定，避免影響其他繪圖操作
}
