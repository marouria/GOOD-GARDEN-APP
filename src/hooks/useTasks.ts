var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "YOUR_API_KEY",
});
var base = Airtable.base("appkItFaWOt32aPkR");
