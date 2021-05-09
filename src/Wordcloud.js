import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { useEffect, useRef, useState } from 'react';
import { genWordCloudData } from './utils/data-transform.js';
import { purify } from './utils/utilities'
import './Wordcloud.css';

const fontScale = (count) => {
  const scaleMin = 1
  const scaleMax = 89
  return d3.scaleLinear().domain([scaleMin, scaleMax]).range([16, 56])(count);
} 


const Wordcloud = () => {

  const [data, setData] = useState(null);
  const [hideProfanity, setHideProfanity] = useState(true);
  const d3Container = useRef(null);

  useEffect(() => {
    const initData = async () => {
      let wordCloudData = await genWordCloudData();
      setData(wordCloudData);
    }
    initData();
  }, []);

  useEffect(() => {
    console.log('updating data', data);
  }, [data])

  useEffect(() => {
    if( data ){
      d3.selectAll("svg > text").remove();

      const svg = d3.select(d3Container.current)
        .attr("viewBox", [0, 0, 500, 500])
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle")
        .style("background-color", "white");

      let wordsArr = Array.from(data).map(([text, value]) => ({text, value}));

      const wordsMap = cloud()
        .size([500, 500])
        .words(wordsArr)
        .padding("1em")
        .rotate(0)
        .font("Impact")
        .fontSize(d => fontScale(d.value))
        .on("word", (w) => {
            let word = svg.append("text")
              .attr("id", "wordcloud-label-" + w.x + "-" + w.y + "-" + w.size)
              .attr("font-size", w.size)
              .attr("transform", `translate(${w.x}, ${w.y}) rotate(${w.rotate})`);
            
            word
              .attr("data-text", w.text)
              .attr("data-value", w.size)
              .text(() => hideProfanity ? purify(w.text) : w.text );
              
            word.on("mouseover", (e, d) => {
              console.log("hover", e, d)
            });
        });
      wordsMap.start();
      return svg.node();
    }
  }, [data]);

  const toggleProfanity = () => {
    setHideProfanity(!hideProfanity);
  }

  useEffect(() => {
    d3.selectAll("*[id^='wordcloud-label']")
      .each(function(){
        let { text } = this.dataset;
        this.innerHTML = hideProfanity ? purify(text) : text;
      });
  }, [hideProfanity]);

  return (
    <div className='wordcloud-container'>
      <h1 className="wordcloud-header">How have words been changed across different songs?</h1>
      <div className="wordcloud-checkbox">
        <input id="profanity-check-wordcloud" type="checkbox" checked={hideProfanity} onChange={toggleProfanity} />
        <label for="profanity-check-wordcloud">Hide Profanity</label>
      </div>
      <div className="wordcloud-viz">
        <svg
            width="600px"
            height="600px"
            ref={d3Container}
            id="timeline"
          />
      </div>
    </div>
  )

}

export default Wordcloud;