import { Client } from "@notionhq/client";
import { notionKey } from "../enviroment";

export const NotionClient = new Client({ auth: notionKey });
