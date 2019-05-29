const docx = require("docx");
const { Paragraph, TextRun} = docx;

/**
 * Blueprint of text with subtitle. Can add footnote hook in subtitle
 * after specified phrase
 * @param {TextRun} textRun - content of main text
 * @param {string} subtitle - content of subtitle
 * @param {string} footnotePhrase - OPTIONAL, strint right befor subtitle hook
 * @param {string} referenceNumber - OPTIONAL, number of footnote reference
 * @return {Paragraph}
 */
const subtitledParagraph = (
    mainText, subtitle, footnotePhrase = undefined, referenceNumber = undefined
) => {
    let paragraph = new Paragraph().center();
    let mainTextRun = new TextRun(`${mainText}\n`).font("TimesNewRoman")
                                                  .size(24)
                                                  .bold();
    paragraph.addRun(mainTextRun);
    if (footnotePhrase) {
        SubtitleBeforeFootnote = subtitle.split(footnotePhrase)[0] + footnotePhrase;
        SubtitleAfterFootnote = subtitle.replace(SubtitleBeforeFootnote, "");
        paragraph.addRun(new TextRun(SubtitleBeforeFootnote).size(18));
        paragraph.referenceFootnote(referenceNumber);
        paragraph.addRun(new TextRun(SubtitleAfterFootnote).size(18));
        return paragraph
    }
    let subtitleRun = new TextRun(subtitle).size(18)
    paragraph.addRun(subtitleRun);
    return paragraph
}


function onRequestDefinition(applicant) {
    var paragraph = new Paragraph().center()

    var run = new TextRun("Na wniosek: ")
    run.size(24).font("TimesNewRoman")
    paragraph.addRun(run)

    var run = new TextRun(applicant)
    run.size(24).font("TimesNewRoman").bold()
    paragraph.addRun(run)

    var whiteSpaces = (applicant.lenght - 4) / 2;
    var second_run = new TextRun("\n"+ " ".repeat(whiteSpaces) +"(imię i nazwisko wnioskodawcy)")
    second_run.size(18).font("TimesNewRoman")
    paragraph.addRun(second_run)

    return paragraph

}

function stuffOnDecissionDefinition(stuff) {
    var paragraph = new Paragraph().left()
    var firstRun = new TextRun('w składzie:\n\r').bold().size(24)
    paragraph.addRun(firstRun)
    for (var specialist in stuff) {
        title = stuff[specialist].title;
        name = stuff[specialist].name;
        specialization = stuff[specialist].specialization;
        if (specialist==0) {
            var specialistLine = new TextRun(
                `${title} ${name} - ${specialization} - Przewodniczący Zespołu\r\n`
                ).size(24)
        } else {
            var specialistLine = new TextRun(
                `${title} ${name} - ${specialization}\r\n`
                ).size(24)
        }
        paragraph.addRun(specialistLine);
        paragraph
    }
    return paragraph
}

module.exports = {
    onRequestDefinition,
    stuffOnDecissionDefinition,
    subtitledParagraph
};