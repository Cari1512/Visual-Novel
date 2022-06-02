"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ƒ = FudgeCore;
    Endabgabe.ƒS = FudgeStory;
    console.log("FudgeStory [Storyname] starting");
    // define transitions
    Endabgabe.transitions = {
        jigsaw: {
            duration: 1,
            alpha: "Transitions/jigsaw_06.jpg",
            edge: 1
        }
    };
    Endabgabe.sound = {
        // themes
        nightclub: "pfad",
        //SFX
        click: "Pfad"
    };
    Endabgabe.locations = {
        city: {
            name: "city",
            background: "Images/Backgrounds/bg_city_sunset.png",
        }
    };
    Endabgabe.characters = {
        narrator: {
            name: "",
        },
        adeline: {
            name: "Adeline",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Character/Adelinde_smile.png",
            }
        },
        dan: {
            name: "Dan",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad",
                happy: "",
            }
        }
    };
    // Menu
    Endabgabe.ingameButtons = {
        inventory: "Inventory",
        save: "Save",
        load: "Load",
        credits: "Credits"
    };
    async function btnFunctionalities(_option) {
        switch (_option) {
            case Endabgabe.ingameButtons.inventory:
                Endabgabe.ƒS.Inventory.open();
                break;
            case Endabgabe.ingameButtons.save:
                Endabgabe.ƒS.Progress.save();
                break;
            case Endabgabe.ingameButtons.load:
                Endabgabe.ƒS.Progress.load();
                break;
            case Endabgabe.ingameButtons.credits:
                showCredits();
                break;
        }
    }
    Endabgabe.btnFunctionalities = btnFunctionalities;
    function showCredits() {
        Endabgabe.ƒS.Text.print("Credits! :D");
    }
    Endabgabe.showCredits = showCredits;
    window.addEventListener("keydown", hdnKeypress);
    let inventoryIsOpen = false;
    async function hdnKeypress(_event) {
        switch (_event.code) {
            case Endabgabe.ƒ.KEYBOARD_CODE.I:
                if (!inventoryIsOpen) {
                    Endabgabe.ƒS.Inventory.open();
                    inventoryIsOpen = true;
                }
                else {
                    Endabgabe.ƒS.Inventory.close();
                    inventoryIsOpen = false;
                }
                break;
        }
    }
    Endabgabe.items = {
        key: {
            name: "Key",
            description: "Keys found.",
            image: "./Images/Items/key.png",
        },
        Dokument: {
            name: "Document",
            description: "Murder case.",
            image: "./Images/Items/document.png",
        },
        tape: {
            name: "Tape",
            description: "Tape, always helpfull.",
            image: "./Images/Items/tape.png",
        },
        book: {
            name: "Diary",
            description: "No notes today.",
            image: "./Images/Items/book.png",
        },
        knife: {
            name: "Knife",
            description: "Just in case....",
            image: "./Images/Items/knife.png",
        },
        glasses: {
            name: "Glasses",
            description: "can't read shit without them",
            image: "./Images/Items/glasses.png",
        },
    };
    Endabgabe.dataForSave = {
        nameProtagonist: "",
        score: 0,
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Endabgabe.Scene, name: "Scene", id: "Scene" }
        ];
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Endabgabe.dataForSave = Endabgabe.ƒS.Progress.setData(Endabgabe.dataForSave, uiElement);
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Narrator: {
                T0001: "Hallo ich bin der Narrator"
            },
            Adeline: {
                T0001: "hi Hello Juhu"
            }
        };
        //ƒS.Sound.play()
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.city);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.adeline, Endabgabe.characters.adeline.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.6);
        //ƒS.Character.hideAll()
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.adeline, text.Adeline.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, text.Narrator.T0001);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update();
        let firstDialogAnswer = {
            iSayOk: "Okay",
            iSayNo: "No",
        };
        let firstDialog = await Endabgabe.ƒS.Menu.getInput(firstDialogAnswer, "decision");
        switch (firstDialog) {
            case firstDialogAnswer.iSayOk:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, "Ich sage okay");
                break;
            case firstDialogAnswer.iSayNo:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, "ich sage nö");
                break;
        }
        return "Scene";
    }
    Endabgabe.Scene = Scene;
    ;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Template.js.map