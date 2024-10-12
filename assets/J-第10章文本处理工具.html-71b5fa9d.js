import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as p,d as n,a as e,e as d,w as a,b as c,f as s}from"./app-2a2d189a.js";const r={},h=e("h1",{id:"j-第10章文本处理工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#j-第10章文本处理工具","aria-hidden":"true"},"#"),c(" J-第10章文本处理工具")],-1),u=e("p",null,"J-第10章文本处理工具",-1),f=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"说明"),e("p",null,"主要是各种搜索找的学习；")],-1),w={class:"table-of-contents"},_=s('<p>@<a href="%E7%9B%AE%E5%BD%95">TOC</a></p><h2 id="概述框架" tabindex="-1"><a class="header-anchor" href="#概述框架" aria-hidden="true">#</a> 概述框架</h2><h2 id="j-第10章文本处理工具-1" tabindex="-1"><a class="header-anchor" href="#j-第10章文本处理工具-1" aria-hidden="true">#</a> J-第10章文本处理工具</h2><h2 id="一、文本处理工具之-cat" tabindex="-1"><a class="header-anchor" href="#一、文本处理工具之-cat" aria-hidden="true">#</a> 一、文本处理工具之 cat</h2><ul><li><p>在上一节中介绍了正则表达式。实际上，正则表达式通常用于处理文本或字符串，且一般要结合一些文本处理工具来使用。接下来要介绍的便是文本处理工具，这也是对 Linux 编程的重要扩展。</p></li><li><p>我们知道，Shell 本身有一些内嵌命令，内嵌命令较少且功能局限，更多是通过外部命令来扩展功能。常规的外部命令，有些功能简单，比如直接使用<code>ls</code>查看当前目录内容，一下就执行完。但有些命令复杂且功能强大，扩展性更好，这部分通常被称为工具。接下来这一章要介绍的，就是专门用于文本处理的工具。</p></li><li><p>首先要介绍的是<code>cat</code>，“cat”顾名思义，其英文原意是剪切、裁剪，它的作用就是对文本文件的数据进行剪切。简单来说，如果有一个文件，其数据整体可视为一张表格，每行数据按不同分隔符分成不同列，此时<code>cat</code>就能派上用场。<code>cat</code>可直接按默认分隔符（制表符）将每行分开，能裁剪出想要的列数据并直接输出。这就是<code>cat</code>的用途。</p></li><li><p>来看它的基本语法，非常简单，直接是<code>cat</code>。使用时，<code>cat</code>作为命令，命令后跟着选项参数，然后是要裁剪的文本文件名称。当然，文本文件名称有时可不指定，将<code>cat</code>用于管道中，比如前面先执行<code>ls</code>，再接管道，把得到的内容用于<code>cat</code>操作，即将前边命令捕获到的文本当作后边的<code>file</code>传给<code>cat</code>执行。</p></li><li><p>这里重点介绍选项参数。常见的选项参数主要有：一是<code>-f</code>，指要提取的列号，在表格中截取时指定提取第几列；二是<code>-d</code>，这很重要，指分隔符，默认是制表符<code>\\t</code>，也可单独指定，比如文件中的分隔符可能是空格、冒号、分号、逗号等；三是<code>-c</code>，指按字符进行切割，后面加<code>n</code>表示取切割字符的第几列，即第几个字符。</p></li><li><p>接下来在实践中具体看看<code>cat</code>到底怎么用。首先做数据准备，将文档中的部分内容复制到一个名为<code>cat.txt</code>的文本文件中，然后进行截取。在控制台，先创建一个<code>cat.txt</code>文件，将信息复制进来并保存。</p></li><li><p>接下来使用<code>cat</code>命令对文件中的数据进行裁剪。先看看文件里有什么，是以空格分隔的一系列字符，比如“东申”“过安镇”，后面的意思不太清楚，可直接节选第一列。使用<code>cat</code>截取文件中的第一列，要指定<code>-d</code>，当前分隔符不是制表符，而是空格，然后加上<code>-f</code>参数指定截取第一列，再跟上文本文件名<code>cat.txt</code>。可以看到第一列输出的是“这是东莞我来了”。可见，如果收集到的文本是竖排的，用<code>cat</code>命令能很方便地提取想要的信息，操作很简单。</p></li><li><p><code>cat</code>命令不止能截取某一列，能截取第一列，也能截取第二列，还能同时截取多列。比如要截取第二、三列，写法跟正则里类似，用逗号分隔表示区间范围“2,3”，但由于文件中没有第三列，实际输出的是第二列“这是深圳我来了”。由于这一例子中二三列的截取不太明显，可以换一个更明显的文件，比如之前用过的<code>/etc</code>下的<code>passwd</code>文件。先<code>cat</code>出来并过滤，还记得其中有很多自定义用户，实际用户的登录终端都是<code>bash</code>。信息较多，希望进行提取。虽然文件原本不是表格，但可按中间的冒号分隔符进行剪切提取。要提取的关键信息，首先是第一列即用户名，然后是最后一列即登录终端，还有每一个用户的主目录在倒数第二列。仔细看，冒号分隔后分别是 1、2、3、4、5、6、7 列，所以要截取的是 1、6、7 列。命令应这样写：先获取内容，然后用管道处理，<code>cut -d</code>指定分隔符是冒号，<code>-f 1,6,7</code>，由于是从管道获取截取内容，后面无需再加文本文件名。回车后，就能截取到所有想要的内容，如“route”“/route”“/bin/bash”。通过这个例子可以看出，<code>cat</code>很灵活，想截多少列都行。</p></li><li><p>但又有一个问题，如果拆分后的列很多，要截取的列也很多且不是零散的，比如从第六列开始后面所有列都要，难道要把每一列数字都写上吗？太复杂。在<code>cat</code>命令中，不必这样。比如从第 6 列之后，可写成“6-”，跟正则里选取范围的写法类似，若不写结尾数字，就表示把后面部分全部取出。比如要提取的不是 1、6、7 列，而是 1 - 4 列，就写“1 - 4”；要从第 4 列开始到第 7 列，就直接写“4 - ”；如果是第 4 列之前，也可以写“- 4”，跟“1 - 4”是一样的。这就是一些快捷方便的操作。</p></li><li><p>文档中有具体例子，可获取系统的<code>pass</code>环境变量值，因其用冒号分隔，可截取某一对应路径后边的所有路径。比如截取第二个冒号开始之后的所有路径，按其作分隔符，应从第三列开始，所以可先<code>echo $pass</code>查看，然后通过管道和<code>cut -d</code>指定冒号为分隔符，若截取第二列之后的，就是“2 - ”，能截取到从“user local beam”开始的所有内容；若要第二个冒号开始之后的所有路径，应是“3 - ”，就能得到后面的三条路径。整体非常简单。</p></li><li><p>最后再看一个有趣的案例，就是切割获取到的 IP 地址。要获取当前 IP 地址，可使用<code>ifconfig</code>命令，能得到所有网络信息，IP 地址都在其中。拿到后如何切割？比如最关心的是<code>ens33</code>对应的，若只想看它，直接<code>ifconfig ens33</code>就能获取单独网络信息。若要切割 IP，先把包含 IP 的这一行提取出来，用<code>grep</code>最好，比如<code>grep &quot;netmask&quot;</code>，能将其切出。接下来，看到分隔符是空格，直接<code>cut -d</code>空格，但要注意前面的空白个数决定了列数，仔细比对会发现前面有 8 个空格，按空格拆分应有 8 列，“inet”是第 9 列，IP 是第 10 列，截取第 10 列就能得到当前 IP 地址。若觉得麻烦，也可用特殊字符切割，比如用“i”，但切完后可能还需继续切，多次切割也能得到结果。这就是用<code>cat</code>命令拆分得到当前 IP 的过程。</p></li><li><p>假如像前面<code>ifconfig</code>得到很多 IP，想把所有 IP 都切出来，那就相当于对一个表格的切割，同样可以。先去掉<code>ens33</code>，用<code>grep</code>获取所有带 IP 的行，然后按空格切分并选择第 10 列，就能得到 3 个 IP 地址。这在实际工作中经常用到，这就是<code>cat</code>工具。</p></li></ul><h2 id="二、awk-文本分析工具" tabindex="-1"><a class="header-anchor" href="#二、awk-文本分析工具" aria-hidden="true">#</a> 二、AWK 文本分析工具</h2><ul><li><p>接下来，介绍另一个文本分析工具——传说中的 AWK。AWK 之所以叫这个名字，是因为这三个字母是它的三位创始人的首字母。有些同学可能还见过另外一个表述，叫做 gawk，它们俩其实是一个工具。AWK 是初始的 Unix 环境下的一种标准工具实现，而 gawk 则是 AWK 在 GNU 组织里的具体实现。所以整体来讲，它有更多的扩展。</p></li><li><p>在 CentOS 7 系统中，可以查看一下有没有对应的 awk 命令。在<code>/usr/bin</code>下搜索 awk，会发现 awk 命令其实是一个软链接，指向了 gawk。所以在 CentOS 7 中，使用 awk 本质上用的就是 gawk，这两个命令的效果是一样的。</p></li><li><p>这个工具是一个用于处理文本文件的非常强大的分析工具，可以说是目前见过的、用过的最为强大的文本分析工具。它的主要功能是把文件逐行读入，以空格作为默认分隔符，对每一行进行切片。就像之前的 cat 是把表格的每一列切出来，而 AWK 则是把每一行、每一列都切开，然后对切开的内容进行复杂的分析处理，其功能非常全面且强大。</p></li><li><p>接下来看它的用法，首先是命令调用，即 awk，后面紧跟着选项参数，这与平常的命令调用类似。后面的部分比较特殊，是用单引号引起来的一部分，调用时要用单引号将其引起来。最后是一个 filename，即文件，跟 cut 一样，用于分析文本文件。当然，有时也不需要每次都在后面放文件，可以前面有管道输入，比如前面 cat 了某些内容，通过管道交给 awk 处理，这时后面的文件名就可以省略。这两种用法都需要熟悉。</p></li><li><p>最关键的是中间单引号引着的部分，其组成是一个 pattern 和一个 action，即一个模式对应一个动作。模式指的是在 awk 命令中需要在文本里查找的内容，也就是文本匹配模式，是一个正则表达式，用于定义按照什么规则去提取文本。对于提取出来的文本要做什么，对于找到的这些文本，执行后面花括号里的 action。action 理论上是能够执行的一系列命令，像一个代码块、函数或者脚本。AWK 强大之处在于可以根据正则定义各种匹配模式和复杂的处理命令，甚至可以定义多个模式和正则，处理多种情况。这就是 AWK 的主要语法。</p></li><li><p>前面的选项参数中，大写的<code>-f</code>用于指定输入文件的分隔符，默认是空格，如果是其他分隔符，可以单独指定。<code>-v</code>比较有趣，可以在外面单独定义一个用户自定义的变量，在 action 中就可以使用。因为 action 相当于一个代码块，满足匹配模式后，得到的结果就在这个代码块中执行，如果这样的话，代码块中当然可以使用外部定义的变量，这个功能使得 AWK 更加强大。</p></li><li><p>说了这么多，可能还是有些困惑，在具体的使用案例中看看 AWK 到底能做什么。</p></li><li><p>文档中的案例操作的是<code>/etc</code>下的<code>passwd</code>文件。文档中是把这个文件做了复制，然后将复制的文件作为 awk 的参数。实际上，也可以直接获取<code>/etc/passwd</code>文件，然后加上管道操作符，后面接 awk 处理。这两种方式本质上是一样的。接下来看第一个需求，搜索<code>passwd</code>文件中以“root”关键字开头的所有行，并输出该行的第 7 列。之前做过<code>passwd</code>文件的解析，第 7 列是每个用户登录的 shell 控制台，普通用户一般是<code>/bin/bash</code>。</p></li><li><p>先获取<code>/etc/passwd</code>文件，要找到以“root”开头的所有行，可以直接用 grep，正则表达式就是“^root”。将筛选出来的行截取第 7 列，这是 cat 的拿手好戏，所以再做一个 cat，<code>-d</code>指定分隔符是冒号，<code>-f 7</code>，就能得到<code>/bin/bash</code>。这种方法主要是做了两个管道操作，使用了 grep 和 cat 两个工具，先做行的提取，再做列的提取。有了 AWK 就不用这么麻烦，一个工具就能搞定行和列的操作。先获取<code>passwd</code>文件，通过管道传给 awk，awk 要指定分隔符是冒号，用<code>-f</code>指定，然后是单引号引起来的部分，因为是管道输入，所以不用文件名。最关键的就是单引号里的内容，包含一个 pattern 和一个 action。正则表达式就是前面说的“^root”，用斜杠括起来，后面执行的内容用花括号括起来，像代码一样。需要注意的是，AWK 提供了一个<code>print</code>操作，想要输出什么直接用<code>print</code>打印。通过提取，满足条件的数据会传入代码块，第 7 列在代码块中就是<code>$7</code>，就像函数或脚本中的参数。回车后，得到的结果和之前一样，相当于 AWK 一个工具完成了 grep 和 cat 两个工具的工作。</p></li><li><p>接下来看其他需求的实现。下面的需求还是搜索<code>passwd</code>文件中以“root”关键字开头的所有行，这次要输出的是第一列和第 7 列，并且输出的形式要自己定义，中间用逗号分割。之前用 grep 和 cut 可能不太好实现，比如之前直接 cut 出来，<code>-f 1,6,7</code>，只能按照原始文件默认的分隔符冒号分割。在 awk 中，可以是<code>$1,$7</code>，因为是代码块，所以可以做字符串拼接，<code>$1,$7</code>中间加一个用双引号引起来的逗号，回车后就能得到用逗号分割的这两个字段。如果还想加<code>$6</code>，后面再加一个用引号引起来的逗号，就能看到三个字段用逗号分割。所以输出的形式可以在 awk 中各种定义，比之前灵活很多。</p></li><li><p>继续看，AWK 不仅能对筛选出来的行做列的组合，还能增加不同的行。下一个需求是不再以“root”关键字开头做筛选，默认情况所有行都输出，只显示第一列和第 7 列，并且以逗号分割。这很简单，把之前的正则去掉就行，只要第一列和第 7 列，用逗号分割。数据很多，在此基础上，还要在输出的结果所有行前面增加列名“user shell”，在最后一行再添加一行数据。</p></li><li><p>在 awk 中，有两个比较特殊的，可以认为是关键字的东西，一个是<code>BEGIN</code>，一个是<code>END</code>。<code>BEGIN</code>是在所有数据行读取之前执行的，<code>END</code>是在所有数据读取之后执行的。所以插入的代码块，一个在<code>BEGIN</code>这里，一个在<code>END</code>这里，表示执行的两个不同位置。在控制台中实现，在单引号里，首先前面加一个<code>BEGIN</code>，后面加一个花括号，花括号里可以写想要的内容，比如<code>print &quot;user shell&quot;</code>。在整个执行完成之后，还有一个<code>END</code>，花括号里写最后的输出，比如<code>print &quot;this is end of file&quot;</code>。最后就会输出一个“this is end of file”，前面也会有一个类似于表头的“user shell”。可以看到 awk 自定义的方式五花八门，功能极其强大。</p></li></ul><h2 id="三、awk-的其他特性" tabindex="-1"><a class="header-anchor" href="#三、awk-的其他特性" aria-hidden="true">#</a> 三、AWK 的其他特性</h2><ul><li><p>接下来继续看 AWK 的其他特性。接下来要看的需求是把<code>passwd</code>文件当中所有的用户 ID（uid），每个 uid 数值增加一然后输出。这个需求有点奇怪，先不管它具有什么具体的实际意义，看看如何实现。</p></li><li><p>在控制台实现，获取<code>passwd</code>文件内容后，还是按照冒号分割，当前的 uid 是切分后的第三列，之前分析过这个数据，应该首先是用户名，然后是密码，接着是用户 ID，后面是组 ID。所以这里直接打印<code>$3</code>，这就是当前的第三列。当前看到最后是 1000 到 1006，这是自定义的用户 ID，最前面从 0 开始，root ID 是 0，然后是 1、2、3、4。现在要求把打印出来的 ID 全部加一。其实很简单，因为这是个代码块，直接<code>$3 + 1</code>输出，果然没问题，从 1000 到 1006 变成了 1001 到 1007，从 0 到 4 变成了 1 到 5。</p></li><li><p>这里需要思考的是，如果希望增加的数值不是 1 而是 2，把命令修改一下就行，改成加 2 就可以。但如果代码块越来越复杂，很多地方都要用到这个增加的数值，就应该把它定义成一个变量，要改就统一改。而且，AWK 支持把后面的代码块包装成一个脚本，使用<code>-f</code>参数就可以执行脚本。但如果执行脚本，每次需求变化，比如从加 1 变成加 2，都去改脚本就不合理，可以在外面传递一个参数，一个变量进来。基于这样的想法，可以使用 AWK 的另一个特性，即通过<code>-v</code>参数引入一个变量。前面提到过这个选项，<code>-v</code>可以自定义一个变量并传到后面执行的代码块里，这在使用脚本定义 AWK 执行操作时特别方便，不用改脚本，只改外部变量，脚本执行内容就会变化，是更强大的扩展功能。</p></li><li><p>这里具体操作是，在前面加上<code>-v</code>，比如定义<code>i=1</code>，后面直接<code>$3 + i</code>就行。这里的代码写法，不需要像在 shell 脚本里那样写<code>$i</code>，直接写加<code>i</code>就可以。这是加一的情况，如果要变成加 2，在外部直接改变量就行。如果在代码中很多地方都用到了这个<code>i</code>，就更方便，在外面统一改，里面就全变了，这就是使用自定义变量的用法。</p></li><li><p>除了自定义变量，AWK 还有一些内置变量。接下来介绍内置变量。简单来说，内置变量有点像系统环境变量，AWK 工具默认有一些变量，指定了当前的一些特性。比如<code>FILENAME</code>，这是一个变量，它的值是当前的文件名。<code>NR</code>是当前已经读到的第几行的行号。<code>NF</code>是当前浏览记录的域的个数，也就是当前这一行切完后一共有多少列。</p></li><li><p>有了这些特性，会发现之前做过的操作几乎都能用 AWK 搞定。接下来大概看一下，先对这些简单的内置变量进行考察。还是看<code>passwd</code>文件，在 AWK 里用<code>-F</code>指定当前分隔符是冒号，后面不需要筛选，没有正则，直接输出对应内容。直接<code>print</code>，这里用中文做个说明，文件名是什么，就是<code>FILENAME</code>，后面空一格，显示当前行号，即<code>NR</code>内置变量，再往后是当前一共有多少列，即<code>NF</code>内置变量。运行后看到当前输出了所有行号，因为安排整齐，每一行都是 7 列，所以列数都是 7。前面文件名没有输出，是变量名称写错了，应该是<code>FILENAME</code>。修改后运行，能看到完整显示<code>/etc/passwd</code>。整体操作很简单，内置变量想用随时调用。</p></li><li><p>除了基本调用，如果想输出当前文件里所有空行的行号，当然可以。比如用<code>ifconfig</code>查看当前所有网络信息，然后输出结果里空行的行号。这个功能之前用<code>grep</code>很容易实现，先获取<code>ifconfig</code>的结果，然后<code>grep</code>，要显示行号需要加上<code>-n</code>参数和正则，即<code>^$</code>，表示当前行是空行。回车后看到是第 9 行、第 18 行、第 26 行，没问题。但用<code>grep</code>这种方式，输出的行号没问题，但后面带了个冒号，这是<code>grep</code>默认输出，无法更改。如果想提取单独的数字或者后面加别的信息，还得进一步处理。</p></li><li><p>现在换用 AWK，同样先<code>ifconfig</code>做管道输出，然后 AWK 处理。因为筛选空行，不需要定义分隔符，直接用单引号引起来。需要一个正则，即<code>^$</code>，后面是具体执行操作，即<code>print</code>当前的<code>NR</code>（行号）。这样 9、18、26 直接就打印输出了，没有任何多余信息，就是当前行号，非常简单。当然，如果还想追加信息，比如输出前面的冒号或者在前面增加信息说当前行号是多少，都可以，因为这是一段代码，想输出什么随便加。比如“这是空行多少”，后面加上对应的行号。输出就更灵活、方便，这是内置变量的使用。</p></li><li><p>既然提到了<code>ifconfig</code>，就想到能不能用 AWK 做 IP 切割。像之前说的，用<code>cat</code>可以对<code>ifconfig</code>的结果进行处理看到当前所有 IP。复习一下<code>ifconfig</code>，比如看当前的<code>ens33</code>，先做过滤拿到<code>netmask</code>这一行，然后用<code>cat</code>切割。当时说过，如果指定用空格切割，因为前面有一堆空格，所以要数出来要的是第 10 行才能得到。如果想把所有 IP 都拿出来，三个 IP 一下都出来，但这样肯定有点麻烦。能不能更简单？当然可以，AWK 出马。首先，默认分隔符是空格，不用特意设置，然后用单引号引起来，需要一个正则筛选，即<code>netmask</code>，包含<code>netmask</code>的行，后面直接<code>print</code>。对于 AWK，有个很好的特性，前面的空格如果都是空的，会不予考虑，按空格分割后直接截取第二列就行，所以直接<code>print $2</code>就拿出了所有 IP。可以看到 AWK 非常好用，确实是功能强大的文本处理工具。</p></li><li><p>关于文本处理工具这一章，主要介绍了<code>cat</code>和<code>AWK</code>，就先讲到这里。</p></li></ul>',9);function A(k,K){const o=t("router-link");return l(),p("div",null,[h,u,n(" more "),f,e("nav",w,[e("ul",null,[e("li",null,[d(o,{to:"#概述框架"},{default:a(()=>[c("概述框架")]),_:1})]),e("li",null,[d(o,{to:"#j-第10章文本处理工具-1"},{default:a(()=>[c("J-第10章文本处理工具")]),_:1})]),e("li",null,[d(o,{to:"#一、文本处理工具之-cat"},{default:a(()=>[c("一、文本处理工具之 cat")]),_:1})]),e("li",null,[d(o,{to:"#二、awk-文本分析工具"},{default:a(()=>[c("二、AWK 文本分析工具")]),_:1})]),e("li",null,[d(o,{to:"#三、awk-的其他特性"},{default:a(()=>[c("三、AWK 的其他特性")]),_:1})])])]),_])}const g=i(r,[["render",A],["__file","J-第10章文本处理工具.html.vue"]]);export{g as default};
