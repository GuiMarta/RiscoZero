const mysql = require('mysql2');

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'mysql.infocimol.com.br',
  user: 'infocimol15', // Substitua pelo seu usuário
  password: 'martalindo', // Substitua pela sua senh
});

// Conectando ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Realizando uma consulta
connection.end();
