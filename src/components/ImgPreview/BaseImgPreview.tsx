import React, { useState, useCallback } from 'react';

import { Flex } from 'antd-mobile';
import WxImageViewer from 'react-wx-images-viewer';
import Container from './styles';


export default function BaseImgPreview(props?: any) {
  
  const classes = Container();
  
  const noon = useCallback(() => { }, []);

  const {
    title,
    urlSmall,
    urlMiddle,
    preview = true,
    filedownload = noon
  } = props;

  const [isOpen, setOpen] = useState(false);

  // 打开图片预览
  const onOpen = useCallback(async () => {
    if (!urlSmall) {
      return;
    }
    if (urlMiddle) {
      setOpen(true);
      return;
    }
    if (!preview) {
      return;
    }
    try {
      await filedownload();
      setOpen(true);
    } catch (e) {
      console.log('打开图片预览失败', e);
    }
  }, [preview, urlMiddle, urlSmall]);

  // 关闭图片预览
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className={classes.pickerImgBox} onClick={onOpen}>
        {urlSmall ? (
          <img alt="" className="picker-img" src={urlSmall} />
        ) : (
            <Flex justify="center" className="picker-empty">
              暂无照片
            </Flex>
          )}
      </div>
      <p className={classes.title}>{title}</p>
      {isOpen && <WxImageViewer onClose={onClose} urls={[urlMiddle]} />}
    </>
  );
}
