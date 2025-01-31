// Importation de mongoose et validator
const mongoose = require('mongoose');
const validator = require('validator')
// Définition du schéma pour les étudiants
const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'], 
    trim: true 
  },
  age: { 
    type: Number, 
    required: [true, 'Age is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    validate: [validator.isEmail, 'Invalid email address'] 
  }
}, { timestamps: true }); // Ajoute les champs createdAt et updatedAt
// Exportation du modèle
module.exports = mongoose.model('Student', studentSchema);
