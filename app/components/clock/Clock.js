import './clock.scss';
import classnames from 'classnames';
import React from 'react';
import PieChart from 'react-simple-pie-chart';
import { calc } from '../../utils/Utils';
import ToggleDisplay from 'react-toggle-display';

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
    const timerClass = classnames({
      'timer': true,
      'animated': true,
      'hinge': this.state.isAnimated
    });
    const titleClass = classnames({
      'animated': true,
      'bounce': this.state.isAnimated
    });
    const timeLeftToWeekend = this.state.timeLeftToWeekend;
    const percentToWeekend = Math.floor(100 - timeLeftToWeekend.percent);
    const daysToWeekend = timeLeftToWeekend.days;
    const hoursToWeekend = timeLeftToWeekend.hours;
    const today = timeLeftToWeekend.today;
    const pieSlices = [
      {
        color: '#f00',
        value: percentToWeekend
      },
      {
        color: '#ffb7b3',
        value: 100 - percentToWeekend
      }
    ];
    return (
      <div className="container">
        <ToggleDisplay if={percentToWeekend > 0}>
          <h1 className={titleClass}>Time to WEEKEND!</h1>
          <h4>{today.format('dddd, MMMM Do YYYY')}</h4>
          <p className={timerClass}>{percentToWeekend}%</p>
          <p> left for the weekend!</p>
          <p className="days">
            {daysToWeekend} Days, {hoursToWeekend} Hours
          </p>
          <div className="pie">
            <PieChart
              slices={pieSlices}
            />
          </div>
        </ToggleDisplay>
        <ToggleDisplay if={percentToWeekend <= 0}>
          <h1>It's WEEKEND go home!</h1>
        </ToggleDisplay>
      </div>
    );
  }
}
