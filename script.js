function goToCard() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

function flipCard() {
  document.querySelector(".card").classList.toggle("flipped");
}

function createHearts() {
  const container = document.getElementById("hearts-container");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
