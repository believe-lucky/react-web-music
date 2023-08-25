import { useEffect, useState } from 'react'
import { Modal, Button, Input } from 'antd'
import './ai.less'
export default function Ai({ isShowAi }) {
  const [showModal, setShowModal] = useState(true)
  const close = () => {
    // 销毁modal框
    setShowModal(false);
    // 销毁ai dom节点
    isShowAi(false)
  }
  const footer = [
    <Button
      key="close"
      type='primary'
      onClick={close}
    >
      关闭
    </Button>
  ]
  useEffect(() => {
    console.log('ai ready');
    return () => {
      console.log('ai unmounted');
      
    }
  })
  // 监听 shift+enter或enter键
  const handleKeyDown = (e) => {
    if(e.shiftKey && e.keyCode==13) {
      console.log('shift + enter');
    } else if(e.keyCode == 13) {
      console.log('发起请求');
    }
    return;
  }
  return (
    <div className='Ai'>
      <Modal
        open={showModal}
        title="智能AI助理"
        width={600}
        footer={footer}
        centered
        keyboard={false}
        maskClosable={false}
        wrapClassName="aiContainer"
        onCancel={close}
      >
        <div className="content">
          <div></div>
        </div>
        <Input.TextArea
          placeholder="请输入问题，可通过shift+回车换行"
          allowClear
          autoSize={{maxRows: 3}}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </Modal>
    </div>
  )
}
