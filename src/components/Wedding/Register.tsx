import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState<boolean | null>(true);
  const [isWithPartner, setIsWithPartner] = useState<boolean | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Animation state for success
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !name || isWithPartner === null) return;
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setAnimate(true);
      setTimeout(() => {
        setSubmitted(true);
      }, 500); // duration of fade out
    }, 1400);
  };

  return (
    <div className="w-full flex flex-col items-center bg-white select-none mt-16">
      {/* Heading */}
      <div className="font-script text-[#231b18] text-md text-center max-w-xl px-2 leading-relaxed">
        HÃY XÁC NHẬN SỰ CÓ MẶT CỦA BẠN
        <br />
        ĐỂ CHÚNG MÌNH CHUẨN BỊ ĐÓN TIẾP
        <br />
        MỘT CÁCH CHU ĐÁO NHẤT
        <br />
        TRÂN TRỌNG!
      </div>

      {/* Card */}
      <div
        className="bg-white rounded-lg mt-4 p-8 max-w-md w-full flex flex-col items-center transition-all duration-500"
        style={
          submitted
            ? {}
            : animate
            ? {
                opacity: 0,
                transform: "translateY(-20px)",
                pointerEvents: "none",
              }
            : {}
        }
      >
        {!submitted ? (
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className="font-bold text-2xl text-[#231b18] mb-5 text-center">
              Xác nhận tham dự
            </div>

            {/* Name input */}
            <div className="w-full mb-6">
              <label
                htmlFor="name"
                className="block font-script text-[#231b18] text-base mb-2"
              >
                Họ và tên
              </label>
              <input
                id="name"
                type="text"
                autoComplete="off"
                placeholder="Nhập tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[#9c1a15] transition"
                disabled={loading}
              />
            </div>

            {/* Radio group */}
            <div className="w-full mb-6">
              <div className="font-script text-base mb-2 text-[#231b18]">
                Bạn sẽ tham dự chứ?
              </div>
              <div className="flex flex-col gap-3">
                {/* Yes */}
                <label
                  className="flex items-center cursor-pointer py-2 px-4 rounded-md border transition-all duration-200
                  border-gray-300 hover:border-[#9c1a15] 
                  bg-white
                  shadow-sm
                  focus-within:ring-2 focus-within:ring-[#9c1a15]
                  mb-1 sm:mb-0
                  "
                  style={{
                    boxShadow:
                      isAttending === true ? "0 0 0 2px #9c1a15" : undefined,
                    borderColor: isAttending === true ? "#9c1a15" : undefined,
                    background:
                      isAttending === true
                        ? "linear-gradient(90deg, #fae9ea 10%, #fff 100%)"
                        : undefined,
                  }}
                >
                  <input
                    type="radio"
                    className="accent-[#9c1a15] w-5 h-5"
                    checked={isAttending === true}
                    onChange={() => setIsAttending(true)}
                    name="attendance"
                    disabled={loading}
                  />
                  <span className="ml-3 font-script text-[#231b18] text-base">
                    Có, tôi sẽ tham dự
                  </span>
                </label>

                {/* No */}
                <label
                  className="flex items-center cursor-pointer py-2 px-4 rounded-md border transition-all duration-200
                  border-gray-300 hover:border-[#9c1a15] 
                  bg-white
                  shadow-sm
                  focus-within:ring-2 focus-within:ring-[#9c1a15]
                  mb-1 sm:mb-0
                  "
                  style={{
                    boxShadow:
                      isAttending === false ? "0 0 0 2px #9c1a15" : undefined,
                    borderColor: isAttending === false ? "#9c1a15" : undefined,
                    background:
                      isAttending === false
                        ? "linear-gradient(90deg, #fae9ea 10%, #fff 100%)"
                        : undefined,
                  }}
                >
                  <input
                    type="radio"
                    className="accent-[#9c1a15] w-5 h-5"
                    checked={isAttending === false}
                    onChange={() => setIsAttending(false)}
                    name="attendance"
                    disabled={loading}
                  />
                  <span className="ml-3 font-script text-[#231b18] text-base">
                    Không, tôi sẽ không tham dự
                  </span>
                </label>
              </div>
            </div>

            {/* Radio group: Đi cùng người thương */}
            <div className="w-full mb-6">
              <div className="font-script text-base mb-2 text-[#231b18]">
                Bạn sẽ đi cùng người thương chứ?
              </div>
              <div className="flex flex-col gap-3">
                {/* Có */}
                <label
                  className="flex items-center cursor-pointer py-2 px-4 rounded-md border transition-all duration-200
                    border-gray-300 hover:border-[#9c1a15] 
                    bg-white
                    shadow-sm
                    focus-within:ring-2 focus-within:ring-[#9c1a15]
                    mb-1 sm:mb-0
                  "
                  style={{
                    boxShadow:
                      isWithPartner === true ? "0 0 0 2px #9c1a15" : undefined,
                    borderColor: isWithPartner === true ? "#9c1a15" : undefined,
                    background:
                      isWithPartner === true
                        ? "linear-gradient(90deg, #fae9ea 10%, #fff 100%)"
                        : undefined,
                  }}
                >
                  <input
                    type="radio"
                    className="accent-[#9c1a15] w-5 h-5"
                    checked={isWithPartner === true}
                    onChange={() => setIsWithPartner(true)}
                    name="with-partner"
                    disabled={loading}
                  />
                  <span className="ml-3 font-script text-[#231b18] text-base">
                    Có, tôi sẽ đi cùng người thương
                  </span>
                </label>

                {/* Không */}
                <label
                  className="flex items-center cursor-pointer py-2 px-4 rounded-md border transition-all duration-200
                    border-gray-300 hover:border-[#9c1a15] 
                    bg-white
                    shadow-sm
                    focus-within:ring-2 focus-within:ring-[#9c1a15]
                    mb-1 sm:mb-0
                  "
                  style={{
                    boxShadow:
                      isWithPartner === false ? "0 0 0 2px #9c1a15" : undefined,
                    borderColor:
                      isWithPartner === false ? "#9c1a15" : undefined,
                    background:
                      isWithPartner === false
                        ? "linear-gradient(90deg, #fae9ea 10%, #fff 100%)"
                        : undefined,
                  }}
                >
                  <input
                    type="radio"
                    className="accent-[#9c1a15] w-5 h-5"
                    checked={isWithPartner === false}
                    onChange={() => setIsWithPartner(false)}
                    name="with-partner"
                    disabled={loading}
                  />
                  <span className="ml-3 font-script text-[#231b18] text-base">
                    Không, tôi sẽ đi một mình
                  </span>
                </label>
              </div>
            </div>

            {/* Submit button */}
            <button
              className={`w-full ${
                name && isWithPartner !== null && !loading
                  ? "bg-[#9c1a15] hover:bg-[#a43b3e] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white font-script text-lg rounded-md py-2 font-medium transition-colors duration-200 flex items-center justify-center`}
              type="submit"
              disabled={!name || isWithPartner === null || loading}
              style={{ position: "relative", minHeight: 44 }}
            >
              {loading ? (
                <span className="flex items-center justify-center h-full w-full">
                  <span className="inline-block w-6 h-6 mr-2 align-middle">
                    <svg className="animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#fff"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-80"
                        fill="#fff"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  </span>
                  <span>Đang gửi xác nhận...</span>
                </span>
              ) : (
                "Gửi xác nhận"
              )}
            </button>
          </form>
        ) : (
          <div
            className="flex flex-col items-center justify-center w-full transition-opacity duration-500 animate-fade-in bg-[#9c1a15] rounded-lg py-8 px-6"
            style={{
              animation:
                "fadeInFromTop 0.6s cubic-bezier(0.51, 0.01, 0.45, 1.17)",
            }}
          >
            <svg
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 64 64"
              className="mb-4"
            >
              <circle cx="32" cy="32" r="32" fill="#fae9ea" />
              <path
                d="M20 34l9 9 15-17"
                stroke="#9c1a15"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <div className="font-script text-center text-2xl text-white font-bold mb-2">
              Đã gửi xác nhận!
            </div>
            <span className="font-script text-base text-[#fae9ea] text-center">
              Cảm ơn bạn đã xác nhận tham dự.
              <br />
              Hẹn gặp bạn tại lễ cưới!
            </span>
            <style>{`
              @keyframes fadeInFromTop {
                from { opacity: 0; transform: translateY(-25px);}
                to { opacity: 1; transform: translateY(0);}
              }
              .animate-fade-in {
                animation: fadeInFromTop 0.6s cubic-bezier(0.51, 0.01, 0.45, 1.17);
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
};
