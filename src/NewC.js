import React, { useEffect, useRef } from "react";
import { select, json, tree, hierarchy, linkHorizontal, zoom, event } from "d3";

const NewC = (props) => {
  const myRef = useRef();

  useEffect(() => {
    const svg = select(myRef.current).append("svg");
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    console.log(document.body.clientHeight);

    svg.call(
      zoom().on("zoom", () => {
        zoomG.attr("transform");
      })
    );

    const margin = { top: 0, right: 50, bottom: 0, left: 75 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const treeLayout = tree().size([innerHeight, innerWidth]);

    const zoomG = svg.attr("width", width).attr("height", height).append("g");

    const g = zoomG
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //data fetching
    json("data.json").then((data) => {
      console.log(data);
      const root = hierarchy(data);
      console.log(root);
      const links = treeLayout(root).links();
      const linkPathGenerator = linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x);

      g.selectAll("path")
        .data(links)
        .enter()
        .append("path")
        .attr("d", linkPathGenerator);

      g.selectAll("text")
        .data(root.descendants())
        .enter()
        .append("text")
        .attr("x", (d) => d.y)
        .attr("y", (d) => d.x)
        .attr("dy", "0.32em")
        .attr("text-anchor", (d) => (d.children ? "middle" : "start"))
        .attr("font-size", (d) => (d.children ? 1 + "em" : 5 + "px"))

        .attr("color", "red")

        .text((d) => d.data.data.id);
    });
  }, []);
  return <div ref={myRef}></div>;
};

export default NewC;
