let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow() {
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    items.forEach((item, i) => {
        if (i > active) {
            let stt = i - active;
            item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            item.style.zIndex = -stt;
            item.style.filter = 'blur(5px)';
            item.style.opacity = stt > 2 ? 0 : 0.6;
            item.classList.add('glassmorphic');
        } else if (i < active) {
            let stt = active - i;
            item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            item.style.zIndex = -stt;
            item.style.filter = 'blur(5px)';
            item.style.opacity = stt > 2 ? 0 : 0.6;
            item.classList.add('glassmorphic');
        }
    });
}

loadShow();
next.onclick = function(){
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick = function(){
  active = active - 1 >= 0 ? active - 1 : active; 
  loadShow();
}





