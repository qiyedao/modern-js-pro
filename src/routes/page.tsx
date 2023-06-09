import { Helmet } from '@modern-js/runtime/head';
import { Button } from 'antd';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <div>
      <Button type="primary">default</Button>
    </div>
  </div>
);

export default Index;
