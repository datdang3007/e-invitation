import calendar_heart from "../../../public/images/calen_heart.png";

export const Calendar = () => {
  return (
    <div className="relative mt-16 w-full bg-white rounded-md flex flex-col items-center justify-start overflow-hidden select-none text-[#231b18] font-serif">
      {/* Header */}
      <div className="w-full flex justify-between items-center pt-5 px-6 mb-3">
        <span className="font-script text-lg">Our wedding day</span>
        <span className="text-2xl font-script tracking-wide">
          Tháng <strong>11</strong>
        </span>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-y-7 gap-x-2 px-8 text-lg w-full">
        {/* first row: blank for offset (Monday = 1), then 1-7 */}
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div
            key={day}
            className={day === 1 ? "col-start-1 text-center" : "text-center"}
            style={{
              gridColumnStart: day === 1 ? 1 : undefined,
              fontFamily: '"Playfair Display", serif',
            }}
          >
            {day}
          </div>
        ))}

        {/* 8 - 14 */}
        {[8, 9, 10, 11, 12, 13, 14].map((day) => (
          <div
            key={day}
            className="text-center"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {day}
          </div>
        ))}

        {/* 15 - 21 */}
        {[15, 16, 17, 18, 19, 20, 21].map((day) => (
          <div
            key={day}
            className="text-center"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {day}
          </div>
        ))}

        {/* 22 - 27 */}
        {[22, 23, 24, 25, 26, 27].map((day) => (
          <div
            key={day}
            className="text-center"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {day}
          </div>
        ))}

        {/* Day 28 with a heart */}
        <div
          className="relative flex items-center justify-center text-center"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {/* Heart image behind number "28" */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-xl font-bold"
            style={{
              zIndex: 2,
              color: "#FFFFFF",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            28
          </span>
          <img
            src={calendar_heart}
            alt="calendar_heart"
            className="absolute w-[70px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              zIndex: 1,
              filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.07))",
            }}
            draggable={false}
          />
        </div>

        {/* 29 - 31 */}
        {[29, 30].map((day) => (
          <div
            key={day}
            className="text-center"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
