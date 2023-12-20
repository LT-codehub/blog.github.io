(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1048:function(s,t,a){s.exports=a.p+"assets/img/img020.05c8cc7f.png"},2158:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、概念"}},[s._v("1、概念")])]),n("li",[n("a",{attrs:{href:"#_2、配置"}},[s._v("2、配置")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1较低版本"}},[s._v("①较低版本")])]),n("li",[n("a",{attrs:{href:"#_2较高版本"}},[s._v("②较高版本")])])])]),n("li",[n("a",{attrs:{href:"#_3、修改junit测试"}},[s._v("3、修改junit测试")])]),n("li",[n("a",{attrs:{href:"#_4、关键词总结"}},[s._v("4、关键词总结")])])])]),n("p"),s._v(" "),n("h1",{attrs:{id:"第五节-延迟加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第五节-延迟加载"}},[s._v("#")]),s._v(" 第五节 延迟加载")]),s._v(" "),n("h2",{attrs:{id:"_1、概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、概念"}},[s._v("#")]),s._v(" 1、概念")]),s._v(" "),n("p",[s._v("查询到Customer的时候，不一定会使用Order的List集合数据。如果Order的集合数据始终没有使用，那么这部分数据占用的内存就浪费了。对此，我们希望不一定会被用到的数据，能够在需要使用的时候再去查询。"),n("br")]),s._v(" "),n("p",[s._v("例如：对Customer进行1000次查询中，其中只有15次会用到Order的集合数据，那么就在需要使用时才去查询能够大幅度节约内存空间。"),n("br")]),s._v(" "),n("p",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("延迟加载")]),s._v("的概念：对于实体类关联的属性到"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("需要使用")]),s._v("时才查询。也叫"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("懒加载")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"_2、配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置"}},[s._v("#")]),s._v(" 2、配置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1048),alt:"./images"}})]),s._v(" "),n("h3",{attrs:{id:"_1较低版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1较低版本"}},[s._v("#")]),s._v(" ①较低版本")]),s._v(" "),n("p",[s._v("在Mybatis全局配置文件中配置settings")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 使用settings对Mybatis全局进行设置 --\x3e")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("settings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 开启延迟加载功能：需要配置两个配置项 --\x3e")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 1、将lazyLoadingEnabled设置为true，开启懒加载功能 --\x3e")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("setting")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("lazyLoadingEnabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 2、将aggressiveLazyLoading设置为false，关闭“积极的懒加载” --\x3e")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("setting")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("aggressiveLazyLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("settings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("blockquote",[n("p",[s._v("官方文档中对aggressiveLazyLoading属性的解释：")]),s._v(" "),n("p",[s._v("When enabled, an object with lazy loaded properties will be loaded entirely upon a call to any of the lazy properties.Otherwise, each property is loaded on demand.")])]),s._v(" "),n("h3",{attrs:{id:"_2较高版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2较高版本"}},[s._v("#")]),s._v(" ②较高版本")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- Mybatis全局配置 --\x3e")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("settings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 开启延迟加载功能 --\x3e")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("setting")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("lazyLoadingEnabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("settings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_3、修改junit测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改junit测试"}},[s._v("#")]),s._v(" 3、修改junit测试")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testSelectCustomerWithOrderList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomerMapper")]),s._v(" mapper "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMapper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomerMapper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Customer")]),s._v(" customer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectCustomerWithOrderList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里必须只打印“customerId或customerName”这样已经加载的属性才能看到延迟加载的效果")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里如果打印Customer对象整体则看不到效果")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"customer = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" customer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCustomerName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 先指定具体的时间单位，然后再让线程睡一会儿")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" orderList "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" customer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOrderList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),s._v(" order "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" orderList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order = "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("效果：刚开始先查询Customer本身，需要用到OrderList的时候才发送SQL语句去查询")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("DEBUG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Preparing")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" select customer_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("customer_name from t_customer where customer_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseJdbcLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nDEBUG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("193")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parameters")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseJdbcLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nDEBUG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("314")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Total")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseJdbcLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \ncustomer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c01\nDEBUG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("316")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Preparing")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" select order_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("order_name from t_order where customer_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseJdbcLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nDEBUG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("316")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parameters")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseJdbcLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nDEBUG "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("321")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Total")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseJdbcLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \norder "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("orderId"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" orderName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'o1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\norder "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("orderId"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" orderName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'o2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\norder "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("orderId"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" orderName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'o3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_4、关键词总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、关键词总结"}},[s._v("#")]),s._v(" 4、关键词总结")]),s._v(" "),n("p",[s._v("我们是在“对多”关系中举例说明延迟加载的，在“对一”中配置方式基本一样。")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("关联关系")]),s._v(" "),n("th",[s._v("配置项关键词")]),s._v(" "),n("th",[s._v("所在配置文件")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("对一")]),s._v(" "),n("td",[s._v("association标签/javaType属性")]),s._v(" "),n("td",[s._v("Mapper配置文件中的resultMap")])]),s._v(" "),n("tr",[n("td",[s._v("对多")]),s._v(" "),n("td",[s._v("collection标签/ofType属性")]),s._v(" "),n("td",[s._v("Mapper配置文件中的resultMap")])]),s._v(" "),n("tr",[n("td",[s._v("对一分步")]),s._v(" "),n("td",[s._v("association标签/select属性")]),s._v(" "),n("td",[s._v("Mapper配置文件中的resultMap")])]),s._v(" "),n("tr",[n("td",[s._v("对多分步")]),s._v(" "),n("td",[s._v("collection标签/select属性")]),s._v(" "),n("td",[s._v("Mapper配置文件中的resultMap")])]),s._v(" "),n("tr",[n("td",[s._v("延迟加载[低]")]),s._v(" "),n("td",[s._v("lazyLoadingEnabled设置为true"),n("br"),s._v("aggressiveLazyLoading设置为false")]),s._v(" "),n("td",[s._v("Mybatis全局配置文件中的settings")])]),s._v(" "),n("tr",[n("td",[s._v("延迟加载[高]")]),s._v(" "),n("td",[s._v("lazyLoadingEnabled设置为true")]),s._v(" "),n("td",[s._v("Mybatis全局配置文件中的settings")])])])]),s._v(" "),n("p",[n("RouterLink",{attrs:{to:"/pro003-Mybatis/lecture/chapter03/verse04.html"}},[s._v("上一节")]),s._v(" "),n("RouterLink",{attrs:{to:"/pro003-Mybatis/lecture/chapter03/index.html"}},[s._v("回目录")]),s._v(" "),n("RouterLink",{attrs:{to:"/pro003-Mybatis/lecture/chapter03/verse06.html"}},[s._v("下一节")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);