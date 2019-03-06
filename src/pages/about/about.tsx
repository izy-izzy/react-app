import './about.scss';
import React, { Component, HTMLAttributes } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../global/Button';
import changeValueRandomly from '../../store/actions/actions';
import { ISystemState } from '../../store/definitions/definitions';

declare interface ISpecialProps {
  value: number;
  callStoreWithRandomNumber: ((event: any) => void) | undefined;
}

class About extends Component<
  ISpecialProps & HTMLAttributes<HTMLDivElement>,
  {}
> {
  render() {
    return (
      <div className="about container">
        <h1>This is a about page</h1>
        <h2>{this.props.value}</h2>
        <Button
          copy="change value randomly"
          onClick={this.props.callStoreWithRandomNumber}
        />
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
