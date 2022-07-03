declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        jigsaw: {
            duration: number;
            alpha: string;
            edge: number;
        };
        slide: {
            duration: number;
            alpha: string;
            edge: number;
        };
        slideFast: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        click: string;
    };
    let locations: {
        diningroom: {
            name: string;
            background: string;
        };
        hallway: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
        secretroom: {
            name: string;
            background: string;
        };
        act1: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        mum: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        dad: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
        valeria: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
    };
    let ingameButtons: {
        inventory: string;
        save: string;
        load: string;
        credits: string;
    };
    function btnFunctionalities(_option: string): Promise<void>;
    function showCredits(): void;
    function say(_char: Object, _text: string, _italic?: boolean): Promise<void>;
    let items: {
        flashlight: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let dataForSave: {
        foundSecretRoom: boolean;
    };
}
declare namespace Endabgabe {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ANormalDay(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function AskingFamily(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function OddThings(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ThePicture(): ƒS.SceneReturn;
}
