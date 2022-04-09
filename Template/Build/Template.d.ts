declare namespace Template {
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
    let dataForSave: {
        nameProtagonist: string;
        score: number;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
