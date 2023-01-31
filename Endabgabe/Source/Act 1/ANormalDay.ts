namespace Endabgabe {

    export async function ANormalDay(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
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
        }

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.theme1, 0.4, true);
        await ƒS.Location.show(locations.act1);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(5);
        await ƒS.Location.show(locations.diningroom);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        ƒS.Sound.fade(sound.theme1, 0, 3);
        ƒS.Sound.play(sound.indoors, 0.7, true);
        
    
        await ƒS.update(0.5);

        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.valeria, text.Valeria.T0002, true);
        await say(characters.valeria, text.Valeria.T0003, true);

        await ƒS.Character.show(characters.mum, characters.mum.pose.happy, newPositions.bottomleft);
        await ƒS.Character.show(characters.dad, characters.dad.pose.neutral, newPositions.bottomright);
        await ƒS.update(0.2);

        await say(characters.mum, text.Mum.T0004);
        await say(characters.valeria, text.Valeria.T0005);
        await say(characters.dad, text.Dad.T0006);
        await say(characters.valeria, text.Valeria.T0007);
        await say(characters.mum, text.Mum.T0008);
        await say(characters.valeria, text.Valeria.T0009);

        ƒS.Character.hideAll();
        await ƒS.update(0.2);

        await say(characters.valeria, text.Valeria.T0010, true);
        await say(characters.valeria, text.Valeria.T0011, true);
        ƒS.Sound.fade(sound.indoors, 0, 0.7);
       

        return "ThePicture";
    }

}