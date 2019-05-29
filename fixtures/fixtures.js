var fixtures = {
    studentData: {
        firstName: "Enrique",
        lastName: "Johnson",
        pesel: "89121223444",
        dateOfBirth: "12.12.1989 r.",
        placeOfBirth: "Mszana Dolna",
        addressOfStudent: "Malwowa 12a/22",
        cityOfStudent: "Poznań",
        postCodeOfStudent: "62-489",
        studentID: "4567",
        school: {
            nameOfSchool: "Szkoła Podstawowa nr 1",
            typeOfSchool: "szkoła podstawowa",
            addressOfSchool: "ul. Ratajczaka 15/19",
            cityOfSchool: "Poznań",
            postCode: "68-488",
            class: "IIIa",
            specialization: "murarz"
        }
    },
    centerData: {
        centerCity: "Grodzisk Wlkp.",
        centerZipCode: "62-065",
        centerAddress: "ul. Zbąszyńska 11",
        centerNameNom: "Poradnia Psychologiczno-Pedagogiczna w Grodzisku Wlkp.",
        centerNameGen: "Poradnii Psychologiczno-Pedagogicznej w Grodzisku Wlkp."
    },
    staffMeetingData: {
        staffMeetingDate: "12.12.2018",
        staff: [
            {
                title: "mgr",
                name: "Wioleta Drapichrust",
                specialization: "pedagog"
            },
            {
                title: "dr",
                name: "Alojzy Bombel",
                specialization: "psycholog"
            },
            {
                title: "mgr",
                name: "Zenobia Wesoła",
                specialization: "surdopedagog, psycholog"
            },
            {
                title: "prof.",
                name: "Elżbieta Krótka",
                specialization: "tyflopedagog, logopeda"
            },
            {
                title: "lek.",
                name: "Jerzy Wróbel",
                specialization: "lekarz pediatra"
            }
        ]
    },
    requestData: {
        onRequest: "Janina i Alojzy Iglesias",
        onRequestGen: "Janiny i Alojzego Iglesias",
        addressOfParents: "Malwowa 12a/22",
        cityOfParents: "Poznań",
        postCodeOfParents: "64-366",
        typeOfDecision: {
            name: "kształcenie specjalne",
            nameGen: "kształcenia specjalnego",
            reasons: [
                "niepełnosprawność intelektualna w stopniu lekkim", "niepełnosprawność ruchowa", "niedosłyszenie"
            ],
            timeSpan: "pierwszy etap edukacyjny",
        }
    }
}

exports.fixtures = fixtures;
