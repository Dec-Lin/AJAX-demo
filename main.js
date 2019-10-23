

window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function ({ url, method, body, headers /*ES6语法 解构赋值*/ }) {

    return new Promise(function (resolve, reject) {
        //全局window下面的Promise属性，必须接受一个函数,固定写法。
        //如果成功了就调用一下 resolve，如果失败就调 reject。然后把结果放在第一个参数里面

        let request = new XMLHttpRequest()
        request.open(method, url)
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Dec': '21'
        }
    }).then(   //Promise,成功调用第一个函数，失败调用第二个函数
        (text) => { console.log(text) },
        (request) => { console.log(request) }
    )
})


/*
let request = new XMLHttpRequest() //声明一个 XMLHttpRequest 对象
request.open('POST', '/xxx')  //配置 request  参数（method、URL），（设置第一部分）
request.setRequestHeader('Dec', '21') //（设置第二部分）
request.setRequestHeader('Content-Type', 'text/x-www-form-urlencoded')//（设置第二部分）
request.send('在这里设置request第四部分') // 发送请求，（设置第四部分）

request.onreadystatechange = function () {
    //添加监听事件，当实例对象的readyState属性发生变化时，就会执行这个函数
    if (request.readyState === 4) {
        //判断实例对象当前的状态，如果为4，说明请求和响应都完毕了
        console.log('请求和响应都完毕了')
        if (request.status >= 200 && request.status < 300) {
            //判断服务器回应的 HTTP 状态码，如果大于等于200并且小于300，说明请求成功
            console.log('说明请求成功')
            console.log(typeof request.responseText)
            console.log(request.responseText)
            let string = request.responseText //第四部分的内容
            let object = window.JSON.parse(string)//把符合 JSON 语法的字符串转换成 JS 对应的值
            console.log(typeof object)
            console.log(object)
            console.log('object.note')
            console.log(object.note)
            console.log('object.note.from')
            console.log(object.note.from)
        } else if (request.status >= 400) {
            console.log('说明请求失败')
        }
    }
}




request.onreadystatechange = function () {
    //添加监听事件，当实例对象的readyState属性发生变化时，就会执行这个函数
    if (request.readyState === 4) {
        //判断实例对象当前的状态，如果为4，说明请求和响应都完毕了
        console.log('请求和响应都完毕了')
        console.log(request.status) //获取 HTTP状态码
        console.log(request.statusText) //获取HTTP状态码解释（OK）
        if (request.status >= 200 && request.status < 300) {
            //判断服务器回应的 HTTP 状态码，如果大于等于200并且小于300，说明请求成功
            console.log('说明请求成功')
            console.log(request.getResponseHeader('Content-Type')) //获取第二部分的某一项
            console.log(request.getAllResponseHeaders()) //获取所有响应头（第二部分）
            console.log(request.responseText) //获取响应的第四部分
            let string = request.responseText //第四部分的内容
            let object = window.JSON.parse(string)//把符合 JSON 语法的字符串转换成 JS 对应的值
        } else if (request.status >= 400) {
            console.log('说明请求失败')
        }
    }
}
*/
