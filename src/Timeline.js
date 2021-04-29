import React, { useState, useEffect, useRef } from "react";
import { genTimelineData } from "./utils/data-transform";
import * as d3 from "d3";
import "./Timeline.css";
import YearScroller from "./YearScroller";
import { COUNT_BY_YEAR } from "./utils/utilities";

const MAX_YEAR = 2019;

const colors = {
  "alcohol & drugs": "#00875A",
  identity: "#00B8D9",
  sexual: "#C054BE",
  profanity: "#FFAB00",
  other: "#596066",
  violence: "#FF5630",
};



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

  const fontScale = (count) => {
    let maxCountForYear = COUNT_BY_YEAR[year].max;
    let minCountForYear = COUNT_BY_YEAR[year].min;

    return d3.scaleLinear().domain([minCountForYear, maxCountForYear]).range([16, 48])(count);
  } 

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

  const createLegend = () => {
    const svg = d3.select("#legend")

    const getLegendTitleInfo = (categoryName) => {
      let categoryData = data.children.filter((item) => item.data.name === categoryName)[0];
      let count = categoryData ? categoryData.children.reduce((sum, item) => sum + item.data.count, 0) : 0;
      let titleText = categoryName + ' (' + count + ')';
      let titleOpacity = (categoryData) ? 1 : 0.6;

      return {text: titleText, opacity: titleOpacity};
    }

    Object.entries(colors).map(([category, color], i) => {
      svg.append("circle")
         .attr("cx", 10)
         .attr("cy", 10 + i*30)
         .attr("r", 6)
         .style("fill", color)

      let legendTextInfo = getLegendTitleInfo(category); // returns a tuple with text at index 0, and opacity at index 1
      svg.append("text")
         .attr("x", 20)
         .attr("y", 10 + 30*i)
         .text(legendTextInfo.text || category)
         .style('opacity', legendTextInfo.opacity || 1)
         .style("font-size", "15px")
         .attr("fill", "var(--light-text)")
         .attr("alignment-baseline","middle")
    }) 
  }

  useEffect(() => {
    d3.selectAll("#timeline > *").remove();
    d3.selectAll("#legend > *").remove();

    const root = data;

    if (root) {
      createLegend();   
      
      // tooltip
      d3.select("body")
        .append("div")
        .attr("id", "tooltip")
        .attr("style", "position: absolute; opacity: 0;")
        .style("color", "white")
        .style("background-color", "#334e68bb")
        .style("padding", "8px")
        .style("border-radius", "4px");

      // treemap 
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
        .attr("height", (d) => d.y1 - d.y0)
        .on("mouseover", (e, d) => {
          d3.select("#tooltip")
            .transition()
            .duration(200)
            .style("opacity", 1)
            .text(`'${d.data.name}' was altered in ${d.data.count} Kids Bop lyrics`);
        })
        .on("mousemove", (e) => {
          d3.select("#tooltip")
            .style("left", e.pageX + 10 + "px")
            .style("top", e.pageY - 10 + "px");
        })
        .on("mouseout", (e) => {
          d3.select(e.target).attr("stroke-width", 1).style("filter", null);
          d3.select("#tooltip").transition().duration(200).style("opacity", 0);
        })

      leaf
        .append("text")
        .text((d) => d.data.name)
        .attr("fill", (_) => "var(--light-text)")
        .attr("x", 3)
        .attr("y", "1em")
        .style("font-size", (d) => fontScale(d.data.count).toString() + "pt" || '16pt');

      return svg.node();
    }
  }, [data]);

  return (
    <div className="page-container">
      <h1 className="title">What's being altered in pop songs over time?</h1>
      <div className="timeline-container">
        <svg
          className="d3-component"
          width="50%"
          height="80%"
          ref={d3Container}
          id="timeline"
        />
        <svg id="legend" className='legend-container' height="80%" width="200px" />
        <YearScroller year={year} onChange={(newYear) => setYear(newYear)} />
      </div>
    </div>
  );
};

export default Timeline;
