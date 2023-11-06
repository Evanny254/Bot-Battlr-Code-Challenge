import React from 'react';
import BotCard from './BotCard';

function BotCollection({ botList, addBotToArmy, deleteBot }) {
  
  const mappedBots = botList.map((bot) => {
    return <BotCard bot={bot} key={bot.id} handleAdd={addBotToArmy} handleDelete={deleteBot}/>;
  });

  return (
    <>
    <h1 className='bot-collection-header'>Collection of all bots</h1>
    <div className='bot-collection'>
    <div className='bot-collection-row'>{mappedBots}</div>
    </div>
    </>
  );
}

export default BotCollection;