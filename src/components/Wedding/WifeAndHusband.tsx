import { LazyImage } from "../ui/lazy-image";

const GROOM = "/images/groom.jpg";
const BRIDE = "/images/bride.jpg";

export const WifeAndHusband = () => {
  return (
    <div className="w-full mt-16 flex flex-col items-center gap-10 select-none">
      {/* Wife */}
      <div className="w-[90%] shadow-xl rounded-3xl bg-white overflow-hidden flex flex-col items-end relative">
        <LazyImage
          src={BRIDE}
          alt="Cô dâu"
          className="w-full object-cover rounded-3xl"
          style={{ height: 420, objectPosition: "top" }}
          draggable={false}
        />
        <div
          className="absolute left-0 bottom-0 w-full h-[22%]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0) 100%)",
          }}
        ></div>
        <div className="absolute left-5 bottom-2 z-10 text-left">
          <div className="font-script text-md leading-[1.6rem] text-white">
            Cô dâu
          </div>
          <div className="font-luxurious text-5xl font-bold text-white tracking-wide">
            Hoài Thu
          </div>
        </div>
      </div>

      {/* Husband */}
      <div className="w-[90%] shadow-xl rounded-3xl bg-white overflow-hidden flex flex-col items-end relative">
        <LazyImage
          src={GROOM}
          alt="Chú rể"
          className="w-full object-cover rounded-3xl"
          style={{ height: 420, objectPosition: "top" }}
          draggable={false}
        />
        <div
          className="absolute left-0 bottom-0 w-full h-[22%]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0) 100%)",
          }}
        ></div>
        <div className="absolute left-5 bottom-2 z-10 text-left">
          <div className="font-script text-md leading-[1.6rem] text-white">
            Chú rể
          </div>
          <div className="font-luxurious text-5xl font-bold text-white tracking-wide">
            Tiến Đạt
          </div>
        </div>
      </div>
    </div>
  );
};
