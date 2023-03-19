/* eslint-disable max-len */
import React from 'react';
import ButtonNext from './ButtonNext';

const monthTypes = ['2034', '2036', '2038', '2040']
const Dates = ({ monthType, onMonthTypeChange, onClickNext }) => {
  return (
    <section className="content-container">
      <h1 className="header-copy">
        Which year would you like to book?
      </h1>
      <div className="month-container">
        {monthTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              onChange={onMonthTypeChange}
              checked={monthType === type} />
            {type}
          </label>
        ))}
      </div>
      <div className="button-container">
        <ButtonNext button="Next" onClickNext={onClickNext} />
      </div>
    </section>
  );
};

export default Dates;