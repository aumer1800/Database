// routes/studentRoutes.js
import express from "express";
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

// GET all students
router.get("/", getStudents);

// GET single student
router.get("/:id", getStudentById);

// CREATE student
router.post("/", createStudent);

// UPDATE student
router.put("/:id", updateStudent);

// DELETE student
router.delete("/:id", deleteStudent);

export default router;