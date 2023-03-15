import { ProTable } from '@ant-design/pro-components';
import { Helmet } from '@modern-js/runtime/head';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>

    <ProTable />
  </div>
);

export default Index;
