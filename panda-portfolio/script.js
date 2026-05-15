function showSection(sectionId){

  const sections =
  document.querySelectorAll('section');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  document
  .getElementById(sectionId)
  .classList.add('active');
}

const music =
document.getElementById('bgm');

let isPlaying = false;

function toggleMusic(){

  if(isPlaying){
    music.pause();
  }

  else{
    music.play();
  }

  isPlaying = !isPlaying;
}