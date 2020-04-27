---
group:
  title: ImgPreview 图片预览
---
# ImgPreview 图片预览

ImgPreview 图片预览: 显示缩略图并可以点击查看大图。

# 何时使用

当图片获取需要分成小图和中图时使用

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 显示缩略图并可以点击查看大图
 */
import React, { useState } from 'react';
import { Container, ImgPreview } from 'dumi-lib';
import ImgBox from './styles';


export default () => {

  const classes = ImgBox();
  const fssidSmall = 'small';
  const fssidMiddle = 'middle';

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');

  return (
    <Container>
      <div className={classes.box}>
        <ImgPreview
          title="测试用例"  
          fssidSmall={fssidSmall}
          fssidMiddle={fssidMiddle}
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          setUrlSmall={setUrlSmall}
          setUrlMiddle={setUrlMiddle}
        />
      </div>
    </Container>
  );
};
```

## 阻止查看大图

```tsx
/**
 * title: 阻止查看大图
 * desc: 显示缩略图
 */
import React, { useState } from 'react';
import { Container, ImgPreview } from 'dumi-lib';
import ImgBox from './styles';


export default () => {

  const classes = ImgBox();
  const fssidSmall = 'small';
  const fssidMiddle = 'middle';

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');

  return (
    <Container>
      <div className={classes.box}>
        <ImgPreview
          title="测试用例"  
          fssidSmall={fssidSmall}
          fssidMiddle={fssidMiddle}
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          setUrlSmall={setUrlSmall}
          setUrlMiddle={setUrlMiddle}
          preview={false}
        />
      </div>
    </Container>
  );
};
```

## BaseImgPreview 基础预览组件

```tsx
/**
 * title: 基础预览组件
 */
import React, { useState } from 'react';
import { Container, BaseImgPreview } from 'dumi-lib';
import ImgBox from './styles';

export default () => {

  const classes = ImgBox();
  const fssidSmall = 'small';
  const fssidMiddle = 'middle';

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');

  return (
    <Container>
      <div className={classes.box}>
        <BaseImgPreview
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
<ImgPreview
  title="测试用例"  
  fssidSmall={fssidSmall}
  fssidMiddle={fssidMiddle}
  urlSmall={urlSmall}
  urlMiddle={urlMiddle}
  setUrlSmall={setUrlSmall}
  setUrlMiddle={setUrlMiddle}
/>
```

### ImgPreview

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| title   | 标题 | `string` | -      |
| fssidMiddle      | 中图id                                                 | `string` | -  |
| urlSmall | 小图url                                        | `string` | -    |
| urlMiddle | 中图url                                        | `string` | -    |
| setUrlSmall | 设置小图url                                        | `funtion` | -    |
| setUrlMiddle | 设置中图url                                        | `funtion` | -    |
| setUrlSmall | 设置小图url                                        | `funtion` | -    |
| preview | 是否可以查看大图                                       | `boolean` | `true`   |

### BaseImgPreview
| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| title   | 标题 | `string` | -      |
| urlSmall | 小图url                                        | `string` | -    |
| urlMiddle | 中图url                                        | `string` | -    |
| filedownload | 下载图片方法,`return { buffer: bufferData }`                                       | `funtion` | -    |
| preview | 是否可以查看大图                                       | `boolean` | `true`   |

