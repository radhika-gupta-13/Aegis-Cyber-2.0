const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Incident = require('./models/Incident');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const MONGO_URI = 'mongodb://127.0.0.1:27017/aegis_cyber_v2';

mongoose.connect(MONGO_URI)
    .then(() => console.log('>>> Success: Secure link established with Aegis MongoDB Cluster.'))
    .catch(err => console.error('>>> Error: Database cluster connection isolated:', err));



app.get('/api/incidents', async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ createdAt: -1 });
        res.status(200).json(incidents);
    } catch (error) {
        console.error('Fetch operation failed:', error);
        res.status(500).json({ error: 'System failed to parse historical server logs.' });
    }
});

app.post('/api/incidents', async (req, res) => {
    try {
        const { name, age, email, story, reportedToAuthorities } = req.body;

        const newIncident = new Incident({
            name: name || 'Anonymous',
            age: parseInt(age),
            email,
            story,
            reportedToAuthorities: reportedToAuthorities === true
        });

        const savedIncident = await newIncident.save();
        res.status(201).json({ success: true, recordId: savedIncident._id });
    } catch (error) {
        console.error('Data persistence failure:', error);
        res.status(400).json({ error: 'Data parsing rejected. Enforce standard schema arrays.' });
    }
});



app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
        return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
    next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[AEGIS CORE RUNNING]: Systems live at secure interface link http://localhost:${PORT}`);
});