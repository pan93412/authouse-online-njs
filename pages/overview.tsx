import { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import AppRwdFlex from "../components/AppRwdFlex";
import OverviewSection from "../components/OverviewSection";
import { faLightbulb, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import BaseCard from "../components/BaseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HuminityCard from "../components/subcard/HuminityCard";
import TempertureCard from "../components/subcard/TempertureCard";

export default function Overview() {
  const [level, setLevel] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="authouse-root-app p-10 bg-gray-50 text-gray-600 m-auto h-screen w-screen bg">
      <AppNavbar owner="pan93412"></AppNavbar>
      <AppRwdFlex>
        <div>
          <OverviewSection level={level}></OverviewSection>
        </div>
        <div>
          <div className="pb-5">
            <BaseCard title="LIGHT" subtitle="燈光" backgroundColor="#8BBE90" icon={faLightbulb}>
              <FontAwesomeIcon className="text-4xl" icon={toggle ? faToggleOn : faToggleOff} style={{
                color: "#FFFFFF",
              }} onClick={() => {
                setToggle(!toggle);
              }}></FontAwesomeIcon>
            </BaseCard>
          </div>
          <div className="pb-5">
            <HuminityCard value="70"></HuminityCard>
          </div>
          <div className="pb-5">
            <TempertureCard value="27"></TempertureCard>
          </div>
        </div>
      </AppRwdFlex>
    </div>
  );
}
