var AWS = require('aws-sdk');

require("dotenv").config()

export default async function sendEmail(formData) {
  
 
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  
  });

  const ses = new AWS.SES({ region:process.env.AWS_REGION, });
  // Create the email message
  const { name, email, telefone,instagram,cargo, faturamento } = formData;
  const params = {
    Source: 'agencia.ross2023@gmail.com',
    Destination: {
      ToAddresses: ['agencia.ross2023@gmail.com'],
    },
    Message: {
      Subject: {
        Data: `Contato novo recebido ${name}`,
      },
      Body: {
        Text: {
          Data: `Nome: ${name}\nEmail: ${email}\nCargo: ${cargo}\nWhatsWapp: ${telefone}\nInstagram: ${instagram} \nfaturamento: ${faturamento}`,
        },
      },
    },
  };

  // Send the email using SES
  const result = await ses.sendEmail(params).promise();
  console.log(result);

}
