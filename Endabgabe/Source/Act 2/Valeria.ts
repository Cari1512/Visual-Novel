namespace Endabgabe {

    export async function Valeria(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {
                T0001: "no reaction, just staring",
            },
            Brother: {
                T0001: "Valeria",
                T0002: "We found you in the basement that day. ",
                T0003: "It was traumatic, the murder, wasn't it?",
                T0004:"You couldn't remember. So, we played your family. I was your brother, just so you can recall some memories.",
                T0005: "Did it help?",
                T0006: "So it did help...",
                T0007: "Valeria",
                T0008: "Why did you kill them?",
            }
        }
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.wall);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        ƒS.Sound.play(sound.theme4, 0.3, true);
        await ƒS.update(5);
        await ƒS.Character.show(characters.valeria, characters.valeria.pose.headDown,ƒS.positions.bottomcenter);
        await ƒS.update(3);
        await say(characters.brother, text.Brother.T0001);
        await ƒS.Character.hide(characters.valeria);
        await ƒS.Character.show(characters.valeria, characters.valeria.pose.headUp,ƒS.positions.bottomcenter);
        await ƒS.update(0.1);
        await say(characters.brother, text.Brother.T0002);
        await say(characters.brother, text.Brother.T0003);
        await say(characters.brother, text.Brother.T0004);
        await say(characters.brother, text.Brother.T0005);
        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.brother, text.Brother.T0006);
        await say(characters.brother, text.Brother.T0007);
        await say(characters.brother, text.Brother.T0008);
        await ƒS.update(3);
        await ƒS.Character.hide(characters.valeria);
        ƒS.Speech.hide();
        await ƒS.update(0.2);
        await ƒS.Location.show(locations.flashback);
        ƒS.Sound.fade(sound.theme4, 0, 3);
        await ƒS.update(0.2);

        return "empty";
        
    }
   
}
        


