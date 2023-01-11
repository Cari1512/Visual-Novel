namespace Endabgabe {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory [Storyname] starting");

  // define transitions
  export let transitions = {

    jigsaw: {
      duration: 1,
      alpha: "Transitions/jigsaw_06.jpg",
      edge: 1
    },
    slide: {
      duration: 1.5,
      alpha: "Transitions/slide.jpg",
      edge: 0.1,
    },
    slideFast: {
      duration: 0.5,
      alpha: "Transitions/slideFast.jpg",
      edge: 0.1,
    }
  };

  export let sound = {
    // themes
    nightclub: "pfad",

    //SFX
    click: "Pfad"
  };

  export let locations = {
    diningroom: {
      name: "diningroom",
      background: "Images/Backgrounds/diningroom.png",
    },
    hallway: {
      name: "hallway",
      background: "Images/Backgrounds/hallway.png",
    },
    bedroom: {
      name: "bedroom",
      background: "Images/Backgrounds/bedroom.png",
    },
    secretroom: {
      name: "secretroom",
      background: "Images/Backgrounds/basementDark.jpg",
    },
    secretroomLight: {
      name: "secretroom",
      background: "Images/Backgrounds/basementLight.jpg",
    },
    act1: {
      name: "act1",
      background: "Images/Text/Act1.jpg",
    },
    act2: {
      name: "act2",
      background: "Images/Text/Act2.jpg",
    },
    office: {
      name: "office",
      background: "Images/Backgrounds/office.jpg",
    },
    livingroom: {
      name: "livingroom",
      background: "Images/Backgrounds/livingRoom.jpg",
    },
    houseDay: {
      name: "houseDay",
      background: "Images/Backgrounds/houseDay.jpg",
    },
    houseNight: {
      name: "houseDay",
      background: "Images/Backgrounds/houseNight.jpg",
    },
    car: {
      name: "car",
      background: "Images/Backgrounds/car.jpg",
    }
  };

  export let characters = {
    narrator: {
      name: "",
    },
    mum: {
      name: "Mum",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Character/Mum_neutral.png",
        happy: "Images/Character/mum_smile.png",
        talking: "Images/Character/Mum_talking.png",
        confused: "Images/Character/Mum_confused.png",
      }
    },
    dad: {
      name: "Dad",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Character/Dad_neutral.png",
        talking: "Images/Character/Dad_talking.png",
        angry: "Images/Character/Dad_angry.png",
      }
    },
    valeria: {
      name: "Valeria",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad",
        happy: "Images/Character/Adelinde_smile.png",
      }
    },
    neighbor: {
      name: "Ms Anne",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad",
        happy: "Images/Character/Adelinde_smile.png",
      }
    },
    brother: {
      name: "Brother",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Character/Adelinde_smile.png",
        happy: "Images/Character/Adelinde_smile.png",
      }
    }
  };

  // Menu

  export let ingameButtons = {
    inventory: "Inventory",
    save: "Save",
    load: "Load",
    credits: "Credits"
  };

  export async function btnFunctionalities(_option: string): Promise<void> {
    switch (_option) {
      case ingameButtons.inventory:
        ƒS.Inventory.open();
        break;
      case ingameButtons.save:
        ƒS.Progress.save();
        break;
      case ingameButtons.load:
        ƒS.Progress.load();
        break;
      case ingameButtons.credits:
        showCredits();
        break;
    }
  }

  export function showCredits(): void {
    ƒS.Text.print("Credits! :D");
  }

  export async function say(_char: Object, _text: string, _italic: boolean = false): Promise<void> {
    if (_italic) {
      let newText: string = "<i>" + _text + "</i>";
      await ƒS.Speech.tell(_char, newText);
    }
    else {
      await ƒS.Speech.tell(_char, _text);
    }
  }

  window.addEventListener("keydown", hdnKeypress);

  let inventoryIsOpen: boolean;

  async function hdnKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        if (!inventoryIsOpen) {
          ƒS.Inventory.open();
          inventoryIsOpen = true;
        }
        else {
          ƒS.Inventory.close();
          inventoryIsOpen = false;
        }
        break;
    }
  }

  export let items = {
   
    flashlight: {
      name: "Flashlight",
      description: "in case I need a light",
      image: "./Images/Items/flashlight.png",
      static: false,
    },
    key: {
      name: "Key",
      description: "key to the basement room",
      image: "./Images/Items/flashlight.png",
      static: false,
    },
  }

  export let dataForSave = {
    foundSecretRoom: false
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [

      
      
      { scene: ANormalDay, name: "ANormalDay", id: "ANormalDay" },
      { scene: ThePicture, name: "ThePicture", id: "ThePicture" },
      { scene: AskingFamily, name: "AskingFamily", id: "AskingFamily" },
      { scene: OddThings, name: "OddThings", id: "OddThings" },
      { scene: Suspicion, name: "Suspicion", id: "Suspicion" },
      { scene: Knife, name: "Knife", id: "Knife" },
      { scene: Panic, name: "Panic", id: "Panic" },

      //Act 2
      { scene: GoingBack, name: "GoingBack", id: "GoingBack" },
      { scene: Confronting, name: "Confronting", id: "Confronting" },
      

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    ƒS.Speech.hide();

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}