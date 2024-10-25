import Movie from "@/components/movie";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
  

interface Movie {
	id: number;
	title: string;
	release_date: string;
    poster_path: string;
}

async function  fetchTrending(): Promise<Movie[]> {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`
    }
  })
  const data = await res.json();
  return data.results
}

async function  fetchPopular(): Promise<Movie[]> {
	const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
	  headers: {
		Authorization: `Bearer ${process.env.TMDB_TOKEN}`
	  }
	})
	const data = await res.json();
	return data.results
  }

export default async function Home() {
	const trending = await fetchTrending();
	const popular = await fetchPopular();

	return (
		<div>
			<h2 className="text-lg font-bold pb-2 mb-4 border-b">Trending</h2>
			<Carousel
				className="overflow-x-scroll relative"
				style={{scrollbarWidth: "none"}}>
				<CarouselContent>
					{trending.map(movie => {
						return (
							<CarouselItem className="md:basis-1/2 lg:basis-1/5">
								<Movie key={movie.id} movie={movie}/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious/>
				<CarouselNext/>
			</Carousel>

			<h2 className="text-lg font-bold pb-2 mb-4 border-b">Popular</h2>
			<Carousel
				className="overflow-x-scroll relative"
				style={{scrollbarWidth: "none"}}>
				<CarouselContent>
					{popular.map(movie => {
						return (
							<CarouselItem className="md:basis-1/2 lg:basis-1/5">
								<Movie key={movie.id} movie={movie}/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious/>
				<CarouselNext/>
			</Carousel>
		</div>
	);
}