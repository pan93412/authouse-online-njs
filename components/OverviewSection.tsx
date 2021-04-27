import React from "react";

export enum Level {
  SAFE,
  MEDIUM,
  SERIOUS,
}

export interface OverviewProps {
  level: Level;
}

interface OverviewState {
  borderColor: string;
  textColor: string;
  titleText: string;
  subtitleText: string;
}

export default class OverviewSection extends React.Component<OverviewProps, OverviewState> {
  state: OverviewState = {
    borderColor: "",
    textColor: "",
    titleText: "",
    subtitleText: "",
  };

  textColorMap = ["green", "yellow", "red"].map(color => `text-${color}-600`);
  borderColorMap = ["green", "yellow", "red"].map(color => `border-${color}-400`);
  titleTextMap = ["Safe", "Notice", "Serious"]
  subtitleTextMap = ["環境適宜", "需要注意環境", "環境稍亂"];

  constructor(props: OverviewProps) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue() {
    this.setState((_, { level }) => ({
      borderColor: this.borderColorMap[level],
      textColor: this.textColorMap[level],
      titleText: this.titleTextMap[level],
      subtitleText: this.subtitleTextMap[level],
    }));
  }

  componentDidMount() {
    this.updateValue();
  }

  componentDidUpdate(prevProps: OverviewProps) {
    if (this.props.level !== prevProps.level) this.updateValue();
  }

  render() {
    return (
      <div>
        <div className={`overview-card rounded-full border-4 h-60 w-60 flex flex-col content-center justify-center items-center ${this.state.borderColor}`}>
          <p className={`text-3xl font-bold pb-2 overview-title" ${this.state.textColor}`}>{ this.state.titleText }</p>
          <p className={`text-xl font-light overview-text ${this.state.textColor}`}>{ this.state.subtitleText }</p>
        </div>
      </div>
    );
  }
}
