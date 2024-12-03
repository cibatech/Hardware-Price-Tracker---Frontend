interface StarRatingProps {
  rating: number
  avaliationsNumber: number
}

export default function StarRating({ rating, avaliationsNumber }: StarRatingProps) {
  const MAX_STARS = 5

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: MAX_STARS }).map((_, index) => {
        const starFill =
          rating >= index + 1 ? "full" : rating > index ? "partial" : "empty"

        return (
          <div key={index} className="relative w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute w-full h-full text-green-500 border-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>

            {starFill !== "empty" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className={`absolute w-full h-full text-green-500 ${
                  starFill === "partial" ? "clip-path-[inset(0_50%_0_0)]" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            )}
          </div>
        )
      })}

      <span className="text-lg font-bold text-black">{rating.toFixed(1)}</span>
      <span>({avaliationsNumber} avaliações)</span>
    </div>
  )
}
