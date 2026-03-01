const express = require('express');
const client = require('prom-client');

const app = express();
const port = 5000;

// Create a Registry
const register = new client.Registry();

// Collect default Node.js metrics
client.collectDefaultMetrics({ register });

// Custom HTTP request counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});

register.registerMetric(httpRequestCounter);

// Middleware to count requests
app.use((req, res, next) => {
  httpRequestCounter.inc();
  next();
});

app.get('/', (req, res) => {
  res.send("DevOps Health Dashboard Running 🚀");
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
