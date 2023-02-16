const express = require('express')
const path = require('path')
const app = express()


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
        filters: [
            { name: "*", label: "Todos" },
            { name: "maintenance", label: "Manutenção" },
            { name: "manager", label: "Gestão" },
            { name: "construction", label: "Construção" },
            { name: "facilities", label: "Facilities" }
        ],
        services: [
            { 
				id: 1,
				filter: "maintenance", 
				label: "Manutenção", 
				imgName: "prj1.jpg", 
				serviceTitle: "Manutenção de Rotina e Paradas Industriais",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 2,
				filter: "maintenance", 
				label: "Manutenção", 
				imgName: "prj3.jpg", 
				serviceTitle: "Manutenção Preditiva",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 3,
				filter: "maintenance", 
				label: "Manutenção", 
				imgName: "prj4.jpg", 
				serviceTitle: "Manutenção Predial",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 4,
				filter: "maintenance", 
				label: "Manutenção", 
				imgName: "prj5.jpg", 
				serviceTitle: "Contenção de Vazamentos",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 5,
				filter: "manager", 
				label: "Gestão", 
				imgName: "prj6.jpg", 
				serviceTitle: "Gestão de Projetos",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 6,
				filter: "manager", 
				label: "Gestão", 
				imgName: "prj7.jpg", 
				serviceTitle: "Suporte Técnico a Equipe de Manutenção",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 7,
				filter: "manager", 
				label: "Gestão", 
				imgName: "prj1.jpg", 
				serviceTitle: "Engenharia de Projetos",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 8,
				filter: "manager", 
				label: "Gestão", 
				imgName: "prj8.jpg", 
				serviceTitle: "Administrativo",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 9,
				filter: "manager", 
				label: "Gestão", 
				imgName: "prj9.jpg", 
				serviceTitle: "Consultoria de Planejamento de projetos",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 10,
				filter: "construction", 
				label: "Construção", 
				imgName: "prj10.jpg", 
				serviceTitle: "Construção Civil",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 11,
				filter: "construction", 
				label: "Construção", 
				imgName: "prj11.jpg", 
				serviceTitle: "Montagem Eletromecânica",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 12,
				filter: "construction", 
				label: "Construção", 
				imgName: "prj12.jpg", 
				serviceTitle: "Instalações Elétricas",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 13,
				filter: "facilities", 
				label: "Facilities", 
				imgName: "prj13.jpg", 
				serviceTitle: "Conservação e Limpeza",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 14,
				filter: "facilities", 
				label: "Facilities", 
				imgName: "prj14.jpg", 
				serviceTitle: "Paisagismo e Jardinagem",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 15,
				filter: "facilities", 
				label: "Facilities", 
				imgName: "prj15.jpg", 
				serviceTitle: "Gerenciamento de Copa",
				description: "Lorem lipsum dolor sit amet..."
		    },
            { 
				id: 16,
				filter: "facilities", 
				label: "Facilities", 
				imgName: "prj16.jpg", 
				serviceTitle: "Gerenciamento de Recepção e Portaria",
				description: "Lorem lipsum dolor sit amet..."
		    }
        ]
    })
});

app.use((req, res) => {
    res.end('page not found')
});

const port = process.env.PORT || 8080 // servidor decide a porta OU define a porta 8080
app.listen(port, () => console.log(`Escutando servidor na porta ${port}`))