"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function Empty() {
    }
    Endabgabe.Empty = Empty;
})(Endabgabe || (Endabgabe = {}));
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
        // sounds SFX
        indoors: "Audio/SFX/Indoors_environment.wav",
        outsideDay: "Audio/SFX/outsideDay.wav",
        night: "Audio/SFX/insect.wav",
        picture_fall: "Audio/SFX/picture_fall.mp3",
        nail_fall: "Audio/SFX/nail_fall.mp3",
        snoring: "Audio/SFX/snoring.wav",
        page: "Audio/SFX/page.mp3",
        radio: "Audio/SFX/radio.wav",
        //themes
        theme1: "Audio/Music/Theme1.mp3",
        theme2: "Audio/Music/theme2.mp3",
        theme3: "Audio/Music/theme3.mp3"
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
            background: "Images/Backgrounds/basementDark.jpg",
        },
        secretroomLight: {
            name: "secretroom",
            background: "Images/Backgrounds/basementLight.jpg",
        },
        act1: {
            name: "act1",
            background: "Images/Text/Act1.jpg",
        },
        act2: {
            name: "act2",
            background: "Images/Text/Act2.jpg",
        },
        office: {
            name: "office",
            background: "Images/Backgrounds/office.jpg",
        },
        livingroom: {
            name: "livingroom",
            background: "Images/Backgrounds/livingRoomRadio.jpg",
        },
        houseDay: {
            name: "houseDay",
            background: "Images/Backgrounds/houseDay.jpg",
        },
        houseNight: {
            name: "houseDay",
            background: "Images/Backgrounds/houseNight.png",
        },
        flashback: {
            name: "flashback",
            background: "Images/Backgrounds/flashback.jpg",
        },
        car: {
            name: "car",
            background: "Images/Backgrounds/car.jpg",
        },
        wall: {
            name: "wall",
            background: "Images/Backgrounds/greyWall.jpg",
        }
    };
    Endabgabe.characters = {
        mum: {
            name: "Mum",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Mum_neutral.png",
                happy: "Images/Character/mum_smile.png",
                talking: "Images/Character/Mum_talking.png",
                confused: "Images/Character/Mum_confused.png",
            }
        },
        dad: {
            name: "Dad",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Dad_neutral.png",
                talking: "Images/Character/Dad_talking.png",
                angry: "Images/Character/Dad_angry.png",
            }
        },
        valeria: {
            name: "Valeria",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                headDown: "Images/Character/Valeria2.png",
                headUp: "Images/Character/Valeria3.png",
            }
        },
        neighbor: {
            name: "Ms Anne",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Character/neighbor.png",
            }
        },
        brother: {
            name: "Brother",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Character/Brother_angry.png",
                happy: "Images/Character/Brother_neutral.png",
            }
        },
        knife: {
            name: "Knife",
            origin: Endabgabe.ƒS.ORIGIN.CENTER,
            pose: {
                one: "Images/Items/knife.png",
                two: "Images/Items/knife1.png",
                three: "Images/Items/knife2.png",
                four: "Images/Items/knife3.png",
                five: "Images/Items/knife4.png",
                six: "Images/Items/knife5.png",
                seven: "Images/Items/knife6.png",
                eight: "Images/Items/knife7.png",
            }
        }
    };
    Endabgabe.newPositions = {
        bottomleft: new FudgeStory.Position(-460, -540),
        bottomright: new FudgeStory.Position(470, -540),
        bottomcenter: new FudgeStory.Position(0, -540),
        rightout: new FudgeStory.Position(2470, -540),
        leftout: new FudgeStory.Position(-2470, -540),
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
                await Endabgabe.ƒS.Progress.save();
                break;
            case Endabgabe.ingameButtons.load:
                await Endabgabe.ƒS.Progress.load();
                break;
            case Endabgabe.ingameButtons.credits:
                showCredits();
                break;
        }
    }
    Endabgabe.btnFunctionalities = btnFunctionalities;
    // Radio
    // Shows the current display state of the radio
    let radioOpen = false;
    // Displays Radio
    async function showRadio() {
        let parentDiv = document.createElement("div");
        parentDiv.id = "appendedDiv";
        let radioDiv = document.createElement("div");
        radioDiv.id = "radioDiv";
        let img = document.createElement("img");
        img.src = "Images/Radio/radio.png";
        img.id = "radio";
        let knob = document.createElement("img");
        knob.src = "Images/Radio/knob.png";
        knob.id = "knob";
        radioDiv.appendChild(img);
        radioDiv.appendChild(knob);
        parentDiv.appendChild(radioDiv);
        radioOpen = true;
        document.getElementById("append").appendChild(parentDiv);
    }
    Endabgabe.showRadio = showRadio;
    // Hides Radio
    function hideRadio() {
        radioOpen = false;
        document.getElementById("append").removeChild(document.getElementById("appendedDiv"));
    }
    Endabgabe.hideRadio = hideRadio;
    // Adds or removes Event Listener for Radio Events
    function toggleRadioEvent() {
        document.addEventListener("wheel", scrollEvent);
    }
    Endabgabe.toggleRadioEvent = toggleRadioEvent;
    // Event Listener that calls the function that changes stations
    function scrollEvent(_event) {
        changeRadioStation();
    }
    // Tracks current station and whether the event is done 
    let currentStation = 1;
    Endabgabe.radioEventDone = false;
    // Changes the station and displays the text
    async function changeRadioStation() {
        // Removes event listener to avoid continuous scrolling
        document.removeEventListener("wheel", scrollEvent);
        // Rotate knob 
        let knob = document.getElementById("knob");
        knob.style.transform = "rotate(" + currentStation * 22.5 + "deg)";
        currentStation++;
        // --- Stations --- 
        // 1 - First station
        // 2 - nothing
        // 3 - Second station
        if (currentStation == 2) {
            Endabgabe.ƒS.Sound.play(Endabgabe.sound.radio, 0.3, false);
            await Endabgabe.ƒS.Speech.tell(" ", "*unclear radio noises*");
            // Add the event listener again to allow scrolling
            document.addEventListener("wheel", scrollEvent);
        }
        if (currentStation == 3) {
            Endabgabe.ƒS.Sound.fade(Endabgabe.sound.radio, 0, 1);
            if (Endabgabe.dataForSave.foundSecretRoom) {
                await Endabgabe.ƒS.Speech.tell("News", "A high school senior as been missing for a couple of months says a local high school.");
                await Endabgabe.ƒS.Speech.tell(" ", "The radio turns off.");
            }
            else {
                await Endabgabe.ƒS.Speech.tell("Documentation", "The secret rich of Marple Street.");
                await Endabgabe.ƒS.Speech.tell("Documentation", "Apparently the rich of the rich keep their private lives on small Marple street.");
                await Endabgabe.ƒS.Speech.tell("Documentation", "Having their own society in this country, they all meet again in the same neighborhood.");
                await Endabgabe.ƒS.Speech.tell("Documentation", "More after the commercial break!");
                await Endabgabe.ƒS.Speech.tell(" ", "The radio turns off.");
            }
            // Set event done to true to escape while loop in OddThings.ts
            // Not adding the event listener again because the event is over
            Endabgabe.radioEventDone = true;
        }
    }
    function showCredits() {
        Endabgabe.ƒS.Text.print("Visual Novel by Carianne Sauermann, Music by Simon Hähnle");
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
            case Endabgabe.ƒ.KEYBOARD_CODE.F:
                if (!radioOpen) {
                    showRadio();
                }
                else {
                    hideRadio();
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
        key: {
            name: "Key",
            description: "key to the basement room",
            image: "./Images/Items/flashlight.png",
            static: false,
        },
        bank_statement: {
            name: "Bank Statement",
            description: "found behind the picture",
            image: "./Images/Items/bankDocument.png",
            static: false,
        }
    };
    Endabgabe.dataForSave = {
        foundSecretRoom: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Endabgabe.Suspicion, name: "Suspicion", id: "Suspicion" },
            { scene: Endabgabe.ANormalDay, name: "ANormalDay", id: "ANormalDay" },
            { scene: Endabgabe.ThePicture, name: "ThePicture", id: "ThePicture" },
            { scene: Endabgabe.AskingFamily, name: "AskingFamily", id: "AskingFamily" },
            { scene: Endabgabe.OddThings, name: "OddThings", id: "OddThings" },
            { scene: Endabgabe.Suspicion, name: "Suspicion", id: "Suspicion" },
            { scene: Endabgabe.Knife, name: "Knife", id: "Knife" },
            { scene: Endabgabe.Panic, name: "Panic", id: "Panic" },
            //Act 2
            { scene: Endabgabe.GoingBack, name: "GoingBack", id: "GoingBack" },
            { scene: Endabgabe.Confronting, name: "Confronting", id: "Confronting" },
            { scene: Endabgabe.TryingKey, name: "TryingKey", id: "TryingKey" },
            { scene: Endabgabe.Valeria, name: "Valeria", id: "Valeria" },
            { scene: Endabgabe.Empty, name: "Empty", id: "Empty" },
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
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.theme1, 0.4, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.act1);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.theme1, 0, 3);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.indoors, 0.7, true);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.talking, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.neutral, Endabgabe.newPositions.bottomright);
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
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.indoors, 0, 0.7);
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
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.indoors, 0.7, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.happy, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.mum);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.talking, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0001);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.talking, Endabgabe.newPositions.bottomright);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0001);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.dad);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.neutral, Endabgabe.newPositions.bottomright);
        await Endabgabe.ƒS.update(0.2);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.indoors, 0, 3);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.theme1, 0.1, true);
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
                    Endabgabe.ƒS.Character.hideAll();
                    await Endabgabe.ƒS.update(0.2);
                    return "OddThings";
                case findingQuestionAnswer.iFoundSomething:
                    await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0004);
                    Endabgabe.ƒS.Character.hideAll();
                    await Endabgabe.ƒS.update(0.2);
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
                    Endabgabe.ƒS.Character.hideAll();
                    await Endabgabe.ƒS.update(0.2);
                    return "OddThings";
                case findingQuestionAnswer.iFoundSomething:
                    await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008);
                    await Endabgabe.ƒS.update(0.2);
                    await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0006);
                    Endabgabe.ƒS.Character.hideAll();
                    await Endabgabe.ƒS.update(0.2);
                    return "OddThings";
            }
        }
    }
    Endabgabe.AskingFamily = AskingFamily;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Knife() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "I couldn’t sleep last night; I am so confused about what is happening… Everyone behaves like always, am I imagining things?  ",
                T0002: "Yes, but all knives are in the dishwasher, where can I find one?",
                T0003: "What....?Is happening? ",
                T0004: "Mum, omg whats happening?! The knife...",
                T0005: "Mum!! ...",
                T0006: "That's my mum in my memory, but she looks different, like before. Like in my childhood!",
                T0007: "This knife...I remember now...my head hurts...arghhh",
                T0008: "My memories came back. She is not my mum. That woman is not my real mother, neither is the boy my brother or the man my dad. They are not my family. Who are these people?",
                T0009: "Where is my family?? Ok, lets not panic, lets breath!",
                T0010: "Sorry, everything is fine. Don’t worry, trust me.",
            },
            Mum: {
                T0011: "Darling, could you please cut the vegetables?",
                T0012: "There are still some old ones in the bottom drawer!",
                T0013: "Valeria! Are you ok? What's happening?"
            },
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.neutral, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0011);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0012);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.mum);
        // flashback kinda background
        // knifes in hand, turnes bloody (animation??)
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.flashback);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.one, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.two, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.three, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.four, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.five, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.six, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.seven, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.knife, Endabgabe.characters.knife.pose.eight, Endabgabe.ƒS.positions.center);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.knife);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007, true);
        // back to reality
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0013);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0010);
        return "Panic";
    }
    Endabgabe.Knife = Knife;
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
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
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
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.secretroom);
            await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
            while (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.flashlight) != 0) {
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0010, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0011, true);
            }
            Endabgabe.ƒS.Inventory.close();
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.secretroomLight);
            await Endabgabe.ƒS.update();
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0012, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0013, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0014, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0015, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0016, true);
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0017, true);
        }
        else {
            Endabgabe.ƒS.Speech.hide();
            await Endabgabe.ƒS.update(0.2);
            await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
            await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0018, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0019, true);
            Endabgabe.ƒS.Sound.fade(Endabgabe.sound.theme1, 0, 3);
            Endabgabe.ƒS.Sound.play(Endabgabe.sound.indoors, 0.5, true);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.happy, Endabgabe.newPositions.bottomleft);
            await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.neutral, Endabgabe.newPositions.bottomright);
            await Endabgabe.ƒS.update(0.2);
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
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.dad);
            await Endabgabe.ƒS.Character.hide(Endabgabe.characters.mum);
            Endabgabe.ƒS.Sound.fade(Endabgabe.sound.indoors, 0, 3);
            await Endabgabe.ƒS.update(0.2);
        }
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(0.2);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.outsideDay, 0.5, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.houseDay);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.neighbor, Endabgabe.characters.neighbor.pose.happy, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0001);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0002);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0003);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0004);
        await Endabgabe.say(Endabgabe.characters.neighbor, text.Neighbor.T0005);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.neighbor);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0026);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0027, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0028, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0029, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0030, true);
        Endabgabe.ƒS.Speech.hide();
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.outsideDay, 0, 2);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.livingroom);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.theme1, 0.3, true);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0031, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0032, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0033, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0034, true);
        Endabgabe.showRadio();
        if (Endabgabe.dataForSave.foundSecretRoom) {
            await Endabgabe.ƒS.Speech.tell('News', '... a few weeks ago, a whole family was murdered in Maple Street.');
            await Endabgabe.ƒS.Speech.tell('News', 'The police did not give us an official statement yet, but one family member is still missing!');
        }
        else {
            await Endabgabe.ƒS.Speech.tell('News', 'More and more violent robberies and murders are happening in this country!');
            await Endabgabe.ƒS.Speech.tell('News', 'People are asked to make sure to lock all doors and windows at any time!');
        }
        Endabgabe.toggleRadioEvent();
        // Continuously checks if the event is done - if not, display the prompt to change stations
        while (!Endabgabe.radioEventDone) {
            await Endabgabe.ƒS.Speech.tell(' ', 'On the radio is a small label - Scroll to change radio stations...');
        }
        Endabgabe.hideRadio();
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.theme1, 0, 2);
        return "Suspicion";
    }
    Endabgabe.OddThings = OddThings;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Panic() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "it's been 2 days...and I am panicking.",
                T0002: "They are not my family, but where else can I go. Who are there? Where is my real family?",
                T0003: "Are they dangerous? I should go! I should leave, now! Before they find out! They aren't home yet!",
                T0004: "Quick, it's getting dark already.",
                T0005: "Shit...they are back! Ok, stay calm!",
                T0006: "They don't seem to suspect me. It will be dangerous to run away now...who knows what they might do to me.... let's go back with them...just for now.",
            },
            Dad: {
                T0007: "Valeria, what are you doing out here? You should stay inside!",
            },
            Mum: {
                T0008: "Darling, where are you going? Let's go back inside.",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom); // black screen
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.houseNight);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
        // sound of car
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.neutral, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.neutral, Endabgabe.newPositions.bottomright);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.brother, Endabgabe.characters.brother.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0007);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0008);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
        return "GoingBack";
    }
    Endabgabe.Panic = Panic;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Suspicion() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "I should go! ",
                T0002: "I know what...? Should I know something?... What are they hiding?",
                T0003: "he's awake...",
                T0004: "What do you mean? Pretending what? I heard you talking to mum. What is wrong with you?",
                T0005: "Well, aren't you the one acting weird? Are YOU just pretending? What is it I don't know?",
                T0006: "Yes, but all knives are in the dishwasher, where can I find one?",
            },
            Mum: {
                T0007: "What do you mean?",
                T0008: "No, don't worry, you must be imagining it. She has no clue. She doesn't remember!",
            },
            Brother: {
                T0009: "I think she knows something! She's behaving oddly!",
                T0010: "You think? Listen, she might not remember stuff, but we have to be more careful! Wait...",
                T0011: "You little piece of shit. Are you just pretending, huh? ",
                T0012: "yeah, yeah, keep on dreaming, let's wait until your memories come back. You won't be able to sleep then. Sweet dreams",
                T0013: "oh hoo, you are really good at acting, huh? ",
                T0014: "Don't worry sister, you will know soon enough.",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0007);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0009);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0008);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0010);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.bedroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.brother, Endabgabe.characters.brother.pose.angry, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0011);
        //Entscheidung
        let sleepingAnswer = {
            pretending: "Pretending to be asleep",
            wakingUp: "Waking up",
        };
        let sleeping = await Endabgabe.ƒS.Menu.getInput(sleepingAnswer, "decision");
        switch (sleeping) {
            case sleepingAnswer.pretending:
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0012);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.brother);
                await Endabgabe.ƒS.update(0.2);
                return "Knife";
            case sleepingAnswer.wakingUp:
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004);
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0013);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005);
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0014);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.brother);
                await Endabgabe.ƒS.update(0.2);
                return "Knife";
        }
    }
    Endabgabe.Suspicion = Suspicion;
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
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.night, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.bedroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
        await Endabgabe.ƒS.update(2);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.snoring, 0.1, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.picture_fall, 0.1, false);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.night, 0.1, 3);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.snoring, 0.05, 3);
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
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.nail_fall, 0.1, false);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
                await Endabgabe.ƒS.update(3);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.night, 0, 3);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.snoring, 0, 3);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.theme3, 0.1, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.secretroom);
                await Endabgabe.ƒS.update(Endabgabe.transitions.slide.duration, Endabgabe.transitions.slide.alpha, Endabgabe.transitions.slide.edge);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007, true);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.theme3, 0, 3);
                return "AskingFamily";
            case hangPictureAnswer.iSayNo:
                Endabgabe.dataForSave.foundSecretRoom = false;
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.theme2, 0.1, true);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.page, 0.5, false);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0020, true);
                await Endabgabe.ƒS.Text.print('<img style="width: 500px" src="./Images/Items/bankDocument.png">');
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009, true);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.theme2, 0, 3);
                Endabgabe.ƒS.Inventory.add(Endabgabe.items.bank_statement);
                return "AskingFamily";
        }
    }
    Endabgabe.ThePicture = ThePicture;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Confronting() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "What room is next to the basement room?",
                T0002: "I don't...",
                T0003: "Dad's hand...on my neck...I can't move",
                T0004: "Gosh, it’s so dark again...",
                T0005: "Remember what?",
                T0006: "Who are you, people? What have you done?",
            },
            Mum: {
                T0007: "You know, don't you? You know what's inside that room?",
                T0008: "Liar! Do not lie to me. You should know! I will show you, come with me.",
                T0009: "This is where your family was killed. All stabbed by a knife, multiple times",
                T0010: "They found a girl in the basement. You…",
            },
            Dad: {
                T0011: "Do you remember?",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.neutral, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.dad, Endabgabe.characters.dad.pose.neutral, Endabgabe.newPositions.bottomright);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0007);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.mum, Endabgabe.characters.mum.pose.confused, Endabgabe.newPositions.bottomleft);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0008);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.secretroomLight);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        // key noises
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.secretroomLight); // backroom
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
        await Endabgabe.say(Endabgabe.characters.dad, text.Dad.T0011);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0009);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006);
        await Endabgabe.say(Endabgabe.characters.mum, text.Mum.T0010);
        //dumpfer sound, black out, pfeifen in denOhren
        return "Valeria"; //11
    }
    Endabgabe.Confronting = Confronting;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function GoingBack() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "They all stayed at home today. They are watching.",
                T0002: "When I asked them, why they are not going to work or school, they told me it's because they are worried.... worried about what though? ",
                T0003: "I'm acting like everything is ok, but I'm not sure if they are also acting, or if they really don't know that I found out that they are not my family. I needed to wait until I am back alone. I need to find out who they are!",
                T0004: "Today they finally left. I'm alone again. This morning I saw how they drove away. That room...in the basement...I should go back in there.",
                T0005: "Still creepy in here... but this time it's not as dark as before. Oh...there is another door in the back wall.  ",
                T0006: "It's locked. How many secret rooms does this house have?",
                T0007: "Where could the keys be?",
                //9.1
                T0008: "No, nothing in her purse.",
                T0009: "Maybe dad has the keys. If there is a place he would hide the keys, it's probably in his study. Let's check!",
                T0010: "Why are they back already?",
                //9.2
                T0011: "so many places it could be hidden...",
                T0012: "Why is it so messy...? I will never find the keys. What would be a logical spot to hide the keys? Inside some drawers, on the shelves... oh wait, I think they should be in here!",
                T0013: "Yes! That's the key!",
                //9.3
                T0014: "Good thing dad gave my brother a ride to work today. Let's look inside.",
                T0015: "...he should really throw away some empty bottles....eww are those some old fries? Anyways let's search! ",
                T0016: "is that a search warrant? What?",
                T0017: "What is that? I know you are not my brother, so who are you?",
                T0018: "What?... They are all dead?",
                T0019: "Arghh... my head",
            },
            Brother: {
                T0020: "What do you think you're doing, sister? Snooping around in my car while I'm gone?",
                T0021: "Listen, your family was found dead, here in this house, in the room down in the basement. What do you know about it?",
                T0022: "There was a girl found in the basement. She was abused and held captive. She had long red hair, green shining eyes and was really.... ",
                T0023: "thin...Valeria...",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.act2);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(4);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
        //sound trying to open the door
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007, true);
        //Entscheidung
        let searchingKeys = {
            momsPurse: "Mum's Purse",
            dadsStudy: "Dad's Study",
            brothersCar: "Brother's Car",
        };
        let sleeping = await Endabgabe.ƒS.Menu.getInput(searchingKeys, "decision");
        switch (sleeping) {
            case searchingKeys.momsPurse:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.hallway);
                await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
                await Endabgabe.ƒS.update(0.5);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0008, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0009, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.office);
                await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
                await Endabgabe.ƒS.update(0.5);
                // car noise and some talking
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0010, true);
                return "Confronting"; //10.1
            case searchingKeys.dadsStudy:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.office);
                await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
                await Endabgabe.ƒS.update(0.5);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0011, true);
                //sound of opening boxes and searching
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0012, true);
                //box with key
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0013, true);
                // key inventory
                Endabgabe.ƒS.Inventory.add(Endabgabe.items.key);
                return "TryingKey"; //10.2
            case searchingKeys.brothersCar:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.car);
                await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
                await Endabgabe.ƒS.update(0.5);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0014, true);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0015, true);
                //sound open departments
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0016, true);
                //sound of steps
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.brother, Endabgabe.characters.brother.pose.angry, Endabgabe.newPositions.bottomleft);
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0020);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0017);
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0021);
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0018);
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0022);
                // blurry view
                // sound eyes ringing
                await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0018, true);
                await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0023);
                // black screen
                return "Valeria"; //11
        }
    }
    Endabgabe.GoingBack = GoingBack;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function TryingKey() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "ok, let's try the key. It's in my pocket.",
                T0002: "I should try the key, it's in my pocket!",
                T0003: "You can get the key in the inventory.",
                T0004: "Omg, it's another room. Very tiny.",
                T0005: "I remember this room. Somehow. I recognize it...?",
                T0006: "What...is..argh! My head!",
                T0007: "It hurts...so...much.",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.diningroom); //door
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        while (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.key) != 0) {
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0002, true);
            await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0003, true);
        }
        Endabgabe.ƒS.Inventory.close();
        //opening door sound
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.secretroomLight); //second room
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0004, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0005, true);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0006, true);
        //heavy breathing, blurry view, high tone pitch
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0007, true);
        //black screen
        return "Valeria"; //11
    }
    Endabgabe.TryingKey = TryingKey;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Valeria() {
        let gameMenu = Endabgabe.ƒS.Menu.create(Endabgabe.ingameButtons, Endabgabe.btnFunctionalities, "gameMenu");
        gameMenu.open();
        let text = {
            Valeria: {
                T0001: "no reaction, just staring",
            },
            Brother: {
                T0001: "Valeria",
                T0002: "We found you in the basement that day. ",
                T0003: "It was traumatic, the murder, wasn't it?",
                T0004: "You couldn't remember. So, we played your family. I was your brother, just so you can recall some memories.",
                T0005: "Did it help?",
                T0006: "So it did help...",
                T0007: "Valeria",
                T0008: "Why did you kill them?",
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.wall);
        await Endabgabe.ƒS.update(Endabgabe.transitions.slideFast.duration, Endabgabe.transitions.slideFast.alpha, Endabgabe.transitions.slideFast.edge);
        await Endabgabe.ƒS.update(0.5);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.valeria, Endabgabe.characters.valeria.pose.headDown, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0001);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.valeria);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.valeria, Endabgabe.characters.valeria.pose.headUp, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(0.1);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0002);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0003);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0004);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0005);
        await Endabgabe.say(Endabgabe.characters.valeria, text.Valeria.T0001, true);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0006);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0007);
        await Endabgabe.say(Endabgabe.characters.brother, text.Brother.T0008);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.valeria);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(0.2);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.flashback);
        await Endabgabe.ƒS.update(0.2);
        return "empty";
    }
    Endabgabe.Valeria = Valeria;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Template.js.map