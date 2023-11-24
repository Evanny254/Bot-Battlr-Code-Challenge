
import { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import SortBar from './BotSort'; 

function BotsPage() {
  const [botList, setBotList] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/65605da512a5d376599ddd11',{
      method:"GET",
      headers: {
        "X-Master-Key":"$2a$10$TrldED.AiOUKYrSbrS2zTOVzrrFuj2ZhDZRwQg./0wT96q4vIRJYm"
      },
    })
      .then((response) => response.json())
      .then((data) => {
      
        let botsArray = data.record.bots
        console.log(botsArray)
        setBotList(botsArray)})
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

      fetch(`https://api.jsonbin.io/v3/b/65605da512a5d376599ddd11${bot.id}`, {
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
