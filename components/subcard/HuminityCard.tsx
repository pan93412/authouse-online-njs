import { faTint } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BaseTextCard from "../BaseTextCard";

export interface HuminityCardProps {
  value: string;
}

export default function HuminityCard({ value }: HuminityCardProps) {
  return (
    <BaseTextCard
      title="HUMINITY"
      subtitle="濕度"
      value={ value }
      unit="%"
      icon={ faTint }
      backgroundColor="#10B981"
    ></BaseTextCard>
  );
}