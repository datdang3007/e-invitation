import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  draggable?: boolean;
  decoding?: "async" | "auto" | "sync";
}

export const LazyImage = ({
  src,
  alt,
  className = "",
  style,
  draggable = false,
  decoding = "async",
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        // Bắt đầu load khi còn cách 200px so với viewport để smooth hơn
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // Xử lý lỗi khi load ảnh
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setIsLoaded(true); // Hiển thị placeholder để không bị blank
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loading với hiệu ứng pulse */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          style={style}
        />
      )}

      {/* Ảnh thực tế với progressive loading */}
      {isInView && (
        <img
          ref={imgElementRef}
          src={src}
          alt={alt}
          className={`transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          style={style}
          draggable={draggable}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          loading="lazy"
          decoding={decoding}
          fetchPriority="high"
        />
      )}
    </div>
  );
};
