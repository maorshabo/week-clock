import './beach.scss';
import React from 'react';
import { calc } from '../../utils/Utils';

export default class Beach extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const maxBlur = 20;
    const timeLeftToWeekend = 100 - calc().percent;
    const blurPercents = `${(timeLeftToWeekend/100) * maxBlur}px`;
    const beachStyle = {
      'WebkitFilter': `blur(${blurPercents})`,
      'MozFilter': `blur(${blurPercents})`,
      'OFilter': `blur(${blurPercents})`,
      'MsFilter': `blur(${blurPercents})`,
      'filter': `blur(${blurPercents})`
    };
    return (<div className="beach" style={beachStyle}></div>);
  }
}

