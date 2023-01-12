namespace Endabgabe {

    export async function TryingKey(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
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
        }
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.diningroom); //door
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0001, true);

        while (ƒS.Inventory.getAmount(items.key) != 0) {
            await say(characters.valeria, text.Valeria.T0002, true);
            await say(characters.valeria, text.Valeria.T0003, true);
        }
        ƒS.Inventory.close();
        //opening door sound
            await ƒS.Location.show(locations.secretroomLight); //second room
            await ƒS.update(0.5);
            await say(characters.valeria, text.Valeria.T0004, true);
            await say(characters.valeria, text.Valeria.T0005, true);
            await say(characters.valeria, text.Valeria.T0006, true);
            //heavy breathing, blurry view, high tone pitch
            await say(characters.valeria, text.Valeria.T0007, true);
            //black screen
            return "Valeria"; //11

    }
}