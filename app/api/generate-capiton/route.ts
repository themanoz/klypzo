import { AssemblyAI } from "assemblyai";
import { NextRequest, NextResponse } from "next/server";

const client = new AssemblyAI({
  apiKey: process.env.CAPTION_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { audioFileUrl } = await req.json();

    if (!audioFileUrl) {
      console.log("No audioFileUrl provided");
      return NextResponse.json({ message: "audioFileUrl is required" }, { status: 400 });
    }
    console.log("Received audioFileUrl: ", audioFileUrl);

    if (!process.env.CAPTION_API_KEY) {
      console.log("API key is missing");
      return NextResponse.json({ message: "API key is missing" }, { status: 400 });
    }

    const data = {
      audio: audioFileUrl,
    };

    const transcript = await client.transcripts.transcribe(data);

    console.log("Transcript from AssemblyAI: ", transcript);

    return NextResponse.json({ result: transcript.words });
  } catch (error) {
    console.error("Error in generate-caption route:", error);
    return NextResponse.json({ message: "Error processing the request" }, { status: 500 });
  }
}
