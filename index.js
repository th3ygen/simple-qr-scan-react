const mqtt = require('mqtt');
const express = require('express');

const app = express();

const client = mqtt.connect('mqtt://broker.emqx.io:1883/mqtt');

client.on('connect', () => {
    console.log('MQTT connected');
});

app.get('/scan', (req, res) => {
    client.publish('syed/assignment/qr/status', 'scan');
    res.sendStatus(200);
});

app.listen(8080, () => {
    console.log('Listening to port 8080');
});