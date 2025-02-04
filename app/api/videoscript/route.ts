import { chatSession } from "@/lib/ai";
import { NextResponse, NextRequest } from "next/server";
import Together from "together-ai";

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log(prompt);

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return NextResponse.json({ result: JSON.parse(result.response.text()) });
  } catch (error: any) {
    return NextResponse.json("error", error);
  }
}
