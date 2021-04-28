import BaseCard, { BaseCardProps } from "./BaseCard";

export interface BaseTextCardProps extends BaseCardProps {
  value: string;
  unit?: string;
}

export default function BaseTextCard({
  title, subtitle, value,
  unit, icon, backgroundColor, textColor,
}: BaseTextCardProps) {
  if (!textColor) textColor = "#FFFFFF";
  if (!backgroundColor) backgroundColor = "#000000";

  return (
    <BaseCard
      title={title}
      subtitle={subtitle}
      icon={icon}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <span className="text-6xl" style={{
        color: textColor
      }}>{ value }</span>
      <span className="text-xl" style={{
        color: textColor
      }}>{ unit }</span>
    </BaseCard>
  )
}
