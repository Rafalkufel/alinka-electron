const blocksDefinition = require('./blocksDefinition');

const { 
    cityAndDate,
    emptyLine,
    issuedDecision,
    legalBasis,
    nameOfCenterGen,
    onRequest,
    signatureOfCenter,
    stuffOnDecision,
    subtitle,
    nameOfStudentRow,
    title
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
    title,
    subtitle
]




// legalBasis,
// emptyLine,
// onRequest,
// emptyLine,
// nameOfCenterGen,
// emptyLine,
// stuffOnDecision,
// issuedDecision,
// nameOfStudentRow

module.exports = getBlocks;