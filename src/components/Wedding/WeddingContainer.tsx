import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AUDIO = "/images/audio.png";
const NOTHING_S_GONNA_CHANGE_MY_LOVE_FOR_YOU =
  "/audio/Nothing's_Gonna_Change_My_Love_for_You.mp3";

type Props = {
  children: React.ReactNode;
};

export const WeddingContainer = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [interrupted, setInterrupted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Audio controls
  const audioPlayerRef = useRef<AudioPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasAutoPlayedRef = useRef(false);

  // Khi user nhấn lên icon thì toggle nhạc
  const handleToggleAudio = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);

    if (!audioPlayerRef.current) return;

    if (newIsPlaying) {
      audioPlayerRef.current.audio.current?.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioPlayerRef.current.audio.current?.pause();
    }
  };

  // Handle start
  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Start audio
    if (audioPlayerRef.current) {
      hasAutoPlayedRef.current = true;
      audioPlayerRef.current.audio.current?.play().catch((err) => {
        console.log("Failed to play audio:", err);
      });
    }

    // Start auto-scroll after a delay
    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.scrollTo({ top: 0 });
      }
    }, 500);
  };

  // Dùng requestAnimationFrame để mượt hơn & tránh lag khi có nhiều ảnh
  useEffect(() => {
    if (!hasStarted) return; // Chỉ chạy auto-scroll sau khi user click start

    let animationFrameId: number | null = null;
    let delayTimeoutId: number | null = null;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let isUserInteracted = false;

    const handleScroll = () => {
      if (!isUserInteracted) {
        setInterrupted(true);
        isUserInteracted = true;

        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
        }
        if (delayTimeoutId !== null) {
          clearTimeout(delayTimeoutId);
        }
      }
    };

    // Gán event để phát hiện user scroll/touch
    wrapper.addEventListener("wheel", handleScroll, { passive: true });
    wrapper.addEventListener("touchstart", handleScroll, { passive: true });

    // Hàm scroll từng step dùng requestAnimationFrame
    const scrollStep = () => {
      if (!wrapper) return;
      // Nếu đã tới cuối hoặc bị interrupt thì dừng
      if (
        wrapper.scrollTop + wrapper.offsetHeight >=
        wrapper.scrollHeight - 2
      ) {
        return;
      }
      wrapper.scrollTop += 1; // smooth 1px/step
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // Bắt đầu tự động scroll nếu chưa bị interrupted
    if (!interrupted) {
      wrapper.scrollTo({ top: 0 });
      delayTimeoutId = window.setTimeout(() => {
        animationFrameId = requestAnimationFrame(scrollStep);
      }, 1000); // Đợi 1 giây sau khi start
    }

    // cleanup
    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      if (delayTimeoutId !== null) clearTimeout(delayTimeoutId);
      wrapper.removeEventListener("wheel", handleScroll);
      wrapper.removeEventListener("touchstart", handleScroll);
    };
  }, [interrupted, hasStarted]);

  return (
    <div className="min-h-screen bg-white sm:flex sm:items-center sm:justify-center relative">
      {/* Start Overlay */}
      {!hasStarted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-pink-100 via-white to-white cursor-pointer"
          onClick={handleStart}
        >
          <div className="text-center select-none">
            <div className="font-script text-4xl text-gray-800 mb-4 animate-pulse">
              Touch to Start
            </div>
            <div className="font-luxurious text-2xl text-pink-600 animate-bounce">
              ♡
            </div>
          </div>
        </div>
      )}

      <AudioPlayer
        loop
        volume={0.7}
        layout="stacked"
        ref={audioPlayerRef}
        style={{ display: "none" }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        src={NOTHING_S_GONNA_CHANGE_MY_LOVE_FOR_YOU}
      />

      <div
        ref={wrapperRef}
        className="relative sm:max-w-lg max-w-full sm:max-h-[90vh] max-h-[100vh] overflow-y-auto mx-auto"
        style={{
          scrollbarWidth: "thin",
          outline:
            typeof window !== "undefined" && window.innerWidth >= 640
              ? "1.5px none rgb(51, 51, 51)"
              : undefined,
          border:
            typeof window !== "undefined" && window.innerWidth >= 640
              ? `1px solid rgb(224, 224, 224)`
              : undefined,
          boxShadow:
            typeof window !== "undefined" && window.innerWidth >= 640
              ? `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`
              : undefined,
        }}
      >
        {/* DVD Icon ở góc trên cùng bên phải */}
        <button
          className="fixed top-3 right-3 z-50 outline-none select-none"
          onClick={handleToggleAudio}
          style={{
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
          aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
          tabIndex={0}
        >
          <IconDVD spinning={isPlaying} />
        </button>
        {children}
      </div>

      {/* Animation keyframe (inject style trực tiếp nếu chưa có trong global css) */}
      <style>{`
        @keyframes spinning-dvd {
          100% { transform: rotate(360deg); }
        }
        .spinning-dvd {
          animation: spinning-dvd 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Nhận prop spinning: boolean (quay hay không quay)
const IconDVD = ({ spinning }: { spinning: boolean }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={AUDIO}
        alt="DVD"
        className={`w-10 h-10 bg-black rounded-full drop-shadow-lg ${
          spinning ? "spinning-dvd" : ""
        }`}
        draggable={false}
        style={{ userSelect: "none" }}
      />
    </div>
  );
};
