const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modal1 = document.getElementById("modal1");
const overlay1 = document.getElementById("overlay1");
const modal2 = document.getElementById("modal2");
const overlay2 = document.getElementById("overlay2");
const modal3 = document.getElementById("modal3");
const overlay3 = document.getElementById("overlay3");
const close = document.getElementById("close-modal-btn");
const close1 = document.getElementById("close-modal-btn1");
const close2 = document.getElementById("close-modal-btn2");
const close3 = document.getElementById("close-modal-btn3");

close.addEventListener("click", closeModal);
close1.addEventListener("click", closeModal);
close2.addEventListener("click", closeModal);
close3.addEventListener("click", closeModal);

export function openModal() {
  modal.classList.remove("nascondi");
  overlay.classList.remove("nascondi");
  modal.animate([
    // keyframes della posizione di partenza e arrivo.
    { transform: "translateX(150%)" },
    { transform: "translateX(0)" }
  ], {
    // Personalizzazione del tempo e lo stile di uscita.
    duration: 1800,
    easing: "ease-out"
  });
 
}
export function openModal1() {
  modal1.classList.remove("nascondi");
  overlay1.classList.remove("nascondi");
  modal1.animate([
    // keyframes della posizione di partenza e arrivo.
    { transform: "translateX(150%)" },
    { transform: "translateX(0)" }
  ], {
    // Personalizzazione del tempo e lo stile di uscita.
    duration: 1800,
    easing: "ease-out"
  });
 
}
export function openModal2() {
  modal2.classList.remove("nascondi");
  overlay2.classList.remove("nascondi");
  modal2.animate([
    // keyframes della posizione di partenza e arrivo.
    { transform: "translateX(150%)" },
    { transform: "translateX(0)" }
  ], {
    // Personalizzazione del tempo e lo stile di uscita.
    duration: 1800,
    easing: "ease-out"
  });
 
}
export function openModal3() {
  modal3.classList.remove("nascondi");
  overlay3.classList.remove("nascondi");
  modal3.animate([
    // keyframes della posizione di partenza e arrivo.
    { transform: "translateX(150%)" },
    { transform: "translateX(0)" }
  ], {
    // Personalizzazione del tempo e lo stile di uscita.
    duration: 1800,
    easing: "ease-out"
  });
 
}

export function closeModal() {
  modal.classList.add("nascondi");
  overlay.classList.add("nascondi");
  modal1.classList.add("nascondi");
  overlay1.classList.add("nascondi");
  modal2.classList.add("nascondi");
  overlay2.classList.add("nascondi");
  modal3.classList.add("nascondi");
  overlay3.classList.add("nascondi");
}


