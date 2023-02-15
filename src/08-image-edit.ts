import {openai} from "./util/openai";
import * as fs from "fs";

(async () => {
    const response = await openai.createImageEdit(
        fs.createReadStream("src/asset/bb-original.png") as any,
        fs.createReadStream("src/asset/bb-mask.png") as any,
        "A Japanese anime young cute girl",
        5,
        "1024x1024"
    );

    console.log(response.data)
})();

// Image -> Dirty Text Data -> Image
