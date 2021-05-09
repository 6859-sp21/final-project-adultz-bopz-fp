import React from "react";
import cx from "classnames";
import "./YearScroller.css";

export const MIN_YEAR = 2001;
export const MAX_YEAR = 2019;
export const ALL_YEARS = -1;

const YearScroller = ({ year, onChange }) => {
  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };
  return (
    <div className="year-scroller">
      <div
        id="yearscroller-id-all"
        className={cx("single-year", { selected: year === ALL_YEARS })}
        onClick={() => onChange(ALL_YEARS)}
      >
        All years
      </div>
      {range(MIN_YEAR, MAX_YEAR).map((yr, idx) => {
        return (
          <div
            id={"yearscroller-id-" + idx}
            className={cx("single-year", { selected: year === yr })}
            onClick={() => onChange(yr)}
          >
            {yr}
          </div>
        );
      })}
    </div>
  );
};

export default YearScroller;
