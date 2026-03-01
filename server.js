const express = require('express');
const os = require('os');
const client = require('prom-client');
const path = require('path');

const app = express();
const PORT = 5000;

// Prometheus default metrics
client.collectDefaultMetrics();

// Custom HTTP counter
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total HTTP Requests'
});

app.use((req, res, next) => {
    httpRequestCounter.inc();
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for system data
app.get('/api/system', (req, res) => {
    res.json({
        hostname: os.hostname(),
        platform: os.platform(),
        cpu: os.cpus().length,
        totalMemory: (os.totalmem() / 1024 / 1024).toFixed(2),
        freeMemory: (os.freemem() / 1024 / 1024).toFixed(2),
        uptime: os.uptime()
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP" });
});

// Prometheus metrics
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(PORT, () => {
    console.log(`🚀 DevOps Dashboard running on port ${PORT}`);
});
