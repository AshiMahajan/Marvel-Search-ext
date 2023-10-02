import React from "react";


let mouseX, mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Apply the effect
  const banner = document.getElementById("img-logo");
  const offsetX = (mouseX / window.innerWidth - 0.2) * 20;
  const offsetY = (mouseY / window.innerHeight - 0.1) * 10;

  banner.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
