"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="geo-pattern" aria-hidden="true" />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(4rem, 10vw, 8rem)",
            fontWeight: 700,
            color: "var(--color-primary)",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "var(--color-white)",
            marginBottom: "1rem",
          }}
        >
          Sayfa Bulunamadı
        </h2>
        <p
          style={{
            color: "var(--color-gray-light)",
            fontSize: "1rem",
            maxWidth: "400px",
            marginBottom: "2rem",
            lineHeight: 1.7,
          }}
        >
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 2rem",
            background: "var(--color-primary)",
            color: "var(--color-pure-white)",
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "background 300ms ease, transform 300ms ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "var(--color-primary-light)";
            (e.target as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "var(--color-primary)";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          ← Ana Sayfaya Dön
        </Link>
      </main>
    </>
  );
}
