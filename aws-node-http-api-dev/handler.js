const AWS = require('aws-sdk');

export default async function hello (formData)  {
  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY

  });

  const ses = new AWS.SES({ region:process.env.NEXT_PUBLIC_AWS_REGION, });
  // Create the email message
  const { name, email, telefone,instagram,cargo, faturamento } = formData;
  const params = {
    Source: process.env.NEXT_PUBLIC_SES_EMAIL,
    Destination: {
      ToAddresses: [process.env.NEXT_PUBLIC_SES_EMAIL],
    },
    Message: {
      Subject: {
        Data: `Brotou um leadzin:  ${name}`,
      },
      Body: {
        Text: {
          Data: `Nome: ${name}
          \nEmail: ${email}    
          \nCargo: ${cargo}         
          \nWhatsWapp: ${telefone}
          \nInstagram: ${instagram}
          \nfaturamento: ${faturamento}`,
        },
      },
    },}
    ses.sendEmail(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent:', data);
      }
    }); 
  
  }
