import {Configuration, OpenAIApi} from "openai";
import {openAIConfig} from "../config/openAIConfig";

export const openai = new OpenAIApi(new Configuration(openAIConfig));
