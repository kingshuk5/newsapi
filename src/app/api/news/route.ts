import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileData);

    const response = NextResponse.json(data, { status: 200 });

    // Set CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*"); // Change "*" to a specific domain if needed
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json({ message: "Error reading data" }, { status: 500 });
  }
}

// Handle preflight requests
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}



// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // Use absolute path from public/
//     const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/data.json`);
//     const data = await response.json();

//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error("Error reading data:", error);
//     return NextResponse.json({ message: "Error reading data" }, { status: 500 });
//   }
// }



// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// export async function GET() {
//   const filePath = path.join(process.cwd(), "data.json");

//   try {
//     const jsonData = fs.readFileSync(filePath, "utf-8");
//     const data = JSON.parse(jsonData);
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error reading data" }, { status: 500 });
//   }
// }
