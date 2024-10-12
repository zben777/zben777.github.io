import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as h,d as u,a as e,e as a,w as r,b as n,f as i}from"./app-2a2d189a.js";const c={},b=e("h1",{id:"a-ubuntu常用命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-ubuntu常用命令","aria-hidden":"true"},"#"),n(" A-Ubuntu常用命令")],-1),_=e("p",null,"A-Ubuntu常用命令",-1),p=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("ul",null,[e("li",null,"这里主要是介绍一些关于Ubuntu系统上的主要命令"),e("li",null,"其实使用的时候直接GPT就行，但是还是最后多敲几次就会了")])],-1),m={class:"table-of-contents"},f=i(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><ul><li><mark>便捷使用</mark></li><li>如果想要重复的进行某些操作</li><li>cd ../build &amp;&amp; make -j4</li><li>cd ../bin &amp;&amp; ./a.out</li><li>可以使用 ↑ 箭头 进行找到命令</li></ul><p><mark>常用命令</mark></p><ul><li>ls</li><li>cd 目录名</li><li>cd ..</li><li>mkdir 文件名</li><li>df -h 为查看各个文件的存储</li><li>df -h . 查看总共的占用空间</li><li>htop查看线程的东西，q退出</li><li>cat</li><li>neofetch 查看Ubuntu系统信息包括CPU等</li></ul><h3 id="_1、文件和目录管理命令" tabindex="-1"><a class="header-anchor" href="#_1、文件和目录管理命令" aria-hidden="true">#</a> 1、文件和目录管理命令：</h3><pre><code>ll:以长格式显示文件和目录的详细信息，包括文件权限、所有者、所属组、文件大小、修改时间等。


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
</code></pre><h3 id="_2、系统管理命令" tabindex="-1"><a class="header-anchor" href="#_2、系统管理命令" aria-hidden="true">#</a> 2、系统管理命令：</h3><pre><code>top：显示系统资源的实时使用情况。

bash
top # 查看实时资源使用情况

在top命令运行时，你可以按q键退出。
</code></pre><h3 id="_3、网络管理命令" tabindex="-1"><a class="header-anchor" href="#_3、网络管理命令" aria-hidden="true">#</a> 3、网络管理命令：</h3><pre><code>ping：测试与另一台计算机之间的连接。

bash
ping google.com # 向google.com发送网络请求

ifconfig：显示网络接口配置信息。

bash
ifconfig eth0 # 显示名为&quot;eth0&quot;的网络接口信息
</code></pre><h3 id="_4、软件管理命令" tabindex="-1"><a class="header-anchor" href="#_4、软件管理命令" aria-hidden="true">#</a> 4、软件管理命令：</h3><pre><code>apt update：更新软件包列表。

bash
sudo apt update # 以管理员权限更新软件包列表

apt install：安装软件包。

bash
sudo apt install package_name # 安装指定的软件包

apt remove：卸载软件包。

bash
sudo apt remove package_name # 卸载指定的软件包
</code></pre><h3 id="_5、用户管理命令" tabindex="-1"><a class="header-anchor" href="#_5、用户管理命令" aria-hidden="true">#</a> 5、用户管理命令：</h3><pre><code>adduser：创建新用户。

bash
sudo adduser new_user # 创建名为new_user的新用户
在默认情况下，使用 \`adduser\` 命令创建的普通用户没有 \`sudo\` 权限。
但通常的做法是先创建用户，然后再根据需要使用 \`usermod\` 命令将用户添加到 \`sudo\` 组或从 \`sudo\` 组中移除，
来授予或撤销 \`sudo\` 权限。

passwd：更改用户密码。

bash
passwd new_user # 为new_user设置或更改密码


给用户sudo权限
bash
su root用户名
输入密码
sudo usermod -aG sudo username

查看是否已经加入sudo
groups username
或者直接进行：
id username  也会出现该username所在的组别 sudo

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
</code></pre><h3 id="_6、文件查找和搜索命令" tabindex="-1"><a class="header-anchor" href="#_6、文件查找和搜索命令" aria-hidden="true">#</a> 6、文件查找和搜索命令：</h3><pre><code>find：在指定目录中查找文件或目录。

bash
find /home/user -name &quot;*.txt&quot; # 在/home/user目录下查找所有.txt文件

locate：快速查找文件或目录（基于数据库）。

bash
locate filename # 查找名为filename的文件

whereis：查找二进制文件、源代码文件和man手册页的位置。

bash
whereis ls # 查找ls命令的二进制文件、源代码和man手册页
</code></pre><p>请注意，上述命令中有些需要管理员权限（即使用sudo），这是因为它们涉及系统级别的更改或安装软件等操作。执行这些命令时，可能需要输入管理员密码。</p><h3 id="_7、文件传输命令" tabindex="-1"><a class="header-anchor" href="#_7、文件传输命令" aria-hidden="true">#</a> 7、文件传输命令：</h3><pre><code>复制文件到其它电脑
</code></pre>`,19),g={href:"https://blog.csdn.net/qq_51447496/article/details/132090240",target:"_blank",rel:"noopener noreferrer"},x=i('<h3 id="_8、关于磁盘空间以及内存的" tabindex="-1"><a class="header-anchor" href="#_8、关于磁盘空间以及内存的" aria-hidden="true">#</a> 8、关于磁盘空间以及内存的：</h3><ul><li><p>关于整个存储的使用情况：<br> bash：df -h .<br> Filesystem Size Used Avail Use% Mounted on<br> /dev/sda2 3.6T 81G 3.4T 3% /</p></li><li><p>关于 整个系统磁盘的使用情况：<br> bash: df -h<br> /dev/sdc 1.8T 1.7T 18G 100% /media/data2<br> /dev/sdd 1.8T 1.6T 147G 92% /media/data3<br> /dev/sde 1.8T 1.7T 98G 95% /media/data4<br> /dev/sdf 1.8T 1.7T 28K 100% /media/data5<br> /dev/sdh 1.8T 1.7T 69G 97% /media/data7<br> /dev/sdg 1.8T 1.6T 173G 91% /media/data6</p></li><li><p>关于 某个 查看具体的 文件的大小：：<br> bash: ls -lh /home/bzhang/data/sift100m/sift100m_index.usearch<br> 查看在 data 下的 sift100m 的文件夹 占用空间<br> -rw-rw-r-- 1 bzhang bzhang 202M 7月 3 21:44 /home/bzhang/data/sift100m/sift100m_index.usearch</p></li><li><p>查看某个目录总共的大小空间：<br> bash:<br> bzhang@pc243:~/Desktop$ du -sh<br> 13G .<br> bzhang@pc243:~/Desktop$ du -sh 2024-6-25<br> 4.0K 2024-6-25<br> bzhang@pc243:~/Desktop$ du -sh Home<br> 7.0G Home</p><p>查看 该目录下的 各个文件的大小的话：<br> du -h<br> ben@DESKTOP-AV9JCJ6:~/code$ du -h<br> 2.4M ./CUDA<br> 4.0K ./C<br> 2.4M .<br> ben@DESKTOP-AV9JCJ6:~/code$</p></li><li></li></ul><h3 id="_9、关于ip地址" tabindex="-1"><a class="header-anchor" href="#_9、关于ip地址" aria-hidden="true">#</a> 9、关于IP地址</h3><ul><li>bash: ifconfig<br> inet  后面的就是；<br><br></li></ul><h3 id="_10、关于压缩" tabindex="-1"><a class="header-anchor" href="#_10、关于压缩" aria-hidden="true">#</a> 10、关于压缩</h3><ul><li>bash：cd ..</li><li>bash: zip -r test.zip name</li></ul><p>username@pc:~/Desktop/username/lab/Plotting/USearch-Hnswlib$ cd ..<br> username@pc:~/Desktop/username/lab/Plotting$ zip -r test.zip USearch-Hnswlib<br> adding: USearch-Hnswlib/ (stored 0%)<br> adding: USearch-Hnswlib/sift1m_Recall@10.png (deflated 29%)<br> adding: USearch-Hnswlib/deep1m_Recall@10.png (deflated 27%)<br> username@pc:~/Desktop/username/lab/Plotting$ ls<br> test.zip USearch-Hnswlib<br> username@pc:~/Desktop/username/lab/Plotting$</p><br><h3 id="_11、修改ip" tabindex="-1"><a class="header-anchor" href="#_11、修改ip" aria-hidden="true">#</a> 11、修改IP</h3>',9),w={href:"https://blog.csdn.net/m0_61899108/article/details/133822801",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"进行在图形化界面进行修改IP；Address and Gateway",-1);function v(T,U){const t=l("router-link"),d=l("ExternalLinkIcon");return o(),h("div",null,[b,_,u(" more "),p,e("nav",m,[e("ul",null,[e("li",null,[a(t,{to:"#一、简单介绍"},{default:r(()=>[n("一、简单介绍")]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#_1、文件和目录管理命令"},{default:r(()=>[n("1、文件和目录管理命令：")]),_:1})]),e("li",null,[a(t,{to:"#_2、系统管理命令"},{default:r(()=>[n("2、系统管理命令：")]),_:1})]),e("li",null,[a(t,{to:"#_3、网络管理命令"},{default:r(()=>[n("3、网络管理命令：")]),_:1})]),e("li",null,[a(t,{to:"#_4、软件管理命令"},{default:r(()=>[n("4、软件管理命令：")]),_:1})]),e("li",null,[a(t,{to:"#_5、用户管理命令"},{default:r(()=>[n("5、用户管理命令：")]),_:1})]),e("li",null,[a(t,{to:"#_6、文件查找和搜索命令"},{default:r(()=>[n("6、文件查找和搜索命令：")]),_:1})]),e("li",null,[a(t,{to:"#_7、文件传输命令"},{default:r(()=>[n("7、文件传输命令：")]),_:1})]),e("li",null,[a(t,{to:"#_8、关于磁盘空间以及内存的"},{default:r(()=>[n("8、关于磁盘空间以及内存的：")]),_:1})]),e("li",null,[a(t,{to:"#_9、关于ip地址"},{default:r(()=>[n("9、关于IP地址")]),_:1})]),e("li",null,[a(t,{to:"#_10、关于压缩"},{default:r(()=>[n("10、关于压缩")]),_:1})]),e("li",null,[a(t,{to:"#_11、修改ip"},{default:r(()=>[n("11、修改IP")]),_:1})])])])])]),f,e("ul",null,[e("li",null,[e("a",g,[n("CSDN详解"),a(d)])])]),x,e("ul",null,[e("li",null,[e("a",w,[n("https://blog.csdn.net/m0_61899108/article/details/133822801"),a(d)])]),k])])}const q=s(c,[["render",v],["__file","A-Ubuntu常用命令.html.vue"]]);export{q as default};
