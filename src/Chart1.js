import React, { Component } from "react";
import * as d3 from "d3";

export default class Chart1 extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const data = [12, 34, 26, 34, 56, 44];
    const w = 500;
    const h = 400;

    let svg = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "white")
      .style("padding", 40)
      .style("margin-left", 20);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "tomato");
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}
