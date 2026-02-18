const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function handleResponse(res) {
  const text = await res.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text };
  }

  if (!res.ok) {
    const rawMsg = data?.message || data?.error || `HTTP ${res.status}`;
    const isHtml =
      typeof rawMsg === "string" && /<html|<!doctype/i.test(rawMsg);
    const safeMsg = isHtml
      ? `Error ${res.status}: endpoint no encontrado o respuesta no válida`
      : rawMsg;
    throw new Error(safeMsg);
  }
  return data;
}

export async function get(path) {
  if (!BASE_URL) throw new Error("VITE_API_BASE_URL no está definida");
  const res = await fetch(`${BASE_URL}${path}`);

  return handleResponse(res);
}

export async function post(path, body) {
  if (!BASE_URL) throw new Error("VITE_API_BASE_URL no está definida");

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return handleResponse(res);
}
