import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { contactSchema } from "@/lib/validations"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (body.website) {
      return NextResponse.json({ ok: true })
    }

    const parsed = contactSchema.safeParse({
      name: body.name,
      email: body.email,
      message: body.message,
    })

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid form data." },
        { status: 400 }
      )
    }

    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    })

    if (error) {
      console.error(error)
      return NextResponse.json(
        { error: "Failed to store message." },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    )
  }
}
