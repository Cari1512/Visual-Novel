namespace Endabgabe {

    export async function Knife(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
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
        }
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.diningroom);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.mum, characters.mum.pose.neutral, ƒS.positions.bottomleft);
        await ƒS.update(0.2);
        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.mum, text.Mum.T0011);
        await say(characters.valeria, text.Valeria.T0002);
        await say(characters.mum, text.Mum.T0012);

        // flashback kinda background
        // knifes in hand, turnes bloody (animation??)
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.flashback);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.one, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.two, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.three, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.four, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.five, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.six, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.seven, ƒS.positions.center);
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.knife, characters.knife.pose.eight, ƒS.positions.center);
        await ƒS.update(0.2);

        await say(characters.valeria, text.Valeria.T0003, true);
        await say(characters.valeria, text.Valeria.T0004, true);
        await say(characters.valeria, text.Valeria.T0005, true);
        await say(characters.valeria, text.Valeria.T0006, true);
        await say(characters.valeria, text.Valeria.T0007, true);

        // back to reality
        await ƒS.Location.show(locations.diningroom);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.2);
        await say(characters.mum, text.Mum.T0013);
        await say(characters.valeria, text.Valeria.T0008, true);
        await say(characters.valeria, text.Valeria.T0009, true);
        await say(characters.valeria, text.Valeria.T0010);


        return "Panic";
    }
}