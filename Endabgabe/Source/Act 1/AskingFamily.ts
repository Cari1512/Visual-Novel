namespace Endabgabe {

    export async function AskingFamily(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
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
        }

        ƒS.Speech.hide();
        await ƒS.update(0.2);
        ƒS.Sound.play(sound.indoors, 0.7, true);
        await ƒS.Location.show(locations.diningroom);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);

        await ƒS.Character.show(characters.mum, characters.mum.pose.happy, newPositions.bottomleft);
        await ƒS.update(0.2);
        await say(characters.valeria, text.Valeria.T0001);
        await ƒS.Character.hide(characters.mum);
        await ƒS.Character.show(characters.mum, characters.mum.pose.talking, newPositions.bottomleft);
        await ƒS.update(0.2);
        await say(characters.mum, text.Mum.T0001);
        await say(characters.valeria, text.Valeria.T0002);
        await ƒS.Character.show(characters.dad, characters.dad.pose.talking, newPositions.bottomright);
        await ƒS.update(0.2);
        await say(characters.dad, text.Dad.T0001);
        await ƒS.Character.hide(characters.dad);
        await ƒS.Character.show(characters.dad, characters.dad.pose.neutral, newPositions.bottomright);
        await ƒS.update(0.2);
        ƒS.Sound.fade(sound.indoors, 0, 3);
        ƒS.Sound.play(sound.theme1, 0.1, true);
        await say(characters.valeria, text.Valeria.T0003);
        await say(characters.mum, text.Mum.T0002);


        let findingQuestionAnswer = {
            noReason: "No reason, just curious...",
            iFoundSomething: "Because I found something yesterday night.....",
        };




        if (dataForSave.foundSecretRoom) {

            await say(characters.valeria, text.Valeria.T0004);
            await say(characters.dad, text.Dad.T0007);
            await say(characters.dad, text.Dad.T0002);

            let findingQuestion = await ƒS.Menu.getInput(findingQuestionAnswer, "decision");



            switch (findingQuestion) {
                case findingQuestionAnswer.noReason:
                    await say(characters.dad, text.Dad.T0003);
                    await ƒS.update(0.2);
                    ƒS.Character.hideAll();
                    await ƒS.update(0.2);
                    return "OddThings";
                case findingQuestionAnswer.iFoundSomething:
                    await say(characters.valeria, text.Valeria.T0005);
                    await ƒS.update(0.2);
                    await say(characters.dad, text.Dad.T0004);
                    ƒS.Character.hideAll();
                    await ƒS.update(0.2);
                    return "OddThings";
            }
        }




        else {
            await say(characters.valeria, text.Valeria.T0006);
            await say(characters.mum, text.Mum.T0004);

            let findingQuestion = await ƒS.Menu.getInput(findingQuestionAnswer, "decision");


            switch (findingQuestion) {
                case findingQuestionAnswer.noReason:
                    await say(characters.mum, text.Mum.T0004);
                    await ƒS.update(0.2);
                    await say(characters.valeria, text.Valeria.T0007);
                    ƒS.Character.hideAll();
                    await ƒS.update(0.2);
                    return "OddThings";
                case findingQuestionAnswer.iFoundSomething:
                    await say(characters.valeria, text.Valeria.T0008);
                    await ƒS.update(0.2);
                    await say(characters.dad, text.Dad.T0006);

                    ƒS.Character.hideAll();
                    await ƒS.update(0.2);
                    return "OddThings";

            }

        }

    }
}