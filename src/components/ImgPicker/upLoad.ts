/**
 * 图片上传
 */
const filedownloadFun = () => {
  return new Promise(reslove => {
    reslove({
      data: {
        fssIdSmall: 'small',
        fssIdMiddle: 'middle',
        fssId: 'large'
      }
    });
  });
};
const noon = () => { };

async function upLoad(file, callback = noon, name = "file", url = "fileupload", preloader = true) {
  try {
    const formData = new FormData();
    formData.append(name, file);
    let { data } = await filedownloadFun({
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      preloader
    });
    console.log("upLoad", data);
    callback({ data });
  } catch (e) {
    console.log("upLoad报错", e);
  }
}

export default upLoad;
