import React from "react";
import BaseCard, { BaseCardProps } from "./BaseCard";

export interface BaseTextCardProps extends BaseCardProps {
  value: string;
  unit?: string;
}

export default function BaseTextCard({
  title,
  subtitle,
  value,
  unit,
  icon,
  backgroundColor,
  textColor,
}: BaseTextCardProps) {
  const theTextColor = textColor || "#FFFFFF";
  const theBackgroundColor = backgroundColor || "#000000";

  return (
    <BaseCard
      title={title}
      subtitle={subtitle}
      icon={icon}
      backgroundColor={theBackgroundColor}
      textColor={theTextColor}
    >
      <span
        className="text-6xl"
        style={{
          color: textColor,
        }}
      >
        {value}
      </span>
      <span
        className="text-xl"
        style={{
          color: textColor,
        }}
      >
        {unit}
      </span>
    </BaseCard>
  );
}
