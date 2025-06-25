export async function getOpenAIResponse(prompt) {
  const response = await fetch("http://127.0.0.1:8000/process", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: prompt }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Request failed: ${response.status}\n${errorText}`);
  }

  const data = await response.json();
  console.log("Received:", data);

  return data.response;
}
