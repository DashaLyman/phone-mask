let phoneInput = document.querySelector(".phone");
let btn = document.querySelector(".btn");

const phoneMask = new IMask(phoneInput, {
  mask: "+{38}(000)000-00-00",
});

btn.addEventListener("click", btnHandler);
phoneInput.addEventListener("input", phoneInputHandler);

function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
}

function btnHandler(e) {
  e.preventDefault();
 
}
