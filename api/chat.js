export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-5-nano",
        input: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("OpenAI Response:", JSON.stringify(data, null, 2));

    const reply =
      data.output?.[0]?.content?.find(
        (item) => item.type === "output_text"
      )?.text || "कोई उत्तर नहीं मिला।";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
}
