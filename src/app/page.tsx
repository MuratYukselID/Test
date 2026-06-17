import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Geometric background pattern */}
      <div className="geo-pattern" aria-hidden="true" />

      {/* Decorative vertical lines */}
      <div className={styles.decorLineLeft} aria-hidden="true" />
      <div className={styles.decorLineRight} aria-hidden="true" />

      {/* Floating decorative dots */}
      <div className={styles.floatingDot} aria-hidden="true" />
      <div className={styles.floatingDot} aria-hidden="true" />
      <div className={styles.floatingDot} aria-hidden="true" />
      <div className={styles.floatingDot} aria-hidden="true" />

      <main className={styles.page} id="main-content">
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <div className={styles.logoGlow} aria-hidden="true" />
            <Image
              src="/images/logo.jpg"
              alt="Sakarya Mimarlık Logo"
              width={160}
              height={280}
              className={styles.logo}
              priority
            />
          </div>

          {/* Title & Subtitle */}
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              Yakında{" "}
              <span className={styles.titleAccent}>Açılıyoruz</span>
            </h1>
            <p className={styles.subtitle}>
              Modern mimari çözümler ve yaratıcı tasarım anlayışıyla
              projelerinize değer katmak için hazırlanıyoruz.
            </p>
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden="true" />

          {/* Countdown Timer */}
          <section className={styles.countdownSection} aria-label="Açılış geri sayımı">
            <p className={styles.countdownLabel}>Açılışa Kalan Süre</p>
            <CountdownTimer />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2026{" "}
          <span className={styles.footerBrand}>Sakarya Mimarlık</span>.
          Tüm hakları saklıdır.
        </p>
      </footer>
    </>
  );
}
