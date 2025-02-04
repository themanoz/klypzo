import { NextRequest, NextResponse } from "next/server";
import { ElevenLabsClient } from "elevenlabs";
import { Readable } from "stream";
import { Buffer } from "buffer";

const client = new ElevenLabsClient({ apiKey: "process.env.ELEVENLABS_API_KEY" });

async function streamToBuffer(stream: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  try {
    console.log("Inside post route of text-speech");
    const { script, voiceId } = await req.json();

    console.log("Script: ", script + "Voice ID: " + voiceId);

    if (!script || !voiceId) {
      return NextResponse.json(
        { error: "Script and voiceId are required" },
        { status: 400 }
      );
    }

    const audioStream = await client.textToSpeech.convert(voiceId, {
      text: script,
      model_id: "eleven_multilingual_v2",
      output_format: "mp3_44100_128",
    });
    console.log("Audio from elevenlabs: ", audioStream);

    const audioBuffer = await streamToBuffer(audioStream as Readable);

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": "inline; filename=audio.mp3",
      },
    });
  } catch (error) {
    console.error("Error generating audio:", error);
    return NextResponse.json(
      { error: "Failed to generate audio" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log("inside voices route");
    if (!process.env.ELEVENLABS_API_KEY) {
      throw new Error("API key is missing");
    }

    // console.log("API KEY: ", process.env.ELEVENLABS_API_KEY);
    const response = await client.voices.getAll();
    // console.log("Voices: ", response.voices);

    return NextResponse.json(
      { message: "Fetched the voices", voices: response.voices },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching voices:", error);
    return NextResponse.json(
      { message: "Error fetching voices from ElevenLabs" },
      { status: 500 }
    );
  }
}
