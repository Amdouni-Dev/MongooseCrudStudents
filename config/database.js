// Importation des modules nécessaires
const mongoose = require('mongoose');

// Fonction de connexion à MongoDB
const connectDB = async () => {
  try {
    // Connexion à la base de données
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); // Arrête l'application si la connexion échoue
  }
};

// Exportation de la fonction
module.exports = connectDB;
