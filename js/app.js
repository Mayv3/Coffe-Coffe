
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

const sections = document.getElementById("sections")
sections.addEventListener("click", e=>{
  navWrapper.classList.remove("show");
  toggleButton.classList.remove("close");
  
})

const nombre = document.getElementById("name");

const form = document.getElementById("form");
var error = 0;
form.addEventListener("submit", e=>{ 
  if(nombre.value.length<3){
    alert("Su nombre debe tener al menos 3 caracteres")
    e.preventDefault
  }
  
  if (nombre.value.length>3 && consulta.length != null){
    alert("Su consulta ha sido enviada con exito")
  }
})