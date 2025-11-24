import {
    getTestQuestionsService,
    getTestResultService,
    startTestService,
    submitTestAnswersService
} from "../../services/test/test.service.js";

export const startTest = async (req, res) => {
    try {
        const { candidate_id } = req.params;
        const { numberOfQuestions } = req.body;

        const test = await startTestService(candidate_id, numberOfQuestions || 10);

        res.status(201).json({
            message: "Test started successfully",
            test,
        });
    } catch (error) {
        console.error("Error starting test:", error.message);
        res.status(400).json({ message: error.message });
    }
};


export const getTestQuestion = async (req, res) => {
    try {
        const { test_id } = req.params;

        const questions = await getTestQuestionsService(test_id);

        res.status(200).json({
            message: "Test questions retrieved successfully",
            questions,
        });
    } catch (error) {
        console.error("Error fetching test questions:", error.message);
        res.status(400).json({ message: error.message });
    }
};


export const submitAnswer = async (req, res) => {
    try {
        const { test_id } = req.params;
        const answers = req.body.answers; // [{ question_id, selected_choice_id }]

        if (!Array.isArray(answers) || answers.length === 0) {
            return res.status(400).json({ message: "Answers are required" });
        }

        const result = await submitTestAnswersService(test_id, answers);

        res.status(201).json({
            message: "Test answers submitted successfully",
            totalCorrect: result.totalCorrect,
            answers: result.submittedAnswers,
        });
    } catch (error) {
        console.error("Error submitting test answers:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const getTestResult = async (req, res) => {
    try {
        const { test_id } = req.params;

        const result = await getTestResultService(test_id);

        res.status(200).json({
            message: "Test result retrieved successfully",
            result,
        });
    } catch (error) {
        console.error("Error fetching test result:", error.message);
        res.status(400).json({ message: error.message });
    }
};