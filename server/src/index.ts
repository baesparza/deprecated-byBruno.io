import { App } from './app';

const app = App({ logger: true });

app.listen(process.env.PORT || 5000, "0.0.0.0", (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});