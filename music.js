



let musicPlay = document.getElementById('play-music');
let resumeSong = document.getElementById('resume-song')


const volume = document.querySelector('#volume');
volume.addEventListener('input', function() {
  musicPlay.volume = volume.value;
});

let rewindSong = document.getElementById('backward')
let forwardSong = document.getElementById('forward')

let muteMusic = document.getElementById('volumeUp')
let forwardTime = 2;
let rewindTime = 2;

// let addEffect = document.querySelector('.on-click')

let keyBtn = document.querySelectorAll('button')

function fastForward() {
  let newcurrentTime = musicPlay.currentTime + forwardTime;
  musicPlay.currentTime = newcurrentTime

}

function rewindBack() {
  let newcurrentTime = musicPlay.currentTime - rewindTime;
  musicPlay.currentTime = newcurrentTime
}


resumeSong.addEventListener('click', () => {

  if (musicPlay.paused) {
    musicPlay.play();
    resumeSong.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  else {
    musicPlay.pause();
    resumeSong.innerHTML = '<i class="fa-solid fa-play"></i>';
  }

})


forwardSong.addEventListener('click', () => {
  fastForward()

})


rewindSong.addEventListener('click', () => {
  rewindBack()
})




muteMusic.addEventListener('click' , ()=>{

if(muteMusic.innerHTML==='<i class="fa-sharp fa-solid fa-volume-high"></i>')
{
muteMusic.innerHTML =' <i class="fa-sharp fa-solid fa-volume-xmark"></i>'
musicPlay.muted = true
volume.value = 0
}

else
{
  muteMusic.innerHTML='<i class="fa-sharp fa-solid fa-volume-high"></i>'
  musicPlay.muted = false
  volume.value = 50
}


})
