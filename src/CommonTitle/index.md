---
group:
  title: CommonTitle 标题
---

# CommonTitle 标题

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 通用标题
 */
import React from 'react';
import { Container, CommonTitle } from 'dumi-lib';

export default () => {
  return (
    <Container>
      <div style={{ padding: '0 20px' }}>
        <CommonTitle>我是测试标题</CommonTitle>
      </div>
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| children   | 标题文案 | `string/React.Element` | -      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
