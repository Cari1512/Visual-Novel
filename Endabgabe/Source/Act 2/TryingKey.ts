namespace Endabgabe {

    export async function TryingKey(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {
                T0001: "ok, let's try the key. It's in my pocket.",
                T0002: "I should try the key, it's in my pocket!",
                T0003: "You can get the key in the inventory.",
                T0004: "Argh, this room, it's another room. Very tiny.",
                T0005: "I remember this room. Somehow. I recognize it...?",
                T0006: "What...is..argh! My head!",
                T0007: "It hurts...so...much.",
            }
        }
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.door); 
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0001, true);

        while (ƒS.Inventory.getAmount(items.key) != 0) {
            await say(characters.valeria, text.Valeria.T0002, true);
            await say(characters.valeria, text.Valeria.T0003, true);
        }
        ƒS.Inventory.close();
        ƒS.Sound.play(sound.door, 0.7, false);
            await ƒS.Location.show(locations.flashback); 
            await ƒS.update(0.5);
            await say(characters.valeria, text.Valeria.T0004, true);
            ƒS.Sound.play(sound.panting, 0.3, false);
            await say(characters.valeria, text.Valeria.T0005, true);
            await say(characters.valeria, text.Valeria.T0006, true);        
            await say(characters.valeria, text.Valeria.T0007, true);
            ƒS.Sound.fade(sound.theme3, 0, 3);
            await ƒS.update(7);
            
            return "Valeria"; //11

    }
}