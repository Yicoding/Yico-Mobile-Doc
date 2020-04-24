
## ImgLoad

Demo:

```tsx
/**
 * title: 我是标题
 * desc: 我是简介，我可以用 `Markdown` 来编写
 */
import React from 'react';
import { ImgLoad } from 'dumi-lib';
import styled from "styled-components";

const demoImg = require("@/assets/images/demo.png");

const DemoBox = styled.div`
  display: inline-block;
`;

export default () => (
  <DemoBox>
    <ImgLoad
      title="Demo"
      src={demoImg}
    />
  </DemoBox>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
