export function getRandomNumber() {
    return Math.floor(Math.random() * 10000);
}

export function animateGallery() {
    let photos = document.getElementById('gallery').children;
  
    let time = 4000;
    let idx = 0;
    let maxIdx = photos.length;
  
    function changeClass() {
  
      photos[idx].classList.remove('selected')
      idx++;
      
      if (idx >= maxIdx) {
        idx = 0;
      }
  
      photos[idx].classList.add('selected')
  
    }
  
    function slideGallery() {
      setInterval(changeClass, time);
    }
  
    window.addEventListener('load', slideGallery);
} 
