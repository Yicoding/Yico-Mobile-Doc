import React, { useEffect, useCallback, useRef } from 'react';

import upLoad from './upload';
import ls from "@/utils/ls";
import BaseImgPicker from './BaseImgPicker';
import { bufferData } from '../Icon';

export default function ImgPicker(props?: any) {

  // 空函数
  const noon = useCallback(() => {}, []);

  // 下载函数
  const filedownloadFun = useCallback(() => {
    return new Promise(reslove => {
      reslove({ buffer: bufferData });
    });
  }, []);

  const {
    fssidSmall,
    fssidMiddle,
    urlSmall,
    urlMiddle,
    setUrlSmall = noon,
    setUrlMiddle = noon,
    setUrlLarge = noon,
    setFssidSmall = noon,
    setFssidMiddle = noon,
    setFssidLarge = noon,
    onFileClick = noon,
    ...resProps
  } = props;

  // 处理buffer
  const formatBuffer = useCallback((buffer = bufferData) => {
    if (!/^data:image/.test(buffer)) {
      // 没有设置图片格式
      buffer = `data:image/png;base64,${buffer}`; // eslint-disable-line
    }
    return buffer;
  }, []);

  // 下载图片
  const filedownload = useCallback(
    async (id = fssidMiddle, setFun = setUrlMiddle, preloader = true) => {
      try {
        const data = await filedownloadFun({
          params: { fssid: id },
          preloader
        });
        console.log('filedownload', data);
        let { buffer } = data;
        buffer = formatBuffer(buffer);
        setFun(buffer); // eslint-disable-line
      } catch (e) {
        console.log('filedownload报错', e);
      }
    },
    [fssidMiddle]
  );

  // input改变
  const onFileChange = useCallback((files) => {
    if (!files) {
      setUrlSmall();
      setUrlMiddle();
      setUrlLarge();
      return;
    }
    upLoad(files, ({ data, src }) => {
      setUrlSmall(src);
      setFssidSmall(data.fssIdSmall);
      setFssidMiddle(data.fssIdMiddle);
      setFssidLarge(data.fssId);
    });
  }, []);

  // 点击input
  const onFileHandle = useCallback((e) => {
    let showTipmodal = false;
    if (!ls.get(name)) {
      showTipmodal = true;
      e.preventDefault();
      ls.set(name, true);
    }
    onFileClick(name, e.target, showTipmodal);
  }, [name]);

  // 初始化小图
  useEffect(() => {
    if (!urlSmall && fssidSmall) {
      filedownload(fssidSmall, setUrlSmall, false);
    }
  }, [urlSmall, fssidSmall]);

  return (
    <BaseImgPicker
      urlSmall={urlSmall}
      urlMiddle={urlMiddle}
      filedownload={filedownload}
      onFileChange={onFileChange}
      onFileHandle={onFileHandle}
      {...resProps}
    />
  );
}
