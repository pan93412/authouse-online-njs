import { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import AppRwdFlex from "../components/AppRwdFlex";
import BaseTextCard from "../components/BaseTextCard";
import OverviewSection from "../components/OverviewSection";
import { faLightbulb, faThermometerHalf, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import BaseCard from "../components/BaseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HuminityCard from "../components/subcard/HuminityCard";

export default function Overview() {
  const [level, setLevel] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="authouse-root-app p-10 bg-gray-50 text-gray-600 m-auto h-screen w-screen bg">
      <AppNavbar owner="pan93412"></AppNavbar>
      <AppRwdFlex>
        <div className="pb-3">
          <div className="pb-5">
            <OverviewSection level={level}></OverviewSection>
          </div>
          <button className="px-6 py-3 mr-2 bg-green-500 text-white rounded" onClick={() => setLevel(0)}>to 0</button>
          <button className="px-6 py-3 mr-2 bg-yellow-500 text-white rounded" onClick={() => setLevel(1)}>to 1</button>
          <button className="px-6 py-3 mr-2 bg-red-500 text-white rounded" onClick={() => setLevel(2)}>to 2</button>

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
            <BaseTextCard
              title="TEMPERTURE"
              subtitle="溫度"
              value="27"
              unit="°C"
              icon={faThermometerHalf}
              backgroundColor="#59A9C2"
            ></BaseTextCard>
          </div>
        </div>
      </AppRwdFlex>
    </div>
  );
}
