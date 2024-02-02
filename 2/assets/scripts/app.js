// Elements
const songImg = document.querySelector('[alt="song"]');
const soundImg = document.querySelector('#soundBtn img');
const soundRange = document.querySelector('#soundRange');
const soundRangeValue = document.querySelector('[for="soundRange"]');
const soundProgress = document.querySelector('#soundProgress');

const playBtn = document.querySelector('#play');
const repeatBtn = document.querySelector('#repeatBtn');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

const maxTime = document.querySelector('#maxTime');
const minTime = document.querySelector('#minTime');

const songs = document.querySelectorAll('.song');

let isPlay = false;
let isRep = false;
let isMute = false;
let isPause = false;

const durationRange = document.querySelector('#duration [type="range"]');
const durationProgress = document.querySelector('#duration progress');
const musicName = document.querySelector('#songName');
const aritstName = document.querySelector('#artist');
const music = document.querySelector('#audio');

// Functions
const playMusic = () => {
  let song = musicName.textContent;
  
  if (!isPlay) {
    if (song === 'Hello') {
      music.src = songList[0].path;
    }else if ( song === 'Rolling in the Deep') {
      music.src = songList[1].path;
    }else if ( song === 'Set FireRolling in the Deep') {
      music.src = songList[2].path;
    }else {
      music.src = songList[3].path;
    }

    if (!isPlay) {
      songImg.style.animation = 'rotate360 10s linear infinite';
      playBtn.src = './assets/pictures/icons/pause.png';

      durationRange.addEventListener('input', () => {
        music.currentTime = durationRange.value;
        durationProgress.value = durationRange.value;
        durationProgress.max = durationRange.max;
      });

      resumeMusic();
      musicMinTime();
      musicMaxTime();
      isPlay = !isPlay;
    }else {
      resumeMusic();
    }
    
  }else {
    songImg.style.animation = '';
    playBtn.src = './assets/pictures/icons/play.png';
    music.pause();
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
    isPause = !isPause;
  }
};

const pauseMusic = () => {
  const pauseTime = music.currentTime;
  music.pause();
  isPause = !isPause;
  return pauseTime;
};

const resumeMusic = () => {
  music.currentTime = pauseMusic();
  music.play();
};

const setSound = () => {
  if (!isMute) {
    soundImg.src = './assets/pictures/icons/mute.png';
    music.muted = true;
    soundRangeValue.textContent = '0 %';
    isMute = !isMute;
  }else {
    soundImg.src = './assets/pictures/icons/volume.png';
    music.muted = false;
    soundRangeValue.textContent = `${soundRange.value} %`;
    isMute = !isMute;
  }
};

const soundValue = () => {
  music.volume = soundRange.value / 100;
  soundRangeValue.textContent = `${soundRange.value} %`;
  soundProgress.value = soundRange.value;
};

const setRepeat = () => {
  if (!isRep) {
    repeatBtn.src = './assets/pictures/icons/repeat-white.png';
    music.loop = true;
    isRep = !isRep;
  }else {
    repeatBtn.src = './assets/pictures/icons/repeat.png';
    music.loop = false;
    isRep = !isRep;
  }
};

const nextSong = () => {
  let song = musicName.textContent;
  
  if (song === 'Hello') {
    music.src = songList[1].path;
    musicName.textContent = songList[1].name;
    aritstName.textContent = songList[1].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }else if ( song === 'Rolling in the Deep') {
    music.src = songList[2].path;
    musicName.textContent = songList[2].name;
    aritstName.textContent = songList[2].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }else if ( song === 'Set Fire') {
    music.src = songList[3].path;
    musicName.textContent = songList[3].name;
    aritstName.textContent = songList[3].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }else if (song === 'One and Only') {
    music.src = songList[0].path;
    musicName.textContent = songList[0].name;
    aritstName.textContent = songList[0].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  } 
  
  music.play();
};

const prevSong = () => {
  let song = musicName.textContent;
  
  if (song === 'Hello') {
    music.src = songList[3].path;
    musicName.textContent = songList[3].name;
    aritstName.textContent = songList[3].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }else if ( song === 'Rolling in the Deep') {
    music.src = songList[0].path;
    musicName.textContent = songList[0].name;
    aritstName.textContent = songList[0].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }else if ( song === 'Set Fire') {
    music.src = songList[1].path;
    musicName.textContent = songList[1].name;
    aritstName.textContent = songList[1].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }else {
    music.src = songList[2].path;
    musicName.textContent = songList[2].name;
    aritstName.textContent = songList[2].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    musicMinTime();
    musicMaxTime();
    isPlay = !isPlay;
  }

  music.play();
};

const musicMaxTime = () => {
  const duration = music.duration;
  let min = Math.floor(duration / 60);
  let sec = Math.floor(duration % 60);

  
  durationRange.max = music.duration;
  
  maxTime.textContent = `
  ${(min < 10 ? '0' : '')} ${min} : ${(sec < 10 ? '0' : '')} ${sec}
  `;
};

const musicMinTime = () => {
  const currentTime = music.currentTime;
  let min = Math.floor(currentTime / 60);
  let sec = Math.floor(currentTime % 60);

  durationRange.value = music.currentTime;
  durationProgress.value = music.currentTime;

  minTime.textContent = `
  ${(min < 10 ? '0' : '')} ${min} : ${(sec < 10 ? '0' : '')} ${sec}
  `;
};

// Events
music.addEventListener('loadedmetadata', musicMaxTime);
music.addEventListener('timeupdate', musicMinTime);
playBtn.addEventListener('click', playMusic);
repeatBtn.addEventListener('click', setRepeat);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

soundImg.addEventListener('click', setSound);
soundRange.addEventListener('input', soundValue);

for (const [idx, song] of songs.entries()) {
  song.addEventListener('click', () => {
    music.src = songList[idx].path;
    musicName.textContent = songList[idx].name; 
    aritstName.textContent = songList[idx].artist;
    playBtn.src = './assets/pictures/icons/pause.png';
    songImg.style.animation = 'rotate360 10s linear infinite';
    music.play();
    isPlay = !isPlay;
  });
}