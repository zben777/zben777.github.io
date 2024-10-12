import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as s,d,a as l,e as n,w as t,b as e,f as o}from"./app-2a2d189a.js";const p={},u=l("h1",{id:"i-第9章正则表达式入门",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#i-第9章正则表达式入门","aria-hidden":"true"},"#"),e(" I-第9章正则表达式入门")],-1),h=l("p",null,"I-第9章正则表达式入门",-1),_=l("div",{class:"hint-container info"},[l("p",{class:"hint-container-title"},"说明"),l("p",null,"主要是各种搜索找的学习；")],-1),m={class:"table-of-contents"},f=o('<p>@<a href="%E7%9B%AE%E5%BD%95">TOC</a></p><h2 id="概述框架" tabindex="-1"><a class="header-anchor" href="#概述框架" aria-hidden="true">#</a> 概述框架</h2><h2 id="i-第9章正则表达式入门-1" tabindex="-1"><a class="header-anchor" href="#i-第9章正则表达式入门-1" aria-hidden="true">#</a> I-第9章正则表达式入门</h2><h2 id="一、正则表达式" tabindex="-1"><a class="header-anchor" href="#一、正则表达式" aria-hidden="true">#</a> 一、正则表达式</h2>',4),b=l("ul",null,[l("li",null,[l("p",null,"到目前为止，关于 Shell 编程这一部分，基本上都介绍完毕。现在可以使用各种知识书写 Shell 脚本，进行自动化流程操作。这一部分接下来要做一个扩展，即传说中的正则表达式。")]),l("li",null,[l("p",null,[e("正则表达式与 Shell 编程有着千丝万缕的联系。在 Shell 中，常常需要对文本或字符串进行各种剪切拼接操作，比如之前完成的每天归档操作，其中截取当前目录名称、拼接文件名称等，这些操作往往针对字符串进行。此处较为简单，使用 "),l("code",null,"basename"),e(" 和 "),l("code",null,"dirname"),e(" 可快速截取所需内容，但有时操作可能更复杂，此时就可使用正则表达式进行提取。")])]),l("li",null,[l("p",null,"正则表达式更多用于对所需字符或某些文本进行模糊式匹配搜索。比如，要找的可能不是固定的某个关键字，如“at 硅谷”或“Linux”，而是诸如以“192.168”开头的所有 IP 地址，或者指定用户名必须包含“abc”这样的子串，这就是一种匹配方式。实际应用中，往往是此类模糊匹配规则，需要为其制定匹配模式，在英文中一般称为“pattern”，即定义这样的模式，然后按照规则匹配相应的文本字符串。")]),l("li",null,[l("p",null,"所谓正则，就是用来定义这种匹配规则、匹配模式的工具。正则表达式可以使用单个字符串描述匹配一系列符合某个语法规则的字符串。听起来绕口，简单来说，就是能灵活地定义各种模糊匹配筛选规则。在很多文本编辑器中都支持正则表达式，可用于检索、替换符合某种规则或模式的文本。")]),l("li",null,[l("p",null,[e("除文本编辑器外，在 Linux 中，有许多用于文本处理的工具，比如熟悉的 "),l("code",null,"grep"),e("，还有著名的 "),l("code",null,"sed"),e("、"),l("code",null,"awk"),e(" 等，它们都是功能强大的文本处理工具，且都支持正则表达式，可通过正则表达式进行模式匹配，然后进行筛选、过滤、切片、分析等各种操作，正则表达式非常强大。")])]),l("li",null,[l("p",null,"由于正则表达式内容繁多且复杂，时间有限，这里仅做入门介绍，以便在后续 Linux Shell 编程中使用文本处理工具。")]),l("li",null,[l("p",null,[e("首先，进行常规匹配的介绍。最简单的正则其实很简单，之前使用 "),l("code",null,"grep"),e(" 进行文本过滤筛选时就已用到，即直接给出一个不含任何特殊字符的关键字，这就是最常规、最基本的正则表达式，它只匹配自身，属于纯文本匹配。")])]),l("li",null,[l("p",null,[e("此处可举例，比如筛选当前“at 硅谷”用户。在 "),l("code",null,"/etc/passwd"),e(" 文件中可获取所有用户信息，直接获取内容过多，需进行筛选。此时可使用管道操作，将获取的内容交给 "),l("code",null,"grep"),e(" 过滤，"),l("code",null,"grep"),e(" 后跟要过滤的关键字，如“at 硅谷”，就可筛选出“at 硅谷”用户相关内容。同样，若要筛选“1000:”“00:”等，也能实现匹配筛选，这就是纯文本筛选，直接匹配自身，是最基本的用法，即常规匹配。")])]),l("li",null,[l("p",null,"除常规匹配外，正则表达式的精髓和强大之处在于能用各种特殊字符进行模糊匹配。下面依次介绍常用的特殊字符。")]),l("li",null,[l("p",null,[e("首先是上尖号（^），它匹配一行的开头。在正则中使用时，上尖号作为正则的开始，后面可跟一个或一组字符，表示以这些字符开头的所有行。在控制台输入 "),l("code",null,'grep "^a" /etc/passwd'),e(" ，就能获取到以“a”开头的所有行，除“at 硅谷”用户外，还有“ADM”“abort”等以“a”开头的用户。不仅可以以“a”开头，还可以以“at”开头，此时就只剩下“at 硅谷”。")])]),l("li",null,[l("p",null,[e("除用“^”匹配一行的开头，还有一个特殊字符“"),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mtext",null,"”，它表示一行的结束。所以“")]),l("annotation",{encoding:"application/x-tex"},"”，它表示一行的结束。所以“")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6944em"}}),l("span",{class:"mord"},"”"),l("span",{class:"mord cjk_fallback"},"，它表示一行的结束。所以"),l("span",{class:"mord"},"“")])])]),e("”应放在最后边，前面是对应的匹配字符，即一行结束的那个字符。比如筛选以“bash”作为登录控制台的所有用户，就能获取到包括“at 硅谷”“root”等用户。若仔细回忆，会记得之前介绍 "),l("code",null,"vim"),e(" 操作时，在 "),l("code",null,"vim"),e(" 普通模式下，快速跳转到一行开头和结尾的快捷键就是“^”和“$”，可见文本编辑器与正则的规则定义相同。")])]),l("li",null,[l("p",null,[e("当然，开头和结尾可以一起使用。若开头是“^at”，结尾是“bash”，则匹配不到内容，因为要求这一行必须是“at bash”。若开头和结尾之间什么都没有，即“^"),l("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Expected group after '^' at position 76: …h` 中，使用 `grep \"^̲",style:{color:"#cc0000"}},'”，则相当于匹配空行。在 `/etc/passwd` 中没有空行，若在某个脚本文件，如 `daily_archive.sh` 中，使用 `grep "^'),e('" daily_archive.sh -n` 就能获取空行及所在行号。')])]),l("li",null,[l("p",null,[e("除匹配开头和结尾，还可用其他特殊字符匹配中间字符。比如，正则中有通配符，“.”表示可匹配任意一个字符，包括字母、数字、特殊符号等。如“r..t”，表示筛选出“r”和“t”中间有两个字母的行，“route”就符合标准。在 "),l("code",null,"/etc/passwd"),e(" 中，数据更多，能看得更明确，如“R/f/tp”，中间“/”和“f”也是两个字符，也能匹配出来。若“r.t”，则表示“r”和“t”中间隔一个字符，“rat”能匹配出来。若更多个“.”，如“r.....t”，则“r”和“t”中间必须有三个字符才能匹配。")])]),l("li",null,[l("p",null,[e("自然会想到，若不精确定义字符个数，而是某一个字符重复出现多次，能否做到？可以，这里还有一个特殊字符“"),l("em",null,"”，之前常见其用作通配符。此时，“"),e("”不是表示任意一个字符，而是表示某一个字符出现任意次，一般不单独使用，而是与一个字符连用。如“o*”，表示“o”出现 0 次、1 次或多次，“rt”能匹配，“rot”“root”“rooot”等也能匹配。")])]),l("li",null,[l("p",null,[e("自然又会想到，“.”表示匹配任意单个字符，“"),l("em",null,"”表示前面一个字符出现任意多次，那“."),e("”又能匹配什么？它表示任意一个字符出现任意次，即任意字符串，甚至空字符串也能匹配。")])]),l("li",null,[l("p",null,[l("code",null,"考虑一个问题，若指定了开头和结尾，中间是否必须严格匹配？比如要找到以“a”打头、以“bash”结尾的所有行，中间怎么办？现在有办法了，可进行模糊匹配，即“^a.*bash$”，表示开头是“a”，结尾是“bash”，中间任意。符合这个标准的只有“at 硅谷”这一行。若把结尾改成“in”，则以“a”打头、以“in”结尾的另外 3 个就都能筛选出来。还可在这个基础上指定中间的某个字段，比如以“a”开头、以“in”结尾，中间出现一个“w”，即“^a.*w.*in$”，筛选后剩下 2 个。灵活使用正则，可满足任意匹配需求"),e("。")])])],-1),x=o('<h2 id="二、正则表达式的特殊用法与扩展实践" tabindex="-1"><a class="header-anchor" href="#二、正则表达式的特殊用法与扩展实践" aria-hidden="true">#</a> 二、正则表达式的特殊用法与扩展实践</h2><ul><li><p>除了字符匹配，还有一些特殊用法。例如中括号，它表示一个字符区间，中括号内可以放置多个字符，表示当前要匹配的字符是其中之一，即从里面选取，只要能匹配上其中任意一个就算匹配成功。</p></li><li><p>比如，中括号内的字符可以用逗号分割，不分割直接并排写，如“68”，表示匹配“6”或者“8”这一位。若中间是连字符，如“0-9”，则表示 0 到 9 的所有字符，即要匹配一位数字。“0-9”后面跟上“<em>”，结合使用就表示一个数字且可以有任意重复，相当于匹配任意长度的数字串。还可以匹配纯粹由小写字母构成的字符，“a-z”就匹配一个“a”到“z”之间的小写字母，后面加上“</em>”，则表示任意长度的小写字母字符串。</p></li><li><p>对应的，中括号内表示的区间，中间的连字符还可以被打断，如“A-C,E-F”，表示匹配“a”到“c”和“e”到“f”之间的所有字符，即“a”“b”“c”“e”“f”。整体来讲，这个匹配规则可以非常灵活地定义。</p></li><li><p>这里可以做一个简单测试，比如“r[ab]t”，匹配出来的就是“rat”。也可以用其他方式测试，比如<code>echo</code>一个“RBT”，或者在“r”改成“at”，都能匹配出来，只要这一位是“a”或“b”就能匹配。</p></li><li><p>这里是把对应的字符<code>echo</code>了一下，然后传递给<code>grep</code>做正则筛选，可以筛选出来，可见“a”和“b”可以这样用。逗号可以去掉，字符可以并排放在中括号内。若“AB”后面加“*”，本身能匹配，“AAAT”也能匹配，因为“a”或“b”出现任意多次，“abbaat”也能匹配，规则非常灵活。</p></li><li><p>假如要匹配“r”和“t”中间有任意字符串，应该是“a-z”加上“*”，这样就能匹配到中间长度任意的字符串。</p></li><li><p>这就是有关中括号（字符区间）的使用方式。</p></li><li><p><code>最后，介绍一下反斜杠转义。反斜杠表示转义，通常不会单独使用，主要在匹配一些特殊字符时使用，比如“$”符。在正则中，“$”符本身是特殊字符，不能直接用“$”去匹配“$”。比如在</code>/etc/passwd<code>中可能没有“$”符，在</code>daily_archive.sh<code>中，内容较多，用</code>grep<code>直接找“$”找不到，因为“$”默认表示结尾，未指定以什么结尾，所以会输出所有行。若要匹配，需对其做反斜杠转义，直接写不行，必须用单引号引起来，双引号不行，因为双引号不会转义。这样就能搜索到对应的“$”符。若要把“$”符和其他符号一起搜索，比如前面还有正斜杠，再加一个正斜杠，正斜杠不需要转义，就能搜到对应的字符串</code>。</p></li><li><p>这是有关正则入门的一些基本介绍。当然，实际使用中，正则可能还有更多规则，有些规则可能某些工具不支持，因为有些是扩展规则。比如“{}<code>”，如“a{2}</code>”表示匹配“a”出现两次，即“aa”，但这是扩展正则规则，用<code>grep</code>可能不生效。还有“+”“?”等扩展规则，“*”表示匹配任意多次（包括 0 次），“+”表示一次或多次（不包括 0 次），“?”表示 0 次或 1 次，不会出现多次。这些是简单的区别，感兴趣的同学可以自行详细查验，此处不再介绍复杂的扩展规则。</p></li><li><p>接下来做一个有实际意义的扩展实践，用正则匹配手机号。国内手机号一般 11 位，规则是开头第一位必须是“1”，第二位有选择范围，用中括号表示，即“3”“4”“5”“7”“8”，剩下 9 位只要是数字就行。数字用“0-9”表示，每位都是“0-9”。</p></li><li><p>在控制台直接测试，比如<code>echo</code>一个手机号，如“13812345678”，这是合法手机号，然后用<code>grep</code>做正则匹配。首先开头是“^1”，然后是中括号“[34578]”，后面每位是“0-9”，但这样写匹配不对，少了几位，后面还得加上“0-9”，总共 11 位，还要加上“$”表示结束，才是完全合法的手机号。</p></li><li><p>若前面多加一位，如“0”，就不匹配。若换成“159”打头，也是合法手机号。会发现这种标准匹配方式太复杂，后面有多个“0-9”，可以重复。重复写法是“0-9”，重复 9 次，用“{9}<code>”，但</code>grep<code>默认不支持这种扩展的花括号匹配方式，可加“-E</code>”（大写“E”）表示支持扩展的正则表达式，就能匹配到。</p></li><li><p>也有更简洁的写法，“0-9”可简写成“d”，然后“{9}<code>”，但</code>grep`不支持这种写法。这样就能正常筛选手机号码。</p></li><li><p>关于正则的入门就先讲到这里。</p></li></ul>',2);function g(w,$){const a=c("router-link");return r(),s("div",null,[u,h,d(" more "),_,l("nav",m,[l("ul",null,[l("li",null,[n(a,{to:"#概述框架"},{default:t(()=>[e("概述框架")]),_:1})]),l("li",null,[n(a,{to:"#i-第9章正则表达式入门-1"},{default:t(()=>[e("I-第9章正则表达式入门")]),_:1})]),l("li",null,[n(a,{to:"#一、正则表达式"},{default:t(()=>[e("一、正则表达式")]),_:1})]),l("li",null,[n(a,{to:"#二、正则表达式的特殊用法与扩展实践"},{default:t(()=>[e("二、正则表达式的特殊用法与扩展实践")]),_:1})])])]),f,b,x])}const E=i(p,[["render",g],["__file","I-第9章正则表达式入门.html.vue"]]);export{E as default};
