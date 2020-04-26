import React, { useEffect, useCallback } from 'react';

import BaseImgPreview from './BaseImgPreview';
import { bufferData } from '../Icon';

export default function ImgPreview(props?: any) {

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

  // 初始化小图
  useEffect(() => {
    if (!urlSmall && fssidSmall) {
      filedownload(fssidSmall, setUrlSmall, false);
    }
  }, [urlSmall, fssidSmall]);

  return (
    <BaseImgPreview
      urlSmall={urlSmall}
      urlMiddle={urlMiddle}
      filedownload={filedownload}
      {...resProps}
    />
  );
}
