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
        },
        slide: {
            duration: 1.5,
            alpha: "Transitions/slide.jpg",
            edge: 0.1,
        },
        slideFast: {
            duration: 0.5,
            alpha: "Transitions/slideFast.jpg",
            edge: 0.1,
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
        },
        hallway: {
            name: "hallway",
            background: "Images/Backgrounds/hallway.png",
        },
        bedroom: {
            name: "bedroom",
            background: "Images/Backgrounds/bedroom.png",
        },
        secretroom: {
            name: "secretroom",
            background: "Images/Backgrounds/bedroom.png",
        },
        act1: {
            name: "act1",
            background: "Images/Text/Act1.jpg",
        },
        office: {
            name: "office",
            background: "Images/Backgrounds/office.jpg",
        },
        livingroom: {
            name: "livingroom",
            background: "Images/Backgrounds/livingRoom.jpg",
        },
        houseDay: {
            name: "houseDay",
            background: "Images/Backgrounds/houseDay.jpg",
        },
        car: {
            name: "car",
            background: "Images/Backgrounds/car.jpg",
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
        },
        neighbor: {
            name: "Ms Anne",
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
        flashlight: {
            name: "Flashlight",
            description: "in case I need a light",
            image: "./Images/Items/flashlight.png",
            static: false,
        },
    };
    Endabgabe.dataForSave = {
        foundSecretRoom: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Endabgabe.ANormalDay, name: "ANormalDay", id: "ANormalDay" },
            { scene: Endabgabe.ThePicture, name: "ThePicture", id: "ThePicture" },
            { scene: Endabgabe.AskingFamily, name: "AskingFamily", id: "AskingFamily" },
            { scene: Endabgabe.OddThings, name: "OddThings", id: "OddThings" },
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
                T0001: "Family. My mum Claire, my dad Frank and my brother Will. We were always a close-knitted family. But I can't remember anything from the past, they said I had a terrible car accident.",
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
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.act1);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
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
        return "ThePicture";
    }
    Endabgabe.ANormalDay = ANormalDay;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function AskingFamily() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "Good morning, mum",
                T0002: "Not really, I couldn't fall asleep. ",
                T0003: "Yeah, well, can I ask you something?",
                T0004: "How long have we been living here?",
                T0005: "There is a room behind the picture in the hallway. Did you know?",
                T0006: "Mum, are you missing something?",
                T0007: "No no……. never mind. It’s nothing, really.",
                T0008: "I found this bank statement behind the picture in the hallway. ",
            },
            Mum: {
                T0001: "Good morning darling, did you sleep well last night? ",
                T0002: "What is it, Valeria?",
                T0003: "Why are you asking?",
                T0004: "No, nothing in particular. Is something wrong? ",
            },
            Dad: {
                T0001: "Morning, you alright?",
                T0002: "Why are you asking?",
                T0003: "We built this house about 25 years ago; this was always our home.",
                T0004: "Yes, but we never used that room, it's from the family that used to live here. Don't get bothered by it, I already saw the hole in the wall, I will it soon!",
                T0005: "Oh, let me see…",
                T0006: "... hmmmm must have gotten there by accident. I will put it in the right folder!",
                T0007: "...",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.happy, Endabgabe.ƒS.positions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0001);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.happy, Endabgabe.ƒS.positions.bottomright);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0001);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0002);
        let findingQuestionAnswer = {
            noReason: "No reason, just curious...",
            iFoundSomething: "Because I found something yesterday night.....",
        };
        if (Endabgabe.dataForSave.foundSecretRoom) {
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004);
            await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0007);
            await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0002);
            let findingQuestion = await Endabgabe.ƒS.Menu.getInput(findingQuestionAnswer, "decision");
            switch (findingQuestion) {
                case findingQuestionAnswer.noReason:
                    await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0003);
                    await Endabgabe.ƒS.update(0.2);
                    return "OddThings";
                case findingQuestionAnswer.iFoundSomething:
                    await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0004);
                    return "OddThings";
            }
        }
        else {
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006);
            await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0004);
            let findingQuestion = await Endabgabe.ƒS.Menu.getInput(findingQuestionAnswer, "decision");
            switch (findingQuestion) {
                case findingQuestionAnswer.noReason:
                    await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0004);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007);
                    return "OddThings";
                case findingQuestionAnswer.iFoundSomething:
                    await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0006);
                    return "OddThings";
            }
        }
    }
    Endabgabe.AskingFamily = AskingFamily;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function OddThings() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        Endabgabe.ƒS.Inventory.add(Endabgabe.items.flashlight);
        let text = {
            Valeria: {
                T0001: "To keep me safe, my parents want me to stay at home.",
                T0002: "Currently I’m not going to school or meeting my friends. The doctor also told me to avoid stressful situations for a while.",
                T0003: "While my brother is in class and my parents are at work, I have the for house for myself. ",
                T0004: "Not gonna lie, it's boring to have nothing to do. ",
                T0005: "This house I have been living in my whole life feels familiar to me. I remember the smell of it. A mix of old wood and fresh grass. ",
                T0006: "Our house is in the outskirts, behind the house only field and trees. ",
                T0007: "In my memories the walls were covered in pictures. Family photos and some drawings by me and my brother when we were kids. ",
                T0008: "I guess my parents take now more of a minimalistic approach towards the house decorations, at least for photos. I can’t find any family photos in this house...",
                T0009: "It's so dark here. I should get the flashlight out.",
                T0010: "The flashlight is in my pocket....",
                T0011: "I should take it out and use it before searching the room!",
                T0012: "So much dust!",
                T0013: "Old plushies everywhere",
                T0014: "There are drawings on the wall... ",
                T0015: "Even a bed, why is there a bed? ",
                T0016: "Shit, this is getting way too creepy, I want to go back upstairs.",
                T0017: "Let's put up the painting, so it won't be so scary to see the room through the hole in the wall.",
                T0018: "I know my family is well off, but we used to never talk about money. ",
                T0019: "It wasn't something to discuss during dinners, at least not that I remember of. ",
                T0020: "Dad, don't you remember, you guys never wanted me to spend much money, so you gave me my allowance in cash every month.",
                T0021: "I don't have access to my bank account. Only you have.",
                T0022: "Yeah, in your office, you showed me when I turned 16. Don't worry, why would there be an emergency? ...",
                T0023: "Ok....sure I guess",
                T0024: "So, if for any reason I need money and you guys aren't around, I'm allowed to open the safe in the couch.",
                T0025: "....I don't. I've forgotten. Sorry. What was it again?",
                T0026: "...bye",
                T0027: "She talks so much; I couldn't even say something.... ",
                T0028: "But it's true, the neighborhoods BBQ Party is every year around September. Why didn't we go? Mum would never forget... ",
                T0029: "I noticed some things about mum I never noticed before. ",
                T0030: "She is way more talkative than she used to be and keeps forgetting stuff. Maybe it's because I'm sick, but she isn't herself these days. Is she stressed? Hmmm",
                T0031: "I'm bored. Should I turn on the radio today?",
                T0032: "This house is so big. It's so lonely here...",
                T0033: "Mum and Dad will come back at 6 pm, my brother probably a bit earlier...",
                T0034: "Should I listen to some music?",
            },
            Mum: {
                T0001: "You never know. Just to make sure, why don't you show us? Like a little training session for emergencies?",
                T0002: "Honey, look at the mess! You should at least try to keep it tidy!",
                T0003: "Don't worry, you don't need to know now. We will tell you when you are ready, and your mind isn't as cluttered as it is now. Let's go step by step. Right, honey?",
            },
            Dad: {
                T0001: "Valeria, do you know how much you have on your bank account?",
                T0002: "Ah right, I must be getting old, I forgot, yes of course, in cash. But in case of emergency, you know where to get it, right?",
                T0003: "Go on, do you remember the code?",
                T0004: "Yes, yes, you are right! No pressure, Valeria!",
            },
            Neighbor: {
                T0001: "Hello Sweetheart, how are you doing? Everything is good? Yeah? Listen, I am in bit of a hurry. Tell me, why did your family not show up at the annual BBQ party at my house, huh?",
                T0002: "Have I done something wrong? Is your mum angry with me? If it's still about that stupid salat bowl argument, tell her I'm sorry. But I always thought your mum wouldn't mind stuff like that!",
                T0003: "You guys could have at least told me that you weren't coming this year! ",
                T0004: "People were missing your baked goods! Anyways, hope you guys aren't mad or somethin'. ",
                T0005: "See ya and talk to you soon! Oh, and sweetheart, try to stay at home, this city isn't as safe as it used to be, ok? Bye bye!",
            }
        };
        Endabgabe.ƒS.Character.hideAll();
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.bedroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008, true);
        if (Endabgabe.dataForSave.foundSecretRoom) {
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.bedroom); // basement dark
            await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
            while (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.flashlight) != 0) {
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0010, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0011, true);
            }
            Endabgabe.ƒS.Inventory.close();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway); // basement light
            await Endabgabe.ƒS.update();
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0012, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0013, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0014, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0015, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0016, true);
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0017, true);
        }
        else {
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
            await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0018, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0019, true);
            await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0001);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0021);
            await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0002);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0022);
            await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0001);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0023);
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.office);
            await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
            await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0002);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0024);
            await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0003);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0025);
            await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0003);
            await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0004);
        }
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.houseDay);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0001);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0002);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0003);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0004);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0005);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0026);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0027, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0028, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0029, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0030, true);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.livingroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0031, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0032, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0033, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0034, true);
    }
    Endabgabe.OddThings = OddThings;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ThePicture() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "I can’t fall asleep. I lay awake in my bed for hours. I can hear my brothers snoring next door. The walls are thin in this house...",
                T0002: "Noise from the hallway…",
                T0020: "...",
                T0003: "Oh...the picture fell down! Should I hang the picture? Or deal with it tomorrow maybe?",
                T0004: "No, the nail went through the wall. It sounds like there are stairs on the other side...let's see!",
                T0005: "It's another room! It must have been closed for a while, I don't remember this room....",
                T0006: "only dust and some old toys...it's cold. It doesn't seem like anyone has been here for ages. ",
                T0007: "I don't like it here, let's go back to bed.",
                T0008: "Wait, what is that? A Bank Account! Why would it be here?",
                T0009: "It’s mums bank account…let’s keep it for now!",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.bedroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        let hangPictureAnswer = {
            iSayYes: "Yes, let's hang it now!",
            iSayNo: "No, it can wait until tomorrow...",
        };
        let foundSecretRoom = await Endabgabe.ƒS.Menu.getInput(hangPictureAnswer, "decision");
        switch (foundSecretRoom) {
            case hangPictureAnswer.iSayYes:
                Endabgabe.dataForSave.foundSecretRoom = true;
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007, true);
                return "AskingFamily";
            case hangPictureAnswer.iSayNo:
                Endabgabe.dataForSave.foundSecretRoom = false;
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009, true);
                return "AskingFamily";
        }
    }
    Endabgabe.ThePicture = ThePicture;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Template.js.map