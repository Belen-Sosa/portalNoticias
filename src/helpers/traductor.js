export const traducirTextoAPI = async (texto, from = "en", to = "es") => {
  const response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q: texto, source: from, target: to, format: "text" }),
  });
    if (!response.ok) throw new Error("Error al traducir");
    const data = await response.json();
    return data.translatedText;
  };