import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const POST = async (req: NextRequest) => {
  try {
    const { question } = await req.json();

    const result = await axios.post(
      "https://fju-test3.cognitiveservices.azure.com/language/:query-knowledgebases?projectName=shelly-search-test&api-version=2021-10-01",
      {
        question,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "fde6fc08d2e14a71b844af69aeea65f7",
        },
      }
    );
    return NextResponse.json({ message: result.data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};
