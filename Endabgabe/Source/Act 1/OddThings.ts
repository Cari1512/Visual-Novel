namespace Endabgabe {

    export async function OddThings(): ƒS.SceneReturn {

        let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
        gameMenu.open();
        ƒS.Inventory.add(items.flashlight);



        let text = {
            Valeria: {
                T0001: "To keep me safe, my parents want me to stay at home.",
                T0002: "Currently I’m not going to school or meeting my friends. The doctor also told me to avoid stressful situations for a while.",
                T0003: "While my brother is in class and my parents are at work, I have the for house for myself. ",
                T0004: "Not gonna lie, it's boring to have nothing to do. ",
                T0005: "This house I have been living in my whole life feels familiar to me. I remember the smell of it. A mix of old wood and fresh grass. ",
                T0006: "Our house is in the outskirts, behind the house only field and trees. ",
                T0007: "In my memories the walls were covered in pictures. Family photos and some drawings by me and my brother when we were kids. ",
                T0008: "I guess my parents take now more of a minimalistic approach towards the house decorations, at least for photos. I can’t find any family photos in this house...",

                T0009: "It's so dark here. I should get the flashlight out.",
                T0010: "The flashlight is in my pocket....",
                T0011: "I should take it out and use it before searching the room!",
                T0012: "So much dust!",
                T0013: "Old plushies everywhere",
                T0014: "There are drawings on the wall... ",
                T0015: "Even a bed, why is there a bed? ",
                T0016: "Shit, this is getting way too creepy, I want to go back upstairs.",
                T0017: "Let's put up the painting, so it won't be so scary to see the room through the hole in the wall.",

                T0018: "I know my family is well off, but we used to never talk about money. ",
                T0019: "It wasn't something to discuss during dinners, at least not that I remember of. ",
                T0020: "Dad, don't you remember, you guys never wanted me to spend much money, so you gave me my allowance in cash every month.",
                T0021: "I don't have access to my bank account. Only you have.",
                T0022: "Yeah, in your office, you showed me when I turned 16. Don't worry, why would there be an emergency? ...",
                T0023: "Ok....sure I guess",
                T0024: "So, if for any reason I need money and you guys aren't around, I'm allowed to open the safe in the couch.",
                T0025: "....I don't. I've forgotten. Sorry. What was it again?",



                T0026: "...bye",
                T0027: "She talks so much; I couldn't even say something.... ",
                T0028: "But it's true, the neighborhoods BBQ Party is every year around September. Why didn't we go? Mum would never forget... ",
                T0029: "I noticed some things about mum I never noticed before. ",
                T0030: "She is way more talkative than she used to be and keeps forgetting stuff. Maybe it's because I'm sick, but she isn't herself these days. Is she stressed? Hmmm",


                T0031: "I'm bored. Should I turn on the radio today?",
                T0032: "This house is so big. It's so lonely here...",
                T0033: "Mum and Dad will come back at 6 pm, my brother probably a bit earlier...",
                T0034: "Should I listen to some music?",

            },
            Mum: {
                T0001: "You never know. Just to make sure, why don't you show us? Like a little training session for emergencies?",
                T0002: "Honey, look at the mess! You should at least try to keep it tidy!",
                T0003: "Don't worry, you don't need to know now. We will tell you when you are ready, and your mind isn't as cluttered as it is now. Let's go step by step. Right, honey?",

            },
            Dad: {
                T0001: "Valeria, do you know how much you have on your bank account?",
                T0002: "Ah right, I must be getting old, I forgot, yes of course, in cash. But in case of emergency, you know where to get it, right?",
                T0003: "Go on, do you remember the code?",
                T0004: "Yes, yes, you are right! No pressure, Valeria!",

            },
            Neighbor: {
                T0001: "Hello Sweetheart, how are you doing? Everything is good? Yeah? Listen, I am in bit of a hurry. Tell me, why did your family not show up at the annual BBQ party at my house, huh?",
                T0002: "Have I done something wrong? Is your mum angry with me? If it's still about that stupid salat bowl argument, tell her I'm sorry. But I always thought your mum wouldn't mind stuff like that!",
                T0003: "You guys could have at least told me that you weren't coming this year! ",
                T0004: "People were missing your baked goods! Anyways, hope you guys aren't mad or somethin'. ",
                T0005: "See ya and talk to you soon! Oh, and sweetheart, try to stay at home, this city isn't as safe as it used to be, ok? Bye bye!",

            }
        }
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(0.2);
        await ƒS.Location.show(locations.diningroom);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);

        await say(characters.valeria, text.Valeria.T0001, true);
        await say(characters.valeria, text.Valeria.T0002, true);
        await say(characters.valeria, text.Valeria.T0003, true);
        await say(characters.valeria, text.Valeria.T0004, true);
        await say(characters.valeria, text.Valeria.T0005, true);
        await say(characters.valeria, text.Valeria.T0006, true);
        await say(characters.valeria, text.Valeria.T0007, true);
        await say(characters.valeria, text.Valeria.T0008, true);

        if (dataForSave.foundSecretRoom) {
            ƒS.Speech.hide();
            await ƒS.update(0.2);
            await ƒS.Location.show(locations.secretroom); 
            await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);

            while (ƒS.Inventory.getAmount(items.flashlight) != 0) {
                await say(characters.valeria, text.Valeria.T0009, true);
                await say(characters.valeria, text.Valeria.T0010, true);
                await say(characters.valeria, text.Valeria.T0011, true);

            }
            ƒS.Inventory.close();
            await ƒS.Location.show(locations.secretroomLight); 
            await ƒS.update();
            await say(characters.valeria, text.Valeria.T0012, true);
            await say(characters.valeria, text.Valeria.T0013, true);
            await say(characters.valeria, text.Valeria.T0014, true);
            await say(characters.valeria, text.Valeria.T0015, true);
            await say(characters.valeria, text.Valeria.T0016, true);

            ƒS.Speech.hide();
            await ƒS.update(0.2);
            await ƒS.Location.show(locations.hallway);
            await ƒS.update(0.2);
            await say(characters.valeria, text.Valeria.T0017, true);
        }

        else {
            ƒS.Speech.hide();
            await ƒS.update(0.2);
            await ƒS.Location.show(locations.diningroom);
            await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
            await say(characters.valeria, text.Valeria.T0018, true);
            await say(characters.valeria, text.Valeria.T0019, true);

            await ƒS.Character.show(characters.mum, characters.mum.pose.happy, ƒS.positions.bottomleft);
            await ƒS.Character.show(characters.dad, characters.dad.pose.neutral, ƒS.positions.bottomright);
            await ƒS.update(0.2);
            await say(characters.dad, text.Dad.T0001);
            await say(characters.valeria, text.Valeria.T0020);
            await say(characters.valeria, text.Valeria.T0021);
            await say(characters.dad, text.Dad.T0002);
            await say(characters.valeria, text.Valeria.T0022);
            await say(characters.mum, text.Mum.T0001);
            await say(characters.valeria, text.Valeria.T0023);



            await ƒS.update(0.2);
            await ƒS.Location.show(locations.office);
            await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
            await say(characters.mum, text.Mum.T0002);
            await say(characters.valeria, text.Valeria.T0024);
            await say(characters.dad, text.Dad.T0003);
            await say(characters.valeria, text.Valeria.T0025);
            await say(characters.mum, text.Mum.T0003);
            await say(characters.dad, text.Dad.T0004);
            await ƒS.Character.hide(characters.dad);
            await ƒS.Character.hide(characters.mum);
            await ƒS.update(0.2);
        }

        ƒS.Speech.hide();
        await ƒS.update(0.2);
        await ƒS.Location.show(locations.houseDay);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
        await ƒS.Character.show(characters.neighbor, characters.neighbor.pose.happy, ƒS.positions.bottomleft);
        await say(characters.neighbor, text.Neighbor.T0001);
        await say(characters.neighbor, text.Neighbor.T0002);
        await say(characters.neighbor, text.Neighbor.T0003);
        await say(characters.neighbor, text.Neighbor.T0004);
        await say(characters.neighbor, text.Neighbor.T0005);

        await ƒS.Character.hide(characters.neighbor);
            await ƒS.update(0.2);

        await say(characters.valeria, text.Valeria.T0026);
        await say(characters.valeria, text.Valeria.T0027, true);
        await say(characters.valeria, text.Valeria.T0028, true);
        await say(characters.valeria, text.Valeria.T0029, true);
        await say(characters.valeria, text.Valeria.T0030, true);


        ƒS.Speech.hide();
        await ƒS.update(0.2);
        await ƒS.Location.show(locations.livingroom);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
        await say(characters.valeria, text.Valeria.T0031, true);
        await say(characters.valeria, text.Valeria.T0032, true);
        await say(characters.valeria, text.Valeria.T0033, true);
        await say(characters.valeria, text.Valeria.T0034, true);

        // Radio Interaction: Alex....

        return "Suspicion";

    }
}
