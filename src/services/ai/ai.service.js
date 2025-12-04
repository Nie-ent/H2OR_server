import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
    const pdfResp = await fetch(
        "https://res.cloudinary.com/dvrv4wf6s/image/upload/v1764837864/documents/ssxzlgijarpflujpeveu.pdf"
    ).then((response) => response.arrayBuffer());

    const pdfBase64 = Buffer.from(pdfResp).toString("base64");

    const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const result = await model.generateContent([
        {
            text: `
You are an expert HR Recruiter with 10+ years of experience in evaluating resumes.

IMPORTANT:
- The uploaded PDF is ALWAYS a resume.
- Do NOT interpret it as a research paper, academic document, scientific article, journal, or publication.
- If the document layout looks unusual, you must still evaluate it *as a resume only*.

Your task:
1. Read and analyze the resume.
2. Evaluate it based on these criteria:
   - Clarity & structure
   - Professional experience relevance
   - Skills & competencies
   - Achievements & measurable results
   - Formatting & readability
   - Overall candidate strength

Return ONLY this JSON:

{
  "score": number,
  "comment": string
}

RULES:
- JSON only
- No markdown
- No backticks
- No extra explanation
` },
        {
            inlineData: {
                mimeType: "application/pdf",
                data: pdfBase64,
            },
        },
    ]);

    const output = result.response.text();

    const cleaned = output
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    const parsed = JSON.parse(cleaned);

    return parsed;
}

main();
export default main;
