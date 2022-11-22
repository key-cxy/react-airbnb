## JSX

### 1.认识JSX

![](G:\Advance\react-study\react-airbnb\note\imgs\2_jsx\Aspose.Words.9543e424-a9c1-4494-b2df-627277cc2e93.012.png)

- **这段element变量的声明右侧赋值的标签语法是什么呢？**

  - 它不是一段字符串（因为没有使用引号包裹）；

  - 它看起来是一段HTML元素，但是我们能在js中直接给一个变量赋值html吗？

  - 其实是不可以的，如果我们将 type="text/babel" 去除掉，那么就会出现语法错误；

  - 它到底是什么呢？其实它是一段jsx的语法；

    

- JSX是什么？

  - JSX是一种JavaScript的语法扩展(eXtension)，也在很多地方称之为JavaScript XML，因为看起来就是一段XML语法；

  - 它用于描述我们的UI界面，并且其完成可以和JavaScript融合在一起使用；

  - 它不同于Vue中的模块语法，你不需要专门学习模块语法中的一些指令（比如v-for、v-if、v-else、v-bind）；

    

- 为什么React选择JSX?

  - React认为渲染逻辑本质上与其他UI逻辑存在内在耦合

    - 比如UI需要绑定事件（button、a原生等等）；

    - 比如UI中需要展示数据状态；

    - 比如在某些状态发生改变时，又需要改变UI；

    - 他们之间是密不可分，所以React没有将标记分离到不同的文件中，而是将它们组合到了一起，这个地方就是组件（Component）；

      

- JSX的书写规范：

  - JSX的顶层只能有一个根元素，所以我们很多时候会在外层包裹一个div元素（或者使用后面我们学习的Fragment）；
  - 为了方便阅读，我们通常在jsx的外层包裹一个小括号()，这样可以方便阅读，并且jsx可以进行换行书写；
  - JSX中的标签可以是单标签，也可以是双标签；
  - 注意：如果是单标签，必须以/>结尾；

### 2.JSX的使用

- JSX中的注释
- JSX嵌入变量作为子元素
- 情况一：当变量是Number、String、Array类型时，可以直接显示
- 情况二：当变量是null、undefined、Boolean类型时，内容为空；
  - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串；
  - 转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；
- 情况三：Object对象类型不能作为子元素（not valid as a React child）
- JSX嵌入表达式
  - 运算表达式
  - 三元运算符
  - 执行一个函数
- jsx绑定属性
  - 比如元素都会有title属性
  - 比如img元素会有src属性
  - 比如a元素会有href属性
  - 比如元素可能需要绑定class
  - 比如原生使用内联样式style

### 3.React事件绑定

- 如果原生DOM原生有一个监听事件，我们可以如何操作呢？
  - 方式一：获取DOM原生，添加监听事件；
  - 方式二：在HTML原生中，直接绑定onclick；
- 在React中是如何操作呢？
  - React 事件的命名采用小驼峰式（camelCase），而不是纯小写；
  - 我们需要通过{}传入一个事件处理函数，这个函数会在事件发生时被执行；
- this的绑定问题
  - 在事件执行后，我们可能需要获取当前类的对象中相关的属性，这个时候需要用到this
  - 如果我们这里直接打印this，也会发现它是一个undefined，原因是btnClick函数并不是我们主动调用的，而且当button发生改变时，React内部调用了btnClick函数，而它内部调用时，并不知道要如何绑定正确的this；
- 如何解决this的问题呢？
  - 方案一：bind给btnClick显示绑定this
  - 方案二：使用 ES6 class fields 语法
  - 方案三：事件监听时传入箭头函数（个人推荐）
- 事件参数传递
  - 在执行事件函数时，有可能我们需要获取一些参数信息：比如event对象、其他参数
    - 很多时候我们需要拿到event对象来做一些事情（比如阻止默认行为）
    - 那么默认情况下，event对象有被直接传入，函数就可以获取到event对象；
  - 获取更多参数
    - 有更多参数时，我们最好的方式就是传入一个箭头函数，主动执行的事件函数，并且传入相关的其他参数；

![](G:\Advance\react-study\react-airbnb\note\imgs\2_jsx\Aspose.Words.9543e424-a9c1-4494-b2df-627277cc2e93.013.jpeg)

### 4.React条件渲染

- 某些情况下，界面的内容会根据不同的情况显示不同的内容，或者决定是否渲染某部分内容：
  - 在vue中，我们会通过指令来控制：比如v-if、v-show；
  - 在React中，所有的条件判断都和普通的JavaScript代码一致；
- 常见的条件渲染的方式有哪些呢？
  - 方式一：条件判断语句
  - 方式二：三元运算符
  - 方式三：与运算符&&

### 5.React列表渲染

- 真实开发中我们会从服务器请求到大量的数据，数据会以列表的形式存储：
- 在React中，展示列表最多的方式就是使用数组的map高阶函数；
- 很多时候我们在展示一个数组中的数据之前，需要先对它进行一些处理：
  - 比如过滤掉一些内容：filter函数
  - 比如截取数组中的一部分内容：slice函数
- 列表中的key
  - key主要的作用是为了提高diff算法时的效率；

### 6.JSX的本质

- 实际上，jsx 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。
- 所有的jsx最终都会被转换成React.createElement的函数调用。
- createElement需要传递三个参数：
  - 参数一：type
    - 当前ReactElement的类型；
    - 如果是标签元素，那么就使用字符串表示 “div”；
    - 如果是组件元素，那么就直接使用组件的名称；
  - 参数二：config
    - 所有jsx中的属性都在config中以对象的属性和值的形式存储；
    - 比如传入className作为元素的class；
  - 参数三：children
    - 存放在标签中的内容，以children数组的方式进行存储；
    - 当然，如果是多个元素呢？React内部有对它们进行处理，处理的源码在下方

### 7.createElemtnt源码

![](G:\Advance\react-study\react-airbnb\note\imgs\2_jsx\Aspose.Words.9543e424-a9c1-4494-b2df-627277cc2e93.015.jpeg)

### 8.Babel官网查看

- 我们知道默认jsx是通过babel帮我们进行语法转换的，所以我们之前写的jsx代码都需要依赖
- 可以在babel的官网中快速查看转换的过程：

![](G:\Advance\react-study\react-airbnb\note\imgs\2_jsx\Aspose.Words.9543e424-a9c1-4494-b2df-627277cc2e93.016.jpeg)

![](G:\Advance\react-study\react-airbnb\note\imgs\2_jsx\Aspose.Words.9543e424-a9c1-4494-b2df-627277cc2e93.017.jpeg)