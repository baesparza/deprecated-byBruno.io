import { NotionClient } from "../core/notion";

const PROJECTS_DATABASE = '630e1232bc4e4280b7fdda038a8bd9bb' as const;

export const recentProjects = async () => NotionClient.databases.query({
    database_id: PROJECTS_DATABASE,
    page_size: 4,
    filter: {
        property: 'publish',
        checkbox: {
            equals: true
        },
    },
    sorts: [
        { property: 'relevant', direction: 'ascending' },
    ]
});

export const allProjects = async () => NotionClient.databases.query({
    database_id: PROJECTS_DATABASE,
    filter: {
        property: 'publish',
        checkbox: {
            equals: true
        },
    },
    sorts: [
        // { property: 'date', direction: 'ascending' },
    ]
});