export async function getData() {
  const res = await fetch('https://clasificaai-backend.onrender.com/');
  return res.json();
}