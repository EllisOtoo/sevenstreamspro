import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

function SpreadSection({ cta, description, title, src }) {
  return (
    <div className="bg-sky-200 flex flex-col md:flex-row rounded-md w-10/12 mx-auto py-12 px-12 my-12">
      <div>
        <div></div>
        <h2 className="text-7xl">{title}</h2>
        <p>{description}</p>
        <Button> {cta}</Button>
      </div>
      <div>
        <Image width={500} height={500} src={src} alt={title}></Image>
      </div>
    </div>
  );
}

export default SpreadSection;
