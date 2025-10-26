const QR_CODE = "/images/qr_code.jpg";
const QR_CODE_WIFE = "/images/qr_code_wife.jpg";

export const Gift = () => {
  return (
    <div className="bg-[#9c1a15] w-full flex flex-col items-center py-8 shadow-lg select-none mt-12">
      <div className="font-luxurious text-white text-4xl tracking-wide text-center">
        Gửi Quà Mừng
      </div>
      <div className="italic text-white text-md text-center mt-4 font-script">
        Quét QR code để gửi yêu thương
      </div>
      <div className="flex justify-center gap-10 mt-6 flex-wrap">
        <div className="flex flex-col items-center">
          <img
            src={QR_CODE}
            alt="QR code gửi quà mừng chú rể"
            className="w-60 h-60 bg-white rounded-md object-contain border border-white"
            draggable={false}
          />
          <span className="mt-2 text-white font-script italic text-lg text-center">
            Quà mừng chú rể
          </span>
          <span className="text-white text-sm font-sans mt-1 text-center">
            <span className="font-semibold">DANG TIEN DAT</span>
          </span>
          <span className="text-white text-sm font-sans mt-1 text-center">
            <span className="font-semibold">Techcombank</span>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={QR_CODE_WIFE}
            alt="QR code gửi quà mừng cô dâu"
            className="w-60 h-60 bg-white rounded-md object-contain border border-white"
            draggable={false}
          />
          <span className="mt-2 text-white font-script italic text-lg text-center">
            Quà mừng cô dâu
          </span>
          <span className="text-white text-sm font-sans mt-1 text-center">
            <span className="font-semibold">NGUYEN THI THU</span>
          </span>
          <span className="text-white text-sm font-sans mt-1 text-center">
            <span className="font-semibold">Vietcombank</span>
          </span>
        </div>
      </div>
    </div>
  );
};
