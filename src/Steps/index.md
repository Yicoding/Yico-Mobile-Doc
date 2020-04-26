---
group:
  title: Steps 步骤条
---

# Steps 步骤条

Steps 步骤条: 引导用户按照流程完成任务的导航条。

# 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 简单的步骤条
 */
import React from 'react';
import { Container, Steps } from 'dumi-lib';

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="large" current={1}>
        <Step status="pass-red" title="Step1" />
        <Step title="Step2" />
        <Step status="disabled" title="Step3" />
      </Steps>
    </Container>
  );
};
```

## 迷你版

```tsx
/**
 * title: 迷你版
 * desc: 迷你版的步骤条，通过设置 `<Steps size="small">`启用
 */
import React from 'react';
import { Container, Steps } from 'dumi-lib';

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="small" current={1}>
        <Step status="pass-red" title="Step1" />
        <Step title="Step2" />
        <Step status="disabled" title="Step3" />
      </Steps>
    </Container>
  );
};
```

## 竖直方向的步骤条

```tsx
/**
 * title: 竖直方向的步骤条
 * desc: 简单的竖直方向的步骤条
 */
import React from 'react';
import { Container, Steps } from 'dumi-lib';

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="small" direction="column" current={1}>
        <Step status="pass-blue" title="Step1" desc="This is desc" />
        <Step status="process" title="Step2" desc="This is desc" />
        <Step status="await" title="Step3" desc="This is desc" />
      </Steps>
    </Container>
  );
};
```

## 状态显示

```tsx
/**
 * title: 状态显示
 * desc: 提供多种显示状态
 */
import React from 'react';
import { Container, Steps } from 'dumi-lib';

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps  direction="column" current={1}>
        <Step status="pass-blue" title="pass-blue" />
        <Step status="process" title="process" />
        <Step status="await" title="await" />
        <Step status="pass-red" title="pass-red" />
        <Step status="error" title="error" />
        <Step status="disabled" title="disabled" />
        <Step status="active" title="active" />
      </Steps>
    </Container>
  );
};
```

## API

```bash
<Steps>
  <Step title="第一步" />
  <Step title="第二步" />
  <Step title="第三步" />
</Steps>

```

### Steps

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| current   | 指定当前步骤，从 0 开始记数。 | `number` | `0`      |
| size      | 尺寸,有 `large` 和 `small` 两种                                                 | `string` | `large`  |
| direction | 指定步骤条方向,有 `row` 和 `column` 两种                                        | `string` | `row`    |

### Steps.Step

| 属性   | 说明                                                                   | 类型                 | 默认值 |
| ------ | ---------------------------------------------------------------------- | -------------------- | ------ |
| status | 指定状态(`active`、`disabled`、`process`、`await`、`pass-blue`、`pass-red`、`error`) | `string`               | `active` |
| title  | 标题                                                                   | `string/React.Element`        | -      |
| desc   | 步骤的详情描述，可选                                                   | `string/React.Element`               | -      |
| icon   | 步骤图标，可选                                                         | `React.Element` | -      |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
