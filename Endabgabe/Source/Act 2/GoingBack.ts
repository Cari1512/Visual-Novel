namespace Endabgabe {

    export async function GoingBack(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();

        let text = {
            Valeria: {
                T0001: "They all stayed at home today. They are watching.",
                T0002: "When I asked them, why they are not going to work or school, they told me it's because they are worried.... worried about what though? ",
                T0003: "I'm acting like everything is ok, but I'm not sure if they are also acting, or if they really don't know that I found out that they are not my family. I needed to wait until I am back alone. I need to find out who they are!",
                T0004: "Today they finally left. I'm alone again. This morning I saw how they drove away. That room...in the basement...I should go back in there.",
                T0005: "Still creepy in here... but this time it's not as dark as before. Oh...there is another door in the back wall.  ",
                T0006: "It's locked. How many secret rooms does this house have?",
                T0007: "Where could the keys be?",
                //9.1
                T0008: "No, nothing in her purse.",
                T0009: "Maybe dad has the keys. If there is a place he would hide the keys, it's probably in his study. Let's check!",
                T0010: "Why are they back already?",
                //9.2
                T0011: "so many places it could be hidden...",
                T0012: "Why is it so messy...? I will never find the keys. What would be a logical spot to hide the keys? Inside some drawers, on the shelves... oh wait, I think they should be in here!",
                T0013: "Yes! That's the key!",
                //9.3
                T0014: "Good thing dad gave my brother a ride to work today. Let's look inside.",
                T0015: "...he should really throw away some empty bottles....eww are those some old fries? Anyways let's search! ",
                T0016: "is that a search warrant? What?",
                T0017: "What is that? I know you are not my brother, so who are you?",
                T0018: "What?... They are all dead?",
                T0019: "Arghh... my head",
            },
            Brother: {
                T0020: "What do you think you're doing, sister? Snooping around in my car while I'm gone?",
                T0021: "Listen, your family was found dead, here in this house, in the room down in the basement. What do you know about it?",
                T0022: "There was a girl found in the basement. She was abused and held captive. She had long red hair, green shining eyes and was really.... ",
                T0023: "thin...Valeria...",
            }



        }
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.act2);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(4);
        await ƒS.Location.show(locations.hallway);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.valeria, text.Valeria.T0002, true);
        await say(characters.valeria, text.Valeria.T0003, true);
        await say(characters.valeria, text.Valeria.T0004, true);
        await ƒS.Location.show(locations.hallway);
        await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
        await ƒS.update(0.5);
        await say(characters.valeria, text.Valeria.T0005, true);
        //sound trying to open the door
        await say(characters.valeria, text.Valeria.T0006, true);
        await say(characters.valeria, text.Valeria.T0007, true);

        //Entscheidung
        let searchingKeys = {
            momsPurse: "Mum's Purse",
            dadsStudy: "Dad's Study",
            brothersCar: "Brother's Car",
        };

        let sleeping = await ƒS.Menu.getInput(searchingKeys, "decision");


        switch (sleeping) {
            case searchingKeys.momsPurse:
                await ƒS.Location.show(locations.hallway);
                await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
                await ƒS.update(0.5);
                await say(characters.valeria, text.Valeria.T0008, true);
                await say(characters.valeria, text.Valeria.T0009, true);
                await ƒS.Location.show(locations.office);
                await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
                await ƒS.update(0.5);
                // car noise and some talking
                await say(characters.valeria, text.Valeria.T0010, true);
                return "Confronting";//10.1

            case searchingKeys.dadsStudy:
                await ƒS.Location.show(locations.office);
                await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
                await ƒS.update(0.5);
                await say(characters.valeria, text.Valeria.T0011, true);
                //sound of opening boxes and searching
                await say(characters.valeria, text.Valeria.T0012, true);
                //box with key
                await say(characters.valeria, text.Valeria.T0013, true);
                // key inventory
                ƒS.Inventory.add(items.key);
                return "TryingKey"; //10.2

            case searchingKeys.brothersCar:
                await ƒS.Location.show(locations.car);
                await ƒS.update(transitions.slideFast.duration, transitions.slideFast.alpha, transitions.slideFast.edge);
                await ƒS.update(0.5);
                await say(characters.valeria, text.Valeria.T0014, true);
                await say(characters.valeria, text.Valeria.T0015, true);
                //sound open departments
                await say(characters.valeria, text.Valeria.T0016, true);
                //sound of steps
                await ƒS.Character.show(characters.brother, characters.brother.pose.angry, ƒS.positions.bottomleft);
                await say(characters.brother, text.Brother.T0020);
                await say(characters.valeria, text.Valeria.T0017);
                await say(characters.brother, text.Brother.T0021);
                await say(characters.valeria, text.Valeria.T0018);
                await say(characters.brother, text.Brother.T0022);
                // blurry view
                // sound eyes ringing
                await say(characters.valeria, text.Valeria.T0018, true);
                await say(characters.brother, text.Brother.T0023);
                // black screen
                return "Valeria"; //11

                

        }




    }
}