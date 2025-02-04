import { NextRequest, NextResponse } from "next/server";
import Together from "together-ai";

const together = new Together({
  apiKey: "process.env.TOGETHER_API_KEY",
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const response = await together.images.create({
        prompt,
        model: "black-forest-labs/FLUX.1-schnell-Free",
        steps: 3,
        n: 3
    })

    const images = response.data.map((img) => img.url);

    return NextResponse.json(
        {message: "Image generated successfully", images},
        {status: 200}
    )

  } catch (error) {
    console.error("error",error);
    return NextResponse.json(
        {message: "Error generating image"}
    )
  }
}
