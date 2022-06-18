/**
         * 用于显示详情
         * @Author digital_village
         * @Date 2021-12-02 9:12 PM
         */
export function message(msg) {
    var p = document.createElement('p')
    p.textContent = msg
    var body = document.createElement('div')
    body.style = 'height: 80%;margin-left: 5%;margin-right: 5%;font-size: 16px;text-indent: 2em;overflow-y: auto;color: white;'
    body.appendChild(p)



    var head = document.createElement('div')
    head.style = ' height: 10%;position: relative;'
    //插入closeIcon
    head.appendChild(window.closeIcon)
    var page = document.createElement('div')
    page.style = 'width: 35%;height: 70%;background-color: rgba(0, 0, 0, 0.399);margin: auto;border-radius: 20px;'
    //插入head和body
    page.appendChild(head)
    page.appendChild(body)
    var message = document.createElement('div')
    message.style = 'height: 100%;width: 100%;position: absolute;z-index: 50;left: 0;top: 0;background-color: rgba(255, 255, 255, 0.399);display: flex;'
    message.appendChild(page)
    // console.log(document.getElementsByTagName("body")[0])
    document.getElementsByTagName('body')[0].insertBefore(message, (document.getElementsByTagName("body")[0]).firstElementChild)


}
