import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "" });

export async function POST(req: Request) {
  try {
    const { goal, level, days, age, focus } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `You are Danial AI Fitness Coach. User details: Age: ${age}, Goal: ${goal}, Experience Level: ${level}, Training Days: ${days}, Focus Area: ${focus}. 
      Generate a detailed, safe, progressive workout plan in clean markdown with emojis. 
      Include a weekly schedule, exact sets/reps, rest times, nutrition tips, and safety warnings. 
      Keep it motivating and realistic. Add estimated calories burned per session and progress tracking tips.`,
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Workout generation error:", error);
    return NextResponse.json({ error: "Failed to generate workout plan" }, { status: 500 });
  }
}
