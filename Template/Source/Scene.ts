namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Narrator: {
        T0001: ""
      },
      Adeline: {
        T0001: "hi Hello Juhu"
      }
    };

    await ƒS.Location.show(locations.city);
    await ƒS.update();
    await ƒS.Character.show(characters.adeline, characters.adeline.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.adeline, text.Adeline.T0001);
    await ƒS.Speech.tell(characters.narrator, "NeuerText");
  }
}