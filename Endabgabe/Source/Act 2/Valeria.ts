namespace Endabgabe {

    export async function Valeria(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {
                T0001: "laugthing",
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


    }
}