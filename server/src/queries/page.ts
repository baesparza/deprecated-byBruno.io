import { NotionClient } from "../core/notion";

export const getPage = async (pageId) => {
    const properties = await NotionClient.pages.retrieve({
        page_id: pageId,
    });

    const content = await NotionClient.blocks.children.list({
        block_id: pageId
    });

    return { content, properties }
}
