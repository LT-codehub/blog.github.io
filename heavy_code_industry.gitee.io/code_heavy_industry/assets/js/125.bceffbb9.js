(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{2079:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、maven-核心概念-坐标"}},[t._v("1、Maven 核心概念：坐标")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1数学中的坐标"}},[t._v("①数学中的坐标")])]),n("li",[n("a",{attrs:{href:"#_2maven中的坐标"}},[t._v("②Maven中的坐标")])]),n("li",[n("a",{attrs:{href:"#_3坐标和仓库中-jar-包的存储路径之间的对应关系"}},[t._v("③坐标和仓库中 jar 包的存储路径之间的对应关系")])])])]),n("li",[n("a",{attrs:{href:"#_2、实验操作"}},[t._v("2、实验操作")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1创建目录作为后面操作的工作空间"}},[t._v("①创建目录作为后面操作的工作空间")])]),n("li",[n("a",{attrs:{href:"#_2在工作空间目录下打开命令行窗口"}},[t._v("②在工作空间目录下打开命令行窗口")])]),n("li",[n("a",{attrs:{href:"#_3使用命令生成maven工程"}},[t._v("③使用命令生成Maven工程")])]),n("li",[n("a",{attrs:{href:"#_4调整"}},[t._v("④调整")])]),n("li",[n("a",{attrs:{href:"#_5自动生成的-pom-xml-解读"}},[t._v("⑤自动生成的 pom.xml 解读")])])])]),n("li",[n("a",{attrs:{href:"#_3、maven核心概念-pom"}},[t._v("3、Maven核心概念：POM")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1含义"}},[t._v("①含义")])]),n("li",[n("a",{attrs:{href:"#_2模型化思想"}},[t._v("②模型化思想")])]),n("li",[n("a",{attrs:{href:"#_3对应的配置文件"}},[t._v("③对应的配置文件")])])])]),n("li",[n("a",{attrs:{href:"#_4、maven核心概念-约定的目录结构"}},[t._v("4、Maven核心概念：约定的目录结构")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1各个目录的作用"}},[t._v("①各个目录的作用")])]),n("li",[n("a",{attrs:{href:"#_2约定目录结构的意义"}},[t._v("②约定目录结构的意义")])]),n("li",[n("a",{attrs:{href:"#_3约定大于配置"}},[t._v("③约定大于配置")])])])])])]),n("p"),t._v(" "),n("h1",{attrs:{id:"第一节-实验一-根据坐标创建-maven-工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一节-实验一-根据坐标创建-maven-工程"}},[t._v("#")]),t._v(" 第一节 实验一：根据坐标创建 Maven 工程")]),t._v(" "),n("h2",{attrs:{id:"_1、maven-核心概念-坐标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、maven-核心概念-坐标"}},[t._v("#")]),t._v(" 1、Maven 核心概念：坐标")]),t._v(" "),n("h3",{attrs:{id:"_1数学中的坐标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1数学中的坐标"}},[t._v("#")]),t._v(" ①数学中的坐标")]),t._v(" "),n("p",[n("img",{attrs:{src:s(793),alt:"./images"}})]),t._v(" "),n("p",[t._v("使用 x、y、z 三个"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("『向量』")]),t._v("作为空间的坐标系，可以在"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("『空间』")]),t._v("中唯一的定位到一个"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("『点』")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"_2maven中的坐标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2maven中的坐标"}},[t._v("#")]),t._v(" ②Maven中的坐标")]),t._v(" "),n("h4",{attrs:{id:"_1-向量说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-向量说明"}},[t._v("#")]),t._v(" [1]向量说明")]),t._v(" "),n("p",[t._v("使用三个"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("『向量』")]),t._v("在"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("『Maven的仓库』")]),t._v("中"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("唯一")]),t._v("的定位到一个"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("『jar』")]),t._v("包。")]),t._v(" "),n("ul",[n("li",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("groupId")]),t._v("：公司或组织的 id")]),t._v(" "),n("li",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("artifactId")]),t._v("：一个项目或者是项目中的一个模块的 id")]),t._v(" "),n("li",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("version")]),t._v("：版本号")])]),t._v(" "),n("h4",{attrs:{id:"_2-三个向量的取值方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-三个向量的取值方式"}},[t._v("#")]),t._v(" [2]三个向量的取值方式")]),t._v(" "),n("ul",[n("li",[t._v("groupId：公司或组织域名的倒序，通常也会加上项目名称\n"),n("ul",[n("li",[t._v("例如：com.atguigu.maven")])])]),t._v(" "),n("li",[t._v("artifactId：模块的名称，将来作为 Maven 工程的工程名")]),t._v(" "),n("li",[t._v("version：模块的版本号，根据自己的需要设定\n"),n("ul",[n("li",[t._v("例如：SNAPSHOT 表示快照版本，正在迭代过程中，不稳定的版本")]),t._v(" "),n("li",[t._v("例如：RELEASE 表示正式版本")])])])]),t._v(" "),n("p",[t._v("举例：")]),t._v(" "),n("ul",[n("li",[t._v("groupId：com.atguigu.maven")]),t._v(" "),n("li",[t._v("artifactId：pro01-atguigu-maven")]),t._v(" "),n("li",[t._v("version：1.0-SNAPSHOT")])]),t._v(" "),n("h3",{attrs:{id:"_3坐标和仓库中-jar-包的存储路径之间的对应关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3坐标和仓库中-jar-包的存储路径之间的对应关系"}},[t._v("#")]),t._v(" ③坐标和仓库中 jar 包的存储路径之间的对应关系")]),t._v(" "),n("p",[t._v("坐标：")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("servlet-api"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.5"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("上面坐标对应的 jar 包在 Maven 本地仓库中的位置：")]),t._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Maven本地仓库根目录\\javax\\servlet\\servlet-api\\2.5\\servlet-api-2.5.jar\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("一定要学会根据坐标到本地仓库中找到对应的 jar 包。")]),t._v(" "),n("h2",{attrs:{id:"_2、实验操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、实验操作"}},[t._v("#")]),t._v(" 2、实验操作")]),t._v(" "),n("h3",{attrs:{id:"_1创建目录作为后面操作的工作空间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1创建目录作为后面操作的工作空间"}},[t._v("#")]),t._v(" ①创建目录作为后面操作的工作空间")]),t._v(" "),n("p",[t._v("例如：D:\\maven-workspace\\space201026")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("此时我们已经有了三个目录，分别是：")]),t._v(" "),n("ul",[n("li",[t._v("Maven 核心程序：中军大帐")]),t._v(" "),n("li",[t._v("Maven 本地仓库：兵营")]),t._v(" "),n("li",[t._v("本地工作空间：战场")])])]),t._v(" "),n("h3",{attrs:{id:"_2在工作空间目录下打开命令行窗口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2在工作空间目录下打开命令行窗口"}},[t._v("#")]),t._v(" ②在工作空间目录下打开命令行窗口")]),t._v(" "),n("p",[n("img",{attrs:{src:s(794),alt:"./images"}})]),t._v(" "),n("h3",{attrs:{id:"_3使用命令生成maven工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3使用命令生成maven工程"}},[t._v("#")]),t._v(" ③使用命令生成Maven工程")]),t._v(" "),n("p",[n("img",{attrs:{src:s(795),alt:"images"}})]),t._v(" "),n("p",[t._v("运行 "),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("mvn archetype:generate")]),t._v(" 命令")]),t._v(" "),n("p",[t._v("下面根据提示操作")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 7:【直接回车，使用默认值】")]),t._v(" "),n("p",[t._v("Define value for property 'groupId': com.atguigu.maven")]),t._v(" "),n("p",[t._v("Define value for property 'artifactId': pro01-maven-java")]),t._v(" "),n("p",[t._v("Define value for property 'version' 1.0-SNAPSHOT: :【直接回车，使用默认值】")]),t._v(" "),n("p",[t._v("Define value for property 'package' com.atguigu.maven: :【直接回车，使用默认值】")]),t._v(" "),n("p",[t._v("Confirm properties configuration:\ngroupId: com.atguigu.maven\nartifactId: pro01-maven-java\nversion: 1.0-SNAPSHOT\npackage: com.atguigu.maven\nY: :【直接回车，表示确认。如果前面有输入错误，想要重新输入，则输入 N 再回车。】")])]),t._v(" "),n("h3",{attrs:{id:"_4调整"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4调整"}},[t._v("#")]),t._v(" ④调整")]),t._v(" "),n("p",[t._v("Maven 默认生成的工程，对 junit 依赖的是较低的 3.8.1 版本，我们可以改成较适合的 4.12 版本。")]),t._v(" "),n("p",[t._v("自动生成的 App.java 和 AppTest.java 可以删除。")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 依赖信息配置 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- dependencies复数标签：里面包含dependency单数标签 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- dependency单数标签：配置一个具体的依赖 --\x3e")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 通过坐标来依赖其他jar包 --\x3e")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.12"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 依赖的范围 --\x3e")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h3",{attrs:{id:"_5自动生成的-pom-xml-解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5自动生成的-pom-xml-解读"}},[t._v("#")]),t._v(" ⑤自动生成的 pom.xml 解读")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 当前Maven工程的坐标 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.atguigu.maven"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pro01-maven-java"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0-SNAPSHOT"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 当前Maven工程的打包方式，可选值有下面三种： --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- jar：表示这个工程是一个Java工程  --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- war：表示这个工程是一个Web工程 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- pom：表示这个工程是“管理其他工程”的工程 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jar"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pro01-maven-java"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.apache.org"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 工程构建过程中读取源码时使用的字符集 --\x3e")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project.build.sourceEncoding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UTF-8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project.build.sourceEncoding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 当前工程所依赖的jar包 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 使用dependency配置一个具体的依赖 --\x3e")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\n\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在dependency标签内使用具体的坐标依赖我们需要的一个jar包 --\x3e")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.12"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  \n\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- scope标签配置依赖的范围 --\x3e")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br")])]),n("h2",{attrs:{id:"_3、maven核心概念-pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、maven核心概念-pom"}},[t._v("#")]),t._v(" 3、Maven核心概念：POM")]),t._v(" "),n("h3",{attrs:{id:"_1含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1含义"}},[t._v("#")]),t._v(" ①含义")]),t._v(" "),n("p",[t._v("POM："),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("P")]),t._v("roject "),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("O")]),t._v("bject "),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("M")]),t._v("odel，项目对象模型。和 POM 类似的是：DOM（Document Object Model），文档对象模型。它们都是模型化思想的具体体现。")]),t._v(" "),n("h3",{attrs:{id:"_2模型化思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2模型化思想"}},[t._v("#")]),t._v(" ②模型化思想")]),t._v(" "),n("p",[t._v("POM 表示将工程抽象为一个模型，再用程序中的对象来描述这个模型。这样我们就可以用程序来管理项目了。我们在开发过程中，最基本的做法就是将现实生活中的事物抽象为模型，然后封装模型相关的数据作为一个对象，这样就可以在程序中计算与现实事物相关的数据。")]),t._v(" "),n("h3",{attrs:{id:"_3对应的配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3对应的配置文件"}},[t._v("#")]),t._v(" ③对应的配置文件")]),t._v(" "),n("p",[t._v("POM 理念集中体现在 Maven 工程根目录下 "),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("pom.xml")]),t._v(" 这个配置文件中。所以这个 pom.xml 配置文件就是 Maven 工程的核心配置文件。其实学习 Maven 就是学这个文件怎么配置，各个配置有什么用。")]),t._v(" "),n("h2",{attrs:{id:"_4、maven核心概念-约定的目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、maven核心概念-约定的目录结构"}},[t._v("#")]),t._v(" 4、Maven核心概念：约定的目录结构")]),t._v(" "),n("h3",{attrs:{id:"_1各个目录的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1各个目录的作用"}},[t._v("#")]),t._v(" ①各个目录的作用")]),t._v(" "),n("p",[n("img",{attrs:{src:s(796),alt:"./images"}})]),t._v(" "),n("p",[t._v("另外还有一个 target 目录专门存放构建操作输出的结果。")]),t._v(" "),n("h3",{attrs:{id:"_2约定目录结构的意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2约定目录结构的意义"}},[t._v("#")]),t._v(" ②约定目录结构的意义")]),t._v(" "),n("p",[t._v("Maven 为了让构建过程能够尽可能自动化完成，所以必须约定目录结构的作用。例如：Maven 执行编译操作，必须先去 Java 源程序目录读取 Java 源代码，然后执行编译，最后把编译结果存放在 target 目录。")]),t._v(" "),n("h3",{attrs:{id:"_3约定大于配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3约定大于配置"}},[t._v("#")]),t._v(" ③约定大于配置")]),t._v(" "),n("p",[t._v("Maven 对于目录结构这个问题，没有采用配置的方式，而是基于约定。这样会让我们在开发过程中非常方便。如果每次创建 Maven 工程后，还需要针对各个目录的位置进行详细的配置，那肯定非常麻烦。")]),t._v(" "),n("p",[t._v("目前开发领域的技术发展趋势就是：约定大于配置，配置大于编码。")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/pro002-maven/chapter03/index.html"}},[t._v("回目录")]),t._v(" "),n("RouterLink",{attrs:{to:"/pro002-maven/chapter03/verse02.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);a.default=e.exports},793:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAh0AAAHGCAYAAADQcTmWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxEAABcRAcom8z8AAA2sSURBVHhe7d0/jyTVFcbhBYdOsDZxiMgcgRxaSCZxQmIyE0JEipNNnKwsIdnREpFuuo4g88oJtuwMWfABkLD8ARb4BPienr6otj3/dqfOu1PdzyMddXdNMySj5kfdW9U/uQO3xztjfj7mP7tXAAANXhnz5Zhvdq8AAJrcH/PDft6rAwAAa3t1zLdjZnTU8zrzAQCwqgdjZnDMeTgGAGA1b42ZZzcOw+ONMQAAq/h8TAXGck9HneWox/oZAMCNfTim4qKuWKk9HDM66nkdq+d1GS0AwHOrsJhLKvNqlRkdpY7V83oPAMBzm8spyyWUZXSUum9Hva73AgA8s+UlsrWRdDqMjtpIWq/rvfXPAAA8k0/HVEzUpbJLh9FR5qbS+mcAAK6tNobOsxeHNwA7LzqWG0yXZ0UAAC5UAXHZPo3zoqPM/R++lwUAuJZ5I7B5ieyhi6KjzEtone0AAK6l7s1x0abQy6KjNpXWZbTnxQoAwDO5LDoA2LiX948AAK1EBwAQIToAgAjRwTG5N+bxft6sA1f4aMx8/906AACchptuJH13zPwdn9SBS1RkzPdWdAAAJ2RGwE08GVO/ox4vO3uxDJR6DgCckDWio5ZMrhMTX4yp91ScAAAnZo3oeH3M/D2P6sA5Xhsz33PVMgwAcIRmCNzUPItRc94SS204nT+vSAEATswMgZu6ar/G12PqZxUnAMAJWis66uzG3FB6uMSyXH6xgRQATtRa0VFqr8b8fbWHY5rHr7q6BQA4YmtGx/KMxgd1YG+eAbGBFABO2JrRUeaG0rl34+0x899hAykAnLC1o6POcMzfWUsstb+jnttACgAnbu3oWN7qfBkgNpACwImbUbCm5cbR+fttIAWAE9cRHfVts/P31thACgC0REeZNwOruc5X3gMAR647OuoRAKAlOpaXyS7v1wEAnLCO6Hg8Zv5eG0gBgJ21o2O5idQGUgDgRzeNjjqTMc9mVHDMy2Trcfn9KwDAibtpdBxeHjun9nUAAPxoRsLzOoyOOsMhOABuiZf2j3AbzOB43r/LWlr5xdnTnX/tHwEAnjLPUABwhF7ePwIAtBIdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AIEJ0AAARogMAiBAdAECE6AAAIkQHABAhOgCACNEBAESIDgAgQnQAABGiAwCIEB0AQIToAAAiRAcAECE6AIAI0QEARIgOACBCdAAAEaIDAIgQHQBAhOgAACJEBwAQIToAgAjRAQBEiA4AOD2Pxjzez+t14AL3xsz3vV0H4Fj8sB8Aen0wZn7mVlCc57Ux8z1f1AE4JvOPG4B+FRvzc/fNOnBg+fPLzobAJs0/bgD6Lc9kfF0HFmopZf6slljg6Mw/cAAyKijmZ++7dWCvIqSOWVbhaIkOgLwKi/rsfTLm7phliFhW4WiJDoC82s8xP38/GVPxUc8tq3DURAfAi/HRmPkZXNOyrOI+HQDAX/eP09/2j3C0nOkAyKt9HMt9HfOz2H4OjproAMhbLq3U/o4ZHq5c4aiJDoCs5SbSuXF0ebdSm0k5WvOPHIB+tawy78dRj/V6msstNZZZOEqiAyCnvvRtfu4efpnb8gyIZRaO0vwDB6DX8jbnF33hW92zY77HMgtHZ/5xA9CnllHmZtF6rO9gOc/yfTWWWTgqogPgiLk5GAAQIToAgAjRAQBEiA4AIEJ0AAARogMAuI53xnw75sHuFWycS2YBbq83xszP6Zr3xsBmiQ6A263C4+GY+Xn95Zg6AwKbIzoAtqHOcnwzZn5uV4i8OgY2Q3QAbMuHY+Znd439HmyG6ADYnlfGLJdcarOp/R7ceqIDYLtqv8dyyaX2ezy15PLS/hFetCrlquPy2f4RgO053Fj68Zjf1xPRwW0wT839ZsxP6wAAR+O7MfU/k++LDl60GRxVxvWH+ccxdXoOgO359ZjaXDr9fUyd5fhq9wpeoAqOT8fMjUe1HgjA9tTneV25Up/l8zN9GR/wQgkOgO27KDbqONwKggNg+94aU1eo1Gd5zedj3CCMW0VwAGxbfW7Pz/Eat0LnVhIcANtlKYXNEBwA2zZveV6f4XXVodjgVhIcANtXn+X3x/gM59YSHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQTHABAO8EBALQ7DI53xgAArEpwAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0E5wAADtBAcA0K6C4+EYwQEAtBEcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEA7wQEAtBMcAEC7q4Lj3pj62XXn8RgAgKdc5wzHs0bHB2MAgA14af/YrYLjwZj3xnw35v0xn4059OaYX509Pdcvx/zu7Omdv4x59+wpAMB6ezjujnkypn5PPdZrAICdNTeNPhozl1XqjAgAwM6awVF7N2Zw1L4PAICdNYPj9TEzOL6oAwAAZc3gqH0bFRr1u2ofx2tjAABWDY7yyZh5luPtOgAAsHZw1OWwMzgqPgAAdtYMjlpGmZfH1vKKy2MBgJ01g6PMfRw1tZEUAGD14PhozAwOtzkHgCNx3m3Qa29G3ar8Oio4rrq1+bOom3798+zpLmL+dPb0Qv8dUzcNAwA26PMx9R/8io/LrH2GY3mb8+uOb5kFgI04PNPx6phvxtSZi5/VgQusfYaj1N6NP589vbZ/j/nD2VMAYEsqJOoMwqe7V+db+wwHAHCCKjYqKO7vXv0/wQEArKKWVioqapnlkOAAAFbxxpgZFYcEBwCwmg/HVFgc7ucQHADAquZ+jtpMOgkOAGB1h/s5BAcAsLq5n+PL3SvBAQA0mfs5Hoy5KjjqTqV1vN5XSzLnXekCAHCuuZ9jLrEsg6Mi460xde+OOhNSP1+OMyEAwJXqNugVFRUby+9a+XjM92N+O6bOZCx/Vrc+/2rMP8bU7c/rOQDAleosxuHZi+XUWY/6Erg601F7P5YBAgBwbRUTh6FRyyi1v6OCRGQAADdWyytzM+hyyaSWUAAAVlVLJgAAje7c+R8If/10JLb5AgAAAABJRU5ErkJggg=="},794:function(t,a,s){t.exports=s.p+"assets/img/img010.7f3addf6.png"},795:function(t,a,s){t.exports=s.p+"assets/img/img008.be45c9ad.png"},796:function(t,a,s){t.exports=s.p+"assets/img/img011.621b1ac3.png"}}]);