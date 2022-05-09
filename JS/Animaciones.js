























// //Animacion imagen 1//
// let imagen1 = document.querySelector(".imagen1")
// let imagen2 = document.querySelector(".imagen2")
// let imagen3 = document.querySelector(".imagen3")
// let imagen4 = document.querySelector(".imagen4")

// var animacionActual = 1

// let animation = setInterval(() => {
  
//   switch(animacionActual) {
//     case 1: 
//       imagen1.style.setProperty("animation-play-state", "running")
//       imagen4.style.setProperty("animation-play-state", "paused")
//       animacionActual++;
//       break;
//     case 2: 
//       imagen1.style.setProperty("animation-play-state", "paused")
//       imagen2.style.setProperty("animation-play-state", "running")
//       animacionActual++;
//       break;
//     case 3: 
//       imagen2.style.setProperty("animation-play-state", "paused")
//       imagen3.style.setProperty("animation-play-state", "running")
//       animacionActual++;
//       break;
//     case 4: 
//       imagen3.style.setProperty("animation-play-state", "paused")
//       imagen4.style.setProperty("animation-play-state", "running")
//       animacionActual = 1
//       break;  

//   }
  
//   console.log(`${animacionActual}`)
// }, 5000);



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
