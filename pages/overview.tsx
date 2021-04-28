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
import BridgeSDK from "../bridge-sdk/Bridge";
import PM25Card from "../components/subcard/PM25Card";
import {
  AuthouseCoreData,
  IsPM25Data,
  IsTempertureData,
} from "../bridge-sdk/ReceivedData";

const deviceInfo = new BridgeSDK();

function updateData(ws: WebSocket) {
  ws.send("m");
  ws.send("t");
}

function updateDataWrapper(ws: WebSocket) {
  return () => updateData(ws);
}

export default function Overview() {
  const [level, setLevel] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [temperture, setTemperture] = useState("");
  const [huminity, setHuminity] = useState("");
  const [pm25, setPM25] = useState("");

  const [conn, setConn] = useState<WebSocket | null>(null);

  if (!deviceInfo.isConnectedToBridge && globalThis.WebSocket)
    deviceInfo.connectToBridge(
      "386cfdc39026cd72c3e352339b340ba80b25a23b",
      () => {
        const theConn = deviceInfo.BridgeConnection;

        theConn.onmessage = function ConnectionOnMessage(message) {
          const datapkg: { data?: string } = JSON.parse(
            message.data.toString()
          );

          console.debug(datapkg.data);

          const data: AuthouseCoreData = JSON.parse(datapkg.data || "{}");

          console.debug(data);

          if (IsPM25Data(data)) {
            console.debug("received a PM2.5 data. storing.");
            setPM25(data.value);
          } else if (IsTempertureData(data)) {
            console.debug("received a temperture data. storing.");
            setTemperture(data.temperature);
            setHuminity(data.humidity);
          } else {
            console.debug("the data is in an unknown type.");
          }
        };

        setInterval(updateDataWrapper(theConn), 1500);
        setConn(theConn);
      }
    );

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
                  if (toggle) {
                    conn.send("d");
                    setToggle(false);
                  } else {
                    conn.send("e");
                    setToggle(true);
                  }
                }}
              />
            </BaseCard>
          </div>
          <div className="pb-5">
            <HuminityCard value={huminity} />
          </div>
          <div className="pb-5">
            <TempertureCard value={temperture} />
          </div>
          <div className="pb-5">
            <PM25Card value={pm25} />
          </div>
        </div>
      </AppRwdFlex>
    </div>
  );
}
