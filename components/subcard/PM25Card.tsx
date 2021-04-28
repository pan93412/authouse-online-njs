import React from "react";
import BaseTextCard from "../BaseTextCard";

export interface PM25CardProps {
  value: string;
}

export default function PM25Card({ value }: PM25CardProps) {
  return (
    <BaseTextCard
      title="PM2.5"
      subtitle="2.5-懸浮微粒"
      value={value}
      unit=""
      backgroundColor="#DCDCDC"
    />
  );
}
