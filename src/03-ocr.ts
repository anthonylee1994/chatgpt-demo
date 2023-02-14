import Tesseract from 'tesseract.js';
import {openai} from "./util/openai";

(async () => {
    const text = await Tesseract.recognize(
        'https://na.cx/i/Xqii6hc.jpg',
        'chi_tra',
    );

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Extract the data from the following intro:
        ${text.data.text.replace(/\n/g, '')}
        
        Response in JSON Format with English:
        {
            "gender": M | F,
            "constellation": string,
            "personality": string,
            "bodyType": fat | little_fat | normal | little_slim | slim,
            "height": integer (in cm),
            "hobbies": string[],
            "intro": string,
        }
        
        Response:`,
        max_tokens: 300,
    });

    console.log(response.data.choices[0].text);
})();

// Expected output:
// {
//     gender: "F",
//     constellation: "Scorpio",
//     personality: "INFP",
//     bodyType: "little_fat",
//     height: 163,
//     hobbies: ["watching television", "playing piano", "playing ball", "running"],
//     intro: "I'm an INFP personality and a little fat. I usually like watching TV, playing piano, playing ball and running. I'm looking for a boyfriend or friend. You can talk to me if you want to.",
// }
