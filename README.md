產生一個全螢幕的畫布
背景顏色為#ccd5ae 擷取攝影機的影像
正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js

說明:
createCanvas(windowWidth, windowHeight)

建立一個全螢幕大小的畫布，畫布的寬度和高度分別為視窗的寬度和高度。
background('#ccd5ae')

設定畫布的背景顏色為柔和的綠色調（#ccd5ae）。
createCapture(VIDEO)

啟用攝影機，並擷取影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8)

設定攝影機影像的寬度和高度為視窗大小的 80%。
capture.hide()

隱藏攝影機的原始影像，避免直接顯示在畫布外。
image(capture, (width - capture.width) / 2, (height - capture.height) / 2)

將攝影機的影像繪製在畫布上，並透過計算使影像置中顯示。
