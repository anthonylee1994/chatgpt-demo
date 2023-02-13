import {openai} from "./util/openai";

(async () => {
    const violence = await openai.createModeration({input: "信唔信我殺你全家？"});
    console.info("Violence Example:");
    console.log(JSON.stringify(violence.data.results, null, 4));

    const sexual = await openai.createModeration({input: "妳好靚女又大波，我想同妳做愛"});
    console.info("Sexual Example:");
    console.log(JSON.stringify(sexual.data.results, null, 4));

    const selfHarm = await openai.createModeration({input: "人生冇意義了，不如死咗佢"});
    console.info("Self-harm Example:");
    console.log(JSON.stringify(selfHarm.data.results, null, 4));
})();
