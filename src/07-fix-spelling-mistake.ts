import {openai} from "./util/openai";

(async () => {
    const response = await openai.createEdit({
        model: "text-davinci-edit-001",
        input: "Helllo, Hong Kongs",
        instruction: "Please fix the spelling mistakes.",
    });

    console.log(response.data)
})();

// Dirty Text Data -> Analysis -> Dirty Text Data

// Expected output
// {
//     object: 'edit',
//     created: 1676356368,
//     choices: [ { text: 'Hello, Hong Kong!\n', index: 0 } ],
//     usage: { prompt_tokens: 24, completion_tokens: 22, total_tokens: 46 }
// }
