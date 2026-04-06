import { useState } from "react";
import Header from "./components/header/header";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/data";

export default function App() {
  const [news, setNews] = useState(newsData);
  const getKeywords = (event) => {
    console.log(event.target.value);
    let keywords = (event.target.value);
    let filtered = newsData.filter(item => {
      return item.title.indexOf(keywords) > -1;
    })
    setNews(filtered);
  }
  return (
    <>
    <Header  getKeywords={getKeywords}/>
    <NewsList  news={news}/>
    </>
  )
}   