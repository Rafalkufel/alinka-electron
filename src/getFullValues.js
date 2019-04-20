const constatData = require('./data/staticData')
const { specialEducation } = constatData;

function getFullValues(fixtures) {

    if(fixtures.requestData.typeOfDecision.name == 'kształcenie specjalne') {
        var fullValues = Object.assign(specialEducation, fixtures)
    } else if(data.typeOfDecision.name == 'indywidualne roczne przygotowanie') {
        var fullValues = individualPreEducation 
    } else if(data.typeOfDecision.name == 'indywidualne nauczanie') {
        fullValues = individualEducation
    } else if(data.typeOfDecision.name == 'zajęcia rewalidacyjno - wychowawcze') {
        fullValues = educationForSevereHandicaped
    } else if(data.typeOfDecision.name == 'wczesne wspomaganie rozwoju') {
        fullValues = earlyEducationalSupport
    }

    return fullValues
};

module.exports = getFullValues;