
# Steps

Steps步骤条: 引导用户按照流程完成任务的导航条。

# 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 简单的步骤条
 */
import React from "react";
import { Container, Steps } from "dumi-lib";

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="large" current={1}>
        <Step status="pass-red" title="营业执照与法人" />
        <Step title="开户凭证" />
        <Step status="disabled" title="经营场所" />
      </Steps>
    </Container>
  )
};
```

## 迷你版

```tsx
/**
 * title: 迷你版
 * desc: 迷你版的步骤条，通过设置 `<Steps size="small">`启用
 */
import React from "react";
import { Container, Steps } from "dumi-lib";

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="small" current={1}>
        <Step status="pass-red" title="营业执照与法人" />
        <Step title="开户凭证" />
        <Step status="disabled" title="经营场所" />
      </Steps>
    </Container>
  )
};
```

## 竖直方向的步骤条

```tsx
/**
 * title: 竖直方向的步骤条
 * desc: 简单的竖直方向的步骤条
 */
import React from "react";
import { Container, Steps } from "dumi-lib";

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="small" direction="column" current={1}>
        <Step
          status="pass-blue"
          title="资料审核中"
          desc="审核结果将在1~2个工作日内给出，如果审核不通过，请及时修改你的资料哦"
        />
        <Step
          status="process"
          title="合同签约"
          desc="审核通过后，前往【我的申请】可直接签约哦~"
        />
        <Step
          status="await"
          title="系统接入"
          desc="审核通过后，双方将进行系统联调对接，我们会给您的邮箱（xiali.li@126.com）发送系统接入指南"
        />
      </Steps>
    </Container>
  )
};
```

## 状态显示

```tsx
/**
 * title: 状态显示
 * desc: 提供多种显示状态
 */
import React from "react";
import { Container, Steps } from "dumi-lib";

const { Step } = Steps;

export default () => {
  return (
    <Container>
      <Steps size="small" direction="column" current={1}>
        <Step
          status="pass-blue"
          title="pass-blue"
        />
        <Step
          status="process"
          title="process"
        />
        <Step
          status="await"
          title="await"
        />
        <Step
          status="pass-red"
          title="pass-red"
        />
        <Step
          status="error"
          title="error"
        />
        <Step
          status="disabled"
          title="disabled"
        />
        <Step
          status="active"
          title="active"
        />
      </Steps>
    </Container>
  )
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

| 属性 | 说明 | 类型 | 默认值 |
| ---- | --- | --- | ----- |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | number | 0 |
| size | 尺寸,有 large 和 small 两种 | string | large |
| direction | 指定步骤条方向,有 row 和 column 两种 | string | row |

### Steps.Step

| 属性 | 说明 | 类型 | 默认值 |
| ---- | --- | --- | ----- |
| status | 指定状态 | string | active |
| title | 标题 | React.Element | - |
| desc | 步骤的详情描述，可选 | string | - |
| icon | 步骤图标，可选 | object/React.Element | - |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
