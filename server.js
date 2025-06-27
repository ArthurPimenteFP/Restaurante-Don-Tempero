const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para ler dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Servir arquivos estáticos (HTML, CSS, imagens, JS)
app.use(express.static(path.join(__dirname)));

// Rota POST para receber formulário de contato
app.post('/contato', (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  // Aqui você pode salvar no banco ou enviar email (aqui só printa no console)
  console.log('--- Nova mensagem recebida ---');
  console.log(`Nome: ${nome}`);
  console.log(`Email: ${email}`);
  console.log(`Telefone: ${telefone || 'Não informado'}`);
  console.log(`Mensagem: ${mensagem}`);
  console.log('-----------------------------');

  // Redireciona para página de agradecimento
  res.redirect('/obrigado.html');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
