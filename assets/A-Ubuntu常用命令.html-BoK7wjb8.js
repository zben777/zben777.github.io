import{_ as t,c as d,b as n,d as r,e as o,a as i,w as a,r as p,o as u,f as s}from"./app-BC3GIMfQ.js";const b={},h={class:"table-of-contents"};function c(_,e){const l=p("router-link");return u(),d("div",null,[e[12]||(e[12]=n("h1",{id:"a-ubuntu常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-ubuntu常用命令"},[n("span",null,"A-Ubuntu常用命令")])],-1)),e[13]||(e[13]=n("p",null,"A-Ubuntu常用命令",-1)),r(" more "),e[14]||(e[14]=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("ul",null,[n("li",null,"这里主要是介绍一些关于Ubuntu系统上的主要命令"),n("li",null,"其实使用的时候直接GPT就行，但是还是最后多敲几次就会了")])],-1)),n("nav",h,[n("ul",null,[n("li",null,[i(l,{to:"#一、简单介绍"},{default:a(()=>e[0]||(e[0]=[s("一、简单介绍")])),_:1,__:[0]}),n("ul",null,[n("li",null,[i(l,{to:"#_1、文件和目录管理命令"},{default:a(()=>e[1]||(e[1]=[s("1、文件和目录管理命令：")])),_:1,__:[1]})]),n("li",null,[i(l,{to:"#_2、系统管理命令"},{default:a(()=>e[2]||(e[2]=[s("2、系统管理命令：")])),_:1,__:[2]})]),n("li",null,[i(l,{to:"#_3、网络管理命令"},{default:a(()=>e[3]||(e[3]=[s("3、网络管理命令：")])),_:1,__:[3]})]),n("li",null,[i(l,{to:"#_4、软件管理命令"},{default:a(()=>e[4]||(e[4]=[s("4、软件管理命令：")])),_:1,__:[4]})]),n("li",null,[i(l,{to:"#_5、用户管理命令"},{default:a(()=>e[5]||(e[5]=[s("5、用户管理命令：")])),_:1,__:[5]})]),n("li",null,[i(l,{to:"#_6、文件查找和搜索命令"},{default:a(()=>e[6]||(e[6]=[s("6、文件查找和搜索命令：")])),_:1,__:[6]})]),n("li",null,[i(l,{to:"#_7、文件传输命令"},{default:a(()=>e[7]||(e[7]=[s("7、文件传输命令：")])),_:1,__:[7]})]),n("li",null,[i(l,{to:"#_8、关于磁盘空间以及内存的"},{default:a(()=>e[8]||(e[8]=[s("8、关于磁盘空间以及内存的：")])),_:1,__:[8]})]),n("li",null,[i(l,{to:"#_9、关于ip地址"},{default:a(()=>e[9]||(e[9]=[s("9、关于IP地址")])),_:1,__:[9]})]),n("li",null,[i(l,{to:"#_10、关于压缩-zip分卷压缩"},{default:a(()=>e[10]||(e[10]=[s("10、关于压缩: zip分卷压缩")])),_:1,__:[10]})]),n("li",null,[i(l,{to:"#_11、修改ip"},{default:a(()=>e[11]||(e[11]=[s("11、修改IP")])),_:1,__:[11]})])])])])]),e[15]||(e[15]=o(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍"><span>一、简单介绍</span></a></h2><ul><li><mark>便捷使用</mark></li><li>如果想要重复的进行某些操作</li><li>cd ../build &amp;&amp; make -j4</li><li>cd ../bin &amp;&amp; ./a.out</li><li>可以使用 ↑ 箭头 进行找到命令</li></ul><p><mark>常用命令</mark></p><ul><li>ls</li><li>cd 目录名</li><li>cd ..</li><li>mkdir 文件名</li><li>df -h 为查看各个文件的存储</li><li>df -h . 查看总共的占用空间</li><li>htop查看线程的东西，q退出</li><li>cat</li><li>neofetch 查看Ubuntu系统信息包括CPU等</li></ul><h3 id="_1、文件和目录管理命令" tabindex="-1"><a class="header-anchor" href="#_1、文件和目录管理命令"><span>1、文件和目录管理命令：</span></a></h3><pre><code>ll:以长格式显示文件和目录的详细信息，包括文件权限、所有者、所属组、文件大小、修改时间等。


ls：列出目录内容。


bash
ls -l # 以长格式显示目录内容

cd：切换当前目录。

bash
du -sh DyKNNG_Z  #Ubuntu 上 查看 文件夹存储空间大小 

bash
先切换到该大文件目录下：然后
du -sh 可以得到

bash
cd /home/user # 切换到/home/user目录

pwd：显示当前工作目录的路径。

bash
pwd # 输出当前工作目录

mkdir：创建新目录。

bash
mkdir new_directory # 在当前目录下创建名为new_directory的新目录

cp：复制文件或目录。

bash
cp source_file.txt destination_file.txt # 复制文件
cp -r source_directory/ destination_directory/ # 复制目录及其内容

mv：移动或重命名文件或目录。

bash
mv old_file.txt new_file.txt # 重命名文件
mv file.txt directory/ # 将文件移动到目录

bash
mv example.txt /home/user/new_folder  #移动
pwd 进行定位

touch：创建空文件或更新文件的时间戳。

bash
touch new_file.txt # 创建新文件

bash
rm filename #rm删除文件

cat：查看文件内容。

bash
cat file.txt # 显示文件内容

grep：在文件中搜索指定的模式。

bash
grep &quot;pattern&quot; file.txt # 在file.txt中搜索&quot;pattern&quot;
</code></pre><h3 id="_2、系统管理命令" tabindex="-1"><a class="header-anchor" href="#_2、系统管理命令"><span>2、系统管理命令：</span></a></h3><pre><code>top：显示系统资源的实时使用情况。

bash
top # 查看实时资源使用情况

在top命令运行时，你可以按q键退出。
</code></pre><h3 id="_3、网络管理命令" tabindex="-1"><a class="header-anchor" href="#_3、网络管理命令"><span>3、网络管理命令：</span></a></h3><pre><code>ping：测试与另一台计算机之间的连接。

bash
ping google.com # 向google.com发送网络请求

ifconfig：显示网络接口配置信息。

bash
ifconfig eth0 # 显示名为&quot;eth0&quot;的网络接口信息
</code></pre><h3 id="_4、软件管理命令" tabindex="-1"><a class="header-anchor" href="#_4、软件管理命令"><span>4、软件管理命令：</span></a></h3><pre><code>apt update：更新软件包列表。

bash
sudo apt update # 以管理员权限更新软件包列表

apt install：安装软件包。

bash
sudo apt install package_name # 安装指定的软件包

apt remove：卸载软件包。

bash
sudo apt remove package_name # 卸载指定的软件包
</code></pre><h3 id="_5、用户管理命令" tabindex="-1"><a class="header-anchor" href="#_5、用户管理命令"><span>5、用户管理命令：</span></a></h3><pre><code>adduser：创建新用户。

bash
sudo adduser new_user # 创建名为new_user的新用户
在默认情况下，使用 \`adduser\` 命令创建的普通用户没有 \`sudo\` 权限。
但通常的做法是先创建用户，然后再根据需要使用 \`usermod\` 命令将用户添加到 \`sudo\` 组或从 \`sudo\` 组中移除，
来授予或撤销 \`sudo\` 权限。

passwd：更改用户密码。
bash
passwd new_user # 为new_user设置或更改密码

sudo passwd :强制更改其它用户密码
bash
sudo passwd username

给用户sudo权限
bash
su root用户名
输入密码
sudo usermod -aG sudo username

查看是否已经加入sudo
groups username
或者直接进行：
id username  也会出现该username所在的组别 sudo

如果查看结果在sudo 组里面 但是运行不了sudo命令：
用户组缓存问题：
系统可能没有及时更新用户的组信息。尝试使用 newgrp sudo 命令（前提是你有执行该命令的权限）
来更新组信息，然后再尝试使用 sudo 命令。

如何查看 一台机子都是谁是 在sudo用户：
getent group sudo
sudo:x:27:username1,username2,....

如何进行删除一个非sudo用户
userdel username or sudo userdel username

如何进行在一台机子转换另外一个帐号，不用点击切用户
su another_user
su bzhang

如何查看一台机子上 某用户 是否存在：
id username

如何查看一台机子上 所有的用户：：
直接这样： cd /home/   ls
</code></pre><h3 id="_6、文件查找和搜索命令" tabindex="-1"><a class="header-anchor" href="#_6、文件查找和搜索命令"><span>6、文件查找和搜索命令：</span></a></h3><pre><code>find：在指定目录中查找文件或目录。

bash
find /home/user -name &quot;*.txt&quot; # 在/home/user目录下查找所有.txt文件

locate：快速查找文件或目录（基于数据库）。

bash
locate filename # 查找名为filename的文件

whereis：查找二进制文件、源代码文件和man手册页的位置。

bash
whereis ls # 查找ls命令的二进制文件、源代码和man手册页
</code></pre><p>请注意，上述命令中有些需要管理员权限（即使用sudo），这是因为它们涉及系统级别的更改或安装软件等操作。执行这些命令时，可能需要输入管理员密码。</p><h3 id="_7、文件传输命令" tabindex="-1"><a class="header-anchor" href="#_7、文件传输命令"><span>7、文件传输命令：</span></a></h3><pre><code>复制文件到其它电脑
</code></pre><ul><li><a href="https://blog.csdn.net/qq_51447496/article/details/132090240" target="_blank" rel="noopener noreferrer">CSDN详解</a></li></ul><h3 id="_8、关于磁盘空间以及内存的" tabindex="-1"><a class="header-anchor" href="#_8、关于磁盘空间以及内存的"><span>8、关于磁盘空间以及内存的：</span></a></h3><ul><li><p>关于整个存储的使用情况：<br> bash：df -h .<br> Filesystem Size Used Avail Use% Mounted on<br> /dev/sda2 3.6T 81G 3.4T 3% /</p></li><li><p>关于 整个系统磁盘的使用情况：<br> bash: df -h<br> /dev/sdc 1.8T 1.7T 18G 100% /media/data2<br> /dev/sdd 1.8T 1.6T 147G 92% /media/data3<br> /dev/sde 1.8T 1.7T 98G 95% /media/data4<br> /dev/sdf 1.8T 1.7T 28K 100% /media/data5<br> /dev/sdh 1.8T 1.7T 69G 97% /media/data7<br> /dev/sdg 1.8T 1.6T 173G 91% /media/data6</p></li><li><p>关于 某个 查看具体的 文件的大小：：<br> bash: ls -lh /home/bzhang/data/sift100m/sift100m_index.usearch<br> 查看在 data 下的 sift100m 的文件夹 占用空间<br> -rw-rw-r-- 1 bzhang bzhang 202M 7月 3 21:44 /home/bzhang/data/sift100m/sift100m_index.usearch</p></li><li><p>查看某个目录总共的大小空间：<br> bash:<br> bzhang@pc243:~/Desktop$ du -sh<br> 13G .<br> bzhang@pc243:~/Desktop$ du -sh 2024-6-25<br> 4.0K 2024-6-25<br> bzhang@pc243:~/Desktop$ du -sh Home<br> 7.0G Home</p><p>查看 该目录下的 各个文件的大小的话：<br> du -h<br> ben@DESKTOP-AV9JCJ6:~/code$ du -h<br> 2.4M ./CUDA<br> 4.0K ./C<br> 2.4M .<br> ben@DESKTOP-AV9JCJ6:~/code$</p><p>查看一个目录下的 各个文件夹的大小：<br> du -h --max-depth=1 | sort -hr</p></li><li></li></ul><h3 id="_9、关于ip地址" tabindex="-1"><a class="header-anchor" href="#_9、关于ip地址"><span>9、关于IP地址</span></a></h3><ul><li>bash: ifconfig<br> inet  后面的就是；<br><br></li></ul><h3 id="_10、关于压缩-zip分卷压缩" tabindex="-1"><a class="header-anchor" href="#_10、关于压缩-zip分卷压缩"><span>10、关于压缩: zip分卷压缩</span></a></h3><ul><li><p>1 首先将其压缩成一个大的zip压缩包之后再分卷</p></li><li><p>zip -r a.zip dir</p></li><li><p>2 将压缩完的大压缩包zip分卷</p></li><li><p>zip -s (1G|500M) a.zip --out b.zip</p></li><li><p>命令执行完会在文件夹下生成b.zip、b.z01、b.z02…等</p></li><li><p>在windows环境下解压时只需要将b.zip解压缩就可以将其他卷一起解析</p></li><li><p>3 在linux环境下解压时，需要先将分散的压缩包合并</p></li><li><p>zip b.zip b.z01 b.z02… -s=0 --out sum.zip (这个命令的话现在好像是会把所有的合并一块，再加上.z01 .z02 .z03 ... 最终形成sum.zip)</p></li><li><p>zip -s=0 b.zip --out sum.zip (这样的话好像就是仅仅让它自己合并所有的，恢复一个原始的， sum.zip 不会有多余的 .z01 .z02 .z03 ...)</p></li><li><p>4 之后再用unzip解压命令</p></li><li><p>unzip sum.zip</p></li></ul><br><ul><li>另外一种大文件的形式操作：<br> 这是 <strong>Linux 系统下 zip 分卷压缩与 unzip 分卷解压</strong> 的操作教程，实体信息如下：</li></ul><ol><li><p><strong>生成基础 zip 包</strong><br> 命令：<code>zip -r b.zip a.mp4</code><br> 作用：将 <code>a.mp4</code> 文件压缩为 <code>b.zip</code>（<code>-r</code> 递归压缩，适合目录，单文件也可用）。</p></li><li><p><strong>分卷处理</strong><br> 命令：<code>zip -s 40m b.zip --out c.zip</code><br> 作用：将 <code>b.zip</code> 按 <strong>最大 40MB</strong> 分卷，生成 <code>c.z01</code>、<code>c.z02</code>… 等分卷文件（<code>-s</code> 指定分卷大小，<code>--out</code> 指定输出前缀）。</p></li><li><p><strong>合并分卷</strong><br> 命令：<code>cat c.z* &gt; d.zip</code><br> 作用：将 <code>c.z*</code> 开头的分卷文件（如 <code>c.z01</code>、<code>c.z02</code>）合并为完整的 <code>d.zip</code>。</p></li><li><p><strong>解压还原</strong><br> 命令：<code>unzip d.zip</code><br> 作用：解压 <code>d.zip</code>，恢复原始文件（如 <code>a.mp4</code>）。</p></li></ol><p>核心逻辑是：先通过 <code>zip</code> 分卷切割大文件，再通过 <code>cat</code> 合并分卷、<code>unzip</code> 还原，适合传输/存储大文件时拆分的场景。</p><h3 id="_11、修改ip" tabindex="-1"><a class="header-anchor" href="#_11、修改ip"><span>11、修改IP</span></a></h3><ul><li><a href="https://blog.csdn.net/m0_61899108/article/details/133822801" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_61899108/article/details/133822801</a></li><li>进行在图形化界面进行修改IP；Address and Gateway</li></ul>`,32))])}const z=t(b,[["render",c]]),f=JSON.parse('{"path":"/logs/Z-Ubuntu%E7%9F%A5%E8%AF%86/A-Ubuntu%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"A-Ubuntu常用命令","lang":"zh-CN","frontmatter":{"date":"2024-03-24T00:00:00.000Z","category":["小技术","Ubuntu常用命令"],"tag":["小技术","Ubuntu常用命令"],"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"一、简单介绍","slug":"一、简单介绍","link":"#一、简单介绍","children":[{"level":3,"title":"1、文件和目录管理命令：","slug":"_1、文件和目录管理命令","link":"#_1、文件和目录管理命令","children":[]},{"level":3,"title":"2、系统管理命令：","slug":"_2、系统管理命令","link":"#_2、系统管理命令","children":[]},{"level":3,"title":"3、网络管理命令：","slug":"_3、网络管理命令","link":"#_3、网络管理命令","children":[]},{"level":3,"title":"4、软件管理命令：","slug":"_4、软件管理命令","link":"#_4、软件管理命令","children":[]},{"level":3,"title":"5、用户管理命令：","slug":"_5、用户管理命令","link":"#_5、用户管理命令","children":[]},{"level":3,"title":"6、文件查找和搜索命令：","slug":"_6、文件查找和搜索命令","link":"#_6、文件查找和搜索命令","children":[]},{"level":3,"title":"7、文件传输命令：","slug":"_7、文件传输命令","link":"#_7、文件传输命令","children":[]},{"level":3,"title":"8、关于磁盘空间以及内存的：","slug":"_8、关于磁盘空间以及内存的","link":"#_8、关于磁盘空间以及内存的","children":[]},{"level":3,"title":"9、关于IP地址","slug":"_9、关于ip地址","link":"#_9、关于ip地址","children":[]},{"level":3,"title":"10、关于压缩: zip分卷压缩","slug":"_10、关于压缩-zip分卷压缩","link":"#_10、关于压缩-zip分卷压缩","children":[]},{"level":3,"title":"11、修改IP","slug":"_11、修改ip","link":"#_11、修改ip","children":[]}]}],"git":{"createdTime":1787540590000,"updatedTime":1787540590000,"contributors":[{"name":"z-ben","username":"z-ben","email":"12800262+z-ben@user.noreply.gitee.com","commits":1,"url":"https://github.com/z-ben"}]},"readingTime":{"minutes":6.48,"words":1944},"filePathRelative":"logs/Z-Ubuntu知识/A-Ubuntu常用命令.md","localizedDate":"2024年3月24日"}');export{z as comp,f as data};
