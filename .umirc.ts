import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
    // {
    //   name: 'CountDown',
    //   path: '/countdown',
    //   component: './CountDown',
    // },
    // {
    //   name: 'Ref',
    //   path: '/ref',
    //   component: './Ref',
    // },
    {
      name: 'Formily1 - Quick Start',
      path: '/formily1',
      component: './Formily1',
    },
    {
      name: 'Formily - 登录 - markup schema',
      path: '/formilyb1/markup',
      component: './FormilyBase1/1_markup',
    },
    {
      name: 'Formily - 登录 - json schema',
      path: '/formilyb1/json',
      component: './FormilyBase1/2_json',
    },
    {
      name: 'Formily - 登录 - 纯 jsx',
      path: '/formilyb1/jsx',
      component: './FormilyBase1/3_jsx',
    },
    {
      name: 'Formily - 注册 - markup schema',
      path: '/formilyb2/markup',
      component: './FormilyBase2/1_markup',
    },
    {
      name: 'Formily - 注册 - json schema',
      path: '/formilyb2/json',
      component: './FormilyBase2/2_json',
    },
    {
      name: 'Formily - 注册 - 纯 jsx',
      path: '/formilyb2/jsx',
      component: './FormilyBase2/3_jsx',
    },
    {
      name: 'Formily - 修改密码 - markup schema',
      path: '/formilyb3/markup',
      component: './FormilyBase3/1_markup',
    },
    {
      name: 'Formily - 修改密码 - json schema',
      path: '/formilyb3/json',
      component: './FormilyBase3/2_json',
    },
    {
      name: 'Formily - 修改密码 - 纯 jsx',
      path: '/formilyb3/jsx',
      component: './FormilyBase3/3_jsx',
    },
    {
      name: 'Formily - 编辑详情 - markup schema',
      path: '/formilyb4/markup',
      component: './FormilyBase4/1_markup',
    },
    {
      name: 'Formily - 编辑详情 - json schema',
      path: '/formilyb4/json',
      component: './FormilyBase4/2_json',
    },
    {
      name: 'Formily - 编辑详情 - jsx',
      path: '/formilyb4/jsx',
      component: './FormilyBase4/3_jsx',
    },
  ],
  npmClient: 'pnpm',
});

