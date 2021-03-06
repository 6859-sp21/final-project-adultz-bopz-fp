import React, { useState, useEffect, useRef } from "react";
import { genAllYearData, genTimelineData, compareLyricsInTimeline } from "./utils/data-transform";
import * as d3 from "d3";
import "./Timeline.css";
import YearScroller from "./YearScroller";
import { CUTS_VERSE, COUNT_BY_YEAR, COLORS, purify } from "./utils/utilities";

const Timeline = () => {
  const [year, setYear] = useState(2019);
  const [rawData, setRawData] = useState(null);
  const [allYearData, setAllYearData] = useState(null);
  const [data, setData] = useState(null);
  const [hideProfanity, setHideProfanity] = useState(true);

  const d3Container = useRef(null);
  const width = 800;
  const height = 500;

  useEffect(() => {
    const initData = async () => {
      const res = await genTimelineData();
      setRawData(res);

      const allYearRes = await genAllYearData();
      setAllYearData(treemap(allYearRes).data);

      const filtered = filterByYear(year, res);
      setData(treemap(filtered));
    };
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

    return d3
      .scaleLinear()
      .domain([minCountForYear, maxCountForYear])
      .range([12, 28])(count);
  };

  const fixProfanity = (text) => {
    return hideProfanity ? purify(text) : text;
  };

  const filterByYear = (filterYear, rawData) => {
    if( filterYear === -1 ){
      return allYearData;
    } else {
      return rawData.children.filter(({ year }) => filterYear === -1 ? true: year === filterYear)[0];
    }
  };

  const treemap = (data) =>
    d3
      .treemap()
      .tile(d3.treemapSquarify)
      .size([width, height])
      .paddingInner(3)
      .round(true)(
      d3
        .hierarchy(data)
        .sum((d) => d.count)
        .sort((a, b) => b.data.count - a.data.count)
    );

  const createLegend = () => {
    const getLegendTitleInfo = (categoryName) => {
      let categoryData = data.children.filter(
        (item) => item.data.name === categoryName
      )[0];
      let count = categoryData
        ? categoryData.children.reduce((sum, item) => sum + item.data.count, 0)
        : 0;
      let titleText = categoryName;
      let titleOpacity = categoryData ? 1 : 0.6;

      return {
        text: titleText,
        opacity: titleOpacity,
        count: count,
        category: categoryName,
      };
    };

    if (data) {
      return (
        <div className="Timeline-legend">
          {Object.entries(COLORS)
            .map(([category, color], i) => {
              return getLegendTitleInfo(category);
            }) // returns a tuple with text at index 0, and opacity at index 1
            .sort((a, b) => {
              return b.count - a.count;
            })
            .map((legendTextInfo) => {
              return (
                <div className="Timeline-legend-item">
                  <div
                    className="circle"
                    style={{
                      backgroundColor: COLORS[legendTextInfo.category](10),
                    }}
                  />
                  <div
                    style={{
                      opacity: legendTextInfo.opacity || 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {legendTextInfo.text || legendTextInfo.category}
                    <span style={{ fontWeight: "200" }}>
                      {" "}
                      ({legendTextInfo.count})
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
  };

  useEffect(() => {
    d3.selectAll("#timeline > *").remove();
    d3.selectAll("#legend > *").remove();

    const root = data;

    if (root) {
      createLegend();

      // tooltip
      d3.select("#scrollApp")
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
        .attr("fill", (d) => COLORS[d.parent.data.name](10))
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .on("mouseover", (e, d) => {
          d3.select(e.target)
            .attr("stroke-width", 3)
            .attr("stroke", "var(--light-text)");
          d3.select("#tooltip")
            .transition()
            .duration(200)
            .style("opacity", 1)
            .text(
              `'${fixProfanity(d.data.name)}' was altered in ${
                d.data.count
              } Kids Bop lyrics`
            );
        })
        .on("mousemove", (e) => {
          d3.select("#tooltip")
            .style("left", e.pageX + 10 + "px")
            .style("top", e.pageY - 10 + "px");
        })
        .on("mouseout", (e) => {
          d3.select(e.target).attr("stroke-width", 0).style("filter", null);
          d3.select("#tooltip").transition().duration(200).style("opacity", 0);
        })
        .on("click", (_, d) => {
          openModal();
          loadDataIntoPopup(d);
        });

      d3.select("#root").append("div").attr("id", "Test");
      leaf
        .append("text")
        .text((d) => (shouldShowLabel(d) ? fixProfanity(d.data.name) : ""))
        .attr(
          "id",
          (d) => "word-label-" + d.data.name + "-" + d.data.count + "-" + year
        )
        .attr("fill", (_) => "var(--light-text)")
        .attr("x", 3)
        .attr("y", "1em")
        .style("font-family", "Lato")
        .style(
          "font-size",
          (d) => fontScale(d.data.count).toString() + "pt" || "1em"
        );
      d3.select("#Test").node().remove();

      // Create Popup Background
      d3.select("#scrollApp")
        .append("div")
        .attr("id", "timeline-popup-bg")
        .style("z-index", "-10")
        .style("position", "fixed")
        .style("opacity", "0")
        .style("max-height", "100vh")
        .style("max-width", "100vw")
        .style("min-height", "100vh")
        .style("min-width", "100vw")
        .style("background-color", "rgb(0,0,0,.8)")
        .style("left", 0)
        .style("top", 0);

      const loadPopupLeft = (leaves, category) => {
        // 1. Clear any existing artist HTML nodes
        d3.selectAll(".timeline-popup-left-item").remove();
        d3.selectAll(".timeline-popup-subtitle").remove();
        d3.selectAll(".timeline-popup-right > *").remove();

        // 2 Add header
        d3.select(".timeline-popup-left")
          .append("h4")
          .attr("class", "timeline-popup-subtitle")
          .text("Artists");

        d3.select(".timeline-popup-right")
          .append("h4")
          .attr("class", "timeline-popup-subtitle")
          .text("Songs");

        // 3. Get unique artists
        let artists = Array.from(
          d3.group(leaves, (leaf) => leaf.ogArtist)
        ).sort((a, b) => {
          return b[1].length - a[1].length;
        });

        // 4. Map artist names to HTML elements
        artists.map((artistData, index) => {
          d3.select(".timeline-popup-left")
            .append("div")
            .attr("class", "timeline-popup-left-item")
            .attr("id", "timeline-popup-left-" + index)
            .text(artistData[0] + " (" + artistData[1].length + ")")
            .style("background-color", COLORS[category](artistData[1].length))
            .style("border", () => {
              // let backgroundBorderColor = "4px solid " + COLORS[category](artistData[1].length);
              return index === 0 ? "4px solid var(--light-text)" : "none";
            })
            .on("click", (e) => {
              e.preventDefault();
              d3.selectAll(".timeline-popup-right-song-title").remove();
              d3.selectAll(".timeline-popup-right-lyric-section").remove();
              d3.selectAll(".timeline-popup-left-item")
                .style("border", "none")
                .style("color", "var(--dark)");
              d3.select(e.target).style(
                "border",
                "4px solid var(--light-text)"
              );
              loadPopupRight(artistData[1], category);
            })
            .on("mouseover", (e) => {
              d3.select(e.target).style(
                "background-color",
                "var(--light-text)"
              );
            })
            .on("mouseout", (e) => {
              d3.select(e.target).style(
                "background-color",
                COLORS[category](artistData[1].length)
              );
            });
        });

        // 4. Load initial song data into right side
        let firstArtistData = artists[0];
        let songDataFromFirstArtist = firstArtistData[1];
        loadPopupRight(songDataFromFirstArtist, category);
      };

      const loadPopupRight = (allSongs, category) => {
        // 1. Clear any existing artist HTML nodes
        d3.selectAll(".timeline-popup-right-song-section").remove();

        // 2. Group by song name
        let uniqueSongs = Array.from(
          d3.group(allSongs, (d) => d.songName)
        ).sort((a, b) => a[0] < b[0]);

        // 3. Map songs to HTML elements
        uniqueSongs.map((songData, index) => {
          let songTitle = songData[0];

          // Create song section container
          let sectionRef = d3
            .select(".timeline-popup-right")
            .append("div")
            .attr("class", "timeline-popup-right-song-section")
            .attr("id", "timeline-popup-right-song-section-" + index);

          // Add song title to each section
          sectionRef
            .append("div")
            .attr("class", "timeline-popup-right-song-title")
            .style("background-color", COLORS[category](10))
            .attr("id", "timeline-popup-right-song-title-" + index)
            .text(songTitle);

          // Create lyric section
          sectionRef
            .append("div")
            .attr("class", "timeline-popup-right-lyric-section")
            .attr("id", "timeline-popup-right-lyric-section-" + index);

          // Add lyric items to lyric section
          let ref = d3.select("#timeline-popup-right-lyric-section-" + index);
          songData[1].map((lyricData, subIndex) => {
            let childContainer = ref
              .append("div")
              .attr("class", "timeline-popup-right-lyric-item")
              .attr(
                "id",
                "timeline-popup-right-lyric-item-" + index + "-" + subIndex
              );

            let kbLyric =
              lyricData.kbLyric === CUTS_VERSE
                ? CUTS_VERSE
                : "Kidz Bop Lyric: " + lyricData.kbLyric;

            let comparedLyrics = compareLyricsInTimeline(lyricData);
            childContainer
              .append("div")
              .style("width", "45%")
              .append("i")
              .text(lyricData.ogArtist)
              .append("div")
              .attr("class", `Bubbles-ogLyric ${lyricData.category}`)
              .style("font-style", "normal")
              .html(
                hideProfanity
                  ? comparedLyrics.ogLyricHTMLCensored
                  : comparedLyrics.ogLyricHTML
              );

            childContainer
              .append("b")
              .attr("class", "Bubbles-arrow")
              .style("padding-top", "4px")
              .text("\u2192");

            childContainer
              .append("div")
              .style("display", "flex")
              .style("width", "45%")
              .append("i")
              .style("text-align", "right")
              .style("width", "100%")
              .text("Kidz Bop")
              .append("div")
              .attr("class", `Bubbles-kbLyric ${lyricData.category}`)
              .style("font-style", kbLyric === CUTS_VERSE ? "italic" : "normal")
              .style("opacity", kbLyric === CUTS_VERSE ? "0.75" : "1")
              .html(comparedLyrics.kbLyricHTML);
          });
        });
      };

      const openModal = () => {
        // 1. Lock Scroll
        d3.select("html").style("overflow", "hidden").style("height", "100%");

        // 2. Bring Background to z-index 10
        d3.select("#timeline-popup-bg")
          .on("click", () => closeModal())
          .transition()
          .duration(200)
          .style("opacity", 0.6)
          .style("z-index", "10");

        // Create Popup modal
        d3.select("#scrollApp")
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

        // Create Popup close button
        d3.select("#timeline-popup-content")
          .append("div")
          .attr("id", "timeline-popup-button")
          .attr("class", "timeline-popup-button")
          .style("position", "absolute")
          .style("right", "12px")
          .style("top", "4px")
          .style("text-align", "center")
          .style("border-radius", "50%")
          .text("\u00d7")
          .on("click", (e) => {
            e.preventDefault();
            closeModal();
          });

        // 3. Bring Background to z-index 11
        d3.select("#timeline-popup-content")
          .transition()
          .duration(200)
          .style("opacity", 1)
          .style("z-index", "11")
          .style("background-color", "var(--dark-secondary)")
          .style("color", "var(--light-text)");

        // Create Popup title
        d3.select("#timeline-popup-content")
          .append("div")
          .attr("class", "timeline-popup-header")
          .style("padding-top", "12px")
          .style("border-radius", "12px");

        d3.select(".timeline-popup-header")
          .append("h2")
          .attr("id", "timeline-popup-title")
          .attr("class", "timeline-popup-title");

        d3.select(".timeline-popup-header")
          .append("h3")
          .attr("id", "timeline-popup-category")
          .attr("class", "timeline-popup-category");

        // Create Popup body
        d3.select("#timeline-popup-content")
          .append("div")
          .attr("id", "timeline-popup-body")
          .attr("class", "timeline-popup-flex")
          .style("color", "black");

        // Create Popup left container
        d3.select("#timeline-popup-body")
          .append("div")
          .attr("class", "timeline-popup-left");

        // Create Popup right container
        d3.select("#timeline-popup-body")
          .append("div")
          .attr("class", "timeline-popup-right");
      };

      const closeModal = () => {
        // 1. Remove Scroll Lock
        d3.select("html").style("overflow", "auto").style("height", "auto");

        // 2. Send Background screen to back
        d3.select("#timeline-popup-bg")
          .transition()
          .duration(200)
          .style("opacity", "0")
          .style("z-index", -10);

        // 3. Send popup to back
        d3.select("#timeline-popup-content")
          .transition()
          .duration(200)
          .style("opacity", "0")
          .style("z-index", -10);

        d3.select(".timeline-popup-left").remove();
        d3.select(".timeline-popup-right").remove();
        d3.select(".timeline-popup-title").remove();
        d3.select(".timeline-popup-category").remove();
      };

      const loadDataIntoPopup = (d) => {
        d3.select(".timeline-popup-header");

        //1. Load popup title
        d3.select("#timeline-popup-title").text(
          "Altered lyrics with '" +
            (hideProfanity ? purify(d.data.name) : d.data.name) +
            "' from " +
            year
        );

        d3.select("#timeline-popup-category")
          .text("Category: " + d.data.category)
          .style("color", COLORS[d.data.category](7));

        //2. Load Artists name on left menu
        loadPopupLeft(d.data.leaves, d.data.category);
      };

      const handleEscape = (e) => {
        let popupRef = d3.select("#timeline-popup-content");
        if (e.key === "Escape" && popupRef.node() !== null) {
          const isModalOpen = popupRef.style("z-index") >= 0;
          isModalOpen && closeModal();
        }
      };
      document.addEventListener("keydown", handleEscape);

      return svg.node();
    }
  }, [data, hideProfanity]);

  useEffect(() => {
    d3.select("#root").append("div").attr("id", "Test");

    d3.selectAll("*[id^='word-label']").text((d) =>
      shouldShowLabel(d) ? fixProfanity(d.data.name) : ""
    );

    d3.select("#Test").node().remove();

    d3.selectAll(".timeline-rect").on("mouseover", (e, d) => {
      // d3.select(e.target).attr("stroke-width", 8).attr("stroke", "var(--light-text)");
      d3.select("#tooltip")
        .transition()
        .duration(200)
        .style("opacity", 1)
        .text(
          `'${fixProfanity(d.data.name)}' was altered in ${
            d.data.count
          } Kids Bop lyrics`
        );
    });
  }, [hideProfanity]);

  const toggleProfanity = () => {
    console.log("here");
    setHideProfanity(!hideProfanity);
  };

  const shouldShowLabel = (d) => {
    let fontSize = fontScale(d.data.count).toString() + "pt";
    let textBox = d3
      .select("#Test")
      .style("font-size", fontSize)
      .style("font-family", "Lato")
      .text(d.data.name)
      .node()
      .getBoundingClientRect();
    let textWidth = textBox.width + 1;
    let textHeight = textBox.height;

    let boxHeight = d.y1 - d.y0;
    let boxWidth = d.x1 - d.x0;
    return textWidth <= boxWidth && textHeight <= boxHeight;
  };

  return (
    <div className="page-container">
      <h1 className="title">What's being altered in pop songs over time?</h1>
      <div className="subtitle">
        Click on each year to see which lyrics by category were altered the most
        that year.
      </div>
      <div id="timeline-wrapper" className="timeline-container">
        <div className="timeline-svg-wrapper">
          <svg
            className="d3-component"
            width="800px"
            height="500px"
            x="10%"
            ref={d3Container}
            id="timeline"
          />
        </div>
        <div className="timeline-middle-column">
          {createLegend()}
          <div className="profanity-container">
            <input
              type="checkbox"
              checked={hideProfanity}
              onChange={toggleProfanity}
              id="profanity-toggle"
            ></input>
            <label for="profanity-toggle">Hide Curse Words</label>
            <div className="timeline-profanity-ack">
              Profanity Filter provided by{" "}
              <a
                className="timeline-profanity-ack-link"
                href="https://github.com/KanoComputing/nodejs-profanity-util"
                target="_blank"
                rel="noreferrer"
              >
                Kano Computing's NodeJS Profanity Filter
              </a>
            </div>
          </div>
        </div>
        <YearScroller year={year} onChange={(newYear) => setYear(newYear)} />
      </div>
    </div>
  );
};

export default Timeline;
