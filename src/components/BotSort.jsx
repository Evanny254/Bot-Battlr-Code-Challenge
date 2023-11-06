
import React from 'react';

function SortBar({ handleSort }) {
  return (
    <div className="sort-bar">
      <button className='sort-health' onClick={() => handleSort('health')}>Sort by Health</button>
      <button className='sort-damage' onClick={() => handleSort('damage')}>Sort by Damage</button>
      <button className='sort-armor' onClick={() => handleSort('armor')}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;

