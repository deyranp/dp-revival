const dprevival = {};

dprevival.defineProperty('playAudioFile', (name) => (new Audio(`/assets/sound/${name}`)).play());
