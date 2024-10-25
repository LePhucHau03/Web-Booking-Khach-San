import { phong_arr, buffet_arr, hoboi_arr, gym_arr } from './data.js';
const hien1Phong = (phong) => {
    return `<div>
     <h4>Tên Phòng: ${phong.ten} </h4>
     <p>Loại Phòng: ${phong.loai}</p>
     <p>Giá Phòng: ${phong.gia}</p>
     <p>Ghi chú: ${phong.ghichu}</p>
     <img src="${phong.hinh}">
    </div>`;
};
export const showlistphong = () => {
    const html_arr = phong_arr.map(hien1Phong);
    return html_arr.join("");
};
const hien1Buffet = (buffet) => {
    return `<div>
     <h4>Tên Buffet: ${buffet.ten} </h4>
     <p>Loại Buffet: ${buffet.thoiGian}</p>
     <p>Giá buffet: ${buffet.gia}</p>
     <p>Ghi chú: ${buffet.ghichu}</p>
     <img src="${buffet.hinh}">
    </div>`;
};
export const showlistbuffet = () => {
    const html_arr = buffet_arr.map(hien1Buffet);
    return html_arr.join("");
};
const hien1HoBoi = (hoboi) => {
    return `<div>
     <h4>Hồ Bơi: ${hoboi.ten} </h4>
     <p>Giờ mở cửa: ${hoboi.gioMoCua}</p>
     <p>Giờ đóng cửa: ${hoboi.gioDongCua} }</p>
     <p>Ghi chú: ${hoboi.ghichu}</p>
     <img src="${hoboi.hinh}">
    </div>`;
};
export const showlisthoboi = () => {
    const html_arr = hoboi_arr.map(hien1HoBoi);
    return html_arr.join("");
};
const hien1PhongGym = (gym) => {
    return `<div>
     <h4>Gym: ${gym.ten} </h4>
     <p>Giờ mở cửa: ${gym.gioMoCua}</p>
     <p>Giờ đóng cửa: ${gym.gioDongCua} }</p>
     <p>Ghi chú: ${gym.ghichu}</p>
     <img src="${gym.hinh}">
    </div>`;
};
export const showlistgym = () => {
    const html_arr = gym_arr.map(hien1PhongGym);
    return html_arr.join("");
};
