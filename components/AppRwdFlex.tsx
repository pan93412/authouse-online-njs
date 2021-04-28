import React from "react";

export interface AppRwdFlexProps {
  children: React.ReactNode;
}

export default function AppRwdFlex({ children }: AppRwdFlexProps) {
  return (
    <div className="app-rwd-flex flex flex-col sm:justify-around justify-center h-full md:flex-row">
      {children}
    </div>
  );
}
