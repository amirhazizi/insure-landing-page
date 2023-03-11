// vars
const checkBox = document.getElementById("checkbox")
const submenu = document.querySelector(".slide")

// checkbox change value event
checkBox.addEventListener("change", () => {
  submenu.classList.toggle("active")
  document.body.classList.toggle("no-sctoll")
})
