import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: { seasonText: 'Summer', icon: 'sun' },
  winter: { seasonText: 'Winter', icon: 'snowflake' },
};

function getSeason(lat) {
  let month = new Date().getMonth();

  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat);
  const seasonText = seasonConfig[season]['seasonText'];
  const seasonIcon = seasonConfig[season]['icon'];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${seasonIcon} icon`} />
      <h1>{seasonText}</h1>
      <i className={`icon-right massive ${seasonIcon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
