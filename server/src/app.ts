import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifyStatic from "fastify-static";
import path from 'path';
import { GenerateResumePdf } from "./core/generate-resume-pdf";
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
                reply.code(500).send({ ok: false, error });
            }
        });

        // all projects
        server.get('/all-projects', async (_, reply) => {
            try {
                const response = await allProjects()
                reply.send({ projects: response.results });
            } catch (error) {
                console.error(error);
                reply.code(500).send({ ok: false, error });
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
                reply.code(500).send({ ok: false, error });
            }
        });

        done();
    }, { prefix: "/api" });

    /// register functions routes
    app.register((server, _, done) => {

        // recent projects
        server.get('/download-resume', async (_, reply) => {
            try {
                const pdf = await GenerateResumePdf();
                reply
                    .type('application/pdf')
                    .header('Content-Disposition', 'attachment; filename="BrunoEsparzaResume.pdf"')
                    .send(pdf);
            } catch (error) {
                console.error(error);
                reply.code(500).send({ ok: false, error });
            }
        });

        done();
    }, { prefix: "/functions" });

    // serve static files
    app.register(fastifyStatic, {
        root: path.join(__dirname, 'static'),
    });


    // Not found handler
    app.setNotFoundHandler((req, reply) => {
        // API 404
        if (req.raw?.url?.startsWith("/api")) {
            return reply.status(404).send({
                ok: false,
                kind: "not-found",
                message: "API endpoint not found",
            });
        }

        if (req.raw?.url?.startsWith("/functions")) {
            return reply.status(404).send({
                ok: false,
                kind: "not-found",
                message: "FUNCTION not found",
            });
        }

        // react SPA
        reply.status(200).sendFile("index.html");
    });

    return app;
};

