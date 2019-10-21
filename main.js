myButton.addEventListener('click', function () {
    let request = new XMLHttpRequest() //声明一个 XMLHttpRequest 对象
    request.open('GET', 'http://yangqin.com:8002/xxx')  //配置 request  参数（method、URL）
    request.send() // 发送请求

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

})