import { ProLayout, PageContainer } from '@ant-design/pro-components';
import { Outlet, useNavigate } from '@modern-js/runtime/router';
import { useState } from 'react';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

export default function Layout() {
  const [pathname, setPathname] = useState('/');
  const navigate = useNavigate();
  return (
    <div>
      <ProLayout
        location={{
          pathname,
        }}
        token={{
          colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
          colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
          colorTextAppListIcon: 'rgba(255,255,255,0.85)',
          sider: {
            colorBgCollapsedButton: '#fff',
            colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
            colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
            colorMenuBackground: '#004FD9',
            colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
            colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
            colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
            colorMenuItemDivider: 'rgba(255,255,255,0.15)',
            colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
            colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
            colorTextMenuSelected: '#fff',
            colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
            colorTextMenu: 'rgba(255,255,255,0.75)',
            colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
            colorTextMenuTitle: 'rgba(255,255,255,0.95)',
            colorTextMenuActive: 'rgba(255,255,255,0.95)',
            colorTextSubMenuSelected: '#fff',
          },
        }}
        route={{
          path: '/',
          routes: [
            {
              path: '/',
              name: 'index',
              routes: [
                {
                  path: '/welcome',
                  name: '默认错误',
                },
              ],
            },
            {
              path: '/default',
              name: '默认错误',
            },
          ],
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/');
              navigate(item.path || '/');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
      >
        <PageContainer style={{ width: '100%' }} content={<Outlet />} />
      </ProLayout>
    </div>
  );
}
