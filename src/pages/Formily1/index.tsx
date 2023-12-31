// https://formilyjs.org/zh-CN/guide/quick-start 快速开始的例子
import { createForm } from '@formily/core' // 内核库
import {
  FormProvider, // 作为视图层桥接表单模型的入口
  FormConsumer, // 响应式模型的响应器而存在（原理 render props）
  Field // 承接普通字段的组件 --> https://react.formilyjs.org/zh-CN/api/components/field
} from '@formily/react' // ui 桥接库，接入内核数据，实现最终表单交互效果
import {
  FormItem,
  FormLayout, // 控制 FormItem 样式布局 --> https://antd.formilyjs.org/zh-CN/components/form-layout
  Input,
  FormButtonGroup, // 表单按钮容器，负责按钮布局
  Submit, // 表单提交动作触发器
} from '@formily/antd' // antd 表单某些场景覆盖不够全面（如详情预览态），@formily/antd 开箱即用

const form = createForm() // 表单核心领域模型

export default () => {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input" // 标识字段在表单在最终提交数据中的路径
          title="输入框" // 字段标题 - 展示层
          required
          initialValue="Hello world"
          decorator={[FormItem]} // 字段的 UI 装饰器
          component={[Input]} // 字段的输入控件
        />
      </FormLayout>
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: '1px dashed #666',
            }}
          >
            实时响应：{form.values.input}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
