document.querySelector("button").addEventListener("click", show);

function show() {
  let list = document.querySelector("ul");
  list.classList.toggle("show");
}

