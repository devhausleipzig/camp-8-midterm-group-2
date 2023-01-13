import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom"; //what for Outlet
import Button from "../components/Button";
import { Credits, MovieDetail, UpcomingMovies } from "../types/api";
import { ReactNode, useState } from "react";
import { posterUrl, upcomingMoviesUrl } from "../utils/movies";

type CurrentData = {
  details: MovieDetail;
  director: string;
  writer: string;
  poster_path: string;
};

export async function loadMovieDetails(loaderObj: any) {
  const movieId = loaderObj.params.movieId;

  try {
    //returns promise; .data takes data
    const details: MovieDetail = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    //returns promise; .data takes data
    const people: Credits = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    const director_name = people.crew.find(
      (member) => member.job === "Director"
    )?.name; //returned member, if 39 === true

    const writer_name = people.crew.find(
      (member) => member.job === "Writer"
    )?.name;

    const currentData = {
      details: details,
      director_name,
      writer_name,
    };

    return currentData;
  } catch (err) {
    console.error(err);
  }
}

function MovieDetails(): JSX.Element {
  let { movieId } = useParams();

  const navigate = useNavigate();
  const [state, setState] = useState("start");

  const currentData = useLoaderData() as CurrentData;

  const movie_name: string = currentData.details.title;
  const movie_category: string = currentData.details.genres[0].name;
  const movie_year: string = currentData.details.release_date;
  const movie_score: number = currentData.details.popularity;
  const movie_length: number | null = currentData.details.runtime;
  const director: string = currentData.director;
  const writer: string = currentData.writer;
  const movie_synopsis = "";
  const poster_path: string = posterUrl + currentData.details.poster_path;
  console.log("LINE /! " + posterUrl + currentData.details.poster_path);

  const MovieDetails = (
    <div
      id="page_wrapper"
      className="bg-dark min-h-[667px] pb-[24px] py-[18px]"
    >
      {/* <DetailHeaderLayout /> */}


      <div id="content_wrapper" className="h-[568px] absolute top-[75px] mx-[18px]">

        <div id="image_wrapper"
          className="mt-0 w-[100%] max-h-[211px] overflow-hidden rounded-lg"
        >
          <img
            alt={`movie poster for ${movie_name}`}
            className="object-cover relative top-[-40%]"
            src={poster_path}
          ></img>
        </div>

        <div id="details_wrapper" className="pt-6 h-[233px] flex-row gap-4">

          <h2 className="pt-6 text-xl leading-[24.2px] text-white font-bold">
            {movie_name}
          </h2>

          <div id="section_one" className="pt-3 h-[65px]">

            <div id="general_details" className="flex flex-col">

              <div className="flex flex-row justify-between">

                <div className="flex flex-row gap-6">

                  <p className="text-white text-description">{movie_year}</p>

                  <p className="text-white-dimmed text-description">
                    {movie_category}
                  </p>

                  <p className="text-white-dimmed text-description">
                    {movie_length}
                  </p>
                </div>

                <p className="text-white-dimmed text-description">

                  <span className="text-[rgba(34, 197, 94, 1)]">
                    {movie_score}
                  </span>
                </p>
              </div>
            </div>

            <div id="cast_&_crew" className="pt-3 flex">

              <div id="left" className="flex flex-col flex-1">

                <div id="director" className="">
                  <span className="text-secondary text-white-dimmed">director: </span>
                  <span>{director}</span>
                </div>

                <div id="writer" className="pt-2"></div>
                  <span className="text-secondary text-white-dimmed">writer: </span>
                  <span>{writer}</span>
                </div>


              <div id="right" className="flex-1">
                <Button
                  type="primary"
                  height="small"
                  label="Cast&Crew"
                  onClick={() => {
                    (movieId: string) => navigate("castcrew");
                  }}
                />
              </div>
            </div>
          </div>
          </div>

          <div id="section_two" className="pt-4 h-[100px]">

            <h3 className="text-white text-primary">Synopsis</h3>

            <p className="text-white-dimmed font-body h-[50px]">
              After being resurrected by a sinister entity, Art the Clown returns
              to Miles County where .... {movie_synopsis}
            </p>

            <a href="url" className="text-yellow font-body underline">
              Read more
            </a>
          </div>


        <div id="button_wrapper" className="pt-[51px]">
          <Button
            type="primary"
            height="default"
            label="Get reservation"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>

  );

  return MovieDetails;
}

export default MovieDetails;

//http://localhost:5173/315162 EXAMPLE URL TO TEST
//https://api.themoviedb.org/3/movie/315162/credits?api_key=039ceb136bde381a9652fedddb79e1f1
