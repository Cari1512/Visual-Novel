declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        jigsaw: {
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
        city: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        adeline: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        dan: {
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
    let items: {
        key: {
            name: string;
            description: string;
            image: string;
        };
        Dokument: {
            name: string;
            description: string;
            image: string;
        };
        tape: {
            name: string;
            description: string;
            image: string;
        };
        book: {
            name: string;
            description: string;
            image: string;
        };
        knife: {
            name: string;
            description: string;
            image: string;
        };
        glasses: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        score: number;
    };
}
declare namespace Endabgabe {
    function Scene(): ƒS.SceneReturn;
}
