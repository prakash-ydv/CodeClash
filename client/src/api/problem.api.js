import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export async function runCode(code, ideLang) {
  const res = await axios.post(`${baseURL}/problem/run`, {
    language: ideLang,
    code,
  });

  console.log(res.data);
}
