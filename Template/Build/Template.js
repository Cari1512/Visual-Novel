"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    Template.transitions = {
        jigsaw: {
            duration: 1,
            alpha: "Transitions/jigsaw_06.jpg",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        nightclub: "pfad",
        //SFX
        click: "Pfad"
    };
    Template.locations = {
        city: {
            name: "city",
            background: "Images/Backgrounds/bg_city_sunset.png",
        }
    };
    Template.characters = {
        narrator: {
            name: "",
        },
        adeline: {
            name: "Adeline",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Character/Adelinde_smile.png",
            }
        },
        dan: {
            name: "Dan",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad",
                happy: "",
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: "",
        score: 0,
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0001: ""
            },
            Adeline: {
                T0001: "hi Hello Juhu"
            }
        };
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.adeline, Template.characters.adeline.pose.happy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.adeline, text.Adeline.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "NeuerText");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map