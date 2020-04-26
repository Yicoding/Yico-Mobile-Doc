---
group:
  title: ImgPicker 上传图片
---

# ImgPicker 上传图片

# 何时使用

上传图片时分为小图和中图

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 宽高撑满父元素
 */
import React, { useState, useCallback } from 'react';
import { Container, ImgPicker } from 'dumi-lib';
import imgBox from './styles';

export default () => {

  const classes = imgBox();

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
import imgBox from './styles';

export default () => {

  const classes = imgBox();

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
          />
        </div>
      </div>
    </Container>
  );
};
```

## BaseImgPicker

```tsx
/**
 * title: 基础上传组件
 */
import React, { useState } from 'react';
import { Container, BaseImgPicker } from 'dumi-lib';
import imgBox from './styles';


export default () => {

  const classes = imgBox();
  const fssidSmall = 'small';
  const fssidMiddle = 'middle';

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');

  return (
    <Container>
      <div className={classes.box}>
        <BaseImgPicker
          title="测试用例"
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
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
| children   | 子元素 | `React.Element` |   `+`      |
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
| showBorderAround | 是否展示边框框                                       | `boolean` | `false`   |

### BaseImgPicker
| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| children   | 子元素 | `React.Element` |   `+`      |
| size   | 文件大小限制 | `number` |   `10M`      |
| urlSmall | 小图url                                        | `string` | -    |
| urlMiddle | 中图url                                        | `string` | -    |
| filedownload | 下载图片方法,`return { buffer: bufferData }`                                       | `funtion` | -    |
| onFileChange |              input改变                          | `funtion` | -    |
| onFileHandle |             点击input                           | `funtion` | -    |
| preview | 是否可以查看大图                                       | `boolean` | `false`   |
| showBg | 是否展示背景色                                       | `boolean` | `false`   |
| showDashed | 是否展示描边框                                       | `boolean` | `false`   |
| showBorderAround | 是否展示边框框                                       | `boolean` | `false`   |

