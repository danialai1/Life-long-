import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "" });

export async function POST(req: Request) {
  try {
    const { goal, diet, calories, meals, allergies } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `You are Danial AI Fitness Coach. User details: Goal: ${goal}, Diet Preference: ${diet}, Target Calories: ${calories}, Meals per day: ${meals}, Allergies: ${allergies}. 
      Generate a complete daily meal plan with macros, recipes, shopping list, and hydration tips in clean markdown with emojis. 
      Include a "Next week upgrade" section. Keep it motivating and realistic.`,
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Nutrition generation error:", error);
    return NextResponse.json({ error: "Failed to generate nutrition plan" }, { status: 500 });
  }
}
