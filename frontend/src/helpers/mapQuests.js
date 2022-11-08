import QuestCard from "../components/QuestCard"

const mapQuests = (quests, onPress) => {
    return quests.map((quest, key) => (
        <QuestCard key={key}
            difficulty={`bg-${quest.difficulty}`}
            title={quest.title}
            description={quest.description}
            onPress={() => onPress(key, quest)}
            status={quest.status}
        />
    ))
}

export default mapQuests