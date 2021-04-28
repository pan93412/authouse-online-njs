import React from "react";
import Image from "next/image";

export interface AppNavbarProps {
  id: string;
}

export default function AppNavbar({ id }: AppNavbarProps) {
  return (
    <div className="flex justify-between content-center items-center">
      <div>
        <Image
          className="logo"
          src="/authouse.svg"
          width="50px"
          height="50px"
          alt="Authouse Logo"
        />
      </div>
      <div className="font-light">Authouse {id.substr(0, 7)}</div>
    </div>
  );
}
