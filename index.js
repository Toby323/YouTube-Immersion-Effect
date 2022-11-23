const video = document.getElementById("Video");
const videoCanvas = document.getElementById("Output-Canvas");

let c1, ctx1, c_tmp, ctx_tmp;

function init() {
  ctx1 = videoCanvas.getContext("2d");

  c_tmp = document.createElement("canvas");
  c_tmp.setAttribute("width", 600);
  c_tmp.setAttribute("height", 450);
  ctx_tmp = c_tmp.getContext("2d");

  video.addEventListener("play", computeFrame);
}

function computeFrame() {
  ctx_tmp.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  let frame = ctx_tmp.getImageData(0, 0, video.videoWidth, video.videoHeight);

  ctx1.putImageData(frame, 0, 0);

  setTimeout(computeFrame, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
