"use client";

import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2026-07-01T00:00:00+03:00").getTime();

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function padNumber(num: number): string {
  return String(num).padStart(2, "0");
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setIsMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // SSR placeholder to avoid hydration mismatch
  if (!isMounted || !timeLeft) {
    return (
      <div className={styles.countdown} aria-label="Geri sayım sayacı">
        <div className={styles.unit}>
          <div className={styles.numberWrapper}>
            <span className={styles.number}>--</span>
          </div>
          <span className={styles.label}>Gün</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.unit}>
          <div className={styles.numberWrapper}>
            <span className={styles.number}>--</span>
          </div>
          <span className={styles.label}>Saat</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.unit}>
          <div className={styles.numberWrapper}>
            <span className={styles.number}>--</span>
          </div>
          <span className={styles.label}>Dakika</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.unit}>
          <div className={styles.numberWrapper}>
            <span className={styles.number}>--</span>
          </div>
          <span className={styles.label}>Saniye</span>
        </div>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Gün" },
    { value: timeLeft.hours, label: "Saat" },
    { value: timeLeft.minutes, label: "Dakika" },
    { value: timeLeft.seconds, label: "Saniye" },
  ];

  return (
    <div
      className={styles.countdown}
      role="timer"
      aria-label="Açılış geri sayımı"
      aria-live="polite"
    >
      {units.map((unit, index) => (
        <div key={unit.label} className={styles.unitGroup}>
          <div className={styles.unit}>
            <div className={styles.numberWrapper}>
              <span className={styles.number} key={unit.value}>
                {padNumber(unit.value)}
              </span>
            </div>
            <span className={styles.label}>{unit.label}</span>
          </div>
          {index < units.length - 1 && (
            <span className={styles.separator}>:</span>
          )}
        </div>
      ))}
    </div>
  );
}
