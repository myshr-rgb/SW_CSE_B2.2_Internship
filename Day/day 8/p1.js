document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.getElementById("external-js");

  myButton.addEventListener("click", function () {
    alert(" This is External JS");
  });
});