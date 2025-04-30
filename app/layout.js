'use client'

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <html lang="en">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;1,900&family=Prompt:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <nav>
          <div className="container_first_line_nav">
            <Link href="#">
              <div className="logo"/>
            </Link>
            <div className="conSeach"><input type="text" placeholder="ค้นหา" className="seachBar"/></div>
            <div style={{display: "flex", gap: "1rem"}}>
            <Link href="#" style={{display: "flex"}}>
              <Image className="img_nav imgLotto" src="/ic-lotto.png" alt="ตรวจหวย" width={24} height={24}/>
              <span className="textTop">ตรวจหวย</span>
            </Link>              
            <Link href="#" style={{display: "flex"}}>
              <Image className="img_nav" src="/wetv.svg" alt="ตรวจหวย" width={24} height={24}/>
              <span className="textTop">WeTV</span>
            </Link>              
            <Link href="#" style={{display: "flex"}}>
              <Image className="img_nav imgPubg" src="/pubg.png" alt="ตรวจหวย" width={24} height={24}/>
              <span className="textTop">เล่นเกมส์</span>
            </Link>              
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", borderBottom: "5px solid red",}}>
            <div style={{display: "flex"}}>
              <Link className="headTopicHome bgt-1" href="">หน้าแรก</Link>
              <Link className="headTopic bgt-2" href="">เรื่องฮอต</Link>
              <Link className="headTopic bgt-3" href="">ข่าว</Link>
              <Link className="headTopic bgt-4" href="">ข่าวบันเทิง</Link>
              <Link className="headTopic bgt-5" href="">กีฬา</Link>
              <Link className="headTopic bgt-6" href="">รถยนต์</Link>
              <Link className="headTopic bgt-7" href="">ไอที</Link>
              <Link className="headTopic bgt-8" href="">ดูดวง</Link>
              <Link className="headTopic bgt-9" href="">วัยรุ่น</Link>
              <Link className="headTopic bgt-10" href="">ไลฟ์สไตล์</Link>
              <Link className="headTopic bgt-11" href="">เศรษฐกิจ</Link>
              <Link className="headTopic bgt-12" href="">คลิป</Link>
              <Link className="headTopic bgt-13" href="">Exclusive WeTV</Link>
            </div> 
            <div>
            <button onClick={toggleDropdown}>Drop</button>
            </div>
          </div>
          <div className={`dropDownContentContainer ${isDropdownVisible ? "show" : ""}`}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
              <div className="allContentDrop">
                <h3 className="textHeadContent">ข่าว</h3>
                <Link className="textTopic" href="#">เรื่องฮอต<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ข่าว<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ข่าวบันเทิง<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ข่าวกีฬา<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ข่าวเศรษฐกิจ<span className="span_1">{'  >'}</span></Link>
              </div>
              <div className="allContentDrop liner">
                <h3 className="textHeadContent">ดูดวง - ตรวจหวย</h3>
                <Link className="textTopic" href="#">ดูดวง<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">หวยไทย<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">สถิติหวยไทย<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">หวยลาว<span className="span_1">{'  >'}</span></Link>
              </div>
              <div className="allContentDrop liner">
                <h3 className="textHeadContent">ไลฟ์สไตล์</h3>
                <Link className="textTopic" href="#">ผู้หญิง<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ผู้ชาย<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">วัยรุ่น<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ไอที<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">รถยนต์<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">สุขภาพ<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">เที่ยว-กิน<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">Sanook Choice<span className="span_1">{'  >'}</span></Link>
              </div>
              <div className="allContentDrop liner">
                <h3 className="textHeadContent">บันเทิงครบรส</h3>
                <Link className="textTopic" href="#">หนัง-ละคร <span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">เพลง<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">เกมส์<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">คลิป<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">พอดแคสต์<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ดูทีวี<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">WeTV<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">Exclusive WeTV<span className="span_1">{'  >'}</span></Link>
              </div>
              <div className="allContentDrop liner">
                <h3 className="textHeadContent">ความรู้รอบตัว</h3>
                <Link className="textTopic" href="#">พจนานุกรม<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">ฮาวทู<span className="span_1">{'  >'}</span></Link>
                <Link className="textTopic" href="#">กูรู-รอบรู้<span className="span_1">{'  >'}</span></Link>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "3rem"}}>
              <div style={{display: "flex",gap: "1rem"}}>
                <button className="btn_01">แนะนำติชม แจ้งปัญหาการใช้งาน</button>
                <button className="btn_01">ร่วมงานกับเรา</button>
              </div>
              <div style={{display: "flex", gap: "10px"}}>
                <p className="textTop">ติดตาม สนุก</p>
                <Link href=""><Image src="/communication.png" width={24} height={24} alt="facebook"/></Link>
                <Link href=""><Image src="/twitter.png" width={24} height={24} alt="twitter"/></Link>
                <Link href=""><Image src="/instagram.png" width={24} height={24} alt="instagram"/></Link>
                <Link href=""><Image src="/youtube.png" width={24} height={24} alt="youtube"/></Link>
                <Link href=""><Image src="/linkedin.png" width={24} height={24} alt="linkedin"/></Link>
                <Link href=""><Image src="/tiktok.png" width={24} height={24} alt="tiktok"/></Link>
              </div>
            </div>
          </div>
        </nav>
        <div className={`${isDropdownVisible ? "hideChild" : "showChild"}`}>{children}</div>
      </body>
    </html>
  );
}
