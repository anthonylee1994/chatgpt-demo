import {openai} from "./util/openai";

(async () => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please extract people profiles from the following intro:
        ###
        Boy #1
        2010年三月出生，讀中等成績學校，有點靚仔。169cm 高。不煙、不酒、不街童、不好色情、不會已讀不回，喜歡打籃球、手球，重 44kg，有點腹肌，想找專一，樣子正常，可以出街玩最好。
        
        Boy #2
        2004年出生，178cm 高，有點瘦，平時喜歡踩滑板、溜冰、照相，朋友說我外表好看。生活有一點忙，不過如果拍了拖會第一時間回應你，不會已讀不回，會很快回覆。想找 2002-2007 年出生，要樣子可愛，可以出街玩，希望拍長拖，不要戴眼鏡。
        
        Boy #3        
        1996年出生，26歲，大學畢業，現在在讀碩士，空閒時會看書、看 Netflix，愛聽 Hip-Hop。會購買名牌袋，但個人很理性，不會花大錢。對感情認真，想認定對方。
        
        Girl #1
        想認識多點新朋友，男朋友就隨緣吧！2009年出生，住屯門區，身高 163cm，樣子算是正常，朋友說我長得漂亮，平日喜歡打羽毛球及排球。有追明星的習慣，所以平時也會跳舞。
        
        Girl #2
        小妹 2009 年出生，160cm 高，體重 47kg，住在屯門區。喜歡行山及畫畫，也喜歡吃東西，成績中等，樣貌一般，性格內向慢熱，想拍長拖。伴侶要求高 165cm 以上，2006-2010 年出生，不煙、不街童、不要已讀不回，樣貌一般就可以，希望可以一起出街玩及外向一點。
        
        Girl #3
        2009 年尾出生 156cm 高，短頭髮，在街會給人笑像小孩，希望對方不會介意。正在讀中二，成績中上，不看外表，喜歡 Youtuber、會看動漫、玩電玩，平日會聽廣東歌。想要伴侶不吸煙、不喝酒、不街童，比我高，拍長拖不戲弄感情。
        ###
        
        Response in JSON Array Format with English:
        [{
            "gender": M | F,
            "yearOfBirth": integer,
            "hashTags": string[],
            "livingPlace": string | null,
            "bodyType": fat | little_fat | normal | little_slim | slim | null,
            "height": integer (in cm) | null,
            "myTypes": string[],
        }...]
        
        Response: `,
        max_tokens: 2048,
    });

    console.log(response.data.choices[0].text);
})();

// Expected output:
// [
//     {
//         "gender": "M",
//         "yearOfBirth": 2010,
//         "hashTags": ["not smoking", "not drinking", "not licentiousness", "not reading message without replies", "likes basketball", "likes handball"],
//         "livingPlace": null,
//         "bodyType": "little_slim",
//         "height": 169,
//         "myTypes": ["normal appearance", "can go out and play"]
//     },
//     {
//         "gender": "M",
//         "yearOfBirth": 2004,
//         "hashTags": ["skateboarding", "skating", "photography", "not reading message without replies"],
//         "livingPlace": null,
//         "bodyType": "slim",
//         "height": 178,
//         "myTypes": ["cute appearance", "born in 2002-2007", "can go out and play", "long-term relationship"]
//     },
//     {
//         "gender": "M",
//         "yearOfBirth": 1996,
//         "hashTags": ["college graduate", "in graduate school", "reading books", "watching Netflix", "listening Hip-Hop music", "buying branded bags"],
//         "livingPlace": null,
//         "bodyType": null,
//         "height": null,
//         "myTypes": ["serious with relationships", "want to commit with the right one"]
//     },
//     {
//         "gender": "F",
//         "yearOfBirth": 2009,
//         "hashTags": ["living in Tuen Mun", "likes badminton", "likes volleyball", "love to follow stars", "dance"],
//         "livingPlace": "Tuen Mun",
//         "bodyType": "normal",
//         "height": 163,
//         "myTypes": ["beautiful facial appearance"]
//     },
//     {
//         "gender": "F",
//         "yearOfBirth": 2009,
//         "hashTags": ["living in Tuen Mun", "likes to hike", "likes to paint", "eating", "not look at the appearance", "not smoking", "not drinking"],
//         "livingPlace": "Tuen Mun",
//         "bodyType": "normal",
//         "height": 160,
//         "myTypes": ["born between 2006-2010", " shy and reserved", "long-term relationship"]
//     },
//     {
//         "gender": "F",
//         "yearOfBirth": 2009,
//         "hashTags": ["short hair", "in secondary 2 with above average grades", "watching YouTubers", "watching animes", "playing video games", "listening cantonese songs"],
//         "livingPlace": null,
//         "bodyType": null,
//         "height": 156,
//         "myTypes": ["not smoking", "not drinking", "no licentiousness", "taller than me", "long-term relationship"]
//     }
// ]
