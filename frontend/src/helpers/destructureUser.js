export const destructureUser = (user_data) => {
    return {
        id: user_data._id,
        name: user_data.name,
        username: user_data.username,
        type: user_data.type,
        level: user_data.level,
        exp: user_data.exp,
        deaths: user_data.deaths,
        health: user_data.health
    }
}