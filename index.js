/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

/* -- Text effect -- */

/* -- Text effect -- */

const sentences = ["GET BACK HOME HERE", "404 PAGE NOT FOUND"];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let currentIndex = 0;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  const targetText = sentences[currentIndex];
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return targetText[index];
        } else {
          return letters[Math.floor(Math.random() * 26)];
        }
      })
      .join("");
    
    if (iteration >= targetText.length) { 
      clearInterval(interval);
      event.target.innerText = targetText;
    }
    
    iteration += 1 / 3;
  }, 20);

  currentIndex = (currentIndex + 1) % sentences.length;
}
