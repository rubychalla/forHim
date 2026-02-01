function goToCard() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

function flipCard() {
  document.querySelector(".card").classList.toggle("flipped");
}

function createHearts() {
  const container = document.getElementById("hearts-container");

  const romanticColors = [
    "#ff4d6d",
    "#ff6f91",
    "#ff85a1",
    "#c77dff",
    "#f1c0e8",
    "#ffffff"
  ];

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";

    const color =
      romanticColors[Math.floor(Math.random() * romanticColors.length)];

    heart.innerHTML = `
      <svg viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.6 0c-3.4 0-5.6 2.1-7.6 4.3C14 2.1 11.8 0 8.4 0
             3.8 0 0 3.8 0 8.4c0 9.1 16 20.6 16 20.6
             s16-11.5 16-20.6C32 3.8 28.2 0 23.6 0z"
          fill="${color}"
        />
      </svg>
    `;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
