namespace Endabgabe {

    export async function Suspicion(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {
                T0001: "I should go! ",
                T0002: "I know what...? Should I know something?... What are they hiding?", 
                T0003: "he's here...",
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
        }

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.theme4, 0.3, true);
        await ƒS.Location.show(locations.hallway);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);

        await say(characters.mum, text.Mum.T0007);
        await say(characters.brother, text.Brother.T0009);
        await say(characters.mum, text.Mum.T0008);
        await say(characters.brother, text.Brother.T0010);
        await say(characters.valeria, text.Valeria.T0001, true);
     
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);

        await say(characters.valeria, text.Valeria.T0002, true);
        ƒS.Sound.play(sound.door, 0.7, false);
        await ƒS.update(1);
        await say(characters.valeria, text.Valeria.T0003, true);
        await ƒS.Character.show(characters.brother, characters.brother.pose.angry, newPositions.bottomleft);
        await ƒS.update(0.2);
        await say(characters.brother, text.Brother.T0011);


        //Entscheidung
        let sleepingAnswer = {
            pretending: "Pretending to be asleep",
            wakingUp: "Waking up",
        };

        let sleeping = await ƒS.Menu.getInput(sleepingAnswer, "decision");


        switch (sleeping) {
            case sleepingAnswer.pretending:
                await say(characters.brother, text.Brother.T0012);
                await ƒS.Character.hide(characters.brother);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.theme4, 0,3);
                return "Knife";

            case sleepingAnswer.wakingUp:
                await say(characters.valeria, text.Valeria.T0004);
                await say(characters.brother, text.Brother.T0013);
                await say(characters.valeria, text.Valeria.T0005);
                await say(characters.brother, text.Brother.T0014);
                await ƒS.Character.hide(characters.brother);
                await ƒS.update(0.2);
                ƒS.Sound.fade(sound.theme4, 0,3);
                return "Knife";
    }

}
}