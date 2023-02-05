namespace Endabgabe {

    export async function Confronting(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
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


        }
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.theme3, 0, 3);
        ƒS.Sound.play(sound.theme4, 0.7, true);
        await ƒS.Location.show(locations.diningroomNight);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.mum, characters.mum.pose.neutral, newPositions.bottomleft);
        await ƒS.Character.show(characters.dad, characters.dad.pose.neutral, newPositions.bottomright);
        await ƒS.update(0.2);
        await say(characters.valeria, text.Valeria.T0001);
        
        
        await say(characters.mum, text.Mum.T0007);
        await say(characters.valeria, text.Valeria.T0002);
        await ƒS.Character.hide(characters.mum);
        await ƒS.Character.show(characters.mum, characters.mum.pose.confused, newPositions.bottomleft);
        await ƒS.update(0.2);
        await say(characters.mum, text.Mum.T0008);
        await ƒS.Character.hide(characters.dad);
        await ƒS.Character.show(characters.dad, characters.dad.pose.angry, newPositions.bottomright);
        await ƒS.update(0.2);
        await ƒS.Location.show(locations.secretroomLight);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0003, true);
        ƒS.Sound.play(sound.door, 0.7, false);
        await ƒS.Location.show(locations.flashback);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0004, true);
        await say(characters.dad, text.Dad.T0011);
        await say(characters.valeria, text.Valeria.T0005);
        ƒS.Sound.play(sound.panting, 0.3, false);
        await say(characters.mum, text.Mum.T0009);
        await say(characters.valeria, text.Valeria.T0006);
        await say(characters.mum, text.Mum.T0010);
        ƒS.Sound.fade(sound.theme4, 0, 3);
        ƒS.Character.hideAll();
        return "Valeria"; //11
    }
}
