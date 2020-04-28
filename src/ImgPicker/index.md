---
group:
  title: ImgPicker 上传图片
---

# ImgPicker 上传图片

# 何时使用

上传图片后，服务端将图片保存为`小图`、`中图`和`大图`三种形式，缩略图显示小图，点击缩略图展示中图或者大图。三种图片从服务端获取的方式为根据`图片id`发送`ajax`请求拿到对应的`buffer`。

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 宽高撑满父元素
 */
import React, { useState, useCallback } from 'react';
import { Container, ImgPicker } from 'dumi-lib';
import ImgBox from './styles';

export default () => {

  const classes = ImgBox();

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');
  const [fssidSmall, setFssidSmall] = useState('');
  const [fssidMiddle, setFssidMiddle] = useState('');
  const [fssidLarge, setFssidLarge] = useState('');

  const onFileClick = useCallback(() => {

  }, []);

  return (
    <Container>
      <div className={classes.boxSingle}>
        <ImgPicker
          title="测试用例"  
          fssidSmall={fssidSmall}
          fssidMiddle={fssidMiddle}
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          setUrlSmall={setUrlSmall}
          setUrlMiddle={setUrlMiddle}
          onFileClick={onFileClick}
          showDashed
          autoFill
        />
      </div>
    </Container>
  );
};
```

```tsx
/**
 * title: 多图并列
 * desc: 一行显示多个图
 */
import React, { useState, useCallback } from 'react';
import { Container, ImgPicker } from 'dumi-lib';
import ImgBox from './styles';

export default () => {

  const classes = ImgBox();

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');
  const [fssidSmall, setFssidSmall] = useState('');
  const [fssidMiddle, setFssidMiddle] = useState('');
  const [fssidLarge, setFssidLarge] = useState('');

  const onFileClick = useCallback(() => {

  }, []);

  return (
    <Container>
      <div className={classes.boxDouble}>
        <div>
          <ImgPicker
            title="测试用例"  
            fssidSmall={fssidSmall}
            fssidMiddle={fssidMiddle}
            urlSmall={urlSmall}
            urlMiddle={urlMiddle}
            setUrlSmall={setUrlSmall}
            setUrlMiddle={setUrlMiddle}
            onFileClick={onFileClick}
            showBorderAround
            autoFill
          />
        </div>
        <div>
          <ImgPicker
            title="测试用例"  
            fssidSmall={fssidSmall}
            fssidMiddle={fssidMiddle}
            urlSmall={urlSmall}
            urlMiddle={urlMiddle}
            setUrlSmall={setUrlSmall}
            setUrlMiddle={setUrlMiddle}
            onFileClick={onFileClick}
            showBg
            autoFill
          />
        </div>
      </div>
    </Container>
  );
};
```

## BaseImgPicker 基础上传组件

```tsx
/**
 * title: 基础上传组件
 */
import React, { useState, useCallback, useRef } from 'react';
import { Container, BaseImgPicker } from 'dumi-lib';
import ImgBox from './styles';


export default () => {

  const classes = ImgBox();
  const fssidSmall = 'small';
  const fssidMiddle = 'middle';

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');

  const onFileChange = useCallback((file, buffer) => {
    if (!file) { // 删除图片
      setUrlSmall();
      setUrlMiddle();
      return;
    }
    setUrlSmall(buffer);
    setUrlMiddle(buffer);
  }, []);

  return (
    <Container>
      <div className={classes.boxSingle}>
        <BaseImgPicker
          title="测试用例"
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          onFileChange={onFileChange}
          showBg
        />
      </div>
    </Container>
  );
};
```
## API

```bash
<ImgPicker
  title="测试用例"  
  fssidSmall={fssidSmall}
  fssidMiddle={fssidMiddle}
  urlSmall={urlSmall}
  urlMiddle={urlMiddle}
  setUrlSmall={setUrlSmall}
  setUrlMiddle={setUrlMiddle}
/>
```

### ImgPicker
| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| ref   | ref标识 | `object` |   -      |
| children   | 子元素 | `React.Element` |   `+`      |
| showAdd   | 是否显示默认子元素 | `boolean` |   `true`      |
| size   | 文件大小限制 | `number` |   `10M`      |
| urlSmall | 小图url                                        | `string` | -    |
| urlMiddle | 中图url                                        | `string` | -    |
| filedownload | 下载图片方法,`return { buffer: bufferData }`                                       | `funtion` | -    |
| onFileClick |             点击input                           | `funtion` | -    |
| setUrlSmall |             设置小图url                           | `funtion` | -    |
| setUrlMiddle |             设置中图url                           | `funtion` | -    |
| setUrlLarge |             设置大图url                           | `funtion` | -    |
| setFssidSmall |             设置小图id                          | `funtion` | -    |
| setFssidMiddle |             设置中图id                           | `funtion` | -    |
| setFssidLarge |             设置大图id                           | `funtion` | -    |
| preview | 是否可以查看大图                                       | `boolean` | `false`   |
| showBg | 是否展示背景色                                       | `boolean` | `false`   |
| showDashed | 是否展示描边框                                       | `boolean` | `false`   |
| showBorderAround | 是否展示边框                                      | `boolean` | `false`   |
| autoFill | 是否填充父元素                                       | `boolean` | `false`   |

### BaseImgPicker
| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| ref   | ref标识 | `object` |   -      |
| children   | 子元素 | `React.Element` |   `+`      |
| showAdd   | 是否显示默认子元素 | `boolean` |   `true`      |
| size   | 文件大小限制 | `number` |   `10M`      |
| urlSmall | 小图url                                        | `string` | -    |
| urlMiddle | 中图url                                        | `string` | -    |
| filedownload | 下载图片方法,`return { buffer: bufferData }`                                       | `funtion` | -    |
| onFileChange |              input改变                          | `funtion` | -    |
| onFileHandle |             点击input                           | `funtion` | -    |
| preview | 是否可以查看大图                                       | `boolean` | `false`   |
| showBg | 是否展示背景色                                       | `boolean` | `false`   |
| showDashed | 是否展示描边框                                       | `boolean` | `false`   |
| showBorderAround | 是否展示边框                                      | `boolean` | `false`   |
| autoFill | 是否填充父元素                                       | `boolean` | `false`   |
