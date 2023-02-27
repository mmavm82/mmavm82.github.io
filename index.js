document.getElementById("toggleButton").addEventListener("click", function () {
  document.getElementById("phone").classList.toggle("blur");
});

function ShowPhone() {
  let btn = document.getElementById("toggleButton");

  if (btn.innerText === "Ocultar teléfono") btn.innerText = "Mostrar teléfono";
  else btn.innerText = "Ocultar teléfono";
}
