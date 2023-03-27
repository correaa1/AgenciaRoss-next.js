import AWS from 'aws-sdk';

export default async function sendEmail(formData) {
  // Configure the AWS SDK
  const ses = new AWS.SES({
    accessKeyId: 'AKIAXDUQFXWUOTXN5YPM',
    secretAccessKey: 'SOJYALV4mRWtX69kl2To/Tv3VTCKFIjUAfxF2dZ7',
    region: 'us-east-1', // Replace with the AWS region you want to use
  });

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
