import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          Coded by{" "}
          <a
            href="https://github.com/liflatt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keresia karuma
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/kersie30/react-weather-app-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
          , and hosted on {""}
          <a
            href="https://animated-duckanoo-164ed8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
