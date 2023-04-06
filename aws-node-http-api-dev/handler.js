const AWS = require('aws-sdk');

module.exports.hello = async (event) => {
  const ses = new AWS.SES();

  const params = {
    Destination: {
      ToAddresses: ['acountross@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: 'Happy day wedd!'
        }
      },
      Subject: {
        Data: 'Brotou'
      }
    },
    Source: 'acountross@gmail.com'
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      body: 'Email sent successfully'
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Email sending failed'
    };
  }
};
