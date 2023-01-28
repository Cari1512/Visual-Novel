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
        secretroomLight: {
            name: string;
            background: string;
        };
        act1: {
            name: string;
            background: string;
        };
        act2: {
            name: string;
            background: string;
        };
        office: {
            name: string;
            background: string;
        };
        livingroom: {
            name: string;
            background: string;
        };
        houseDay: {
            name: string;
            background: string;
        };
        houseNight: {
            name: string;
            background: string;
        };
        flashback: {
            name: string;
            background: string;
        };
        car: {
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
                neutral: string;
                happy: string;
                talking: string;
                confused: string;
            };
        };
        dad: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                talking: string;
                angry: string;
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
        neighbor: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
        brother: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
        knife: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                one: string;
                two: string;
                three: string;
                four: string;
                five: string;
                six: string;
                seven: string;
                eight: string;
            };
        };
    };
    let newPositions: {
        bottomleft: ƒ.Vector2;
        bottomright: ƒ.Vector2;
        bottomcenter: ƒ.Vector2;
        rightout: ƒ.Vector2;
        leftout: ƒ.Vector2;
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
        key: {
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
    function ANormalDay(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function AskingFamily(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Knife(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function OddThings(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Panic(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Suspicion(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ThePicture(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Confronting(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function GoingBack(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function TryingKey(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Valeria(): ƒS.SceneReturn;
}
