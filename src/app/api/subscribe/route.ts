import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const subscription = await request.json();
    try {
        console.log("subscription recevied", subscription);
        return NextResponse.json({ message: "Subscription saved" });
    } catch (error) {
        console.error("Error handling subscription:", error);
        return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 });
    }
}