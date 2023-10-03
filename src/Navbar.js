import React, { useEffect, useState } from "react";
import avLogo from "./Av_logo.png";
import doubledown from "./double-down-img.png";
import IronMan from "./iron-man.png";
import Cap from "./captain-america.png";
import Spidey from "./spiderman.png";
import Thor from "./thor.png";

function Navbar() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newOffsetX = (mouseX / window.innerWidth - 0.2) * 20;
      const newOffsetY = (mouseY / window.innerHeight - 0.1) * 10;

      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleIcons = () => {
    setIconsVisible(!iconsVisible);
  };

  const changeBackground = (imageUrl) => {
    const appElement = document.getElementById("app");
    if (appElement) {
      appElement.style.backgroundImage = `url('${imageUrl}')`;
    }
  };

  return (
    <nav className="relative flex w-full flex-row">
      <ul className="nav-items flex flex-row justify-center">
        <li className="absolute top-4 left-10">
          <a
            href="https://marvel.fandom.com/wiki/Marvel_Database"
            target="_blank"
            rel="noreferrer"
            className="cursor-default"
          >
            <img
              id="img-logo"
              src={avLogo}
              alt="Logo"
              className="cursor-alias transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </a>
        </li>
        <li className="flex-grow flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2">
          <img
            id="img-logo"
            src={doubledown}
            alt="Click Here"
            style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
            className="cursor-pointer"
            onClick={toggleIcons}
          />
        </li>
      </ul>

      {/* Conditional rendering of icons */}
      {iconsVisible && (
        <div className="icons-container">
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/272177300-bb4f3249-9626-4735-bb8c-6ec4607121ea.jpg"
              )
            }
          >
            <img src={IronMan} alt="Iron Man" className="icons" />
          </button>
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/272175254-b09fbbc9-8db5-4d13-bc96-e9da713c43bb.jpg"
              )
            }
          >
            <img src={Cap} alt="Captain America" className="w-1/2" />
          </button>
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/272177557-73334718-e532-4f93-acbd-e5e87d6a2d5a.jpg"
              )
            }
          >
            <img src={Thor} alt="Thor" className="icons" />
          </button>
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/272176765-4625d381-c144-4778-8f27-c0014c04e7ef.jpg"
              )
            }
          >
            <img src={Spidey} alt="Spider-Man" className="icons" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;