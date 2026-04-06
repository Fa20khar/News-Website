export default function NewsItems({ item }) {
  return (
    <>
    <div className="news_item">
            <h2>{item.title}</h2>
            <p>{item.feed}</p>
        </div>
    </>
  )
}   