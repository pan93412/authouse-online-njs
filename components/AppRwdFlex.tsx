import React from "react";

export interface AppRwdFlexProps {
  children: React.ReactNode;
}

export default function AppRwdFlex({ children }: AppRwdFlexProps) {
  return (
    <div className="flex flex-col justify-around content-center items-center h-full md:flex-row">
      {children}
    </div>
  );
}
