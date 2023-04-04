const AWS = require('aws-sdk');
const ses = new AWS.SES();

module.exports.sendEmail = async (event, context, callback) => {
  const params = {
    Destination: {
      ToAddresses: ['acountross@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'This is the body of the email',
        },
      },
      Subject: {
        Data: 'Brotou um leadzin!',
      },
    },
    Source: 'acountross@gmail.com',
  };

  try {
    await ses.sendEmail(params).promise();
    callback(null, 'Email sent successfully');
  } catch (error) {
    callback(error);
  }
};
