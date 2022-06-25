namespace Endabgabe {

    export async function ThePicture(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {

                T0001: "I can’t fall asleep. I lay awake in my bed for hours. I can hear my brothers snoring next door. The walls are thin in this house.",
                T0002: "Noise from the hallway…",
                T0020: "...",
                T0003: "Oh...the picture fell down! Should I hang the picture? Or deal with it tomorrow maybe?",

                T0004: "No, the nail went through the wall. It sounds like there are stairs on the other side",
                T0005: "It's another room! It must have been closed for a while, I don't remember this room....",
                T0006: "only dust and some old toys...it's cold. It doesn't seem like anyone has been here for ages. ",
                T0007: "I don't like it here, let's go back to bed.",

                T0008: "What is that? A Bank Account! Why would it be here?",
                T0009: "It’s mums bank account…let’s keep it for now!",
            }
        }

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);

        await say(characters.valeria, text.Valeria.T0001, true); 
        await say(characters.valeria, text.Valeria.T0020, true);
        await ƒS.update(5);
        await say(characters.valeria, text.Valeria.T0002, true);
        await ƒS.Location.show(locations.hallway);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
        await say(characters.valeria, text.Valeria.T0003, true);




    }

}