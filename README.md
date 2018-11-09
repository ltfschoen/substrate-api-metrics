## Substrate API

### About

Node.js API for [Substrate ReadMe.io](https://substrate.readme.io) to retrieve Substrate Swagger/OAS JSON file and includes dependencies that send API Logs to ReadMe.io account using the account's API Key (stored in a .env file) to enable ReadMe.io API Metrics.

### Usage

* Terminal #1 - Start API server
```
yarn; yarn run dev
```

* Terminal #2 - cURL request to retrieve JSON data
```
curl -i -H "Accept: application/json" "http://localhost:7000/api/scon_substrate_0.4.0_swagger.json"
```