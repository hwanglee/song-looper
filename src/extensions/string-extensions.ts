export {};
declare global {
  export interface String {
    /**
     * Returns string formatted as seconds.
     *
     * @example
     * "120" will return "120"
     *
     * @example
     * "2:00" will return "120"
     */
    convertToSeconds(): number;
    /**
     * Returns string formatted as time (MM:SS).
     *
     * @example
     * "120" will return "2:00"
     *
     * @example
     * "1:23" will return "1:23"
     *
     * @example
     * "1:231" will return "1:23"
     *
     * @example
     * "1:fm" will return undefined
     */
    formatAsTime(): string | undefined;
  }
}

String.prototype.convertToSeconds = function (this: string) {
  if (!this.includes(":")) {
    return Number(this);
  }

  const split = this.split(":");
  return +split[0] * 60 + +split[1];
};

String.prototype.formatAsTime = function (this: string) {
  if (this.includes(":")) {
    const split = this.split(":");
    const minutes = split[0];
    const seconds = split[1];

    if (seconds.length > 2) {
      const formattedSeconds = seconds.substring(0, 2);
      return minutes + ":" + formattedSeconds;
    } else if (seconds.length < 2) {
      const formattedSeconds = seconds.length == 0 ? "00" : seconds + "0";
      return minutes + ":" + formattedSeconds;
    } else {
      return this;
    }
  } else {
    const value = Number(this);

    if (value) {
      return (
        Math.floor(value / 60) + ":" + ("0" + Math.floor(value % 60)).slice(-2)
      );
    } else {
      return undefined;
    }
  }
};
