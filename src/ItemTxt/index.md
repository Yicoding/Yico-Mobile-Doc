---
group:
  title: ItemTxt 普通文本
---

# ItemTxt 普通文本

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 */
import React from 'react';
import { List } from 'antd-mobile';
import { Container, ItemTxt } from 'dumi-lib';

export default () => {
  return (
    <Container>
      <List>
        <ItemTxt extra="百货商店">
          经营范围
        </ItemTxt>
        <ItemTxt
          extra="百货商店百货商店百货商店百货商店百货商店百货商店"
        >
          经营范围
        </ItemTxt>
        <ItemTxt extra="百货商店百货商店百货商店百货商店百货商店百货商店">
          经营范围
        </ItemTxt>
      </List>
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| children   | 标题文案 | `string/React.Element` | -      |
| extra   | 右侧文案 | `string/React.Element` | -      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
