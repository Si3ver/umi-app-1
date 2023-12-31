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
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'CountDown',
      path: '/countdown',
      component: './CountDown',
    },
    {
      name: 'Ref',
      path: '/ref',
      component: './Ref',
    },
    {
      name: 'Formily1 - Quick Start',
      path: '/formily1',
      component: './Formily1',
    },
  ],
  npmClient: 'pnpm',
});

