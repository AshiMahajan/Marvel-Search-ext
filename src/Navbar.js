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
            href="https://ashi.d1wuzeu874johq.amplifyapp.com/"
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
                "https://user-images.githubusercontent.com/105070892/270771812-6bb7d891-2292-4a9a-989f-c7234f617b32.jpg"
              )
            }
          >
            <img src={IronMan} alt="Iron Man" className="icons" />
          </button>
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/270772158-c836b74a-74bd-4f39-92b1-b6dbf9e24026.jpg"
              )
            }
          >
            <img src={Cap} alt="Captain America" className="w-1/2" />
          </button>
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/270772746-ccebb7b6-a897-46b1-8da6-66ec6bcac0ce.jpg"
              )
            }
          >
            <img src={Thor} alt="Thor" className="icons" />
          </button>
          <button
            className="icon-button"
            onClick={() =>
              changeBackground(
                "https://user-images.githubusercontent.com/105070892/270771506-aa17ca57-0da1-4e05-b94e-8831e95e2d55.jpg"
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
