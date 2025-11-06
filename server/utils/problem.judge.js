import axios from "axios";

const API_HOST = "judge0-ce.p.rapidapi.com";
const API_KEY = process.env.RAPID_API_KEY;
const BASE_URL = `https://${API_HOST}/submissions`;

const HEADERS = {
  "Content-Type": "application/json",
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": API_HOST,
};

// Step 1: Create submission
export async function compileCode(languageId, sourceCode, stdin = "") {
  const payload = { source_code: sourceCode, language_id: languageId, stdin };
  const url = `${BASE_URL}?base64_encoded=false&wait=false`;

  try {
    const { data } = await axios.post(url, payload, { headers: HEADERS });
    return data; // contains { token }
  } catch (err) {
    console.error(
      "❌ Judge0 submission failed:",
      err.response?.status,
      err.response?.data
    );
    throw new Error("Submission to Judge0 failed");
  }
}

// Step 2: Poll for result + decode outputs
export async function getSubmissionResult(token) {
  const decode = (str) =>
    str ? Buffer.from(str, "base64").toString("utf8") : null;
  let data;

  try {
    do {
      await new Promise((r) => setTimeout(r, 1000));
      const res = await axios.get(`${BASE_URL}/${token}?base64_encoded=true`, {
        headers: HEADERS,
      });
      data = res.data;
      console.log("🟡 Judge0 status:", data.status?.description);
    } while (!data.status || data.status.id <= 2);

    return {
      status: data.status?.description,
      stdout: decode(data.stdout),
      stderr: decode(data.stderr),
      compile_output: decode(data.compile_output),
    };
  } catch (err) {
    console.error(
      "❌ Error fetching result:",
      err.response?.status,
      err.response?.data
    );
    throw new Error("Failed to retrieve Judge0 result");
  }
}
