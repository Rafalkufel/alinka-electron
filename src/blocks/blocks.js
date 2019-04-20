const docx = require("docx");
const { Paragraph, TextRun, FooterReference} = docx;

/**
 * Blueprint of text with subtitle. Can add footnote hook in subtitle
 * after specified phrase
 * @param {TextRun} textRun
 * @param {string} subtitle
 * @param {string} footnotePhrase
 * @return {Paragraph}
 */
const subtitledParagraph = (
    textRun, subtitle, footnotePhrase = undefined, referenceNumber = undefined
) => {
    let paragraph = new Paragraph().justified()
    paragraph.addRun(textRun);
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
    var first_run = new TextRun(`Na wniosek:  ${applicant}`)
    first_run.size(24).font("TimesNewRoman")
    paragraph.addRun(first_run)
    var whiteSpaces = (applicant.lenght - 4) / 2;
    var second_run = new TextRun("\n"+ " ".repeat(whiteSpaces) +"(imię i nazwisko wnioskodawcy)")
    second_run.size(18).font("TimesNewRoman")
    paragraph.addRun(second_run)

    return paragraph

}

function nameOfCenterGenDefinition(name, address, city, postCode) {
    var paragraph = new Paragraph().center()
    var firstRun = new TextRun(`Zespół Orzekający przy ${name}, ${address}, ${postCode}, ${city}`)
    firstRun.size(24).font("TimesNewRoman")
    paragraph.addRun(firstRun)
    var secondRun = new TextRun("\n(nazwa i adres publicznej poradni psychologiczno-pedagogicznej)")
    secondRun.size(18).font("TimesNewRoman")
    paragraph.addRun(secondRun)

    return paragraph
}

function stuffOnDecissionDefinition(stuff) {
    var paragraph = new Paragraph().left()
    var firstRun = new TextRun('w składzie:\n').bold().size(24)
    paragraph.addRun(firstRun)
    for (var specialist in stuff) {
        title = stuff[specialist].title;
        name = stuff[specialist].name;
        specialization = stuff[specialist].specialization;
        if (specialist==0) {
            var specialistLine = new TextRun(
                `${title} ${name} - ${specialization} - Przewodniczący Zespołu\n`
                ).size(24)
        } else {
            var specialistLine = new TextRun(
                `${title} ${name} - ${specialization}\n`
                ).size(24)
        }
        paragraph.addRun(specialistLine);
    }
    return paragraph
}

function issuedDecisionDefinition(nameGen) {
    var paragraph = new Paragraph().center()
    var textRun = new TextRun(`Orzeka o potrzebie ${nameGen}\n`).bold().size(28)
    paragraph.addRun(textRun);
    return paragraph;
}

function subtitledRowDefinition(base, subtitle) {
    var paragraph = new Paragraph().center()
    let firstLine = new TextRun(`${base}\n`).size(26);
    paragraph.addRun(firstLine);
    let secondLine = new TextRun(`${subtitle}\n`).size(18);
    paragraph.addRun(secondLine);
    return paragraph;
}

module.exports = {
    issuedDecisionDefinition,
    nameOfCenterGenDefinition,
    onRequestDefinition,
    stuffOnDecissionDefinition,
    subtitledRowDefinition
};