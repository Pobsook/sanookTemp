'use client'
import { useState, useEffect } from "react";

export default function useThaiDate() {
  const [thaiDate, setDate] = useState("")
  useEffect(() => {
    const now = new Date();
    const weekday = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    const months = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    const dayName = weekday[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear() + 543;

    setDate(`วัน${dayName} ที่ ${day} ${month} ${year}`);
  }, [setDate]);

  return thaiDate;
}