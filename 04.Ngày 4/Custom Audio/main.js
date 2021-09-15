const audioEl = document.querySelector('audio');
const duration = document.querySelector('.duration'),
  currentTime = document.querySelector('.currentTime');

const durationProgessBar = document.querySelector('.duration-progess-bar'),
  durationProgess = document.querySelector('.duration-progess');

const playBtn = document.querySelector('.play'),
  pauseBtn = document.querySelector('.pause');

const circle = document.querySelector('.circle');

let isReadyDrag = false;
let offsetLeftDurationBar = durationProgessBar.getBoundingClientRect().left;

audioEl.ontimeupdate = () => {
  duration.innerHTML = fortmatTime(audioEl.duration);
  currentTime.innerHTML = fortmatTime(audioEl.currentTime);

  // Phần trăm progess
  // thời gian trải qua = thời gian bắt đầu - thời gian kết thúc
  let percent = audioEl.currentTime / audioEl.duration;
  percent = percent * 100;

  durationProgessBar.style.width = `${percent}%`;
  circle.style.left = `${percent}%`;
};

playBtn.addEventListener('click', function (e) {
  // Toggle Btn
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'flex';

  audioEl.play();
});

pauseBtn.addEventListener('click', function (e) {
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'flex';
  audioEl.pause();
});

durationProgess.addEventListener('click', function (e) {
  const percent = e.offsetX / this.offsetWidth;
  durationProgessBar.style.width = `${percent * 100}%`;
  audioEl.currentTime = percent * audioEl.duration;
});

// Handle drag drop
durationProgess.addEventListener('mousedown', function (e) {
  isReadyDrag = true;
  console.log('mousedown');
});
window.addEventListener('mouseup', function (e) {
  isReadyDrag = false;
  console.log('mouseup');
});
window.addEventListener('mousemove', function (e) {
  if (isReadyDrag) {
    let width = e.clientX - offsetLeftDurationBar;

    if (width <= 0) width = 0;
    if (width >= durationProgess.offsetWidth)
      width = durationProgess.offsetWidth;

    let percent = width / durationProgess.offsetWidth;

    audioEl.currentTime = percent * audioEl.duration;
    durationProgessBar.style.width = `${percent * 100}%`;
    circle.style.left = `${percent * 100}%`;
  }
});

const fortmatTime = (time) => {
  let minute = Math.floor(time / 60); // 70 / 60 = 1
  let second = Math.floor(time) - minute * 60; // 70 - ( 1 * 60 )

  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${minute}:${second}`;
};
