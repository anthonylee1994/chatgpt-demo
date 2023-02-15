import {openai} from "./util/openai";

(async () => {
    const violence = await openai.createModeration({input: "信唔信我而家就殺咗你全家？"});
    console.info("Violence Example:");
    console.table(violence.data.results[0].categories)
    console.table(violence.data.results[0].category_scores)

    const sexual = await openai.createModeration({input: "妳好靚女又大波呀，可唔可以同妳做愛？"});
    console.info("Sexual Example:");
    console.table(sexual.data.results[0].categories)
    console.table(sexual.data.results[0].category_scores)

    const selfHarm = await openai.createModeration({input: "人生冇意義了，不如燒炭算"});
    console.info("Self-harm Example:");
    console.table(selfHarm.data.results[0].categories)
    console.table(selfHarm.data.results[0].category_scores)
})();

// Dirty Text Data -> Analysis
