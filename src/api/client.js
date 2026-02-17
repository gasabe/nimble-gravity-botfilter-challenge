const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function get(path) {
  if (!BASE_URL) throw new Error("VITE_API_BASE_URL no está definida");
  const res = await fetch(`${BASE_URL}${path}`);
  const text = await res.text();

  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text };
  }
  if (!res.ok) {
    const msg = data?.message || data?.error || `HTTP ${res.status}`;
    throw new Error(msg);
  }

  return data;
}
