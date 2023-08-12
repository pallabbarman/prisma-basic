import app from './app';

const port = process.env.PORT || 5000;

async function startServer() {
    app.listen(port, () => {
        console.log(`Connect port on ${port}`);
    });
}

startServer();
