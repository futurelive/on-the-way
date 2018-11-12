## BaseUrl
http://116.85.57.201/api/v1/


+ 用户

    - [getAll](#获取所有用户) - user
    - [new](#用户注册) - user
    - [update](#用户更新)  - user/`userId`
    - [get](#用户获取)  - user/`userId`
    - [delete](#用户删除) - user/`userId`

+ 知识库

    - [new](#新建知识库) - `userId`/knowledge
    - [get](#获取知识库) - `userId`/knowledge
    - [getAll](#获取所有知识库) - `userId`/knowledge
    - [update](#更新知识库) - `userId`/knowledge/`knowledgeId`
    - [delete](#删除知识库) - `userId`/knowledge/`knowledgeId`

+ 文章

    - [new](#新建文章) - `userId`/knowledge/article
    - [get](#获取文章) - `userId`/knowledge/article/`articleId`
    - [getAll](#获取所有文章) - `userId`/knowledge/article
    - [update](#更新文章) - `userId`/knowledge/`knowledgeId`/`articleId`
    - [delete](#删除文章) - `userId`/knowledge/`knowledgeId`/`articleId`

# 用户

### 用户注册
+ post
+ user
+ 参数
  
    path parameters

    query parameters

        userName：用户名
        phone：用户手机号码
        password：密码

    response

        {
            code: 0,
            msg: "注册成功!",
            data: {
                id: 2,
                token: "a944c70ac250f2e644e37f48276f2aa7f3a2d9f265cd53742d98e1b92cd7fceb",
                avatar: http://p022220j2.bkt.clouddn.com/default_avatar.png",
                username: "",
                phone: "15105600979",
                province: "",
                city: "",
                area: "",
                address: "",
                signature: "",
                sex: 0,
                age: 0,
                uuid: null,
                updateTime: "2018-01-01"
            }
        }
    #### [top](#BaseUrl)

### 用户更新
+ put
+ user/`userId`
+ 参数
  
    path parameters

        userId: 用户Id

    query parameters

        avatar: "http://p022220j2.bkt.clouddn.com/default_avatar.png",
        username: "",
        phone: "",
        province: "",
        city: "",
        area: "",
        address: "",
        signature: "",
        sex: 0,
        age: 0,

    response

        {
            code: 0,
            msg: "更新成功!",
            data: {
                id: 2,
                token": "a944c70ac250f2e644e37f48276f2aa7f3a2d9f265cd53742d98e1b92cd7fceb",
                avatar: "http://p022220j2.bkt.clouddn.com/default_avatar.png",
                username: "",
                phone: "15105600979",
                province: "",
                city: "",
                area: "",
                address: "",
                signature: "",
                sex: 0,
                age: 0,
                uuid: null,
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 用户获取
+ get
+ user/`userId`
+ 参数
  
    path parameters

        userId: 用户Id

    query parameters


    response

        {
            "code": 0,
            "msg": "获取成功!",
            "data": {
                "id": 2,
                "token": "a944c70ac250f2e644e37f48276f2aa7f3a2d9f265cd53742d98e1b92cd7fceb",
                "avatar": "http://p022220j2.bkt.clouddn.com/default_avatar.png",
                "username": "",
                "phone": "15105600979",
                "province": "",
                "city": "",
                "area": "",
                "address": "",
                "signature": "",
                "sex": 0,
                "age": 0,
                "uuid": null,
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 获取所有用户
+ get
+ use
+ 参数
  
    path parameters

    query parameters

    response

        [{
            "code": 0,
            "msg": "获取成功!",
            "data": {
                "id": 2,
                "token": "a944c70ac250f2e644e37f48276f2aa7f3a2d9f265cd53742d98e1b92cd7fceb",
                "avatar": "http://p022220j2.bkt.clouddn.com/default_avatar.png",
                "username": "",
                "phone": "15105600979",
                "province": "",
                "city": "",
                "area": "",
                "address": "",
                "signature": "",
                "sex": 0,
                "age": 0,
                "uuid": null,
                updateTime: "2018-01-01"
            }
        }]

    #### [top](#BaseUrl)

### 用户删除
+ delete
+ user/`userId`
+ 参数
  
    path parameters

        userId: 用户Id

    query parameters


    response

        {
            "code": 0,
            "msg": "删除成功!",
            "data": {

            }
        }
    
    #### [top](#BaseUrl)

# 知识库

### 新建知识库
+ post
+ `userId`/knowledge
+ 参数
  
    path parameters

    query parameters

        name: 知识库名称
        description：知识库描述

    response

        {
            code: 0,
            msg: "新建成功!",
            data: {
                id: 2,
                articles: [],
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 获取知识库
+ get
+ `userId`/knowledgeBase/`knowledgeId`
+ 参数
  
    path parameters

    query parameters

        name: 知识库名称
        description：知识库描述

    response

        {
            code: 0,
            msg: "新建成功!",
            data: {
                id: 2,
                articles: [],
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 获取所有知识库
+ get
+ `userId`/knowledgeBase
+ 参数
  
    path parameters

    query parameters

    response

        {
            code: 0,
            msg: "获取成功!",
            data: [
                id: ID,
                name: 知识库名称，
                description：知识库描述,
                updateTime: "2018-01-01"
            ]
        }

    #### [top](#BaseUrl)

### 更新知识库
+ put
+ `userId`/knowledge/`konwledgeId`
+ 参数
  
    path parameters

    query parameters

        name: 知识库名称
        description：知识库描述

    response

        {
            code: 0,
            msg: "修改成功!",
            data: {

            }
        }

    #### [top](#BaseUrl)

### 删除知识库
+ delete
+ `userId`/knowledge/`konwledgeId`
+ 参数
  
    path parameters

    query parameters

    response

        {
            code: 0,
            msg: "删除成功!",
            data: {

            }
        }

    #### [top](#BaseUrl)

# 文章

### 新建文章
+ post
+ `userId`/knowledge/article
+ 参数
  
    path parameters

    query parameters

        title：标题
        content: 文章内容

    response

        {
            code: 0,
            msg: "新建成功!",
            data: {
                id: 2,
                content: 文章内容,
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 获取文章
+ get
+ `userId`/knowledgeBase/`knowledgeId`/`articleId`
+ 参数
  
    path parameters

    query parameters

        title: 文章标题
        content：文章内容

    response

        {
            code: 0,
            msg: "新建成功!",
            data: {
                title: 文章标题
                content：文章内容,
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 获取所有文章
+ get
+ `userId`/knowledgeBase/article
+ 参数
  
    path parameters

    query parameters

    response

        {
            code: 0,
            msg: "获取成功!",
            data: [
                title: 文章标题,
                content：文章内容,
                updateTime: "2018-01-01"
            ]
        }

    #### [top](#BaseUrl)

### 更新文章
+ put
+ `userId`/knowledge/`konwledgeId`/`articleId`
+ 参数
  
    path parameters

    query parameters

    response

        {
            code: 0,
            msg: "修改成功!",
            data: {
                title: 文章标题,
                content：文章内容,
                updateTime: "2018-01-01"
            }
        }

    #### [top](#BaseUrl)

### 删除文章
+ delete
+ `userId`/knowledge/`konwledgeId`/`articleId`
+ 参数
  
    path parameters

    query parameters

    response

        {
            code: 0,
            msg: "删除成功!",
            data: {

            }
        }

    #### [top](#BaseUrl)