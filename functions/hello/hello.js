// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const random = require('random-name')
  try {
    //const subject = event.queryStringParameters.name || 'World'
const name = random.first();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: ` ${name}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
