/*const openModalBtn = document.getElementById("modal")
const closemodalBtn = document.getElementById("modal")
const modal = document.getElementById("modal")
openModalBtn.addEventListener("click", openModal) 
closemodalBtn.addEventListener("click", closeModal) 
var check = true;
export function openModal() {
    if(check){
        closeModal();
    }
    else{
        modal.classList.remove("nascondi")
        check = true;
    }
}
export function closeModal() {
    if(check){
    modal.classList.add("nascondi")
    check = false;
    }
}*/


const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);



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

export function closeModal() {
  modal.classList.add("nascondi");
  overlay.classList.add("nascondi");
}


  /*modal.addEventListener("click", () => {
    if (modal.classList.contains("nascondi")) {
      modal.classList.remove("nascondi");
      modal.animate([
        // keyframes
        { transform: "translateX(150%)" },
        { transform: "translateX(0)" }
      ], {
        // timing options
        duration: 2000,
        easing: "ease-out"
      });
    }
  });*/