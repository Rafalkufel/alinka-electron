const docx = require('docx');
const { Paragraph, TextRun } = docx;
const {
    issuedDecisionDefinition,
    nameOfCenterGenDefinition,
    normal_text,
    onRequestDefinition,
    stuffOnDecissionDefinition,
    subtitledRowDefinition
} = require('./blocks')

/**Insert empty line*/
const emptyLine = (values) => {
    let run = new TextRun().size(12)
    let paragraph = new Paragraph()
    paragraph.addRun(run)
    return paragraph
}

/**Insert line with City and date on the very to of document. */
function cityAndDate(values) {
    let paragraph = new Paragraph().right();
    let run = new TextRun(`${values.centerData.centerCity} ${values.staffMeetingData.staffMeetingDate}`).size(24);
    paragraph.addRun(run);
    return paragraph
}

/**Insert line with singnature of document. */
const signatureOfCenter = (values) => {
    let paragraph = new Paragraph().left();
    let run = new TextRun(`PPP.....\n`).size(24);
    paragraph.addRun(run);
    return paragraph
}

/**Insert title of decision. 
 * Can take two values: 'OPINIA nr' OR 'ORZECZENIE nr' depending on
 * type of decision.
 */
const title = (values) => {
    let paragraph = new Paragraph().center();
    let run = new TextRun(`${values.title}`).size(28).bold();
    paragraph.addRun(run);
    return paragraph
}

/**Insert subtitle of decision.
 * Subtitle describe reason of issued decision.
 * ie. 'o potrzebie kształcenia specjalnego'
 * ie. 'o potrzebie indywidualnego nauczania'
 */
function subtitle(values) {
    let paragraph = new Paragraph().center();
    let run = new TextRun(`${values.subtitle}`).size(24).bold();
    paragraph.addRun(run);
    return paragraph
}

// function legalBasis(values) {
//     paragraph = normal_text(
//         values.legalBasis,
//         size=24,
//         jusitification='justified'
//     )
//     return paragraph
// }

// function onRequest(values) {
//     paragraph = onRequestDefinition(values.requestData.onRequest)
//     return paragraph
// }

// function nameOfCenterGen(values) {
//     paragraph = nameOfCenterGenDefinition(
//         values.centerNameGen,
//         values.centerAdress,
//         values.centerCity,
//         values.centerZipCode
//     )
//     return paragraph
// }

// function stuffOnDecision(values) {
//     paragraph = stuffOnDecissionDefinition(values.staffMeetingData.staff)
//     return paragraph
// }

// function issuedDecision(values) {
//     paragraph = issuedDecisionDefinition(values.typeOfDecision.nameGen)
//     return paragraph
// }

// function nameOfStudentRow(values) {
//     const paragraph = subtitledRowDefinition(
//         `${values.firstName} ${values.lastName}`, values.subs.name_row
//     )
//     return paragraph
// }


// issuedDecision,
//     legalBasis,
//     nameOfCenterGen,
//     nameOfStudentRow,
//     onRequest,

//     stuffOnDecision,


module.exports = {
    cityAndDate,
    emptyLine,
    signatureOfCenter,
    subtitle,
    title
}