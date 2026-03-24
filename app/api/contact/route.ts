import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/app/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      vorname,
      nachname,
      email,
      telefon,
      interesse,
      budget,
      investmentVolumen,
      kontaktZeit,
      nachricht,
      // Host-Bewerbung fields
      hostRegion,
      hostFlaeche,
      hostEigentum,
      hostBebauung,
      hostVersorgung,
      hostAnzahl,
    } = body;

    const isHost = interesse === "Host-Bewerbung (Standort / Grundstück)";

    // Build host summary for DB (appended to nachricht field)
    const hostSummary = isHost
      ? `📍 Region: ${hostRegion || "–"} | 📐 Größe: ${hostFlaeche || "–"} | 📜 Eigentum: ${hostEigentum || "–"} | 🗺️ Bebauung: ${hostBebauung || "–"} | ⚡ Versorgung: ${hostVersorgung || "–"} | 🏠 Anzahl THs: ${hostAnzahl || "–"}`
      : null;

    const finalNachricht = [nachricht, hostSummary].filter(Boolean).join("\n\n") || null;

    // 1. Save to Supabase
    const { error: dbError } = await getAdminClient().from("leads").insert([
      {
        vorname,
        nachname,
        email,
        telefon: telefon || null,
        interesse,
        budget: isHost ? null : budget,
        investment_volumen: isHost ? null : (investmentVolumen || null),
        kontakt_zeit: kontaktZeit || null,
        nachricht: finalNachricht,
        status: "neu",
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Datenbankfehler" }, { status: 500 });
    }

    // 2. Send email notification via Resend (non-blocking)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: process.env.RESEND_TO!,
        subject: `🏡 Neue Beratungsanfrage: ${vorname} ${nachname}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
            <div style="background: #15803d; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 20px;">🏡 Neue TinyInvest Anfrage</h1>
            </div>
            <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 160px; font-weight: bold;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${vorname} ${nachname}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">E-Mail</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;"><a href="mailto:${email}" style="color: #15803d;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">Telefon</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${telefon || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">⏰ Erreichbar</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: bold; color: #15803d;">${kontaktZeit || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">Interesse</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${interesse}</td>
                </tr>
                ${isHost ? `
                <tr>
                  <td colspan="2" style="padding: 12px 0 4px 0; font-size: 13px; font-weight: bold; color: #15803d;">🏡 Angaben zum Grundstück / Standort</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">📍 Region / Standort</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${hostRegion || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">📐 Grundstücksgröße</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${hostFlaeche || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">📜 Eigentumsverhältnis</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${hostEigentum || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">🗺️ Bebauungsplan</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${hostBebauung || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">⚡ Versorgung</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${hostVersorgung || "–"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">🏠 Anzahl Tiny Houses</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${hostAnzahl || "–"}</td>
                </tr>
                ` : `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">Asset-Interesse</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${budget}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: bold;">Investitionsvolumen</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${investmentVolumen || "–"}</td>
                </tr>
                `}
                ${nachricht ? `
                <tr>
                  <td style="padding: 10px 0; color: #6b7280; font-size: 14px; font-weight: bold; vertical-align: top;">Nachricht</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #111827;">${nachricht}</td>
                </tr>
                ` : ""}
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #15803d;">
                <p style="margin: 0; font-size: 13px; color: #166534;">
                  ✅ Lead wurde automatisch in deinem <strong>Admin Dashboard</strong> gespeichert.<br/>
                  👉 <a href="https://tinyhouse.investments/admin" style="color: #15803d;">Admin Dashboard öffnen</a>
                </p>
              </div>
            </div>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Resend error (non-fatal):", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
