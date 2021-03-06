import React, { useState, useCallback, forwardRef } from 'react';

import { Toast } from 'antd-mobile';
import WxImageViewer from 'react-wx-images-viewer';
import classnames from 'classnames';
import Container from './styles';

import { iconDelete } from '../Icon';

export default forwardRef(function BaseImgPicker(props, ref) {

  const classes = Container();

  const noon = useCallback(() => {}, []);

  const childrenEle = (
    <div className={classes.childrenEle} />
  );

  const {
    showAdd = true,
    children = showAdd ? childrenEle : null,
    urlSmall,
    urlMiddle,
    preview = true,
    size = 10,
    showBg,
    showDashed,
    showBorderAround,
    filedownload = noon,
    onFileChange = noon,
    onFileHandle = noon,
    autoFill = false
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

  // input改变
  const onChange = useCallback(e => {
    const fileSelectorEl = e.target;
    const { files } = fileSelectorEl;
    if (!files || !files.length) {
      return;
    }
    if (files[0].size > size * 1024 * 1024) {
      e.target.value = null; // 清空input值
      Toast.info(`图片大小不能超过${size}M`);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function(e) {
      onFileChange(files[0], e.target.result);
    }
  }, [size]);

  // 点击input
  const onHandle = useCallback(
    e => {
      e.target.value = null; // 清空input值，防止两次文件一致时不触发onChange事件
      onFileHandle(e);
    },
    []
  );

  return (
    <div className={classnames(
      classes.container,
      autoFill ? 'auto-fill' : null,
      !urlSmall && showBg ? classes.containerBg : '',
      urlSmall ? classes.containerBorder : '')}>
      {urlSmall && (
        <div className="delete-box" onClick={() => onFileChange()}>
          <img alt="" src={iconDelete} className="delete" />
        </div>
      )}
      <input
        ref={ref}
        type="file"
        className={urlSmall ? "hide" : ""}
        accept="image/*"
        onChange={onChange}
        onClick={e => onHandle(e)}
      />
      {urlSmall ? (
        <div className="picker-img-box" onClick={onOpen}>
          <img alt="" className="picker-img" src={urlSmall} />
        </div>
      ) : (
          children
        )}
      {showBorderAround && !urlSmall && (
        <>
          <i className="border-i border-left-top" />
          <i className="border-i border-right-top" />
          <i className="border-i border-left-bottom" />
          <i className="border-i border-right-bottom" />
        </>
      )}
      {(urlSmall || showDashed) && <div className="img-dashed" />}
      {isOpen && <WxImageViewer onClose={onClose} urls={[urlMiddle]} />}
    </div>
  );
})
