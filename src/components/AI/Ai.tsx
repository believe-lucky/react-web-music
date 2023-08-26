import { useEffect, useState, useRef } from 'react'
import { Modal, Button, Input, message } from 'antd'
import './ai.less'
import { useRequest } from 'ahooks'
import { getAccess_token, asyncGuess, getAiResult } from '@/api/ai'
import { printText } from './usePrint'
function getAccessToken() {
  return getAccess_token()
}
export default function Ai({ isShowAi }) {
  const [showModal, setShowModal] = useState(true)
  const close = () => {
    // 销毁modal框
    setShowModal(false);
    // 销毁ai dom节点
    isShowAi(false)
  }
  const footer = [
    // <Button
    //   key="close"
    //   type='primary'
    //   onClick={close}
    // >
    //   关闭
    // </Button>
  ]

  const getResult = async () => {
    const guessParams = {
      // "access_token": res.data,
      "async": 1,
      "typeId": 1,
      "text": "你好",
      "seq_len": 256,
      "task_prompt": "qa",
      "penalty_score": 1.2,
      "dataset_prompt": "qa",
      "is_unidirectional": 0,
      "min_dec_len": 2,
      "min_dec_penalty_text": "。?：！[<S>]",
      "mask_type": "word",
      "topp": 0.8
    }
    const response = await asyncGuess(localStorage.getItem('access-token'), guessParams)
    if (response.msg == 'success') {
      const resultParams = {
        // "access_token": localStorage.getItem('access-token'),
        "taskId": response.data.taskId
      }
      const result = await getAiResult(localStorage.getItem('access-token'), resultParams)
      if (result.msg == 'success') {
        console.log('第三步，获取结果', result);
      }
    } else {
      message.error(response.msg)
      printText(document.querySelector('.chat'),'听不懂你在说什么，请换个方式提问')
    }
  }
  // 监听 shift+enter或enter键
  const handleKeyDown = (e) => {
    if (e.shiftKey && e.keyCode == 13) {
      console.log('shift + enter');
    } else if (e.keyCode == 13) {
      console.log('发起请求');
      getResult()
    }
    return;
  }

  const { data } = useRequest(getAccessToken, {
    ready: !localStorage.getItem('access-token'),// 有token就不再发请求
    onSuccess: (res) => {
      console.log('第一步，获取token', res);
      if (res.msg == 'success') {
        localStorage.setItem('access-token', res.data)
      }
    }
  })

  const chat = useRef(null)
  useEffect(() => {
    chat.current.focus()
    return () => {
      console.log('ai unmounted');

    }
  },[chat])
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
          <div className="chat"></div>
        </div>
        <div className="send">
          <Input.TextArea
            placeholder="请输入问题，可通过shift+回车换行"
            allowClear
            autoSize={{ maxRows: 3 }}
            onKeyDown={(e) => handleKeyDown(e)}
            ref={chat}
          />
          <Button onClick={getResult} type="primary">发送</Button>
        </div>
      </Modal>
    </div>
  )
}
