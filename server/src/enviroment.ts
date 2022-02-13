/// load env
import { config as LoadEnvVariables } from "dotenv";

LoadEnvVariables()

export const notionKey = process.env.NOTION_KEY;