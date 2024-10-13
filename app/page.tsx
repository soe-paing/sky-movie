async function  fetchTrending() {
  const res = await fetch("");
  {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`
    }
  }
  return res.json();
}

export default function Home() {

  const images = "http:/"

  return <div>
    <h2 className="text-lg font-bold pb-2 mb-4 border-b">Trending</h2>

  </div>
}