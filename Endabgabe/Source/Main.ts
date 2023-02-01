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
    // sounds SFX
     indoors: "Audio/SFX/Indoors_environment.wav",

    //themes
    theme1: "Audio/Music/Theme1.mp3"
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
      background: "Images/Backgrounds/livingRoomRadio.jpg",
    },
    houseDay: {
      name: "houseDay",
      background: "Images/Backgrounds/houseDay.jpg",
    },
    houseNight: {
      name: "houseDay",
      background: "Images/Backgrounds/houseNight.png",
    },
    flashback: {
      name: "flashback",
      background: "Images/Backgrounds/flashback.jpg",
    },
    car: {
      name: "car",
      background: "Images/Backgrounds/car.jpg",
    },
    wall: {
      name: "wall",
      background: "Images/Backgrounds/greyWall.jpg",
    }
  };

  export let characters = {
    
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
        headDown: "Images/Character/Valeria2.png",
        headUp: "Images/Character/Valeria3.png",
      }
    },
    neighbor: {
      name: "Ms Anne",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Images/Character/neighbor.png",
      }
    },
    brother: {
      name: "Brother",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Character/Brother_angry.png",
        happy: "Images/Character/Brother_neutral.png",
      }
    },
    knife:{
      name: "Knife",
      origin: ƒS.ORIGIN.CENTER,
      pose:{
        one: "Images/Items/knife.png",
        two: "Images/Items/knife1.png",
        three: "Images/Items/knife2.png",
        four: "Images/Items/knife3.png",
        five: "Images/Items/knife4.png",
        six: "Images/Items/knife5.png",
        seven: "Images/Items/knife6.png",
        eight: "Images/Items/knife7.png",
      }
    }
  };

  export let newPositions = {
    bottomleft: new FudgeStory.Position(-460, -540),
    bottomright: new FudgeStory.Position(470, -540),
    bottomcenter: new FudgeStory.Position(0, -540),
    rightout: new FudgeStory.Position(2470, -540),
    leftout: new FudgeStory.Position(-2470, -540),
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
       await ƒS.Progress.save();
        break;
      case ingameButtons.load:
        await ƒS.Progress.load();
        break;
      case ingameButtons.credits:
        showCredits();
        break;
    }
  }

  // Radio
  // Shows the current display state of the radio
  let radioOpen: boolean = false;

  // Displays Radio
  export async function showRadio(): Promise<void> {
    let parentDiv: HTMLDivElement = document.createElement("div");
    parentDiv.id = "appendedDiv";

    let radioDiv: HTMLDivElement = document.createElement("div");
    radioDiv.id = "radioDiv";

    let img: HTMLImageElement = document.createElement("img");
    img.src = "Images/Radio/radio.png";
    img.id = "radio";

    let knob: HTMLImageElement = document.createElement("img");
    knob.src = "Images/Radio/knob.png";
    knob.id = "knob";

    radioDiv.appendChild(img);
    radioDiv.appendChild(knob);
    parentDiv.appendChild(radioDiv);
    radioOpen = true;

    document.getElementById("append").appendChild(parentDiv);
  }

  // Hides Radio
  export function hideRadio(): void {
    radioOpen = false;
    document.getElementById("append").removeChild(document.getElementById("appendedDiv"));
  }

  // Adds or removes Event Listener for Radio Events
  export function toggleRadioEvent(): void {
    document.addEventListener("wheel", scrollEvent);
  }

  // Event Listener that calls the function that changes stations
  function scrollEvent(_event: Event): void {
    changeRadioStation();
  }

  // Tracks current station and whether the event is done 
  let currentStation = 1;
  export let radioEventDone = false;

  // Changes the station and displays the text
  async function changeRadioStation(): Promise<void> {
    // Removes event listener to avoid continuous scrolling
    document.removeEventListener("wheel", scrollEvent);

    // Rotate knob 
    let knob = document.getElementById("knob");
    knob.style.transform = "rotate(" + currentStation * 22.5 +  "deg)";

    currentStation++;
    
    // --- Stations --- 
    // 1 - First station
    // 2 - nothing
    // 3 - Second station
    if (currentStation == 2) {
      await ƒS.Speech.tell(" ", "*unclear radio noises*");
      // Add the event listener again to allow scrolling
      document.addEventListener("wheel", scrollEvent);
    }
    if (currentStation == 3) {
      if (dataForSave.foundSecretRoom) {
        await ƒS.Speech.tell("News", "A high school senior as been missing for a couple of months says a local high school.");
        await ƒS.Speech.tell(" ", "The radio turns off.");  
      }
      else {
        await ƒS.Speech.tell("Documentation", "The secret rich of Marple Street.");
        await ƒS.Speech.tell("Documentation", "Apparently the rich of the rich keep their private lives on small Marple street.");
        await ƒS.Speech.tell("Documentation", "Having their own society in this country, they all meet again in the same neighborhood.");
        await ƒS.Speech.tell("Documentation", "More after the commercial break!");
        await ƒS.Speech.tell(" ", "The radio turns off.");
        
      }
      // Set event done to true to escape while loop in OddThings.ts
      // Not adding the event listener again because the event is over
      radioEventDone = true;
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
      case ƒ.KEYBOARD_CODE.F:
        if (!radioOpen) {
          showRadio();
        }
        else {
          hideRadio();
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
     
      { scene: Valeria, name: "Valeria", id: "Valeria" },
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
      { scene: TryingKey, name: "TryingKey", id: "TryingKey" },
      { scene: Valeria, name: "Valeria", id: "Valeria" },
      

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    ƒS.Speech.hide();

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}