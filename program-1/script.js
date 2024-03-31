const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const img = document.createElement("img");
img.src = "./img/emoji-hello.png";

frm.addEventListener("submit", (e) => {
   const name = frm.inName.value;
   resp.innerHTML = "";
   resp.appendChild(document.createTextNode("Olá, "));
   resp.appendChild(img);
   resp.appendChild(document.createTextNode(" "));
   resp.appendChild(document.createTextNode(name));
   e.preventDefault();
});
