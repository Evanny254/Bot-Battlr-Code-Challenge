import React from 'react';

function BotCard({ bot, handleAdd, handleDelete }) {
  return (
    <div className='bot-card'>
      <div key={bot.id} onClick={() => handleAdd(bot)}>
        <div>
          <img className='bot-image' alt='oh no!' src={bot.avatar_url} />
        </div>
          <div className='bot-card-content'>
          <div className='bot-card-header'>{bot.name}</div>
          <div className='bot-card-catchphrase'>{bot.catchphrase}</div>
        </div>
        <div className='bot-card-stats'>
          <span>Health: {bot.health}</span>
          <br />
          <span>Damage: {bot.damage}</span>
          <br />
          <span>Armor: {bot.armor}</span>
        </div>
        <div className='delete-button'>
          <button
            className='deleteBtn'
            onClick={() => handleDelete(bot)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
