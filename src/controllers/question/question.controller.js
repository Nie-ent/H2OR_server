import {
    addChoiceService,
    createQuestionService,
    deleteChoiceService,
    deleteQuestionService,
    getAllQuestionsService,
    updateQuestionService
} from "../../services/question/question.service.js";

export const getAllQuestion = async (req, res) => {
    try {
        const questions = await getAllQuestionsService();

        res.status(200).json({
            message: "Questions retrieved successfully",
            questions,
        });
    } catch (error) {
        console.error("Error fetching questions:", error.message);
        res.status(500).json({ message: error.message || "Internal server error" });
    }
};

export const createNewQuestion = async (req, res) => {
    try {
        const questionData = req.body; // { question_text, mcq, difficulty, choices }

        const newQuestion = await createQuestionService(questionData);

        res.status(201).json({
            message: "Question created successfully",
            question: newQuestion,
        });
    } catch (error) {
        console.error("Error creating question:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params; // question_id
        const updateData = req.body; // { question_text, mcq, difficulty, choices }

        const updatedQuestion = await updateQuestionService(id, updateData);

        res.status(200).json({
            message: "Question updated successfully",
            question: updatedQuestion,
        });
    } catch (error) {
        console.error("Error updating question:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params; // question_id

        const deletedQuestion = await deleteQuestionService(id);

        res.status(200).json({
            message: "Question deleted successfully",
            question: deletedQuestion,
        });
    } catch (error) {
        console.error("Error deleting question:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const addChoice = async (req, res) => {
    try {
        const { id } = req.params; // question_id
        const choiceData = req.body; // { choice_text, is_correct }

        const newChoice = await addChoiceService(id, choiceData);

        res.status(201).json({
            message: "Choice added successfully",
            choice: newChoice,
        });
    } catch (error) {
        console.error("Error adding choice:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const deleteChoice = async (req, res) => {
    try {
        const { choice_id } = req.params;

        const deletedChoice = await deleteChoiceService(choice_id);

        res.status(200).json({
            message: "Choice deleted successfully",
            choice: deletedChoice,
        });
    } catch (error) {
        console.error("Error deleting choice:", error.message);
        res.status(400).json({ message: error.message });
    }
};