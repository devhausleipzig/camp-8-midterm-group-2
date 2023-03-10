export type GenreItem = {
  symbol: string
}
export type GenreKeys = "romance" | "crime" | "history" | "action" | "documentary" | "horror" | "adventure" | "drama" | "music" | "animation" | "family" | "mystery" | "comedy" | "fantasy" | "sciene fiction" | "thriller"

export type GenreType = {
  romance: GenreItem,
  crime: GenreItem,
  history: GenreItem,
  action: GenreItem,
  documentary: GenreItem,
  horror: GenreItem,
  adventure: GenreItem,
  drama: GenreItem,
  music: GenreItem,
  animation: GenreItem,
  family: GenreItem,
  mystery: GenreItem,
  comedy: GenreItem,
  fantasy: GenreItem,
  "sciene fiction": GenreItem
  thriller: GenreItem,
}
export const genres: GenreType = {
  romance: { symbol: "๐" },
  crime: { symbol: "๐" },
  history: { symbol: "โณ" },
  action: { symbol: "๐งจ" },
  documentary: { symbol: "๐ฅ" },
  horror: { symbol: "๐ช" },
  adventure: { symbol: "๐" },
  drama: { symbol: "๐ญ" },
  music: { symbol: "๐ง" },
  animation: { symbol: "๐ฆ" },
  family: { symbol: "๐ช" },
  mystery: { symbol: "๐" },
  comedy: { symbol: "๐คฃ" },
  fantasy: { symbol: "๐ฆ" },
  "sciene fiction": { symbol: "๐ฝ" },
  thriller: { symbol: "๐ฑ" }
}