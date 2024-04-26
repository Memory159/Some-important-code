# Some-important-code
这里会不定期更新一些重要的代码，欢迎关注！
## 防抖与节流
### 防抖
防抖是什么: <br>
1、对于在事件被触发 n 秒后再执行的回调  --> 延迟执行 <br>
2、如果在这  n  秒内再次触发事件，重新开始计时 <br>
防抖的场景: <br>
1、ajax 请求数据 / 提交数据（下拉刷新）  
2、输入验证 <br>
注意：防抖有两种场景，一种是上来就要执行一次，一种是在规定的时间后去执行
### 节流
节流是什么: <br>
1、事件被触发，n 秒之内只执行一次事件处理函数 <br>
2、无论在这段时间内触发了多少次函数调用，只会执行一次 <br>
节流的场景: <br>
1、输入验证（验证长度等）<br>
2、ajax 提交 

## 阿里云 OSS 
### 一、阿里云oss是什么:
是阿里云提供的对象存储服务，通过阿里云 OSS JavaScript SDK，前端开发者可以方便地在网页或者 Web 应用中实现上传、下载、管理对象等操作
### 二、如何使用:
- 创建 OSS 存储空间: 在阿里云控制台中创建一个 OSS 存储空间，用于存储对象（文件）。
- 获取 Access Key 和 Access Key Secret: 在阿里云控制台中，获取对应的 Access Key 和 Access Key Secret，用于通过 SDK 或 API 进行身份验证。
- 安装阿里云 OSS SDK: 如果是 js,通过 npm 或 yarn 安装 ali-oss 包来使用阿里云 OSS SDK。如果是其他语言，也可以在相应的开发环境中安装对应的 SDK。
- 初始化 OSS 客户端: 在应用中初始化阿里云 OSS 客户端，使用你的 Access Key、Access Key Secret 和 Endpoint 连接到阿里云 OSS 服务。
- 上传、下载、管理对象: 用 SDK 提供的方法，可以上传、下载和管理对象。用 put 方法上传文件，用 get 方法下载文件，用 list 方法列出存储空间中的对象列表等。
- 处理权限和安全: 根据需求设置存储空间和对象的权限和安全策略，以确保数据的安全性和隐私性。
- 处理错误和异常: 在使用阿里云 OSS SDK 过程中，要处理可能发生的错误和异常，保证程序的稳定性和可靠性。
- 优化性能和成本: 根据实际需求和使用情况，优化对象存储的性能和成本，可以通过设置存储类型、生命周期规则、CDN 加速等方式来提升性能和降低成本。

## hooks函数
### 一、什么是hooks函数
**专业解释：Vue3中的 Hooks 函数是一种用于在组件中共享可复用逻辑的方式。** <br>
**大白话：将单独功能的 js 代码抽离出来，加工成公共函数，从而达到逻辑复用。** <br>
在尤大大开发 Vue3 Composition API 主要考虑了以下两点： <br>
1、对 Vue 社区调研，了解了许多使用 Vue 的开发者对于更好的组件逻辑组织方式的期望。 <br>
2、对 React Hooks 和其他前端框架的解决方案进行了学习和借鉴。 <br>
有了 composition API 意味着我们就可以自定义封装 hooks，最终的目的都是进行复用，在 Vue2 中复用的方式大部分都是采取 mixin，但相比 hooks，hooks 更清楚复用的功能来源及功能 

## 二、如何封装一个 hooks 函数
- 例如实现一个点击按钮获取body的宽度和高度
```js
<script setup lang="ts">
import { reactive } from "vue";
 
const data = reactive({
  width: 0,
  height:0
})
 
const getViewportSize = () => {
  data.width = document.body.clientWidth;
  data.height = document.body.clientHeight;
}
</script>
 
<template>
  <button @click="getViewportSize" > 获取窗口大小 </button>
    <div>
      <div>宽度 ： {{data.width}}</div>
      <div>宽度 ： {{data.height}}</div>
    </div>
</template>
```
抽离逻辑，封装成 hooks 函数 <br>
**hooks 封装规范** <br>
1、新建 hooks 文件 <br>
2、函数名前缀加上 ues <br>
3、合理利用 Vue 提供的响应式函数及生命周期 <br>
4、暴露出 变量 和 方法 提供外部需要时使用

## 三、Hooks 常用 Demo
**1、验证码倒计时** <br>
**2、防抖** <br>
**3、节流**
