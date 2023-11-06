import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ botArmy, deleteBot, removeBotFromArmy }) {
//   console.log(botArmy);

  const mappedBotArmy = botArmy.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleAdd={removeBotFromArmy}
        handleDelete={deleteBot}
      />
    );
  });
  return (
    <div className='bot-army-container'>
      <div className='bot-army-title'>
      <h2> Bot Army</h2>
      {mappedBotArmy.length > 0 ? mappedBotArmy : <p className="ptext">No bots selected yet</p>}
        <div className='bot-army-row'>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;