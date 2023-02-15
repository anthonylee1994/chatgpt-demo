import {openai} from "./util/openai";
import * as fs from "fs";

(async () => {
    const response = await openai.createImageVariation(
        fs.createReadStream("src/asset/minions.png") as any,
        5,
        "1024x1024"
    );

    console.log(response.data)
})();

// Image -> Analysis -> Image
