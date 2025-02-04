import { chatSession } from "@/lib/ai";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log(prompt);

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return NextResponse.json({ result: JSON.parse(result.response.text()) });
  } catch (error) {
    console.error("Error creating folder", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { message: `Failed to generate videoScript: ${errorMessage}` },
      { status: 500 }
    );
  }
}
