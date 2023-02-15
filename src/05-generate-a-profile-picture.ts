import {openai} from "./util/openai";

(async () => {
    const response = await openai.createImage({
        prompt: `Please make a pixel art for this person profile:
        
        I'm an INFP personality and a little fat. I usually like watching TV, playing piano, playing ball and running. I'm looking for a boyfriend or friend. You can talk to me if you want to.`,
        n: 5
    });

    console.log(response.data.data.map(x => x.url));
})();

// Dirty Text Data -> Image
