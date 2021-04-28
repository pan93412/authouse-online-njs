import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface BaseCardProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  icon?: IconDefinition;
  backgroundColor?: string;
  textColor?: string;
}

export default function BaseCard({
  title, subtitle, icon,
  backgroundColor, textColor,
  children,
}: BaseCardProps) {
  if (!textColor) textColor = "#FFFFFF";
  if (!backgroundColor) backgroundColor = "#000000";

  return (
    <div className="opacity-90 p-5 rounded flex justify-between card" style={{ backgroundColor }}>
        <div>
            <div className="card-desc">
                <p className="font-light text-base" style={{
                  color: textColor
                }}>{ subtitle }</p>
                <h2 className="font-bold text-3xl" style={{
                  color: textColor
                }}>{ title }</h2>
            </div>
            <div className="card-value mt-5">
                { children }
            </div>
        </div>
        {
          icon && (
            <div className="self-end card-icon">
              <FontAwesomeIcon icon={icon} style={{
                color: textColor,
              }}></FontAwesomeIcon>
            </div>
          )
        }
        <style jsx>{`
        .card {
          overflow: hidden;
          font-family: "DIN Alternate", sans-serif;
          width: 22rem;
          height: 11rem;
        }

        .card-icon {
          position: relative;
          width: 5.5rem;
          height: 5.5rem;
          font-size: 8.5em;
          right: -0.3em;
          bottom: 0.3em;
          opacity: 0.3;
        }`}
        </style>
    </div>
  );
}
