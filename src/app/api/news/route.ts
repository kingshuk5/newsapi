import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Use absolute path from public/
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/data.json`);
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json({ message: "Error reading data" }, { status: 500 });
  }
}



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
