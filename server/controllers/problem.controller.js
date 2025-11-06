async function runCode(req, res) {
  const { code, language } = req.body;
  if (code) {
    console.log(code);
  } else {
    console.log("no code found");
  }

  res.json({
    code,
    language,
  });
}

module.exports = { runCode };
