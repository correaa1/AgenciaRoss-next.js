import AWS from 'aws-sdk';

export default async function sendEmail(formData) {
  // Configure the AWS SDK
  const ses = new AWS.SES({
    accessKeyId: 'AKIAXDUQFXWUO6HV3CUG',
    secretAccessKey: '7SwWgf8oIFyDdzu+QZ/dUhX+ZNlcFODnUShBfJYw',
    region: 'us-east-1', // Replace with the AWS region you want to use
  });

  // Create the email message
  const { name, email, message } = formData;
  const params = {
    Source: 'agencia.ross2023@gmail.com',
    Destination: {
      ToAddresses: ['agencia.ross2023@gmail.com'],
    },
    Message: {
      Subject: {
        Data: `New message from ${name}`,
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
      },
    },
  };

  // Send the email using SES
  const result = await ses.sendEmail(params).promise();
  console.log(result);
}
