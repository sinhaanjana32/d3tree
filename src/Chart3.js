import * as d3 from "d3";
import React, { useEffect, useRef } from "react";
import data3 from "./data3";

const Chart3 = (props) => {
  const myRef = useRef();
  useEffect(() => {
    const data = data3;
    const chartWidth = 400;
    const chartHeight = 200;

    var xScale = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, chartWidth]);

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, chartHeight]);

    const svg = d3
      .select(myRef.current)
      .append("svg")
      .attr("width", chartWidth)
      .attr("height", chartHeight);

    svg
      .append("g")
      .attr("fill", "aqua")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => -yScale(d) + chartHeight)
      .attr("height", (d) => yScale(d))
      .attr("width", 10);
  }, []);

  return <div ref={myRef}></div>;
};

export default Chart3;
