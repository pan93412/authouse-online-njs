import React, { useState } from "react";
import {
  faLightbulb,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppNavbar from "../components/AppNavbar";
import AppRwdFlex from "../components/AppRwdFlex";
import OverviewSection from "../components/OverviewSection";
import BaseCard from "../components/BaseCard";
import HuminityCard from "../components/subcard/HuminityCard";
import TempertureCard from "../components/subcard/TempertureCard";

export default function Overview() {
  const [level, setLevel] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="authouse-root-app p-10 bg-gray-50 text-gray-600 m-auto h-screen w-screen bg">
      <AppNavbar owner="pan93412" />
      <AppRwdFlex>
        <div className="pb-3">
          <div className="pb-5">
            <OverviewSection level={level} />
          </div>
          <button
            type="button"
            className="px-6 py-3 mr-2 bg-green-500 text-white rounded"
            onClick={() => setLevel(0)}
          >
            to 0
          </button>
          <button
            type="button"
            className="px-6 py-3 mr-2 bg-yellow-500 text-white rounded"
            onClick={() => setLevel(1)}
          >
            to 1
          </button>
          <button
            type="button"
            className="px-6 py-3 mr-2 bg-red-500 text-white rounded"
            onClick={() => setLevel(2)}
          >
            to 2
          </button>
        </div>
        <div>
          <div className="pb-5">
            <BaseCard
              title="LIGHT"
              subtitle="燈光"
              backgroundColor="#8BBE90"
              icon={faLightbulb}
            >
              <FontAwesomeIcon
                className="text-4xl"
                icon={toggle ? faToggleOn : faToggleOff}
                style={{
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </BaseCard>
          </div>
          <div className="pb-5">
            <HuminityCard value="70" />
          </div>
          <div className="pb-5">
            <TempertureCard value="27" />
          </div>
        </div>
      </AppRwdFlex>
    </div>
  );
}
