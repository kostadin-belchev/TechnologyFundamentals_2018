const solve = (input = []) => {
  const initialQuests = input.shift()
  let quests = initialQuests.split(', ')
  input.pop()
  const commands = input
  for (const command of commands) {
    const [ action, questOrQuestAndSidequest ] = command.split(' - ')
    switch (action) {
      case 'Start':
        if (!quests.includes(questOrQuestAndSidequest)) {
          quests.push(questOrQuestAndSidequest)
        }
        break;
      case 'Complete':
        if (quests.includes(questOrQuestAndSidequest)) {
          quests.splice(quests.indexOf(questOrQuestAndSidequest), 1)
        }
        break
      case 'Side Quest':
        const [ quest, sideQuest ] = questOrQuestAndSidequest.split(':')
        if (quests.includes(quest)) {
          if (!quests.includes(sideQuest)) {
            const index = quests.indexOf(quest)
            // add the side quest after the quest
            quests.splice(index + 1, 0, sideQuest)
          }
        }
        break
      case 'Renew':
        if (quests.includes(questOrQuestAndSidequest)) {
          const deletedElement = quests.splice(quests.indexOf(questOrQuestAndSidequest), 1)
          quests.push(deletedElement)
        }
        break
      default:
        break;
    }
  }
  return quests.join(', ')
}

// console.log(solve(['Hello World, For loop, If else', 'Start - While loop', 'Complete - For loop', 'Retire!']))
console.log(solve(['Hello World, If else', 'Complete - Homework', 'Side Quest - If else:Switch', 'Renew - Hello World', 'Retire!']))
