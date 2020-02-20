//configurando o servidor
const express = require("express")
const server = express()


//configurar o servidor para apresentar arquivos estáticos
server.use(express.static(('public')))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

//lista de doadores: Vetor ou Array
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
]









//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { valor: { donors } })
})

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("iniciei o servidor")
})

