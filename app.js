// Importation des modules
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const studentRoutes = require('./Routes/studentRoutes');

const cors = require('cors');

// Chargement des variables d'environnement
dotenv.config();
// Initialisation de l'application
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
// Connexion à la base de données
connectDB();
// Middleware pour parser le JSON
app.use(express.json());
// Définition des routes
app.use('/api', studentRoutes);
// Démarrage du serveur
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
