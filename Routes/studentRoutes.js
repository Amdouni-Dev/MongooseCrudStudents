// Importation des modules nécessaires
const express = require('express');
const { addStudent, getAllStudents, updateStudent,
     deleteStudent } = require('../controllers/studentController');

const router = express.Router();

// Routes pour les étudiants
router.post('/students', addStudent); // Ajouter un étudiant
router.get('/students', getAllStudents); // Obtenir tous les étudiants
router.put('/students/:id', updateStudent); // Mettre à jour un étudiant par ID
router.delete('/students/:id', deleteStudent); // Supprimer un étudiant par ID

// Exportation du routeur
module.exports = router;
