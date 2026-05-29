const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        default: 'Anonymous'
    },
    age: { 
        type: Number, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    story: { 
        type: String, 
        required: true 
    },
    reportedToAuthorities: { 
        type: Boolean, 
        default: false 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Incident', IncidentSchema);