const { Expo } = require("expo-server-sdk")

const sendPushNotification = async (targetExpoPushToken, message) => {
    const expo = new Expo()
    const chunks = expo.chunkPushNotifications([
        { to: targetExpoPushToken, sound: "default", body: message, title: 'Boring Quest' }
    ])

    const sendChunks = async () => {

        chunks.forEach(async chunk => {
            try {
                await expo.sendPushNotificationsAsync(chunk)

            }
            catch (error) {
                console.log("Error sending chunk", error)
            }
        })
    }

    await sendChunks()
}

module.exports = sendPushNotification