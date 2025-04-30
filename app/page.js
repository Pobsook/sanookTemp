'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThaiDate from "@/components/ThaiDate";
import TimeAgo from "@/components/TimeUpload";
import newsData from "@/db/news_data"

export default function Home() {
  const [thaiDate, setThaiDate] = useState("");
  const [timeAgoText, setTimeAgoText] = useState("");

  const timestamp = new Date(new Date().getTime() - 2 * 60 * 60 * 1000);

  const topNews = newsData
  .sort((a, b) => b.views - a.views)
  .slice(5, 9);

  return (
    <main>
      <ThaiDate setDate={setThaiDate} />

      <TimeAgo timestamp={timestamp} timeShow={setTimeAgoText} />

      <div style={{ display: "flex", gap: "1rem", alignItems: "center", margin: "2rem 0" }}>
        <h1>เรื่องเด่นวันนี้</h1>
        <p>{thaiDate}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", height: "65vh" }}>
        <Link href="" style={{
          display: "grid",
          gridTemplateRows: "6.5fr 3.5fr",
          height: "65vh",
          border: "1px solid #b6b6b6",
          borderRadius: "10px",
          marginRight: "5px"
          
        }}>
          <Image
            src="/images/ExPic.jpg"
            alt="news"
            width={600}
            height={360}
            style={{ objectFit: "cover", borderRadius: "5px"}}
          />
          <div style={{ position: "relative", marginTop: "1rem" }}>
            <h2 style={{
              fontSize: "27px",
              marginInline: "10px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              คอนเทนต์ตัวอย่าง! เด็กเก็บขยะขอบคุณผู้ติดตาม จากแค่ 200 ตอนนี้ยอดพุ่งไปไกลมาก (มีคลิป)
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 10px" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <p style={{backgroundColor: "red", color: "white", padding: "2px", borderRadius: "10px", fontSize: "14px"}}>ข่าวบันเทิง</p>
                <p style={{fontSize: "15px"}}>{timeAgoText}</p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{fontSize: "12px"}}>1</span>
                <span style={{fontSize: "12px"}}>2</span>
                <span style={{fontSize: "12px"}}>3</span>
                <span style={{fontSize: "12px"}}>4</span>
                <span style={{fontSize: "12px"}}>5</span>
              </div>
            </div>
          </div>
        </Link>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr"}}>
          {topNews.map((item, index) => (
            <Link href="" key={index} style={{
              borderRadius: "8px",
              overflow: "hidden",
              margin: "0 5px 5px 5px"
            }}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={180}
                style={{ objectFit: "cover", width: "300px", height: "180px" }}
              />
              <div style={{ padding: "8px" }}>
                <h3 style={{
                  fontSize: "14px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "12px", color: "#888" }}>{item.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
