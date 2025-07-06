import type { Letter, Missionary, Verse as VerseType } from "../types";

// Base URL da API, usar secrets de env para mudar entre dev e prod
const API_URL = "http://localhost:3000";

export const popularVerses: VerseType[] = [];

// Listar missionarios da API
export const fetchMissionaries = async (): Promise<Missionary[]> => {
  try {
    const response = await fetch(`${API_URL}/missionaries`);
    if (!response.ok) {
      throw new Error("Falha ao buscar missionários");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar missionários:", error);
    return [];
  }
};

// Listar todas as cartas da API
export const fetchLetters = async (): Promise<Letter[]> => {
  try {
    const response = await fetch(`${API_URL}/letters`);
    if (!response.ok) {
      throw new Error("Falha ao buscar cartas");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar cartas:", error);
    return [];
  }
};

// Salvar uma carta específica via API
export const saveLetterToAPI = async (letter: Letter): Promise<Letter> => {
  try {
    const response = await fetch(`${API_URL}/letters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letter),
    });

    if (!response.ok) {
      throw new Error("Falha ao salvar carta");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao salvar carta:", error);
    throw error;
  }
};

// Listar Versos Biblicos da API
export const fetchVerses = async (): Promise<VerseType[]> => {
  try {
    const response = await fetch(`${API_URL}/verses`);
    if (!response.ok) {
      throw new Error("Falha ao buscar versículos");
    }
    const verses = await response.json();
    // Atualiza o array popularVerses exportado para acesso direto
    Object.assign(popularVerses, verses);
    return verses;
  } catch (error) {
    console.error("Erro ao buscar versículos:", error);
    return [];
  }
};