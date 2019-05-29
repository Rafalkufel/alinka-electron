const blocksDefinition = require('./blocksDefinition');

const {
    addressRow,
    cityAndDate,
    dateAndPlaceOfStudentsBirthRow,
    emptyLine,
    issuedDecision,
    legalBasis,
    nameOfCenterGen,
    nameOfStudentRow,
    onRequest,
    peselRow,
    signatureOfCenter,
    stuffOnDecision,
    subtitleOfDecision,
    titleOfDecision,
 } = blocksDefinition;



function getBlocks(data) {
    console.log(data)
    if(data.requestData.typeOfDecision.name == "kształcenie specjalne") {
        return specialEducationBlocks;
    } else {
        return []
    }
}

var specialEducationBlocks = [
    cityAndDate,
    signatureOfCenter,
    emptyLine,
    titleOfDecision,
    subtitleOfDecision,
    emptyLine,
    legalBasis,
    emptyLine,
    onRequest,
    emptyLine,
    nameOfCenterGen,
    emptyLine,
    stuffOnDecision,
    emptyLine,
    issuedDecision,
    emptyLine,
    nameOfStudentRow,
    emptyLine,
    dateAndPlaceOfStudentsBirthRow,
    emptyLine,
    peselRow,
    emptyLine,
    addressRow,
    emptyLine,
]

module.exports = getBlocks;