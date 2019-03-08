import './about.scss';
import React, { Component, HTMLAttributes } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../global/buttons/button/button';
import changeValueRandomly from '../../store/actions/actions';
import { ISystemState } from '../../store/definitions/definitions';
import {
  LineChart,
  IChartSize,
  ILineChartDataPoint
} from '../../charts/linechart/linechart';
import { SecondaryButton } from '../../global/buttons/secondarybutton/secondarybutton';

declare interface ISpecialProps {
  value: number;
  callStoreWithRandomNumber: ((event: any) => void) | undefined;
}

class About extends Component<
  ISpecialProps & HTMLAttributes<HTMLDivElement>,
  {}
> {
  private data: ILineChartDataPoint[][] = [
    [{ x: 1, y: 20 }, { x: 2, y: 10 }, { x: 3, y: 25 }],
    [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 5 }]
  ];

  state = {
    data: this.data
  };

  private getChartSize(): IChartSize {
    return {
      width: 250,
      height: 300
    };
  }

  private changeValuesForChart = (): void => {
    this.data[0][0].y = Math.floor(Math.random() * 30);
    this.data[0][1].y = Math.floor(Math.random() * 30);
    this.data[0][2].y = Math.floor(Math.random() * 30);
    this.data[1][0].y = Math.floor(Math.random() * 30);
    this.data[1][1].y = Math.floor(Math.random() * 30);
    this.data[1][2].y = Math.floor(Math.random() * 30);

    this.setState({ data: this.data });
  };

  render() {
    return (
      <div className="about container">
        <h1>This is a about page</h1>
        <h2>{this.props.value}</h2>
        <Button
          copy="change value randomly"
          onClick={this.props.callStoreWithRandomNumber}
        />
        <SecondaryButton
          copy="change some values for chart randomly"
          onClick={this.changeValuesForChart}
        />
        <LineChart size={this.getChartSize()} data={this.state.data} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callStoreWithRandomNumber: () => {
      const randValue: number = Math.floor(Math.random() * 100);
      dispatch(changeValueRandomly(randValue));
    }
  };
};

const mapStateToProps = (state: ISystemState) => {
  return {
    value: state.value
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
