
import { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import SortBar from './BotSort'; 

function BotsPage() {
  const [botList, setBotList] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBotList(data))
  }, []);

  function addBotToArmy(bot) {
    console.log("Adding bot to army:", bot);
    if (!botArmy.find((b) => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
      
    }
    // setBotList(botList.filter((b) => b.id !== bot.id));
  }

  function removeBotFromArmy(bot) {
    const filteredArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(filteredArmy);
  }

  function deleteBot(bot) {
    if (botArmy.find((b) => b.id === bot.id)) {
      setBotList(botList.filter((b) => b.id !== bot.id));
      setBotArmy(botArmy.filter((b) => b.id !== bot.id));

      fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'DELETE'
      });
    }
  }

  function handleSort(key) {
    const sortedBots = [...botList].sort((a, b) => a[key] - b[key]);
    setBotList(sortedBots);
  }

  return (
    <div>
      <SortBar handleSort={handleSort} />
      <YourBotArmy
        botArmy={botArmy}
        deleteBot={deleteBot}
        removeBotFromArmy={removeBotFromArmy}
      />
      <BotCollection
        botList={botList}
        addBotToArmy={addBotToArmy}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;
