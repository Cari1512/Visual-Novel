namespace Endabgabe {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
    let gameMenu = ƒS.Menu.create(ingameButtons, btnFunctionalities, "gameMenu");
    gameMenu.open();

    let text = {
      Narrator: {
        T0001: "Hallo ich bin der Narrator"
      },
      Adeline: {
        T0001: "hi Hello Juhu"
      }
    };

    //ƒS.Sound.play()
    await ƒS.Location.show(locations.city);
    await ƒS.update();
    await ƒS.Character.show(characters.adeline, characters.adeline.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(0.6);
    //ƒS.Character.hideAll()
    await ƒS.Speech.tell(characters.adeline, text.Adeline.T0001);
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);


    ƒS.Speech.hide();
    await ƒS.update();

    let firstDialogAnswer = {
      iSayOk: "Okay",
      iSayNo: "No",
    };

    let firstDialog = await ƒS.Menu.getInput(firstDialogAnswer, "decision");

    switch (firstDialog) {
      case firstDialogAnswer.iSayOk:
        await ƒS.Speech.tell(characters.narrator, "Ich sage okay");
        break;
      
      case firstDialogAnswer.iSayNo:
        await ƒS.Speech.tell(characters.narrator, "ich sage nö");
        break;
    }
    return "Scene";

  };

}