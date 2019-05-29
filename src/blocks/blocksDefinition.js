const docx = require('docx');
const { Paragraph, TextRun } = docx;
const {
    onRequestDefinition,
    stuffOnDecissionDefinition,
    subtitledParagraph
} = require('./blocks')

/**Insert empty line*/
const emptyLine = (values) => {
    let run = new TextRun("").size(12)
    let paragraph = new Paragraph()
    paragraph.addRun(run)
    return paragraph
}

/**
 * Insert line with City and date on the very to of document.
 * @param {Object} values
 * */
function cityAndDate(values) {
    let paragraph = new Paragraph().right();
    let run = new TextRun(`${values.centerData.centerCity} ${values.staffMeetingData.staffMeetingDate}`).size(24);
    paragraph.addRun(run);
    return paragraph
}

/**
 * Insert line with singnature of document. 
 * @param {Object} values
 */
const signatureOfCenter = (values) => {
    let paragraph = new Paragraph().left();
    let run = new TextRun(`PPP.....\n`).size(24);
    paragraph.addRun(run);
    return paragraph
}

/**Insert title of decision. 
 * Can take two values: 'OPINIA nr' OR 'ORZECZENIE nr' depending on
 * type of decision.
 * @param {Object} values
 */
const titleOfDecision = (values) => {
    let paragraph = new Paragraph().center();
    let run = new TextRun(`${values.title}`).size(28).bold();
    paragraph.addRun(run);
    return paragraph
}

/**Insert subtitle of decision.
 * Subtitle describe reason of issued decision.
 * ie. 'o potrzebie kształcenia specjalnego'
 * ie. 'o potrzebie indywidualnego nauczania'
 * @param {Object} values
 */
function subtitleOfDecision(values) {
    let paragraph = new Paragraph().center();
    let run = new TextRun(values.subtitle).size(24)
                                               .bold();
    paragraph.addRun(run);
    return paragraph
}

/**
 * Insert legal basis line
 * @param {Object} values 
 */
function legalBasis(values) {
    let paragraph = new Paragraph().justified();
    let run = new TextRun(values.legalBasis).font("TimesNewRoman")
                                            .size(20)
                                            .italic();
    paragraph.addRun(run)
    return paragraph
}

/**
 * Insert subtitled line starting with "Na wniosek: " and
 * describe people who submit application for decision (usualy parents of student)
 * @param {Object} values 
 */
function onRequest(values) {
    paragraph = onRequestDefinition(values.requestData.onRequestGen)
    return paragraph
}

/**
 * Insert line with desciption the Center eligible to issue a decision.
 * @param {Array} values 
 */
function nameOfCenterGen(values) {
    var paragraph = new Paragraph().center()
    var run = new TextRun(
        `Zespół Orzekający przy ${values.centerData.centerNameGen}, ${values.centerData.centerAddress}`
    ).font("TimesNewRoman")
     .size(24)
     .bold()
    paragraph.addRun(run)

    return paragraph
}

/**
 * Insert block with all staff member and their specialization
 * @param {Object} values 
 */
function stuffOnDecision(values) {
    paragraph = stuffOnDecissionDefinition(values.staffMeetingData.staff)
    return paragraph
}


function issuedDecision(values) {
    var paragraph = new Paragraph().center()
    var textRun = new TextRun(values.decision).font("TimesNewRoman")
                                              .bold()
                                              .size(26)
    paragraph.addRun(textRun);
    return paragraph;
}

/**
 * return paragraph with main text and subtitle with student's name
 * @param {Object} values 
 * @return {Paragraph}
 */
function nameOfStudentRow(values) {
    return subtitledParagraph(
        `${values.studentData.firstName} ${values.studentData.lastName}`,
        values.subs.name_row
    )
}

/**
 * return paragraph with main text and subtitle with student's
 * date and place of birth
 * @param {Object} values
 * @return {Paragraph} 
 */
function dateAndPlaceOfStudentsBirthRow(values) {
    return subtitledParagraph(
        `${values.studentData.dateOfBirth}, ${values.studentData.placeOfBirth}`,
        values.subs.date_of_birth
    )
}

/**
 * return paragraph with main text (pesel) of and subtitle 
 * @param {Object} values 
 */
function peselRow(values) {
    return subtitledParagraph(
        values.studentData.pesel,
        values.subs.pesel_row
    )
}

/**
 * return paragraph with main text (address of student) and subtitle
 * @param {Object} values 
 */
function addressRow(values) {
    let data = values.studentData
    return subtitledParagraph(
        `${data.addressOfStudent}, ${data.postCodeOfStudent} ${data.cityOfStudent}`,
        values.subs.address_row
    )
}

// /**
//  * return paragraph with main text (school data) and subtitle
//  * @param {Object} values 
//  */
// function schoolRow(values) {
//     let data = values.school
//     return subtitledParagraph(
//         `${data.nameOfSchool}, ${data.addressOfSchool}, ${data.postCode} ${}`
//     )
// }

module.exports = {
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
    titleOfDecision
}