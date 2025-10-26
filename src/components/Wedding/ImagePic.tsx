import THN_9521 from "../../../public/images/THN_9521.jpeg";

export const ImagePic = () => {
  return (
    <div>
      {/* Image */}
      <img
        src={THN_9521}
        alt="Wedding Invitation"
        className="w-full h-[95vh] object-cover"
        style={{
          maskImage:
            "url(https://cdn-resource.cinelove.me/resources/cropShapes/017_qnyb431guuf.png)",
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute left-1/2 top-[78vh] text-center select-none w-full z-10"
        style={{ transform: "translateX(-50%)" }}
      >
        <div className="font-playfair-display tracking-[0.25em] text-3xl sm:text-4xl mb-2">
          WELCOME
        </div>
        <div className="font-playfair-display tracking-[0.32em] text-2xl sm:text-3xl mb-2">
          TO
        </div>
        <div className="font-playfair-display tracking-[0.19em] text-3xl sm:text-4xl mb-5">
          OUR WEDDING
        </div>
        <div className="font-script text-md sm:text-2xl mt-2 text-[#896352]">
          Chúng mình sắp kết hôn rồi!
        </div>
      </div>

      {/* Name */}
      {/* <div
        className="absolute left-[14vw] top-[76vh] select-none pointer-events-none flex flex-col gap-6"
        style={{
          zIndex: 2,
          color: "#231b18",
          transform: "rotate(-10deg)",
        }}
      >
        <div className="font-luxurious text-[3.5rem] leading-[2.8rem] drop-shadow-md whitespace-pre">
          Tiến Đạt
        </div>
        <div className="font-luxurious text-[3rem] text-center leading-[2.5rem] drop-shadow-md">
          &
        </div>
        <div className="font-luxurious text-[3.5rem] leading-[2.8rem] drop-shadow-md whitespace-pre">
          Hoài Thu
        </div>
      </div> */}
    </div>
  );
};
