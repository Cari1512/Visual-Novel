namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // define transitions
  export let transitions = {

    jigsaw: {
      duration: 1,
      alpha: "Transitions/jigsaw_06.jpg",
      edge: 1
    }
  };

  export let sound = {
    // themes
    nightclub: "pfad",

    //SFX
    click: "Pfad"
  };

  export let locations = {
    city: {
      name: "city",
      background: "Images/Backgrounds/bg_city_sunset.png",
    }
  };

  export let characters = {
    narrator: {
      name: "",
    },
    adeline: {
      name: "Adeline",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        
        happy: "Images/Character/Adelinde_smile.png",
      }
    },
    dan: {
      name: "Dan",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad",
        happy: "",
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: "",
    score: 0,
  };

  

    window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}