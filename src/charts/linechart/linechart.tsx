import React, { Component, HTMLAttributes } from 'react';
import './linechart.scss';
import * as d3 from 'd3';

export declare interface IChartSize {
  width: number;
  height: number;
}

declare interface ILineChartProps {
  size?: IChartSize;
  data: ILineChartDataPoint[][];
}

export declare interface ILineChartDataPoint {
  x: number;
  y: number;
}

export class LineChart extends Component<
  ILineChartProps & HTMLAttributes<HTMLDivElement>,
  {}
> {
  private svg: any;
  private margin: number = 20;
  private xAxis;
  private yAxis;
  private xScale;
  private yScale;
  private color = d3.scaleOrdinal(d3.schemeCategory10);
  private linesParentElement;

  private getChartWidth(): number {
    let width: number =
      this.props && this.props.size ? this.props.size.width : 400;
    return width - this.margin * 2;
  }

  private getChartHeight(): number {
    let height: number =
      this.props && this.props.size ? this.props.size.height : 400;
    return height - this.margin * 2;
  }

  private addScales() {
    let values = this.props.data.reduce((a, b) => a.concat(b), []);
    this.xScale = d3
      .scaleLinear()
      .domain(d3.extent(values, d => d.x))
      .range([0, this.getChartWidth()]);

    this.yScale = d3
      .scaleLinear()
      .domain([0, d3.max(values, d => d.y)])
      .range([this.getChartHeight(), 0]);
  }

  private line = d3
    .line()
    .x(d => this.xScale(d.x))
    .y(d => this.yScale(d.y));

  private updateLines(): void {
    console.log('UPDAET:', this.props.data);

    var t = d3
      .transition()
      .duration(750)
      .ease(d3.easeLinear);

    let elements = this.linesParentElement
      .selectAll('.line')
      .data(this.props.data);

    elements
      .enter()
      .append('g')
      .attr('class', 'line-group')
      .append('path')
      .attr('class', 'line')
      .attr('d', d => this.line(d))
      .style('opacity', 0)
      .transition(t)
      .style('stroke', (d, i) => this.color(i))
      .style('opacity', 1);

    elements
      .attr('d', d => this.line(d))
      .style('opacity', 0)
      .transition(t)
      .style('stroke', (d, i) => this.color(i))
      .style('opacity', 1);

    elements
      .exit()
      .transition(t)
      .attr('opacity', 0)
      .remove();

    // this.gCircles = this.lines.selectAll("circle-group")
    //   .data(this.props.data)
    //   .enter()
    //   .append("g")
    //   .style("fill", (d, i) => this.color(i))
    //   .selectAll("circle")
    //   .data(d => d).enter()
    //   .append("g")
    //   .attr("class", "circle")
    //   .append("circle")
    //   .attr("cx", d => this.xScale(d.x))
    //   .attr("cy", d => this.yScale(d.y))
    //   .attr("r", 5)
    //   .style('opacity', 1)
  }

  private generateSVGcontainer(): void {
    this.svg = d3
      .select('svg')
      .attr('width', this.getChartWidth() + this.margin * 2)
      .attr('height', this.getChartHeight() + this.margin * 2)
      .append('g')
      .attr('transform', `translate(${this.margin}, ${this.margin})`);
  }

  public componentDidMount(): void {
    this.addScales();
    this.generateSVGcontainer();

    this.linesParentElement = this.svg.append('g').attr('class', 'lines');

    this.updateLines();
    this.addAxes();
  }

  private addAxes(): void {
    this.redefineAxis();

    this.svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.getChartHeight()})`)
      .call(this.xAxis);

    this.svg
      .append('g')
      .attr('class', 'y axis')
      .call(this.yAxis)
      .append('text')
      .attr('y', 15)
      .attr('transform', 'rotate(-90)')
      .attr('fill', '#000');
  }

  private redefineAxis(): void {
    this.xAxis = d3.axisBottom(this.xScale).ticks(5);
    this.yAxis = d3.axisLeft(this.yScale).ticks(5);
  }

  private updateAxis(): void {
    this.redefineAxis();

    var t = d3
      .transition()
      .duration(750)
      .ease(d3.easeLinear);

    this.svg
      .select('.x.axis')
      .transition(t)
      .call(this.xAxis);
    this.svg
      .select('.y.axis')
      .transition(t)
      .call(this.yAxis);
  }

  public componentDidUpdate(): void {
    console.log('componentDidUpdate');
    console.log('data', this.props.data);
    // update

    this.addScales();
    this.updateLines();
    this.updateAxis();
  }

  public componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  public shouldComponentUpdate(): boolean {
    console.log('shouldComponentUpdate');
    return true;
  }

  public componentDidCatch(): void {
    console.log('componentDidCatch');
  }

  render() {
    return (
      <div className="linechart">
        <svg
          viewBox={`0 0 ${this.getChartWidth() +
            2 * this.margin} ${this.getChartHeight() + 2 * this.margin}`}
          preserveAspectRatio="xMinYMin meet"
        />
      </div>
    );
  }
}
