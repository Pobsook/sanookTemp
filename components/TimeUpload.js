'use client'
import { useState, useEffect } from "react"

export default function TimeAgo({ timestamp }) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const now = new Date();
    const postedTime = new Date(timestamp);
    const diffMs = now - postedTime;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) {
      setTimeAgo("เมื่อกี้นี้");
    } else if (minutes < 60) {
      setTimeAgo(`${minutes} นาทีที่แล้ว`);
    } else if (hours < 24) {
      setTimeAgo(`${hours} ชั่วโมงที่แล้ว`);
    } else {
      const days = Math.floor(hours / 24);
      setTimeAgo(`${days} วันที่แล้ว`);
    }
  }, [timestamp]);

  return <span style={{ fontSize: "12px", color: "#888" }}>{timeAgo}</span>;
}
