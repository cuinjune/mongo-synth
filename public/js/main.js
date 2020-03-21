async function getSynthData() {
    const synthUrl = "/api/v1/synth/data";
    const synthUrlApiOptions = { method: "GET" };
    const synthUrlResponse = await fetch(synthUrl, synthUrlApiOptions);
    const synthJson = await synthUrlResponse.json();
    return synthJson;
}

async function addSynthDataElement(name, message) {
    const synthUrl = "/api/v1/synth/data";
    const synthUrlApiOptions = { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name, message: message }) };
    const synthUrlResponse = await fetch(synthUrl, synthUrlApiOptions);
    const synthJson = await synthUrlResponse.json();
    return synthJson;
}

async function clearSynthData() {
    const synthUrl = "/api/v1/synth/data";
    const synthUrlApiOptions = { method: "DELETE", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
    const synthUrlResponse = await fetch(synthUrl, synthUrlApiOptions);
    const synthJson = await synthUrlResponse.json();
    return synthJson;
}

function startAudioOnClick() {
    // audio autoplay
    const audioContextList = [];
    (function () {
        self.AudioContext = new Proxy(self.AudioContext, {
            construct(target, args) {
                const result = new target(...args);
                audioContextList.push(result);
                return result;
            }
        });
    })();
    function resumeAudio() {
        audioContextList.forEach(ctx => {
            if (ctx.state !== "running") { ctx.resume(); }
        });
    }
    ["click", "contextmenu", "auxclick", "dblclick"
        , "mousedown", "mouseup", "pointerup", "touchend"
        , "keydown", "keyup"
    ].forEach(name => document.addEventListener(name, resumeAudio));
    // emscripten
    var Module = {
        preRun: []
        , postRun: []
        , print: function (e) {
            1 < arguments.length && (e = Array.prototype.slice.call(arguments).join(" "));
            console.log(e);
        }
        , printErr: function (e) {
            1 < arguments.length && (e = Array.prototype.slice.call(arguments).join(" "));
            console.error(e)
        }
    };
}

function startPd() {
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute("src", "pd/synth.js");
    document.head.appendChild(scriptTag);
}

window.addEventListener('DOMContentLoaded', async () => {
    startAudioOnClick();
    
    //start button listener
    const $sendButton = document.querySelector("#startBtn");
    $sendButton.addEventListener('click', (out) => {
        console.log("Start Button Clicked!");
        startPd();
    });
});