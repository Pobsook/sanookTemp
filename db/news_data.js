// data ต้องมี data = [{รูป, เวลาที่ลง, รายละเอียดข่าว, ลักษณะข่าว }]

const newsData = [
    // ข่าวทั่วไป
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T09:00:00Z",
      title: "นายกฯ แถลงด่วน รับมือวิกฤตเศรษฐกิจโลก",
      category: "ข่าว",
      views: 10200
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T11:30:00Z",
      title: "ไฟไหม้โรงงานย่านปทุมธานี เสียหายหลายล้าน",
      category: "ข่าว",
      views: 8600
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T15:45:00Z",
      title: "ตำรวจจับแก๊งมิจฉาชีพออนไลน์ได้ยกทีม",
      category: "ข่าว",
      views: 9100
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T20:10:00Z",
      title: "ประกาศวันหยุดยาวพิเศษ 3 วันในเดือนหน้า",
      category: "ข่าว",
      views: 7400
    },
  
    // ข่าวบันเทิง
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T07:15:00Z",
      title: "ดาราดังเปิดตัวแฟนใหม่กลางไอจี",
      category: "ข่าวบันเทิง",
      views: 13000
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T17:00:00Z",
      title: "นักร้องดังเตรียมจัดคอนเสิร์ตใหญ่ปลายปีนี้",
      category: "ข่าวบันเทิง",
      views: 10500
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T22:30:00Z",
      title: "พิธีกรดังโพสต์ซึ้งหลังแม่จากไป",
      category: "ข่าวบันเทิง",
      views: 9700
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T13:40:00Z",
      title: "รวมลุคสุดปังพรมแดงงานประกาศรางวัล",
      category: "ข่าวบันเทิง",
      views: 11000
    },
  
    // กีฬา
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T03:00:00Z",
      title: "ไทยคว้าเหรียญทอง SEA Games 2025",
      category: "กีฬา",
      views: 9800
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T14:10:00Z",
      title: "บัวขาวเตรียมคืนสังเวียนอีกครั้ง",
      category: "กีฬา",
      views: 8800
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T19:00:00Z",
      title: "ลิเวอร์พูลชนะรวด 5 นัดติด ศึกพรีเมียร์ลีก",
      category: "กีฬา",
      views: 11800
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T16:30:00Z",
      title: "นักวอลเลย์สาวไทยโชว์ฟอร์มเฉียบในลีกญี่ปุ่น",
      category: "กีฬา",
      views: 9200
    },
  
    // เศรษฐกิจ
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T06:20:00Z",
      title: "เงินบาทแข็ง! นักลงทุนแห่ซื้อทองคำ",
      category: "เศรษฐกิจ",
      views: 7000
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T08:40:00Z",
      title: "ราคาน้ำมันดิบพุ่งสูงสุดในรอบปี",
      category: "เศรษฐกิจ",
      views: 8700
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T10:00:00Z",
      title: "เปิดตัวหุ้นน้องใหม่ IPO กลุ่มเทคฯ",
      category: "เศรษฐกิจ",
      views: 9300
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T09:50:00Z",
      title: "นักวิเคราะห์แนะเก็บหุ้นกลุ่มพลังงาน",
      category: "เศรษฐกิจ",
      views: 6900
    },
  
    // ดูดวง
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T01:20:00Z",
      title: "4 ราศีรับทรัพย์ใหญ่ มีโชคจากการเดินทาง",
      category: "ดูดวง",
      views: 8200
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T12:30:00Z",
      title: "ดวงความรัก 12 ราศี เดือนพฤษภาคม",
      category: "ดูดวง",
      views: 7500
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T15:00:00Z",
      title: "ราศีไหนเสี่ยงต้องระวังการเงิน",
      category: "ดูดวง",
      views: 6700
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T18:10:00Z",
      title: "เปิดดวงไพ่ยิปซี รายสัปดาห์",
      category: "ดูดวง",
      views: 7200
    },
  
    // วัยรุ่น
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T04:40:00Z",
      title: "วัยรุ่นแชร์ประสบการณ์สอบติดแพทย์",
      category: "วัยรุ่น",
      views: 6300
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T21:00:00Z",
      title: "รีวิวชีวิตหอมหาลัยปี 1 สุดปัง!",
      category: "วัยรุ่น",
      views: 5400
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T12:00:00Z",
      title: "กิจกรรมวัยรุ่นสุดคูลช่วงสงกรานต์",
      category: "วัยรุ่น",
      views: 5900
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T15:45:00Z",
      title: "5 แอปที่วัยรุ่นไทยใช้มากที่สุดปีนี้",
      category: "วัยรุ่น",
      views: 6700
    },
  
    // ไลฟ์สไตล์
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T07:45:00Z",
      title: "7 ร้านอาหารเปิดใหม่ ห้ามพลาด!",
      category: "ไลฟ์สไตล์",
      views: 9100
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T10:20:00Z",
      title: "จัดบ้านตามหลักฮวงจุ้ย เพิ่มพลังบวก",
      category: "ไลฟ์สไตล์",
      views: 6000
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T16:30:00Z",
      title: "ทริปเที่ยวภาคเหนือ 3 วัน 2 คืน",
      category: "ไลฟ์สไตล์",
      views: 7300
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-26T08:00:00Z",
      title: "เทรนด์แฟชั่นหน้าร้อน 2025",
      category: "ไลฟ์สไตล์",
      views: 8100
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T13:30:00Z",
      title: "กรมอุตุฯ เตือนพายุฤดูร้อนเข้าไทยตอนบน",
      category: "ข่าว",
      views: 8900
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T05:00:00Z",
      title: "ประชาชนแห่ลงทะเบียนสวัสดิการแห่งรัฐรอบใหม่",
      category: "ข่าว",
      views: 8100
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T08:30:00Z",
      title: "ครม. อนุมัติงบฟื้นฟูหลังน้ำท่วม",
      category: "ข่าว",
      views: 7700
    },
  
    // ข่าวบันเทิง (เพิ่ม)
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T10:10:00Z",
      title: "นักแสดงวัยรุ่นประกาศหมั้นกลางงานแฟนมีต",
      category: "ข่าวบันเทิง",
      views: 9400
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T18:45:00Z",
      title: "ผู้กำกับดังเผยเบื้องหลังหนังฮิตพันล้าน",
      category: "ข่าวบันเทิง",
      views: 8700
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T20:20:00Z",
      title: "วงเกิร์ลกรุ๊ปไทยติดชาร์ต Billboard Asia",
      category: "ข่าวบันเทิง",
      views: 9900
    },
  
    // กีฬา (เพิ่ม)
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T02:00:00Z",
      title: "แข้งไทยย้ายร่วมทีมดังในยุโรป",
      category: "กีฬา",
      views: 8600
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T09:50:00Z",
      title: "นักแบดไทยคว้าชัยในศึกชิงแชมป์เอเชีย",
      category: "กีฬา",
      views: 9300
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T14:20:00Z",
      title: "เปิดตารางแข่งขันวอลเลย์บอลหญิงทีมชาติ",
      category: "กีฬา",
      views: 7500
    },
  
    // เศรษฐกิจ (เพิ่ม)
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T12:40:00Z",
      title: "เศรษฐกิจไทย Q1 ขยายตัวเกินคาด",
      category: "เศรษฐกิจ",
      views: 9500
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T15:30:00Z",
      title: "บิตคอยน์พุ่งแตะ 1.5 ล้านต่อเหรียญ",
      category: "เศรษฐกิจ",
      views: 9900
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T09:25:00Z",
      title: "IMF ชี้แนวโน้มเศรษฐกิจเอเชียยังสดใส",
      category: "เศรษฐกิจ",
      views: 8100
    },
  
    // ดูดวง (เพิ่ม)
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T00:00:00Z",
      title: "ทำนายฝันเลขเด็ด งวดถัดไป",
      category: "ดูดวง",
      views: 6700
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T19:00:00Z",
      title: "4 ราศีดวงงานพุ่งแรง ปลายเดือนนี้",
      category: "ดูดวง",
      views: 6900
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T11:30:00Z",
      title: "เคล็ดลับเสริมโชคลาภตามวันเกิด",
      category: "ดูดวง",
      views: 7100
    },
  
    // วัยรุ่น (เพิ่ม)
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T05:30:00Z",
      title: "วัยรุ่นจัดแฟลชม็อบประเด็นสิ่งแวดล้อม",
      category: "วัยรุ่น",
      views: 6600
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T13:30:00Z",
      title: "รีวิวค่ายติวเข้มติดหมอสุดเข้มข้น",
      category: "วัยรุ่น",
      views: 5800
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T17:45:00Z",
      title: "5 เคล็ดลับทำพอร์ตนักเรียนม.ปลาย",
      category: "วัยรุ่น",
      views: 6400
    },
  
    // ไลฟ์สไตล์ (เพิ่ม)
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-29T08:20:00Z",
      title: "10 คาเฟ่นั่งทำงานในกรุงเทพสุดชิค",
      category: "ไลฟ์สไตล์",
      views: 7800
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-28T06:00:00Z",
      title: "สอนทำสมูทตี้สายคลีน ง่ายแค่ 5 นาที",
      category: "ไลฟ์สไตล์",
      views: 6700
    },
    {
      image: "/images/ExPic.jpg",
      timestamp: "2025-04-27T13:10:00Z",
      title: "จัดสวนหลังบ้านสไตล์มินิมอล",
      category: "ไลฟ์สไตล์",
      views: 6900
    }

  ];

  export default newsData;