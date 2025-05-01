export default function getCategoryColor(category) {
    return (
      category === "ข่าว" ? "red" :
      category === "ข่าวบันเทิง" ? "rgb(0, 110, 255)" :
      category === "กีฬา" ? "rgb(0, 255, 21)" :
      category === "ไอที" ? "rgb(73, 219, 255)" :
      category === "ดูดวง" ? "rgb(204, 0, 255)" :
      category === "วัยรุ่น" ? "rgb(255, 174, 0)" :
      category === "ไลฟ์สไตล์" ? "rgb(255, 217, 0)" :
      category === "เศรษฐกิจ" ? "rgb(0, 110, 255)" :
      "#333"
    );
  }