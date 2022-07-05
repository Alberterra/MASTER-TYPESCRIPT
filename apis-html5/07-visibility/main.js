let mivideo = document.querySelector("#mivideo");


addEventListener("visibilitychange", () => document.visibilityState === "visible" ? mivideo.play() : mivideo.pause());