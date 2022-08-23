import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Statically serve client files
app.use('/', express.static('client'));

//Match invalid server requests
app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

app.listen(port, () => { console.log(`Server started on port ${port}`) });