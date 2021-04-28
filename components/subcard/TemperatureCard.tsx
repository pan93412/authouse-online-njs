import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BaseTextCard from "../BaseTextCard";

export interface TempertureCardProps {
  value: string;
}
export default function TempertureCard({ value }: TempertureCardProps) {
  return (
    <BaseTextCard
      title="TEMPERTURE"
      subtitle="溫度"
      value={value}
      unit="°C"
      icon={faThermometerHalf}
      backgroundColor="#59A9C2"
      textColor="#FFFFFF"
    />
  );
}
