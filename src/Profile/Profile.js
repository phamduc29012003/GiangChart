import avatar from "../Image/avatar.jpg";

const Profile = () => {
  return (
    <div>
      <div class="flex items-center justify-center">
        <div class="bg-white w-1/3 mt-10 rounded-lg">
          <div class="flex items-center justify-center pt-10 flex-col">
            <img src={avatar} class="rounded-full w-32" />
            <h1 class="text-gray-800 font-semibold text-xl mt-5">
              Lương Trường Giang
            </h1>
            <h1 class="text-gray-500 text-sm">
              Mã sinh viên: B20DCPT067 | Trường: Học viện công nghệ bưu chính
              viễn thông
            </h1>
            <div>
              <h1 class="text-sm uppercase text-gray-500">
                Ngày sinh: 14/10/2002{" "}
              </h1>
              <h1 class="text-sm text-gray-500">SĐT: 0967002757</h1>
            </div>
            <h1 class="text-gray-500 text-sm p-4">
              Sở thích: Đá bóng, nghe nhạc, du lịch,... <br />
              Định hướng tương lai: Sống tốt !
            </h1>
          </div>
          <div class="flex justify-between p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
