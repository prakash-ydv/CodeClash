import { compileCode, getSubmissionResult } from "../utils/problem.judge.js";

export async function runCode(req, res) {
  const { code, language } = req.body;
  if (!code) return res.status(400).json({ error: "No code provided" });

  try {
    console.log("🚀 Creating submission...");
    const submission = await compileCode(54, code);

    console.log("⏳ Waiting for Judge0 result...");
    const result = await getSubmissionResult(submission.token);

    res.json(result);
  } catch (err) {
    console.error("🔥 runCode error:", err);
    res.status(500).json({ error: err.message });
  }
}
