### React + Vite + Ts + Antd

#### 解决警告

1. findDOMNode was passed an instance of DomWrapper4 which is inside StrictMode. Instead, add a ref directly to the element you want to reference.
> 严格模式下，需要有一个父节点来包裹组件，用Space包裹即可

```tsx
<Popover content={SearchContent} arrow={false} trigger="click">
  <Space>
    <Input
      placeholder="大家都在搜大家都在搜大家都在搜"
      prefix={<SearchOutlined />}
      value={keywords}
      onChange={handleChangeKeywords}
    />
  </Space>
</Popover>
```

#### 修改popover样式
**需要给Popover 加overlayClassName属性才能将类名添加到popover上**