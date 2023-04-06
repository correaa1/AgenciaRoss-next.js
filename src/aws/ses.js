const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  const params = {
    Bucket: 'nome-do-seu-bucket',
    Key: 'nome-do-seu-arquivo',
    Body: 'conteúdo-do-seu-arquivo'
  };
  
  const result = await s3.upload(params).promise();
  console.log(`Arquivo enviado com sucesso para ${result.Location}`);
};