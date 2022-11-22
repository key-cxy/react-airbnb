

## React的介绍

### 1.React是什么？

- React：用于构建用户界面的JavaScript库；
- React官方文档：[中文文档](https:zh-hans.reactjs.org/)

![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.012.png)

![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.013.jpeg)

### 2.React的特点

1. 声明式导航

   - 声明式导航是目前整个大前端开发的模式：Vue、React、Flutter、SwiftUI等；
   - 它允许我们只需要维护自己的状态，当状态改变时，React可以根据最新状态去渲染我们的UI界面；

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.014.png)

   

2. 组件化开发

   - 组件化开发页面目前前端的流行趋势，我们会将复杂的界面拆分成一个个小组件；
   - 如何合理的进行组件的划分和设计

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.015.png)

   

3. 多平台适配

   - 2013年，React发布之初主要是开发Web页面；
   - 2015年，Facebook推出了ReactNative，用于开发移动端跨平台；（虽然目前Flutter非常火爆，但是还是有很多公司在使用 ReactNative）；
   - 2017年，Facebook推出ReactVR，用于开发虚拟现实Web应用程序；（VR也会是一个火爆的应用场景）；

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.016.png)

   

4. React的开发依赖

   - react：包含react所必须的核心代码；

   - react-dom：react渲染在不同平台所需要的核心代码；

   - babel：将jsx转换成React代码的工具；

     

5. 实现Hello World

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.019.jpeg)
   
   - ReactDOM.createRoot函数：用于创建一个React根，之后渲染的内容会包含在这个根中
   
     - 参数：将渲染的内容，挂载到哪一个HTML元素上
     - 这里我们定义一个为app的div
   
   - root,render函数：
   
     - 参数：要渲染的根组件
   
     - 我们可以通过{}语法来引入外部的变量或者表达式
   
       
   
6. Hello World组件化开发

   - 整个逻辑其实可以看做一个整体，那么我们就可以将其封装成一个组件：
     - root.render 参数是一个HTML元素或者一个组件；
     - 我们可以先将之前的业务逻辑封装到一个组件中，然后传入到 ReactDOM.render 函数中的第一个参数；
   - 在React中，如何封装一个组件呢？（这里我们暂时使用类的方式封装组件）
     - 定义一个类（类名大写，组件的名称是必须大写的，小写会被认为是HTML元素），继承自React.Component
     - 实现当前组件的render函数
     - render当中返回的jsx内容，就是之后React会帮助我们渲染的内容

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.021.png)

   

7. 组件化 - 数据依赖

   - 在组件中的数据，我们可以分成两类：
     - 参与界面更新的数据：当数据变量时，需要更新组件渲染的内容；
     - 不参与界面更新的数据：当数据变量时，不需要更新将组建渲染的内容；
   - 参与界面更新的数据我们也可以称之为是参与数据流，这个数据是定义在当前对象的state中
     - 我们可以通过在构造函数中 this.state = {定义的数据}
     - 当我们的数据发生变化时，我们可以调用 this.setState 来更新数据，并且通知React进行update操作；
     - 在进行update操作时，就会重新调用render函数，并且使用最新的数据，来渲染界面

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.022.png)

8. 组件化 – 事件绑定

   - 事件绑定中的this
     - 在类中直接定义一个函数，并且将这个函数绑定到元素的onClick事件上，默认情况下是undefined，因为在正常的DOM操作中，监听点击，监听函数中的this其实是节点对象（比如说是button对象）；这次因为React并不是直接渲染成真实的DOM，我们所编写的button只是一个语法糖，它的本质React的Element对象；那么在这里发生监听的时候，react在执行函数时并没有绑定this，默认情况下就是一个undefined；
     - 我们在绑定的函数中，可能想要使用当前对象，比如执行 this.setState 函数，就必须拿到当前对象的this，我们就需要在传入函数时，给这个函数直接绑定this，类似于下面的写法： 

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.023.png)

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.024.png)

   

9. 电影列表展示

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.025.jpeg)

   ![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.026.png)

   

10. 计数器实现

![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.027.jpeg)

![](G:\Advance\react-study\react-airbnb\note\imgs\1_react_introduction\Aspose.Words.173aeb1f-bf24-4868-9ba2-e5f67bf978be.028.png)