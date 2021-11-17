import fastify from "fastify";
import fastifyStatic from "fastify-static";
import path from 'path';
import { NotionClient } from "./core/notion";

const PROJECTS_DATABASE = '630e1232bc4e4280b7fdda038a8bd9bb';

export const App = (opts = {}) => {
    const app = fastify(opts);


    /// register routes
    app.register((server, _, done) => {

        // recent projects
        server.get('/recent-projects', async (request, reply) => {
            // TODO: enable only for development
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
                        { property: 'relevant', direction: 'ascending' },
                    ]
                });
                console.log(response);
                reply.send({ projects: response.results });
            } catch (error) {
                reply.code(500).send({ ok: false });
            }
        });

        done();
    }, { prefix: "/api" });

    // serve static files
    // TODO: enable only on production
    app.register(fastifyStatic, {
        root: path.join(__dirname, 'static'),
    });

    // Not found handler
    app.setNotFoundHandler((req, reply) => {
        // API 404
        if (req.raw.url && req.raw.url.startsWith("/api")) {
            return reply.status(404).send({
                ok: false,
                error: {
                    kind: "user_input",
                    message: "Not Found",
                },
            });
        }

        // react SPA
        reply.status(200).sendFile("index.html");
    });


    return app;
};

