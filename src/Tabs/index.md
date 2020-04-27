---
group:
  title: Tabs 标签页
---

# Tabs 标签页

Tabs 标签页: 用于让用户在不同的视图中进行切换。

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 */
import React from 'react';
import { Container, Tabs } from 'dumi-lib';

export default () => {

  const tabs = ["1 of Tab", "2 of Tab", "3 of Tab", "4 of Tab"];

  return (
    <Container>
      <Tabs
        tabs={tabs}
      />
    </Container>
  );
};
```

```tsx
/**
 * title: 可滑动tab
 * desc: 当有多个tab页时，允许左右滑动
 */
import React from 'react';
import { Container, Tabs } from 'dumi-lib';

export default () => {

  const tabs = ["1 of Tab", "2 of Tab", "3 of Tab", "4 of Tab", "5 of Tab"];

  return (
    <Container>
      <Tabs
        tabs={tabs}
        initialPage={1}
      />
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| tabs   | tab数据 | `Models.TabData[]` | `[]`      |
| initialPage   | 初始化Tab, index | `number` | `0`      |
| num   | 超过几个标签开启左右滑动 | `number` | `4`      |
| onChange   | tab变化时触发 | 返回`item、index` | -      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
