import './clock.scss';
import classnames from 'classnames';
import React from 'react';
import PieChart from 'react-simple-pie-chart';
import { calc } from '../../utils/Utils';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    const halfHour = (1000 * 60) * 30;
    this.state = {
      timeLeftToWeekend: calc(),
      isAnimated: false
    };
    setInterval(function(){
      this.setState({timeLeftToWeekend : calc(), isAnimated:true });
      setTimeout(function() {
        this.setState({timeLeftToWeekend : calc(), isAnimated:false });
      }.bind(this),1500);
    }.bind(this), halfHour);
  }

  render() {
    let timerClass = classnames({
      'timer': true,
      'animated': true,
      'hinge': this.state.isAnimated
    });
    const titleClass = classnames({
      'animated': true,
      'bounce': this.state.isAnimated
    });
    let percentToWeekend = Math.floor(100 - this.state.timeLeftToWeekend.percent);
    let daysToWeekend = this.state.timeLeftToWeekend.days;
    let hoursToWeekend = this.state.timeLeftToWeekend.hours;
    return (
      <div className="container">
        <h1 className={titleClass}>Time to WEEKEND!</h1>
        <p className={timerClass}>{percentToWeekend}%</p>
        <p> left for the weekend!</p>
        <p className="days">
          {daysToWeekend} Days, {hoursToWeekend} Hours
        </p>
        <div className="pie">
          <PieChart
            slices={[
              {
                color: '#f00',
                value: percentToWeekend
              },
              {
                color: '#ffb7b3',
                value: 100 - percentToWeekend
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
