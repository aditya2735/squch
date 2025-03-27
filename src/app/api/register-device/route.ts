import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { token } = await req.json();
        console.log("📲 Device Token Received:", token);
        
        // Here, save the token to your database (e.g., Firebase, MongoDB, PostgreSQL)
        return NextResponse.json({ success: true, message: "Token registered successfully!" });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
    }
}
