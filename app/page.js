'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThaiDate from "@/components/ThaiDate";
import TimeAgo from "@/components/TimeUpload";
import newsData from "@/db/news_data";
import Style from "./Home.module.css";
import getCategoryColor from '@/components/CategoryColor';
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // เพิ่มทิศทาง

  const topNews = newsData
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const topNewsSide = newsData
    .sort((a, b) => b.views - a.views)
    .slice(5, 9);

  const handleSlideChange = (dir) => {
    setDirection(dir);
    setSlideIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return topNews.length - 1;
      if (next >= topNews.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = topNews[slideIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 520 : -520,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -520 : 520,
      opacity: 0
    })
  };

  // Sort News update 
  const [visibleCount, setVisibleCount] = useState(8);

  const sortedNews = newsData.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  const visibleNews = sortedNews.slice(0, visibleCount);

  return (
    <main>
      <div className={Style.headContainerHotTopic} >
        <h1 className={Style.headTopic}>เรื่องเด่นวันนี้</h1>
        <p style={{ fontSize: "13px", paddingTop: "7px" }}><ThaiDate /></p>
      </div>

      <div className={Style.containerShowSlide} >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={slideIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Link href="" className={Style.hotTopic}>
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  width={600}
                  height={360}
                  className={Style.imgHotTopic}
                />
                <div className={Style.gradient_overlay}></div>

                <div style={{ position: "relative", marginTop: "1rem" }}>
                  <h2 className={Style.HotTopicH2}>{currentItem.title}</h2>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 10px" }}>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <p style={{ backgroundColor: getCategoryColor(currentItem.category) }} className={Style.typeNewsHotTopic}>{currentItem.category}</p>
                      <p style={{ fontSize: "15px" }}>
                        <TimeAgo timestamp={currentItem.timestamp} />
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {topNews.map((_, i) => (
                        <span key={i} style={{ fontSize: "12px", color: i === slideIndex ? "#000" : "#ccc" }}>{i + 1}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => handleSlideChange(-1)} className={Style.prevHotTopic}>&lt;</button>
          <button onClick={() => handleSlideChange(1)} className={Style.nextHotTopic}>&gt;</button>
        </div>

        <div className={Style.containerHotTopic2} style={{  }}>
          {topNewsSide.map((item, index) => (
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
                <h3 className={Style.newsTitle}>{item.title}</h3>
                <p style={{ color: getCategoryColor(item.category), fontSize: "12px" }}>
                  <span style={{ color: "#888", fontSize: "10px" }}>
                    <TimeAgo timestamp={item.timestamp} />
                  </span> {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{marginTop: "2rem"}}>
        <h1 className={Style.headTopic} style={{borderBottom: "5px solid red", marginBottom: "2rem"}}>อัปเดตล่าสุด</h1>
        <div className={Style.containerUpdateNews}>
            {visibleNews.map((item, index) => (
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
                  <h3 className={Style.newsTitle}>{item.title}</h3>
                  <p style={{ color: getCategoryColor(item.category), fontSize: "12px" }}>
                    <span style={{ color: "#888", fontSize: "10px" }}>
                      <TimeAgo timestamp={item.timestamp} />
                    </span> {item.category}
                  </p>
                </div>
              </Link>
            ))}
        </div>
        {visibleCount < sortedNews.length && (
          <button className={Style.btnPlusUpdate} onClick={() => setVisibleCount(prev => prev + 8)}>
            แสดงเพิ่มเติม
          </button>
        )}
      </div>

    </main>
  );
}
