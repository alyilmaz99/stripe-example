// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51Kyex0F4m0MKLar222Hi5t9qotB1pannBxt6FWPwzErbTHcC9TDRKRQxsZzvVm3BVHOgzdSiv6FC1zwRZxrozlIN00RWEHPvAr');

// Using Express
const app = require('express')();

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const payload = request.body;

  console.log("Got payload: " + payload);

  response.status(200);
});

app.listen(4242, () => console.log('Running on port 4242'));

//stripe cli kurulduktan sonra
//stripe login ile giriş yapıyoruz ve 
//stripe listen --forward-to localhost:4242/webhook
//ile payment ı dinliyoruz.