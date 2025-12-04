import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
    const pdfResp = await fetch(
        "https://discovery.ucl.ac.uk/id/eprint/10089234/1/343019_3_art_0_py4t4l_convrt.pdf"
    ).then((response) => response.arrayBuffer());

    const pdfBase64 = Buffer.from(pdfResp).toString("base64");

    const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const result = await model.generateContent([
        { text: "Review resume and give a score 1-100. Return ONLY this JSON format: { score: number }" },
        {
            inlineData: {
                mimeType: "application/pdf",
                data: pdfBase64,
            },
        },
    ]);

    const output = result.response.text();

    // ล้าง ```json ``` หรือ ```
    const cleaned = output.replace(/```json|```/g, "").trim();

    // แปลงเป็น object
    const parsed = JSON.parse(cleaned);

    // 🟢 คืนค่า object จริง ไม่ใช่ string เดิม
    return parsed;
}

main();
export default main;
