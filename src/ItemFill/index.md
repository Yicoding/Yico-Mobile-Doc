---
group:
  title: ItemFill 文本显示
---

# ItemFill 文本显示

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 */
import React from 'react';
import { List } from 'antd-mobile';
import { Container, ItemFill } from 'dumi-lib';

export default () => {
  return (
    <Container>
      <List>
        <ItemFill extra="百货商店" arrow="horizontal">
          经营范围
        </ItemFill>
        <ItemFill
          extra="百货商店百货商店百货商店百货商店百货商店百货商店"
          arrow="horizontal"
        >
          经营范围
        </ItemFill>
        <ItemFill extra="百货商店百货商店百货商店百货商店百货商店百货商店">
          经营范围
        </ItemFill>
      </List>
    </Container>
  );
};
```

## API

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| children   | 标题文案 | `string/React.Element` | -      |
| extra   | 右侧文案 | `string/React.Element` | -      |
| arrow   | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是empty则存在对应的dom,但是不显示 | `string` | -      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
