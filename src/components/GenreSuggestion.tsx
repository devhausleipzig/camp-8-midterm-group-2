import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { GenreKeys } from "../utils/genres";
import { GenreButton } from "./GenreButton";

export function GenreSuggestion() {
  const defaultSuggestions: GenreKeys[] = [
    "romance",
    "comedy",
    "horror",
    "drama",
  ];
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-white-dimmed">Genre</h2>
        <div>
          <Link to="#" className="text-yellow-dimmed flex gap-4">
            <p>See All</p>
            <div>
              <ChevronRightIcon className="h-6" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        {defaultSuggestions.map((genre) => (
          <div className="flex flex-col gap-2 items-center">
            <GenreButton genre={genre} />
            <p className="font-bold text-white-dimmed text-sm capitalize">
              {genre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
