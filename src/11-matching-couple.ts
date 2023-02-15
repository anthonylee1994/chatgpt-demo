import {openai} from "./util/openai";

(async () => {
    const profiles = [
        {
            "id": "M001",
            "gender": "M",
            "yearOfBirth": 1996,
            "hashTags": ["in graduate school", "reading books", "watching movies", "listening Hip-Hop music", "buying branded bags"],
            "livingPlace": "Kwun Tong",
            "bodyType": "normal",
            "height": 175
        },
        {
            "id": "M002",
            "gender": "M",
            "yearOfBirth": 1994,
            "hashTags": ["traveling", "playing video games", "watching anime", "cooking", "listening to electronic music"],
            "livingPlace": "Tuen Mun",
            "bodyType": "athletic",
            "height": 182
        },
        {
            "id": "M003",
            "gender": "M",
            "yearOfBirth": 1990,
            "hashTags": ["hiking", "photography", "watching documentaries", "playing the guitar", "listening to classic rock"],
            "livingPlace": "Central",
            "bodyType": "slim",
            "height": 178
        },
        {
            "id": "M004",
            "gender": "M",
            "yearOfBirth": 1999,
            "hashTags": ["reading non-fiction", "playing basketball", "watching sci-fi movies", "listening to pop music", "trying new restaurants"],
            "livingPlace": "Tsim Sha Tsui",
            "bodyType": "muscular",
            "height": 190
        },
        {
            "id": "F001",
            "gender": "F",
            "yearOfBirth": 2009,
            "hashTags": ["likes badminton", "likes volleyball", "love to follow stars", "dance"],
            "livingPlace": "Tuen Mun",
            "bodyType": "normal",
            "height": 163
        },
        {
            "id": "F002",
            "gender": "F",
            "yearOfBirth": 2001,
            "hashTags": ["listening to K-Pop", "watching Korean dramas", "doing makeup", "singing", "eating snacks"],
            "livingPlace": "Yuen Long",
            "bodyType": "petite",
            "height": 155
        },
        {
            "id": "F003",
            "gender": "F",
            "yearOfBirth": 1997,
            "hashTags": ["running", "yoga", "reading novels", "watching comedies", "listening to jazz"],
            "livingPlace": "Kwun Tong",
            "bodyType": "athletic",
            "height": 170
        },
        {
            "id": "F004",
            "gender": "F",
            "yearOfBirth": 1995,
            "hashTags": ["playing the guitar", "painting", "watching independent films", "listening to indie music", "visiting museums"],
            "livingPlace": "Tsim Sha Tsui",
            "bodyType": "curvy",
            "height": 168
        }
    ]


    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please provide best match into dating couples, they should not be gay or lesbian, they should all being matched, please don't consider their ID order, say M001 can match F002:
        ###
        ${JSON.stringify(profiles, null, 4)}
        ###
        
        Please response in the following JSON format:
        [{ "male": ID, "female": ID, "reason": string }...]
        
        Response: `,
        max_tokens: 2048,
        temperature: 0.5,
    });

    console.log(response.data.choices[0].text);
})();

// Expected output:
// [
//     {"male": "M001", "female": "F003", "reason": "They both live in Kwun Tong and like watching movies and reading books."},
//     {"male": "M002", "female": "F004", "reason": "They both like playing the guitar and listening to indie music."},
//     {"male": "M003", "female": "F002", "reason": "They both like watching Korean dramas and listening to K-Pop."},
//     {"male": "M004", "female": "F001", "reason": "They both like playing sports and following stars."}
// ]
