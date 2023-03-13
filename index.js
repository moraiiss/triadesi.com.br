import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import arrayFilters from './data/filters.json' assert { type: "json" };
import arrayServices from './data/services.json' assert { type: "json" };

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { 
        title: "Serviços Industriais"
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Soluções Para Indústria"
    })
});

app.get('/services', (req, res) => {
    res.render('services', {
        title: "Nossos Serviços Prestados",
        filters: arrayFilters,
        services: arrayServices
    })
});

app.use((req, res) => {
    res.end('page not found')
});

const port = process.env.PORT || 8080 // servidor decide a porta OU define a porta 8080
app.listen(port, () => console.log(`Escutando servidor na porta ${port}`))