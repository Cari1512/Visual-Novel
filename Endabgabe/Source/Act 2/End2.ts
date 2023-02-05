namespace Endabgabe {

    export async function End2(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {
                T0001: "Those documents…I think they are kind of important for them. They took them away that day. They probably keep them here, in between all those other documents.",
                T0002: "Ah!",
                T0003: "Here it is!",

                T0004: "There is a phone number on it of the bank.",
                T0005: "Hello, my name is Valeria van Westen. I am calling to check a document.",
                T0006: "Yes!",
                T0007: "You know my father?",
                T0008: "I see…",
                T0009: "Ah… I found a document and it even has my name on it. So, I was wondering what it was about.",
                T0010: "919356",
                T0011: "So now only my dad can access it?",
                T0012: "But I can just go and pick it up then? The money?",
                T0013:"I don’t know the code…",
                T0014:"…",
                T0015:"A code…security code.",
                T0016: "I don’t know.",
                T0017: "Only my parents know. Who are you? And where are my parents? And my real brother?",
                T0018: "Murder thingy?!?!",
                T0019: "What? Why?",
                T0020: "I REALLY DON'T KNOW!",
                T0021: "I really don’t know. I don’t even remember anything that happen before I came back from the hospital",
                T0022: "I don’t know.",

            },
            Mum: {
                T0023: "Who are you calling?",
                T0024: "You know? I had my doubts! Ach, hang up the phone!",
                T0025: "So how do we get the money? Hmm? I have a gun and will use it. Stop wasting my time!",
                T0026: "What’s the code?",
                T0027: "What do you mean you don’t know? You should know!",
                T0028: "SO many questions...short version, we wanted to get your parents money cause they are damn rich and I’ve got bills to pay. I don’t know why, but you kinda blacked out and forgot the whole murder thingy.",
                T0029: "Ah they dead. It was kind of an accident. Really. But they kept lying to us, so yeah, they had to say goodbye. Sorry",
                T0030: "Focus! The code! We turned the house up side down and no code to be found. So what is it?",
                T0031: "Ah come on! I did not just waste my time and theater lessons on you! We put in a lot of effort! Playing the perfect family! Give me something!",
                T0032: "I will ask one last time! Just at least a place where the code be! What is the code?",
                T0033: "Ok, then I guess I’m out and you are too. I have no use for you anymore and I need to leave soon. Goodbye Valeria",


            },
            Bank: {
                T0034:"Hello?",
                T0035:"Van Westen? Are you the daughter?",
                T0036: "Your father called not long ago to asked about a bank account. Is everything alright with him? He acted a bit odd, as if we didn’t know each other.",
                T0037: "Of course, I do! We used to go to high school together!",
                T0038: "But how can I help you?",
                T0039: "What number?",
                T0040: "One moment… Ah yes! This is your bank account. Your parents have been putting money in it ever since you were a baby. ",
                T0041:"Oh no no no, you can. I thought he knew… ",
                T0042: "It’s more then just some change. Your parents are giving you almost everything…they didn’t tell you? Also, you need to type in the security code.",
                T0043: "But your parents know!",
            }
           


        }

        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.theme4, 0, 3);
        ƒS.Sound.play(sound.theme3, 0.7, true);
        await ƒS.Location.show(locations.officeNight);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0001, true);
        ƒS.Sound.play(sound.page, 0.5, false);
        await ƒS.Text.print('<img style="width: 500px" src="./Images/Items/bankDocument.png">');
        await say(characters.valeria, text.Valeria.T0002, true);
        await say(characters.valeria, text.Valeria.T0003, true);
        ƒS.Sound.play(sound.phone, 1, false);
        
        await say(characters.valeria, text.Valeria.T0004, true);
        await ƒS.update(5);
        await say(characters.bank, text.Bank.T0034);
        await say(characters.valeria, text.Valeria.T0005);
        await say(characters.bank, text.Bank.T0035);
        await say(characters.valeria, text.Valeria.T0006);
        await say(characters.bank, text.Bank.T0036);
        await say(characters.valeria, text.Valeria.T0007);
        await say(characters.bank, text.Bank.T0037);
        await say(characters.valeria, text.Valeria.T0008);
        await say(characters.bank, text.Bank.T0038);
        await say(characters.valeria, text.Valeria.T0009);
        await say(characters.bank, text.Bank.T0039);
        await say(characters.valeria, text.Valeria.T0010);
        await say(characters.bank, text.Bank.T0040);
        await say(characters.valeria, text.Valeria.T0011);
        await say(characters.bank, text.Bank.T0041);
        await say(characters.valeria, text.Valeria.T0012);
        await say(characters.bank, text.Bank.T0042);
        await say(characters.valeria, text.Valeria.T0013);
        await say(characters.bank, text.Bank.T0043);
        await ƒS.Character.show(characters.mum, characters.mum.pose.confused, newPositions.bottomcenter);
        await ƒS.update(0.2);
        await say(characters.mum, text.Mum.T0023);
        await say(characters.valeria, text.Valeria.T0014);
        await say(characters.mum, text.Mum.T0024);
        ƒS.Sound.play(sound.hangUp, 0.5, false);
        await say(characters.mum, text.Mum.T0025);
        await say(characters.valeria, text.Valeria.T0015);
        await say(characters.mum, text.Mum.T0026);
        await say(characters.valeria, text.Valeria.T0016);
        await say(characters.mum, text.Mum.T0027);
        await say(characters.valeria, text.Valeria.T0017);
        await say(characters.mum, text.Mum.T0028);
        await say(characters.valeria, text.Valeria.T0018);
        await say(characters.mum, text.Mum.T0029);
        await say(characters.valeria, text.Valeria.T0019);
        await say(characters.mum, text.Mum.T0030);
        await say(characters.valeria, text.Valeria.T0020);
        await say(characters.mum, text.Mum.T0031);
        await say(characters.valeria, text.Valeria.T0021);
        await say(characters.mum, text.Mum.T0032);
        await say(characters.valeria, text.Valeria.T0022);
        await say(characters.mum, text.Mum.T0033);
        await ƒS.Character.hide(characters.mum);
        ƒS.Speech.hide();
        await ƒS.update(0.2);
        await ƒS.Location.show(locations.flashback);
        ƒS.Sound.fade(sound.theme3, 0, 3);
        await ƒS.update(0.2);

        return "empty";
        

    }
}