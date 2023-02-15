import {openai} from "./util/openai";

(async () => {
    const profile = {
        gender: "F",
        constellation: "Scorpio",
        personality: "INFP",
        bodyType: "little_fat",
        height: 163,
        hobbies: ["watching television", "playing piano", "playing ball", "running"],
        intro: "I'm an INFP personality and a little fat. I usually like watching TV, playing piano, playing ball and running. I'm looking for a boyfriend or friend. You can talk to me if you want to.",
    }

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please rate the following matching profile, rate from 1 to 10, 1 is the lowest and 10 is the highest, and with advantages and drawbacks with around 30 words:
        ${JSON.stringify(profile, null, 4)}
        
        JSON Format:
        { "rate": integer, "advantage": string, "drawback": string }
        
        Response:`,
        max_tokens: 300,
    });

    console.log(response.data.choices[0].text);
})();

// Well-formatted Information -> Analysis

// Expected output:
// {
//   "rate": 8,
//   "advantage": "This profile offers a wide range of hobbies and interests that can be shared and explored with a companion, making for a more meaningful relationship.",
//   "drawback": "The body type may put off some people looking for a more typical physique."
// }
