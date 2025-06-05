export async function getTestResponse() {
  const response = await fetch('http://127.0.0.1:8000/test');
  if (!response.ok) {
    throw new Error('Failed to fetch test response');
  }
  const data = await response.json();
  return data.message;
}
