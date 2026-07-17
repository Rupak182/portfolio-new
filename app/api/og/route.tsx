import { ImageResponse } from "next/og";
import { blog } from "@/lib/source";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slugParam = searchParams.get("slug");

    if (!slugParam) {
      return new Response("Missing slug", { status: 400 });
    }

    const slug = slugParam.split("/");
    const page = blog.getPage(slug);

    if (!page) {
      return new Response("Blog post not found", { status: 404 });
    }

    const title = page.data.title;
    const description = page.data.description || "";

    return new ImageResponse(
      (
        <div
          style={{
            background: "#fafafa",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "80px",
            border: "20px solid #09090b",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 500,
                color: "#737373",
                marginBottom: "20px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Blog
            </div>
            <div
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "#09090b",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#737373",
                lineHeight: 1.4,
                maxWidth: "900px",
              }}
            >
              {description}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
              color: "#737373",
            }}
          >
            <span>@rupak182</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
