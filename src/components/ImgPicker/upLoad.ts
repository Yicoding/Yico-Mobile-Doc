/**
 * 图片上传
 */

import { bufferData } from '../Icon';

const filedownloadFun = () => {
  return new Promise(reslove => {
    reslove({ data: bufferData });
  });
};
const noon = () => {};

async function upLoad(files, callback = noon, name = "file", url = "fileupload", preloader = true) {

  // 处理buffer
  const formatBuffer = (buffer = bufferData) => {
    if (!/^data:image/.test(buffer)) {
      // 没有设置图片格式
      buffer = `data:image/png;base64,${buffer}`; // eslint-disable-line
    }
    return buffer;
  };

  try {
    const formData = new FormData();
    const file = files[0];
    formData.append(name, file);
    let { data } = await filedownloadFun({
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      preloader
    });
    data = formatBuffer(data);
    console.log("upLoad", data);
    // 预览图片
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      console.log("e.target.result", e.target.result);
      callback && // eslint-disable-line
        callback({
          data: {
            fssId: 'small',
            fssIdMiddle: 'middle',
            fssIdSmall: 'large'
          },
          src: e.target.result
        });
    };
  } catch (e) {
    console.log("upLoad报错", e);
  }
}

export default upLoad;
