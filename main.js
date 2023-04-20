let images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.png"];
let img = document.getElementById('q');
let btn = document.querySelector('.stop');
let btnStart = document.querySelector('.start');
let currentIndex = 0;
let n;

function changeImage(){

  img.src = images[currentIndex];
  console.log(img);
  currentIndex++;

  n = currentIndex;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

function stopBtn(event){
    clearTimeout(t);
}

function startBtn(event){
    n--;
    currentIndex = n;
    changeImage();
    t =setInterval(changeImage, 3000);
}


let t = setInterval(changeImage, 3000);
btn.addEventListener('click', stopBtn);
btnStart.addEventListener('click', startBtn);