const COUPLE = "/images/couple.jpg";

export const ImagePicV2 = () => {
  return (
    <div className="w-full pt-8">
      {/* Wedding Invitation */}
      <div className="font-allura text-5xl text-[#9c1a15] font-bold drop-shadow text-center select-none">
        Wedding Invitation
      </div>

      {/* Groom & Bride */}
      <div className="flex items-center justify-center gap-4">
        <div className="font-playfair-display text-3xl">Tiến Đạt</div>
        <WeddingIcon />
        <div className="font-playfair-display text-3xl">Hoài Thu</div>
      </div>

      {/* Image */}
      <div className="w-full object-cover mt-2">
        <img
          src={COUPLE}
          alt="Wedding Invitation"
          className="w-full object-cover"
          style={{
            boxShadow: `
              inset 0 0 150px 30px rgba(0,0,0,0.95)
            `,
          }}
        />
      </div>
    </div>
  );
};

const WeddingIcon = () => {
  return (
    <div className="flex justify-center pt-3">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        className="drop-shadow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48"
          fill="#9c1a15"
          className="font-noto-serif-sc font-bold"
          style={{ letterSpacing: 0 }}
        >
          囍
        </text>
      </svg>
    </div>
  );
};
