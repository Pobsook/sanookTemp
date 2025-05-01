'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThaiDate from "@/components/ThaiDate";
import TimeAgo from "@/components/TimeUpload";
import newsData from "@/db/news_data"
import Style from "./Home.module.css"
import getCategoryColor from '@/components/CategoryColor';

export default function Home() {
  const [thaiDate, setThaiDate] = useState("");
  const [timeAgoText, setTimeAgoText] = useState("");

  const timestamp = new Date(new Date().getTime()* 60 * 60 * 1000);

  const topNews = newsData
  .sort((a, b) => b.views - a.views)
  .slice(5, 9);

  return (
    <main>
      <ThaiDate setDate={setThaiDate} />

      <TimeAgo timestamp={timestamp} timeShow={setTimeAgoText} />

      <div style={{ display: "flex", gap: "1rem", alignItems: "center", margin: "2rem 0" }}>
        <h1 style={{ fontSize: "27px", fontWeight: "bold" }}>เรื่องเด่นวันนี้</h1>
        <p style={{fontSize: "13px", paddingTop: "7px"}}>{thaiDate}</p>
      </div>
  
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", height: "65vh" }}>
      <div style={{position: "relative"}}>
        <Link href="" className={Style.hotTopic}>
          <div style={{}}>
            <Image
              src="/images/ExPic.jpg"
              alt="news"
              width={600}
              height={360}
              className={Style.imgHotTopic}
            />
            <div className={Style.gradient_overlay}></div>
          </div>

          <div style={{ position: "relative", marginTop: "1rem" }}>
            <h2 className={Style.HotTopicH2}>
              คอนเทนต์ตัวอย่าง! เด็กเก็บขยะขอบคุณผู้ติดตาม จากแค่ 200 ตอนนี้ยอดพุ่งไปไกลมาก (มีคลิป)
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 10px" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <p className={Style.typeNewsHotTopic}>ข่าวบันเทิง</p>
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
            <span className={Style.prevHotTopic}>&lt;</span>
            <span className={Style.nextHotTopic}>&gt;</span>
        </Link>
      </div>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr"}}>
          {topNews.map((item, index) => (
            <Link href="" key={index} style={{
              borderRadius: "8px",
              overflow: "hidden",
              margin: "0 5px 5px 5px"
            }}>
                <Image
                  className={Style.imgTopic}
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={180}
                />
              <div style={{ padding: "8px" }}>
                <h3 className={Style.newsTitle}>
                  {item.title}
                </h3>
                <p style={{color: getCategoryColor(item.category), fontSize: "12px"}}>
                  <TimeAgo timestamp={item.timestamp} /> {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}