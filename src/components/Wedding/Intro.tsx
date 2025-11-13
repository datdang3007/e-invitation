import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const Intro = ({ children }: Props) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Thời gian intro (ms)
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowContent(true); // Chỉ mount children sau khi intro xong
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  // Ngày cưới cố định: 29/11/2025
  const weddingDateStr = new Date(2025, 10, 29).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-[#ffc2cc] via-[#fff2f2] to-[#fad2e1] select-none">
          {/* Animation & Text */}
          <div className="relative flex flex-col items-center">
            {/* Floating hearts animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <HeartFloating />
            </div>

            {/* Wedding names animation */}
            <div className="relative z-10 text-center">
              <div className="font-script text-3xl md:text-4xl text-[#c9184a] drop-shadow-lg animate-fadeInDown">
                Our Wedding Invitation
              </div>
              <div className="mt-4 mb-2 font-luxurious text-5xl md:text-6xl font-bold text-[#720026] animate-namePulse drop-shadow-lg tracking-widest">
                Tiến Đạt
                <span className="mx-4 text-3xl text-[#c9184a] animate-heartBeat font-script align-middle">
                  ❤️
                </span>
                Hoài Thu
              </div>
              <div className="text-[#a4133c] text-xl font-medium font-script animate-fadeInUp">
                {weddingDateStr}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Sau intro mới render children */}
      {showContent && <div>{children}</div>}
      {/* Inline CSS keyframes for animation */}
      <style>
        {`
          @keyframes hearts-up {
            0% {
              transform: translateY(0) scale(1) rotate(-40deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-120vh) scale(1.25) rotate(27deg);
              opacity: 0;
            }
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes namePulse {
            0%,100% { text-shadow: 0 4px 20px #fff,0 2px #ffb3c6; }
            50% { text-shadow: 0 0px 20px #fd5d9f,0 2px #f489b4; color:#b5174b; }
          }
          .animate-fadeInDown { animation: fadeInDown 1s ease both; }
          .animate-fadeInUp { animation: fadeInUp 1.4s 0.3s ease both; }
          .animate-namePulse { animation: namePulse 2.2s infinite alternate; }
          @keyframes heartBeat {
            0% { transform: scale(1); }
            20% { transform: scale(1.25); }
            40% { transform: scale(1); }
            60% { transform: scale(1.25); }
            80%, 100% { transform: scale(1); }
          }
          .animate-heartBeat { animation: heartBeat 1.5s infinite; }
        `}
      </style>
    </>
  );
};

// Heart floating animation component
function HeartFloating() {
  // Một số trái tim sẽ nổi lên từ dưới
  // Có thể random toạ độ trái tim và thời gian
  const hearts = Array.from({ length: 10 }).map((_, i) => {
    const left = Math.random() * 90 + 2; // %
    const scale = 0.85 + Math.random() * 0.7;
    const delay = Math.random() * 2.5;
    const duration = 2.5 + Math.random() * 1.2;
    const colorList = [
      "#ffb3c6",
      "#ed639e",
      "#fa669e",
      "#ffc2cc",
      "#c9184a",
      "#dc2f70",
      "#ad1854",
      "#fad2e1",
    ];
    const color = colorList[i % colorList.length];

    return (
      <svg
        key={i}
        viewBox="0 0 24 24"
        width={32 * scale}
        height={32 * scale}
        fill={color}
        style={{
          position: "absolute",
          left: `${left}%`,
          bottom: "-36px",
          opacity: 0,
          zIndex: 1,
          animation: `hearts-up ${duration}s ${delay}s linear forwards`,
          filter: "drop-shadow(0 2px 8px #fff7f7)",
        }}
      >
        <path d="M12 21s-4.05-3.09-6.53-5.57C3.08 13.13 2 11.67 2 9.99 2 7.68 3.99 6 6.01 6A3.99 3.99 0 0112 8.65 3.99 3.99 0 0117.99 6C20.01 6 22 7.68 22 9.99c0 1.68-1.08 3.14-3.47 5.44C16.05 17.91 12 21 12 21z" />
      </svg>
    );
  });

  return <>{hearts}</>;
}
