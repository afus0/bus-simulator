const openModalBtn = document.getElementById("modal")
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
}
