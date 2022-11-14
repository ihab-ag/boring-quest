const schedule = require('node-schedule')
const { failQuest } = require('../controllers/quests.controller')

const rule = new schedule.RecurrenceRule()
rule.hour = 0

const failQuestsScheduler = schedule.scheduleJob(rule, failQuest)

module.exports = failQuestsScheduler