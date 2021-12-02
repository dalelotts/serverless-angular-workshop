exports.handler = async (event, context ) => {
  console.log("hello");
  console.log(`event: ${JSON.stringify(event)}`);
  console.log(`context: ${JSON.stringify(context)}`);
  return {
    statusCode: 200,
    body: "Hello!"
  }
}
