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
        diningroom: {
            name: "diningroom",
            background: "Images/Backgrounds/diningroom.png",
        }
    };
    Endabgabe.characters = {
        narrator: {
            name: "",
        },
        mum: {
            name: "Mum",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Character/Adelinde_smile.png",
            }
        },
        dad: {
            name: "Dad",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad",
                happy: "Images/Character/Adelinde_smile.png",
            }
        },
        valeria: {
            name: "Valeria",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad",
                happy: "Images/Character/Adelinde_smile.png",
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
    async function say(_char, _text, _italic = false) {
        if (_italic) {
            let newText = "<i>" + _text + "</i>";
            await Endabgabe.ƒS.Speech.tell(_char, newText);
        }
        else {
            await Endabgabe.ƒS.Speech.tell(_char, _text);
        }
    }
    Endabgabe.say = say;
    window.addEventListener("keydown", hdnKeypress);
    let inventoryIsOpen;
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
    Endabgabe.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Endabgabe.ANormalDay, name: "ANormalDay", id: "ANormalDay" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Endabgabe.dataForSave = Endabgabe.ƒS.Progress.setData(Endabgabe.dataForSave, uiElement);
        Endabgabe.ƒS.Speech.hide();
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
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
                return "SceneOkay";
            case firstDialogAnswer.iSayNo:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.narrator, "ich sage nö");
                return "SceneNö";
        }
        return "Scene";
    }
    Endabgabe.Scene = Scene;
    ;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ANormalDay() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "Meet my family: my mum Claire, my dad Frank, and my older brother Will. We were always a close-knitted family. But I can't remember anything from the past, they said I had a terrible car accident.",
                T0002: "Hit my head pretty hard. I couldn't recognize anyone because of amnesia. My family took care of me. Explained everything to me, told me who my friends were, what I studied, and what my dreams were. They felt unfamiliar to me.",
                T0003: "It’s hard to accept parts of myself I don’t remember. Sometimes pieces of memory come back to me at random times. Often rather ordinary stuff: My old cat, what pen I loved to use for my notes or a night out with friends.",
                T0005: "Yeah...",
                T0007: "I will try next time.",
                T0009: "Don’t worry, I know!",
                T0010: "It's frustrating, my memory is unclear, so are my nightmares. Last night it was the same dream as the night before: I go downstairs, hear a little melody, then continue to go to the living room and there is nothing but blood. A huge pool of blood. Some ripped off extremities laying on the floor. That's it.",
                T0011: "I wake up confused, often trying to distinguish what's memory and what’s nightmare. .... I hope tonight’s going to be peaceful."
            },
            Mum: {
                T0004: "Valeria, I heard you were awake early this morning, a nightmare again?",
                T0008: "Don’t forget to clean the dishes after dinner, it’s your turn.",
            },
            Dad: {
                T0006: "Did you try the Meditation exercise the doctor gave you? Give it a chance, it might help."
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.jigsaw.duration, Endabgabe.transitions.jigsaw.alpha, Endabgabe.transitions.jigsaw.edge);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.happy, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.happy, Endabgabe.ƒS.positions.bottomright);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0004);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005);
        await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0006);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0008);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009);
        Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0010, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0011, true);
        return "ANormalDay";
    }
    Endabgabe.ANormalDay = ANormalDay;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Template.js.map