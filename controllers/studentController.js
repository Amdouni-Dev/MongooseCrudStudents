// Importation du modèle Student
const Student = require('../models/Student');

// Ajouter un étudiant
exports.addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body); // Crée un nouvel étudiant avec les données de la requête
    const savedStudent = await newStudent.save(); // Enregistre l'étudiant dans la base de données
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message }); // Retourne une erreur si les données sont invalides
  }
};

// Obtenir tous les étudiants
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find(); // Récupère tous les étudiants
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message }); // Erreur interne du serveur
  }
};

// Mettre à jour un étudiant par ID
exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    // Met à jour l'étudiant
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un étudiant par ID
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id); // Supprime l'étudiant
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
