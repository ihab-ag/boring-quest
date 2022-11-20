import QuestCard from "../components/QuestCard"

const mapQuests = (quests, onPress) => {
    const checkAdventureStatus = (adventure) => {

       return adventure.quests.filter(quest => quest.status === 'failed').length > 0 ? 'failed' 
       : adventure.quests.every(quest => quest.status === 'submitted') ? 'submitted' : 'in progress'
    }
    return quests.map((quest, key) => (
        
        <QuestCard key={key}
            difficulty={`bg-${quest.difficulty}`}
            title={quest.name}
            description={quest.description}
            onPress={() => onPress(key, quest)}
            status={quest.quests ? checkAdventureStatus(quest) : quest.status}
        />
    ))
}

export default mapQuests