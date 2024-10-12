import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,d as u,a as n,e as a,w as t,b as s,f as l}from"./app-2a2d189a.js";const d="/assets/figure6-1-0afc7c18.png",k="/assets/figure6-2-5d1e4e26.png",m="/assets/figure6-3-d162d65f.png",b={},h=n("h1",{id:"f-第6章github操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#f-第6章github操作","aria-hidden":"true"},"#"),s(" F-第6章GitHub操作")],-1),g=n("p",null,"F-第6章GitHub操作",-1),v=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"说明"),n("p",null,"主要是各种搜索找的学习；")],-1),_={class:"table-of-contents"},f=l('<p>@<a href="%E7%9B%AE%E5%BD%95">TOC</a></p><h2 id="概述框架" tabindex="-1"><a class="header-anchor" href="#概述框架" aria-hidden="true">#</a> 概述框架</h2><h2 id="f-第6章github操作-1" tabindex="-1"><a class="header-anchor" href="#f-第6章github操作-1" aria-hidden="true">#</a> F-第6章GitHub操作</h2>',3),S=n("li",null,[n("p",null,"接下来讲解第六章，即如何将代码推送到 GitHub 远程库。")],-1),H={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,[n("p",null,"接下来会使用三个账号（岳不群：@硅谷月月、令狐冲：@硅谷令狐冲、东方不败：@硅谷东方一）进行团队协作及跨团队协作的演示。")],-1),G=n("li",null,[n("p",null,"同学们可自行注册账号，分组进行相关操作，一人注册一个账号即可。")],-1),T=n("h2",{id:"_6-1-创建远程仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-1-创建远程仓库","aria-hidden":"true"},"#"),s(" 6.1 创建远程仓库")],-1),C={href:"http://gitHub.com",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[n("p",null,[s("在@硅谷月月账号中创建远程库，点击右上角的小加号，选择“new Repository”。创建远程库时，需填写远程库名字，一般与本地库相同。比如本地有“get demo”，远程库也可命名为“get demo” 所以远程仓库的命名和本地自己创建的文件夹名字最好一样，然后在本地。远程库基于账号创建，同一账号下的库名允许重复。创建时还需选择分类，有公共库和私有库两种。公共库的读取权限完全放开，基于开源精神，所有人都可拉取代码。私有库之前收费，现虽有免费政策，但有一定限制，如小伙伴超过 5 人会继续收费。若创建公司内部私有代码托管中心，建议搭建 GitLab。选择公共库后，点击“create repository”即可创建成功。创建好后，下方会出现两个链接，分别是 HTTPS 和 SSH。先使用 HTTPS 链接，点击复制按钮可将其复制到剪贴板，即此时我们有了远程库的链接地址。"),n("br"),n("img",{src:d,alt:"figure6-1",loading:"lazy"})])],-1),E=l('<h2 id="_6-2-远程仓库操作" tabindex="-1"><a class="header-anchor" href="#_6-2-远程仓库操作" aria-hidden="true">#</a> 6.2 远程仓库操作</h2><figure><img src="'+k+`" alt="figure6-2" tabindex="0" loading="lazy"><figcaption>figure6-2</figcaption></figure><h3 id="_6-2-1-创建远程仓库别名" tabindex="-1"><a class="header-anchor" href="#_6-2-1-创建远程仓库别名" aria-hidden="true">#</a> 6.2.1 创建远程仓库别名</h3><ul><li></li><li>有了链接后，文档演示一个命令叫创建别名。创建别名是因为链接太长不好记，给链接起个别名，方便后续代码推送和拉取时使用。可通过“git remote -v”查看当前有无别名，若无，则使用“git remote add”创建别名。建议别名与库名保持一致，如创建别名“demo”，并粘贴复制的链接。创建好别名后再次查看，会发现有两个，因为该别名既可用于推送也可用于拉取，即“push”和“clone”以及“pull”都可使用该别名。至此，完成了创建远程库及创建别名的操作。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>$ git remote <span class="token operator">-</span>v

表示没有别名
下面是创建别名
ZhangBen@DESKTOP<span class="token operator">-</span>AV9JCJ6 MINGW64 <span class="token operator">/</span>z<span class="token operator">/</span><span class="token function">gitdemo</span> <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ git remote add gitdemo https<span class="token operator">:</span><span class="token comment">//github.com/zben777/gittest.git</span>

$ git remote <span class="token operator">-</span>v
gitdemo https<span class="token operator">:</span><span class="token comment">//github.com/zben777/gittest.git (fetch)</span>
gitdemo https<span class="token operator">:</span><span class="token comment">//github.com/zben777/gittest.git (push)</span>
（这个别名 即可以 push 也可以fetch的时候 使用； 这样 就不用 每次都使用远程库较长的地址链接了 ）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-2-推送本地分支到远程仓库" tabindex="-1"><a class="header-anchor" href="#_6-2-2-推送本地分支到远程仓库" aria-hidden="true">#</a> 6.2.2 推送本地分支到远程仓库</h3><ul><li><p><mark>推送本地库代码到远程库</mark></p></li><li><p>此前已创建好远程库及别名，但远程库中尚无代码。接下来需将本地库代码推送到远程库，可使用“git push”命令进行推送。若已创建别名，可在“git push”后使用别名；若未创建别名，直接使用链接亦可。但需注意，推送的最小单位是分支，需指定将本地库的哪个分支推送上去。</p></li><li><p>当前本地库有两个分支，分别是“master”和“hot fix”，且当前处于“hot fix”分支，需切换至“master”分支，使用“git checkout master”命令即可。<br> 在“master”分支下，例如有一个代码文件“hello.txt”，即岳不群开发的“华山剑法”，要将其推送到远程库。推送前，为演示效果，查看是否有账号的版本管理器，若没有则直接推送。</p></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>ZhangBen@DESKTOP<span class="token operator">-</span>AV9JCJ6 MINGW64 <span class="token operator">/</span>z<span class="token operator">/</span><span class="token function">gitdemo</span> <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ git remote <span class="token operator">-</span>v
gitdemo https<span class="token operator">:</span><span class="token comment">//github.com/username/gittest.git (fetch)</span>
gitdemo https<span class="token operator">:</span><span class="token comment">//github.com/username/gittest.git (push)</span>

ZhangBen@DESKTOP<span class="token operator">-</span>AV9JCJ6 MINGW64 <span class="token operator">/</span>z<span class="token operator">/</span><span class="token function">gitdemo</span> <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ git push gitdemo master
info<span class="token operator">:</span> please complete authentication in your browser<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Enumerating objects<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
Counting objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token operator">/</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
Delta compression <span class="token keyword">using</span> up to <span class="token number">8</span> threads
Compressing objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
Writing objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token operator">/</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">666</span> bytes <span class="token operator">|</span> <span class="token number">666.00</span> KiB<span class="token operator">/</span>s<span class="token punctuation">,</span> done<span class="token punctuation">.</span>
Total <span class="token number">9</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pack<span class="token operator">-</span>reused <span class="token number">0</span>
remote<span class="token operator">:</span> Resolving deltas<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
To https<span class="token operator">:</span><span class="token comment">//github.com/username/gittest.git</span>
 <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token keyword">new</span> branch<span class="token punctuation">]</span>      master <span class="token operator">-&gt;</span> master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>执行“git push 别名 分支名”，此处别名如“git demo”，分支名如“master”。因 github 服务器在国外，网络要求较高，可能首次推送失败，需多尝试几次。<br> 推送时会弹出登录框，有两个选项，一是选择浏览器中的账号，点击后若当前浏览器登录的是岳不群账号，则提示绑定成功，此时推送显示 100%即成功。<br><img src="`+m+`" alt="figure6-3" loading="lazy"></p></li><li><p>推送成功后，刷新浏览器，本地库代码（如“hello.txt”）会成功上传至远程库，可点开查看，甚至技术好的话，还能点击“笔”在网页端当场修改代码。曾有程序员在休假外出游玩时，在手机上手写 2000 多行代码发回公司，直接运行无报错。若有此水平，也可在 github 远程库的网页端编写代码，但此处暂不进行此操作。</p></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>git push 别名 分支

可以先看看有没有别名
git remote <span class="token operator">-</span>v

然后如果没有的话也可以直接 使用 地址
git push 地址 分支

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li><p><mark>拉取远程库到本地库</mark></p></li><li><p>在讲解完推送本地库到远程库之后，接下来讲述拉取远程库到本地库的相关内容。</p></li><li><p>例如，岳不群出差了。此前所举例子中，小岳岳出差期间，公司指出其编写的“华山剑法”存在问题，需要修改。当时小岳岳在外，只能用手机登录“Github”，点开“git demo”库。然后在网页端对代码进行更改。操作很简单，在代码的最后一行添加“1”，这意味着岳不群在“华山剑法”下新增了一招。添加完成后，即可提交更改，注释内容写为“111”，随后完成提交。</p></li><li><p>当岳不群出差回来回到公司，他会发现本地库与远程库已不同步。此时，若要更新本地库的代码，就需要用到拉取命令，将远程库的代码拉取到本地。</p></li><li><p>拉取的操作其实也很简单，可以利用别名进行拉取。比如，“git pull gitdemo master”。这里，“git pull”表示拉取操作，“gitdemo”是别名，“master”是要拉取的分支。需注意，推送和拉取在指定分支这一点上是相同的。此次拉取“master”分支，因为在远程端对该分支进行了修改。此时，直接敲击回车键，若提示成功，并告知修改了 1 个文件，新增 1 行。</p></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>$ git pull gitdemo master
remote<span class="token operator">:</span> Enumerating objects<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
remote<span class="token operator">:</span> Counting objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
remote<span class="token operator">:</span> Compressing objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
remote<span class="token operator">:</span> Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reused <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pack<span class="token operator">-</span>reused <span class="token number">0</span>
Unpacking objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
From https<span class="token operator">:</span><span class="token comment">//github.com/atguiguyueyue/git-shTest</span>
<span class="token operator">*</span> branch master <span class="token operator">-&gt;</span> FETCH_HEAD
 <span class="token number">7</span>cb4d02<span class="token punctuation">.</span><span class="token number">.5</span>dabe6b master <span class="token operator">-&gt;</span> ori<span class="token operator">/</span>master
Updating <span class="token number">7</span>cb4d02<span class="token punctuation">.</span><span class="token number">.5</span>dabe6b
Fast<span class="token operator">-</span>forward
hello<span class="token punctuation">.</span>txt <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">+</span><span class="token operator">-</span>
<span class="token number">1</span> file changed<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token function">insertion</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token function">deletion</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只要拉取成功，就可以进行如下操作：首先查看本地库状态，“status”显示本地库状态干净，无任何修改，这表明拉取动作自动提交了本地库。然后查看“hello.txt”，会发现远程库中添加的“1”已经同步到本地。这说明本地库的代码与远程库的代码已实现同步。这个操作非常重要，一定要确保本地库代码始终处于最新状态。关于拉取的内容就讲解到这里。</li></ul><h3 id="_6-2-3-克隆远程仓库到本地" tabindex="-1"><a class="header-anchor" href="#_6-2-3-克隆远程仓库到本地" aria-hidden="true">#</a> 6.2.3 克隆远程仓库到本地</h3><ul><li><p><mark>克隆操作</mark></p></li><li><p>接下来讲解克隆相关内容，并通过一个小例子进行演示。</p></li><li><p>比如，此时来到“Git”目录下，在 D 盘新建一个文件夹，命名为“git令狐冲”，模拟令狐冲的操作环境。因为令狐冲的师傅已创建好“华山剑法”代码，令狐冲需要克隆此代码。</p></li><li><p>首先，在“令狐冲”这个目录下右键，选择“Git Bash Here”，代表令狐冲的客户端已打开，准备克隆师傅的代码。克隆时，较为简单，直接输入“git clone”，然后将师傅代码的链接复制过来。在此之前，需注意，来到代码库下获取代码链接。比如，以 HTTPS 链接为例。若在同一公司，可能会通过钉钉或微信收到此链接。</p></li><li><p>令狐冲拿到代码链接后，在客户端进行克隆操作。克隆前，先搜索并删除岳不群的版本管理器，因为 Windows 只能同时记住一个账号，需以令狐冲的身份登录，所以删除岳不群的相关信息。</p></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>$ git clone https<span class="token operator">:</span><span class="token comment">//github.com/username/gittest.git</span>
Cloning into <span class="token char">&#39;gittest&#39;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
remote<span class="token operator">:</span> Enumerating objects<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
remote<span class="token operator">:</span> Counting objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">12</span><span class="token operator">/</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
remote<span class="token operator">:</span> Compressing objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token operator">/</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
remote<span class="token operator">:</span> Total <span class="token number">12</span> <span class="token punctuation">(</span>delta <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reused <span class="token number">8</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pack<span class="token operator">-</span>reused <span class="token number">0</span> <span class="token punctuation">(</span>from <span class="token number">0</span><span class="token punctuation">)</span>
Receiving objects<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">12</span><span class="token operator">/</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>
Resolving deltas<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> done<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>此时进行克隆，会发现第一个问题：克隆未要求登录任何账号。这是因为岳不群创建的是公共库，公共库的读权限无限制，任何人都可克隆和查看代码。</p></li><li><p>令狐冲克隆完代码后，使用“ll”命令查看，会发现在“令狐冲”目录下也有了“gitdemo”。点开“gitdemo”，不仅能看到“hello.txt”代码，还能看到相关配置文件。</p></li><li><p>这说明克隆做了三件事：一是拉取代码，二是初始化本地库，三是创建别名。在令狐冲的客户端，进入“gitdemo”目录，查看别名“git remote -v”，会发现克隆完成后，连别名都已自动创建好，自动对链接创建的别名叫做“origin”。</p></li><li><p>关于克隆的操作就介绍到这里，需记住克隆所做的三件事：拉取代码、初始化本地库和创建别名。</p></li></ul><h3 id="_6-2-4-邀请加入团队" tabindex="-1"><a class="header-anchor" href="#_6-2-4-邀请加入团队" aria-hidden="true">#</a> 6.2.4 邀请加入团队</h3><ul><li><p><mark>团队内协作</mark></p></li><li><p>令狐冲和岳不群的相关操作都已介绍，接下来为大家演示团队内协作。</p></li><li><p>首先，打开令狐冲的客户端，查看代码位置，确定为令狐冲的后端，此时令狐冲已获取华山剑法代码。随后，令狐冲可在其中加入新内容，比如在“hello.txt”中添加“162”，并注明“拜令狐冲”，表示此为令狐冲所添加的招式。添加完成后，需保存，并切记将修改添加至暂存区，然后提交本地库。此时，查看令狐冲的本地库状态，若文件为红色，则需进行上述操作。即执行“git commit -m &#39;令狐冲提交&#39; hello.txt”，表示令狐冲提交成功。</p></li><li><p>提交成功后，需将代码推送至远程库，执行“git push”命令，并输入远程库链接和“master”分支。此时会要求登录，注意需登录令狐冲账号。若之前登录的是岳不群，需先退出，再通过浏览器登录令狐冲账号。但即便登录令狐冲账号，仍可能报错，提示令狐冲无权限推送。这是因为在 Git 中，令狐冲未被识别为团队成员。若令狐冲要直接向此库推送代码，需加入团队。</p></li><li><p>加入团队的操作如下：使用火狐浏览器登录岳不群账号，进入“gitdemo”库，点击“setting”，在设置中点击“manage access”（管理成员），然后点击“invite a collaborator”（邀请伙伴），输入“@硅谷令狐冲”，将令狐冲添加进来。之后会出现邀请界面，<code>复制邀请函链接</code>，通过钉钉或微信发给令狐冲。令狐冲登录自己的 Git 账号，复制邀请函链接并打开，选择同意邀请。同意后，令狐冲便能在自己的账号中看到岳不群创建的“gitDemo”，成为项目成员，即可推送修改后的代码。</p></li><li><p>再次推送代码，登录并绑定谷歌浏览器，此次令狐冲成功将代码推送到远程库。在令狐冲端能看到自己的提交记录，岳不群在远程库中查看“hello.txt”也能看到令狐冲的修改。岳不群若要将代码拉取到本地库，需先删除令狐冲的版本管理信息，然后在岳不群账号下执行“git pull git demo master”，拉取成功后，查看本地库确认是否成功拉取。</p></li><li><p>公开的远程库，谁都可以拉去。推送只有被邀请后才可以</p></li></ul><h2 id="_6-3-跨团队协作" tabindex="-1"><a class="header-anchor" href="#_6-3-跨团队协作" aria-hidden="true">#</a> 6.3 跨团队协作</h2><ul><li><p><mark>跨团队协作</mark></p></li><li><p>接下来为大家讲解跨团队协作。跨团队协作指的是需要找团队外的人员来协助修改代码。例如，华山派的华山剑法太过低端，需要邀请东方不败来升级代码。</p></li><li><p>此时，需要登录东方不败的账号。在浏览器中登录东方不败账号后，首先需了解在 Github 左上角可搜索项目。例如，输入“火车票”等关键字进行搜索，会出现相关结果。若东方不败要搜索华山派的“gitdemo”，由于名字可能较普通，不好搜索，可在“gitdemo”前加上“@硅谷月月”，以便精准定位岳不群开发的“gitdemo”。此外，岳不群也可通过微信将链接发给东方不败，东方不败通过地址栏访问链接，即可打开“hello.txt”等相关内容。</p></li><li><p>若东方不败要协助修改代码，作为团队外人员，需点击右上角的“fork”，将项目复制一份到自己账号中。复制完成后，点开“gitdemo”，能看到此项目是从岳不群账号复制而来。之后，东方不败可对代码进行修改。比如，通过在线编辑的方式，添加“6333 拜东方”，然后提交修改。此时，在东方不败账号下的“gitdemo”能看到修改后的“333”，但岳不群账号下还看不到。</p></li><li><p>若要让岳不群看到修改后的代码，东方不败需点击“Pull Request”（拉取请求）。以东方不败的谷歌浏览器为例，点击“Pull Request”后再点击“New Pull Request”，创建拉取请求。创建时，下方会展示修改的代码。创建完成后，可输入相关描述，如“东方提交，添加 333”，并说明相关情况，如“实不相瞒，两位写的代码实在垃圾，辟邪剑谱送给你们”。</p></li><li><p>创建完成后，用岳不群账号打开并刷新，能看到拉取请求。点开后可查看修改的代码，若对代码有疑问，可与东方不败交流。比如，岳不群可评论“--”，东方不败回复“--”。而且，此交流无需手动刷新，系统会自动处理。</p></li><li><p>交流结束后，岳不群作为华山派掌门人，需审核代码。若代码没问题，可点击“Merge Pull Request”（合并拉取请求），确认合并。合并完成后，在岳不群的“gitdemo”中查看“hello.txt”，能看到东方不败添加的代码，令狐冲也能看到。至此，跨团队协作流程结束</p></li></ul><h2 id="_6-4-ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#_6-4-ssh-免密登录" aria-hidden="true">#</a> 6.4 SSH 免密登录</h2><ul><li><p><mark>SSH 免密登录</mark></p></li><li><p>接下来讲解 SSH 免密登录。打开浏览器，在岳不群的相关页面中，点开“gitdemo”库。可以看到代码部分有两个链接，一个是 HTTPS 链接，此链接已演示过。此外，还有一个 SSH 链接，但此时无法使用，因为有警告提示当前没有任何 SSH 相关内容。</p></li><li><p>那么如何添加 SSH 免密登录协议功能呢？首先来到 Windows 的根目录，即 C 盘下的“用户”文件夹，找到“asus”文件夹，其中有一个“.ssh”目录。若之前生成过，需将其删除，重新生成。在该目录中右键，选择“Git Bash Here”。</p></li><li><p>然后利用一种非加密协议算法，输入“ssh-keygen -t rsa -C &#39;username&#39;”命令来生成 SSH 免密登录协议的公钥和私钥。其中，“-t”指定使用 RSA 加密算法生成，“-C”后的内容是一个描述，即岳不群账号的邮箱，表明此免密登录协议专为岳不群账号准备。</p></li><li><p>输入命令后，点击复制。回到“.ssh”目录，使用“cd.ssh”命令进入，然后使用“ls”命令查看，可看到公钥和私钥。其中“.pub”为公钥。</p></li><li><p>接下来获取公钥，输入“cat id_rsa.pub”，将公钥复制。要将公钥复制到岳不群的 Github 账号中，点击岳不群，进入“settings”，在其中找到“SSH and GPG keys”，点击添加公钥。输入新 SSH 密钥的名称，比如“laying”，然后将公钥原封不动复制过来。添加成功后，会看到相应界面。</p></li><li><p>添加成功后，测试当前客户端能否使用岳不群的免密登录。随便找一处，打开岳不群的命令行，查看本地库中是否有东方不败添加的代码，借此机会测试免密登录是否可用。</p></li><li><p>即此刻的Windows整岳不群的GitHub就不需要密码了；即 Windows-GitHub账户</p></li><li><p>来到岳不群的库中，找到“gitdemo”，点击“code”。此时，SSH 不再报警告，可利用 SSH 链接拉取代码，输入“git pull &lt;SSH 链接&gt; master”，测试 SSH 链接是否可用。第一次若失败，可能是网络原因，再次尝试。成功后会提示是否保存，选择“yes”保存。</p></li><li><p>登录成功后，查看代码中是否有东方不败的修改。若看到，说明利用 SSH 协议成功。还可测试“push”操作，在岳不群修改代码（如添加“辟邪剑谱”）并保存后，将修改添加暂存区，提交本地库。然后输入<code>“git push &lt;SSH 链接&gt; master”</code>，看能否推送成功。</p></li><li><p>推送成功后，前往网页端检查，刷新页面，若看到岳不群提交以及“辟邪剑谱”相关内容，说明免密登录配置成功，岳不群账号可利用 SSH 链接进行“pull”和“push”操作。</p></li></ul>`,24);function w(j,P){const e=o("router-link"),p=o("ExternalLinkIcon");return c(),r("div",null,[h,g,u(" more "),v,n("nav",_,[n("ul",null,[n("li",null,[a(e,{to:"#概述框架"},{default:t(()=>[s("概述框架")]),_:1})]),n("li",null,[a(e,{to:"#f-第6章github操作-1"},{default:t(()=>[s("F-第6章GitHub操作")]),_:1})]),n("li",null,[a(e,{to:"#_6-1-创建远程仓库"},{default:t(()=>[s("6.1 创建远程仓库")]),_:1})]),n("li",null,[a(e,{to:"#_6-2-远程仓库操作"},{default:t(()=>[s("6.2 远程仓库操作")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_6-2-1-创建远程仓库别名"},{default:t(()=>[s("6.2.1 创建远程仓库别名")]),_:1})]),n("li",null,[a(e,{to:"#_6-2-2-推送本地分支到远程仓库"},{default:t(()=>[s("6.2.2 推送本地分支到远程仓库")]),_:1})]),n("li",null,[a(e,{to:"#_6-2-3-克隆远程仓库到本地"},{default:t(()=>[s("6.2.3 克隆远程仓库到本地")]),_:1})]),n("li",null,[a(e,{to:"#_6-2-4-邀请加入团队"},{default:t(()=>[s("6.2.4 邀请加入团队")]),_:1})])])]),n("li",null,[a(e,{to:"#_6-3-跨团队协作"},{default:t(()=>[s("6.3 跨团队协作")]),_:1})]),n("li",null,[a(e,{to:"#_6-4-ssh-免密登录"},{default:t(()=>[s("6.4 SSH 免密登录")]),_:1})])])]),f,n("ul",null,[S,n("li",null,[n("p",null,[s("首先介绍 GitHub 的网址为 "),n("a",H,[s("https://github.com"),a(p)]),s(" 。")])]),x,G]),T,n("ul",null,[n("li",null,[n("p",null,[s("在讲解之前，先了解如何在 GitHub 中创建远程仓库。需先登录 GitHub，在浏览器地址栏输入 "),n("a",C,[s("gitHub.com"),a(p)]),s(" ，会看到蓝色的登录界面，点击“sign in”进行登录。以岳不群账号（@硅谷月月）为例，输入账号和密码登录。登录后可看到 GitHub 首页，因之前使用过该账号，所以直接进行后续操作。")])]),y]),E])}const F=i(b,[["render",w],["__file","F-第6章GitHub操作.html.vue"]]);export{F as default};
