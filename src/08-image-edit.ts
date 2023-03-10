import {openai} from "./util/openai";
import * as fs from "fs";

(async () => {
    const response = await openai.createImageEdit(
        fs.createReadStream("src/asset/alfred-original.png") as any,
        fs.createReadStream("src/asset/alfred-mask.png") as any,
        'Holding a massive amount of gold bars',
        5,
        "1024x1024"
    );

    console.log(response.data)
})();

// Image -> Dirty Text Data -> Image
