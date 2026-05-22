// controllers/studentController.js
import Student from "../models/Student.js";

// GET all students
export const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    next(error);
  }
};

// GET single student
export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      const err = new Error("Student not found");
      err.statusCode = 404;
      throw err;
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
};

// CREATE student
export const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE student
export const updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!student) {
      const err = new Error("Student not found");
      err.statusCode = 404;
      throw err;
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
};

// DELETE student
export const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      const err = new Error("Student not found");
      err.statusCode = 404;
      throw err;
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};