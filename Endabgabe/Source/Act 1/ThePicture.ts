namespace Endabgabe {

    export async function ThePicture(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {

                T0001: "I can’t fall asleep. I lay awake in my bed for hours. I can hear my brothers snoring next door. The walls are thin in this house...",
                T0002: "Noise from the hallway…",
                T0020: "...",
                T0003: "Oh...the picture fell down! Should I hang the picture? Or deal with it tomorrow maybe?",

                T0004: "No, the nail went through the wall. It sounds like there are stairs on the other side...let's see!",
                T0005: "It's another room! It must have been closed for a while, I don't remember this room....",
                T0006: "only dust and some old toys...it's cold. It doesn't seem like anyone has been here for ages. ",
                T0007: "I don't like it here, let's go back to bed.",

                T0008: "Wait, what is that? A Bank Account! Why would it be here?",
                T0009: "It’s mums bank account…let’s keep it for now!",
            }

        }

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.night, 0.2, true);

        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);

        await ƒS.update(2);
        ƒS.Sound.play(sound.snoring, 0.1, true);
        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.valeria, text.Valeria.T0020, true);
        ƒS.Sound.play(sound.picture_fall, 0.1, false);
        await ƒS.update(3);
        await say(characters.valeria, text.Valeria.T0002, true);
        ƒS.Sound.fade(sound.night, 0.1, 3);
        ƒS.Sound.fade(sound.snoring, 0.05, 3);
        await ƒS.Location.show(locations.hallway);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
        await say(characters.valeria, text.Valeria.T0003, true);

        let hangPictureAnswer = {
            iSayYes: "Yes, let's hang it now!",
            iSayNo: "No, it can wait until tomorrow...",
        };

        let foundSecretRoom = await ƒS.Menu.getInput(hangPictureAnswer, "decision");

        switch (foundSecretRoom) {
            case hangPictureAnswer.iSayYes:
                dataForSave.foundSecretRoom = true;
                ƒS.Sound.play(sound.nail_fall, 0.1, false);
                await say(characters.valeria, text.Valeria.T0020, true);
                await say(characters.valeria, text.Valeria.T0004, true);
                await say(characters.valeria, text.Valeria.T0020, true);
                await ƒS.update(3);
                ƒS.Sound.fade(sound.night, 0, 3);
                ƒS.Sound.fade(sound.snoring, 0, 3);
                ƒS.Sound.play(sound.theme3, 0.1, true);
                await ƒS.Location.show(locations.secretroom);
                await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
                await say(characters.valeria, text.Valeria.T0005, true);
                await say(characters.valeria, text.Valeria.T0006, true);
                await say(characters.valeria, text.Valeria.T0007, true);
                ƒS.Sound.fade(sound.theme3, 0, 3);
                return "AskingFamily";

            case hangPictureAnswer.iSayNo:
                dataForSave.foundSecretRoom = false;
                ƒS.Sound.play(sound.theme2, 0.1, true);
                ƒS.Sound.play(sound.page, 0.5, false);
                await say(characters.valeria, text.Valeria.T0020, true);
                
                await ƒS.Text.print('<img style="width: 500px" src="./Images/Items/bankDocument.png">');
                await say(characters.valeria, text.Valeria.T0008, true);
                await say(characters.valeria, text.Valeria.T0009, true);
                ƒS.Sound.fade(sound.theme2, 0, 3);
                ƒS.Sound.fade(sound.night, 0, 3);
                ƒS.Sound.fade(sound.snoring, 0, 3);
                ƒS.Inventory.add(items.bank_statement);
                return "AskingFamily";
        }


    }

}