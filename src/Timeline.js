import React, { useState, useEffect, useRef } from "react";
import { genTimelineData } from "./utils/data-transform";
import * as d3 from "d3";
import "./Timeline.css";
import YearScroller from "./YearScroller";
import { CUTS_VERSE, COUNT_BY_YEAR, COLORS } from "./utils/utilities";

const MAX_YEAR = 2019;


const Timeline = () => {
  const [year, setYear] = useState(MAX_YEAR);
  const [rawData, setRawData] = useState(null);
  const [data, setData] = useState(null);

  const d3Container = useRef(null);
  const width = 1200;
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

    Object.entries(COLORS).map(([category, color], i) => {
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
        .attr("class", "timeline-rect")
        .attr("fill", (d) => COLORS[d.parent.data.name])
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
        .on("click", (_, d) => {
          openModal();
          loadDataIntoPopup(d);      
        });

      leaf
        .append("text")
        .text((d) => d.data.name)
        .attr("fill", (_) => "var(--light-text)")
        .attr("x", 3)
        .attr("y", "1em")
        .style("font-size", (d) => fontScale(d.data.count).toString() + "pt" || '1em');

      // Create Popup Background
      d3.select('body')
        .append("div")
        .attr("id", "timeline-popup-bg")
        .style("z-index", "-10")
        .style("position", "fixed")
        .style("opacity", "0")
        .style("width", "100vw")
        .style("height", "100vh")
        .style("background-color", "gray")
        .style("left", 0)
        .style("top", 0);

      // Create Popup content
      d3.select("body")
        .append("div")
        .attr("id", "timeline-popup-content")
        .attr("class", "timeline-popup-box")
        .style("z-index", "-10")
        .style("position", "fixed")
        .style("left", "10vw")
        .style("top", "10vh")
        .style("height", "calc(80vh - 64px)")
        .style("width", "calc(80vw - 64px)")
        .style("opacity", "0");

      // Create Popup title
      d3.select("#timeline-popup-content")
        .append("h3")
        .attr("id", "timeline-popup-title")
        .attr("class", "timeline-popup-title")
        .style("color", "black")
        .style("text-align", "center");

      // Create Popup body
      d3.select("#timeline-popup-content")
        .append("div")
        .attr("id", "timeline-popup-body")
        .attr("class", "timeline-popup-flex")
        .style("color", "black")

      // Create Popup left container
      d3.select('#timeline-popup-body')
        .append('div')
        .attr("class", "timeline-popup-left" )

      // Create Popup right container
      d3.select('#timeline-popup-body')
        .append('div')
        .attr("class", "timeline-popup-right" )

      // Create Popup close button
      d3.select("#timeline-popup-content")
        .append("div")
        .attr("id", "timeline-popup-button")
        .attr("class", "timeline-popup-button")
        .style("position", "absolute")
        .style("left", "-8px")
        .style("top", "-8px")
        .style("min-width", "24px")
        .style("min-height", "24px")
        .style("background-color", "red")
        .style("text-align", "center")
        .style("border-radius", "50%")
        .on("click", (e) => {
          e.preventDefault();
          closeModal();
        });

      const loadPopupLeft  = (leaves) => {

        // 1. Clear any existing artist HTML nodes
        d3.selectAll('.timeline-popup-left-item').remove();
        d3.selectAll('.timeline-popup-subtitle').remove();

        // 2 Add header 
        d3.select('.timeline-popup-left')
          .append("h4")
          .attr("class", "timeline-popup-subtitle")
          .text("Artists")

        d3.select('.timeline-popup-right')
          .append("h4")
          .attr("class", "timeline-popup-subtitle")
          .text("Lyrics")
          
        // 3. Get unique artists
        let artists = Array.from(d3.group(leaves, leaf => leaf.ogArtist)).sort();
        
        // 4. Map artist names to HTML elements
        artists.map((artistData, index) => {
          d3.select('.timeline-popup-left')
            .append('div')
            .attr("class", "timeline-popup-left-item")
            .attr("id", "timeline-popup-left-" + index)
            .text(artistData[0])
            .on("click", (e) => {
              e.preventDefault();
              d3.selectAll(".timeline-popup-right-item").remove();
              loadPopupRight(artistData[1]);
            });
        });

        // 4. Load initial song data into right side
        let firstArtistData = artists[0];
        let songDataFromFirstArtist = firstArtistData[1];
        loadPopupRight(songDataFromFirstArtist);
      }

      const loadPopupRight = (songs) => {

        // 1. Clear any existing artist HTML nodes
        d3.selectAll('.timeline-popup-right-item').remove();

        // 3. Map songs to HTML elements
        songs.map((songData, index) => {
          d3.select('.timeline-popup-right')
            .append('div')
            .attr("class", "timeline-popup-right-item")
            .attr("id", "timeline-popup-right-item-" + index)

          let ogLyric = "Original Lyric: " + songData.ogLyric;
          let kbLyric = songData.kbLyric === CUTS_VERSE ? CUTS_VERSE : "Kidz Bop Lyric: " + songData.kbLyric;  

          let ref = d3.select('#timeline-popup-right-item-' + index);
          ref.append("div").text(ogLyric);
          ref.append("div")
             .style("font-style", kbLyric === CUTS_VERSE ? "italic" : "normal")
             .style("opacity", kbLyric === CUTS_VERSE ? "0.75" : "1")
             .text(kbLyric)

        });
        
      }

      const openModal = () => {
        // 1. Lock Scroll
        d3.select("html").style("overflow", "hidden").style("height", "100%");

        // 2. Bring Background to z-index 10
        d3.select("#timeline-popup-bg")
          .transition()
          .duration(200)
          .style("opacity", 0.6)
          .style("z-index", "10")

        // 3. Bring Background to z-index 11
        d3.select("#timeline-popup-content")
          .transition()
          .duration(200)
          .style("opacity", 1)
          .style("z-index", "11")
          .style("background-color", "lightgray")
          .style("color", "black");
      }

      const closeModal = () => {
        // 1. Remove Scroll Lock
        d3.select("html").style("overflow", "auto").style("height", "auto");

        // 2. Send Background screen to back
        d3.select('#timeline-popup-bg')
          .transition()
          .duration(200)
          .style("opacity", "0")
          .style("z-index", -10);

        // 3. Send popup to back
        d3.select('#timeline-popup-content')
          .transition()
          .duration(200)
          .style("opacity", "0")
          .style("z-index", -10);
      }

      const loadDataIntoPopup = (d) => {
        //1. Load popup title
        d3.select("#timeline-popup-title")
          .text("Altered lyrics with '" + d.data.name + "' from " + year);

        //2. Load Artists name on left menu
        loadPopupLeft(d.data.leaves);
      }

      return svg.node();
    }
  }, [data]);

  return (
    <div className="page-container">
      <h1 className="title">What's being altered in pop songs over time?</h1>
      <h4 className='title'>Click on each year to see which lyrics by category were altered the most that year.</h4>
      <div id="timeline-wrapper" className="timeline-container">
        <svg
          className="d3-component"
          width="100%"
          height="80%"
          ref={d3Container}
          id="timeline"
        />
        <svg id="legend" className='legend-container' height="80%" />
        <YearScroller year={year} onChange={(newYear) => setYear(newYear)} />
      </div>
    </div>
  );
};

export default Timeline;
