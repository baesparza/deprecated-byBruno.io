import fastify from "fastify";
import { NotionClient } from "./core/notion";

const PROJECTS_DATABASE = '630e1232bc4e4280b7fdda038a8bd9bb';

export const App = (opts = {}) => {
    const app = fastify(opts);

    /// register routes
    app.register((server, _, done) => {

        server.get('/recent-projects', async (request, reply) => {
            reply.header("Access-Control-Allow-Methods", "GET");
            reply.header("Access-Control-Allow-Origin", "*");
            try {

                const response = await NotionClient.databases.query({
                    database_id: PROJECTS_DATABASE,
                    page_size: 4,
                    filter: {
                        property: 'publish',
                        checkbox: {
                            equals: true
                        },
                    },
                    sorts: [
                        { property: 'date', direction: 'ascending' },
                    ]
                });
                console.log(response);
                reply.send({ data: response.results });
            } catch (error) {
                reply.code(500).send({ ok: false });
            }
        });

        done();
    }, { prefix: "/api" });

    return app;
};

