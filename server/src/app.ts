import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifyStatic from "fastify-static";
import path from 'path';
import { getPage } from "./queries/page";
import { allProjects, recentProjects } from "./queries/projects";

export const App = (opts = {}) => {
    const app = fastify(opts);

    // enable only for development
    app.register(fastifyCors, {});

    /// register routes
    app.register((server, _, done) => {

        // recent projects
        server.get('/recent-projects', async (_, reply) => {
            try {
                const response = await recentProjects()
                reply.send({ projects: response.results });
            } catch (error) {
                console.error(error);
                reply.code(500).send({ ok: false });
            }
        });

        // all projects
        server.get('/all-projects', async (_, reply) => {
            try {
                const response = await allProjects()
                reply.send({ projects: response.results });
            } catch (error) {
                console.error(error);
                reply.code(500).send({ ok: false });
            }
        });

        // all projects
        server.get<{ Params: { id: string } }>('/page/:id', async (request, reply) => {

            try {
                const pageId = request.params.id;
                const response = await getPage(pageId)
                reply.send({ ...response });
            } catch (error) {
                console.error(error);
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

