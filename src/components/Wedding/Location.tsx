export const Location = () => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-md px-6 py-6 mt-16 text-[#231b18] font-serif select-none">
      {/* Nhà Trai & Nhà Gái */}
      <div className="flex justify-between items-start px-2 mb-4">
        <div className="text-sm text-left font-script">
          <div className="font-bold text-xl">Nhà Trai</div>
          <div className="font-script text-xs">
            <div>Ông: Đặng Quốc Toàn</div>
            <div>Bà: Đặng Thị Dinh</div>
            <div>TP. Hải Phòng</div>
          </div>
        </div>
        <div className="text-sm text-right font-script">
          <div className="font-bold text-xl">Nhà Gái</div>
          <div className="font-script text-xs">
            <div>Ông: Nguyễn Hữu Thưởng</div>
            <div>Bà: Vũ Thị Hoa</div>
            <div>Tỉnh Bắc Ninh</div>
          </div>
        </div>
      </div>

      {/* Tên cô dâu & chú rể */}
      <div className="text-center mt-12">
        <div className="font-luxurious text-5xl">Tiến Đạt</div>
        <div className="font-luxurious text-2lg">&</div>
        <div className="font-luxurious text-5xl mb-3">Hoài Thu</div>
      </div>

      {/* Lời mời */}
      <div className="text-center font-script text-md mt-12">
        <div>
          Thân mời bạn đến dự lễ thành hôn
          <br />
          Được tổ chức vào <span className="font-bold">18:00</span>, Thứ SÁU
        </div>
      </div>

      {/* Ngày tháng */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="border-t border-gray-400 flex-1 mr-2 w-3 hidden sm:block"></span>
            <span className="text-lg font-script pr-2">Tháng</span>
            <span className="text-xl font-script font-bold">11</span>
            <span className="ml-4 text-5xl font-script font-bold leading-none tracking-wide">
              28
            </span>
            <span className="ml-4 text-lg font-script pr-2">Năm</span>
            <span className="text-xl font-script font-bold">2025</span>
            <span className="border-t border-gray-400 flex-1 ml-2 w-3 hidden sm:block"></span>
          </div>
        </div>
      </div>

      {/* ngày âm */}
      <div className="font-script text-center text-xs text-gray-500">
        (Tức ngày 09 tháng 10 năm 2025)
      </div>

      {/* Địa điểm */}
      <div className="font-luxurious text-center text-4xl mt-16">Địa Điểm</div>
      <div className="font-script text-center text-xl mt-4">
        Gia Viên Restaurant Hải Phòng
      </div>

      {/* Map */}
      <div className="rounded-lg overflow-hidden mt-4">
        <iframe
          title="Gia Viên Restaurant and event centre"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4810.792662138612!2d106.67338232612593!3d20.86225554347494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a5f597592c9%3A0xed87aceef8c18aca!2sGia%20Vi%C3%AAn%20Restaurant%20and%20event%20centre%20H%E1%BA%A3i%20Ph%C3%B2ng!5e1!3m2!1svi!2s!4v1761407332413!5m2!1svi!2s"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
