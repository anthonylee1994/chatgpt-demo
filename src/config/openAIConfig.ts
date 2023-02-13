import * as dotenv from 'dotenv';
import {ConfigurationParameters} from "openai/configuration";

dotenv.config();

export const openAIConfig: ConfigurationParameters = {apiKey: process.env.OPENAI_API_KEY};

