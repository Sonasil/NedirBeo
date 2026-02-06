
import { GoogleGenAI, Type } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY}); as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIExtendedContext = async (term: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Kıbrıs ağzındaki "${term}" kelimesi hakkında derin kültürel bağlam, köken ve ilginç bir anektod paylaş. Kısa ve samimi bir dil kullan.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Üzgünüm, şu an kültürel bağlam oluşturamıyorum. Lütfen daha sonra tekrar deneyin.";
  }
};
