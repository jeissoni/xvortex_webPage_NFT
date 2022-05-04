//Animacion imagen 1//
var animacionActual = 1

let animation = setInterval(() => {
  
  switch(animacionActual) {
    case 1: 
      imagen1.style.setProperty("animation-play-state", "running")
      imagen4.style.setProperty("animation-play-state", "paused")
      animacionActual++;
      break;
    
    case 2: 
      imagen1.style.setProperty("animation-play-state", "running")
      imagen4.style.setProperty("animation-play-state", "paused")
      animacionActual++;
      break;
  }
  
  console.log(`${animationState}`)
}, 5000);



// var imagen1 = document.querySelector(".imagen");

// let animationState = "running"

// let animation = setInterval(() => {
//   if (animationState === "running") {
//     animationState = "paused"
//   } else {
//     animationState = "running"
//   }
  
//   imagen1.style.setProperty("animation-play-state", `${animationState}`)
  
//   console.log(`${animationState}`)
// }, 5000);
