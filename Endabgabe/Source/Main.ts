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

        happy: "Images/Character/Adelinde_smile.png",
      }
    },
    dad: {
      name: "Dad",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad",
        happy: "Images/Character/Adelinde_smile.png",
      }
    },
    valeria: {
      name: "Valeria",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad",
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
    key: {
      name: "Key",
      description: "Keys found.",
      image: "./Images/Items/key.png",
    },
    Dokument: {
      name: "Document",
      description: "Murder case.",
      image: "./Images/Items/document.png",
    },
    tape: {
      name: "Tape",
      description: "Tape, always helpfull.",
      image: "./Images/Items/tape.png",
    },
    book: {
      name: "Diary",
      description: "No notes today.",
      image: "./Images/Items/book.png",
    },
    knife: {
      name: "Knife",
      description: "Just in case....",
      image: "./Images/Items/knife.png",
    },
    glasses: {
      name: "Glasses",
      description: "can't read shit without them",
      image: "./Images/Items/glasses.png",
    },
  }

  export let dataForSave = {
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: ANormalDay, name: "ANormalDay", id: "ANormalDay" },
      { scene: ThePicture, name: "ThePicture", id: "ThePicture" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    ƒS.Speech.hide();

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}