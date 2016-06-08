import React, { Component } from 'react';
import moment from 'moment';
import DayPickerComponent, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';;

export default class Range extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }
  state = {
    from: null,
    to: null,
  };
  handleDayClick(e, day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    //хорошо, но еще лучше обойтись без state, если вам эти данные нужны сверху - то и передавайте их через пропсы. не будет 2 источников данных
    this.props.getDayRange({
      from:moment(range.from).format('L'),
      to:moment(range.to).format('L')
    });
  }
  handleResetClick(e) {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }
  render() {
    const { from, to } = this.state;
    return (
      <div className="RangeExample">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from && to &&
          <p>
            You chose from {moment(from).format('L')} to {moment(to).format('L')}. <a href="#" onClick={this.handleResetClick}>Reset</a>
          </p>
        }
        <DayPickerComponent

          ref="daypicker"
          numberOfMonths={1}
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }

}
