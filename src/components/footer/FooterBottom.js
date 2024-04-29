import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-10 flex items-center gap-2 justify-center">
      <p className="text-center text-gray-500 text-base">
        © All rights reserved by -
      </p>{" "}
      <a
        href="https://artistycode-studio.web.app"
        target="_blank"
        rel="noreferrer"
        className="text-designColor"
      >
        ArtistyCode Studio
      </a>
    </div>
  );
}

export default FooterBottom