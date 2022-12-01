// 运行时配置

import { InitDataType, RunTimeLayoutConfig } from "@umijs/max";
import { MenuProps } from "antd";
import { useState } from 'react';
import './app.less';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string, src: string }> {
  return { name: '管理员', src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg', };
}

export const layout: RunTimeLayoutConfig = (initialState) => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return {
    // 常用属性
    title: '鲸落系统',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    // layout: 'mix',
    layout: 'top',
    logout: (initialState: InitDataType['initialState']) => {

    },
    // headerRender: (props: any, defaultDom: React.ReactNode) => {
    //   console.log(props, defaultDom)
    //   return defaultDom;
    // }
  };
};
