namespace Endabgabe {

    export async function Panic(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
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

    }
    ƒS.Speech.hide();
        await ƒS.Location.show(locations.flashback); 
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.valeria, text.Valeria.T0002, true);
        await say(characters.valeria, text.Valeria.T0003, true);
        await ƒS.Location.show(locations.houseNight); 
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        ƒS.Sound.play(sound.car, 0.3, false);
        
        await say(characters.valeria, text.Valeria.T0004, true);
        await ƒS.update(10);
        await say(characters.valeria, text.Valeria.T0005, true);
        await ƒS.Character.show(characters.mum, characters.mum.pose.neutral, newPositions.bottomleft);
        await ƒS.Character.show(characters.dad, characters.dad.pose.neutral, newPositions.bottomright);
        await ƒS.Character.show(characters.brother, characters.brother.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(0.2);
        await say(characters.dad, text.Dad.T0007);
        await say(characters.mum, text.Mum.T0008);
        await say(characters.valeria, text.Valeria.T0006, true);
        ƒS.Character.hideAll();
        await ƒS.update(0.2);

        if (dataForSave.foundSecretRoom) {
        return "GoingBack";
        }
        else{
            return "End2";
        }
}
}