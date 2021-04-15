// Type definitions for Reveal 4.1
// Project: https://github.com/hakimel/reveal.js/
// Definitions by: grapswiz <https://github.com/grapswiz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Reveal: RevealStatic;

// Reveal plugins are globals since 4.0
declare const RevealMarkdown: any;
declare const RevealHighlight: any;
declare const RevealNotes: any;

interface RevealStatic {
    initialize:(config:RevealOptions)=>Promise<any>;
    configure:(diff:RevealOptions)=>void;

    // Navigation
    slide(h:number, v:number, f?:number, o?:number):void;
    left():void;
    right():void;
    up():void;
    down():void;
    prev():void;
    next():void;
    prevFragment():boolean;
    nextFragment():boolean;
    toggleOverview(override?:boolean):void;

    // Retrieves the previous and current slide elements
    getPreviousSlide():Element;
    getCurrentSlide():Element;

    getIndices(slide?:Element):{h:number; v:number;};
	availableFragments(): { next: any };

    // States
    addEventListener(type:string, listener:Function, useCapture?:boolean):void;
    removeEventListener(type:string, listener:Function, useCapture?:boolean):void;

    // undocumented method
    layout():void;
    togglePause():void;
    isOverview():boolean;
    isPaused():boolean;
    addEventListeners():void;
    removeEventListeners():void;
    getSlide(x:number, y?:number):Element;
    getScale():number;
    getConfig():RevealOptions;
    getQueryHash():any;
    isFirstSlide():boolean;
    isLastSlide():boolean;
}

interface RevealOptions {
    // Configuration
    controls?:boolean;
    progress?:boolean;
    history?:boolean;
    keyboard?:boolean;
    overview?:boolean;
	fragments?: boolean;
    center?:boolean;
    touch?:boolean; // undocumented.
    loop?:boolean;
    rtl?:boolean;
    autoSlide?:number;
    mouseWheel?:boolean;
    rollingLinks?:boolean;
    theme?:string;
    transition?:string;
	plugins?: any[];

    // Presentation Size
    width?:number;
    height?:number;
    margin?:number;
    minScale?:number;
    maxScale?:number;

    // Dependencies
    dependencies?:RevealDependency[];
}

interface RevealDependency {
    src:string;
    condition:()=>boolean;
    async?:boolean;
}
