/**
 * @description: 设置dom的光标状态
 * @param {HTMLElement} dom - 打印内容的dom
 * @param {"loading"|"typing"|"end"} status - 打印状态
 * @return {void}
 */
function setCursorStatus(dom, status) {
  const classList = {
    loading: 'typing blinker',
    typing: 'typing',
    end: '',
  }
  dom.className = classList[status]
}

/**
 * @description:
 * @param {HTMLElement} dom - 打印内容的dom
 * @param {string} content - 打印文本内容
 * @param {number} speed - 打印速度
 * @return {void}
 */
export async function printText(dom, content, speed = 100) {
  let index = 0
  setCursorStatus(dom, 'typing')
  let printInterval = await setInterval(() => {
    dom.innerText += content[index]
    index++
    if (index >= content.length) {
      setCursorStatus(dom, 'end')
      clearInterval(printInterval)
    }
  }, speed)
}