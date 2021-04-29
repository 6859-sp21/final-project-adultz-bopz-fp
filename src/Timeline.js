import React, { useState, useEffect, useRef } from "react";
import { genTimelineData } from "./utils/data-transform";
import * as d3 from "d3";
import "./Timeline.css";
import YearScroller from "./YearScroller";

const MIN_YEAR = 2001;
const MAX_YEAR = 2019;
const MAX_COUNT = 50;

const colors = {
  "alcohol & drugs": "#00875A",
  identity: "#00B8D9",
  sexual: "#C054BE",
  profanity: "#FFAB00",
  other: "#596066",
  violence: "#FF5630",
};

const fontScale = d3.scaleLinear().domain([0, MAX_COUNT]).range([12, 18]);

const Timeline = () => {
  const [year, setYear] = useState(MAX_YEAR);
  const [rawData, setRawData] = useState(null);
  const [data, setData] = useState(null);

  const d3Container = useRef(null);
  const width = 900;
  const height = 900;

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    if (rawData !== null) {
      const filtered = filterByYear(year, rawData);
      setData(treemap(filtered));
    }
  }, [year, rawData]);

  const initData = async () => {
    const res = await genTimelineData();
    setRawData(res);
    const filtered = filterByYear(year, res);
    setData(treemap(filtered));
  };

  const filterByYear = (filterYear, rawData) => {
    return rawData.children.filter(({ year }) => year === filterYear)[0];
  };

  const treemap = (data) =>
    d3
      .treemap()
      .tile(d3.treemapResquarify)
      .size([width, height])
      .padding(1)
      .round(true)(
      d3
        .hierarchy(data)
        .sum((d) => d.count)
        .sort((a, b) => b.data.count - a.data.count)
    );

  useEffect(() => {
    d3.selectAll("#timeline > *").remove();

    const root = data;

    if (root) {
      const svg = d3
        .select(d3Container.current)
        .attr("viewBox", [0, 0, width, height])
        .style("font", "10px sans-serif");

      const leaf = svg
        .selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

      leaf
        .append("rect")
        .attr("fill", (d) => colors[d.parent.data.name])
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0);

      leaf
        .append("text")
        .text((d) => d.data.name)
        .attr("fill", (_) => "var(--light-text)")
        .attr("x", 3)
        .attr("y", "1em")
        .style("font-size", (d) => fontScale(d.data.count).toString() + "pt");

      return svg.node();
    }
  }, [data]);

  return (
    <div className="page-container">
      <h1>What's being altered in pop songs over time?</h1>
      <div className="timeline-container">
        <svg
          className="d3-component"
          width="80%"
          height="80%"
          ref={d3Container}
          id="timeline"
        />
        <YearScroller year={year} onChange={(newYear) => setYear(newYear)} />
      </div>
    </div>
  );
};

export default Timeline;
