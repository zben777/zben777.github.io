import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as s,e as l,a as n,d as t,w as r,b as e,f as h}from"./app-5127cb85.js";const c={},u=n("h1",{id:"a-ubuntu常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-ubuntu常用命令","aria-hidden":"true"},"#"),e(" A-Ubuntu常用命令")],-1),p=n("p",null,"A-Ubuntu常用命令",-1),_={class:"table-of-contents"},f=h(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><div class="hint-container info"><p class="hint-container-title">说明</p><p>关于Ubuntu系统上的常用命令。</p></div><p><mark>常用命令</mark></p><ul><li>ls</li><li>cd 目录名</li><li>cd ..</li><li>mkdir 文件名</li><li>df -h 为查看各个文件的存储</li><li>htop查看线程的东西，q退出</li><li>cat</li></ul><h2 id="文件和目录管理命令" tabindex="-1"><a class="header-anchor" href="#文件和目录管理命令" aria-hidden="true">#</a> 文件和目录管理命令：</h2><pre><code>ls：列出目录内容。

bash
ls -l # 以长格式显示目录内容

cd：切换当前目录。

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

touch：创建空文件或更新文件的时间戳。

bash
touch new_file.txt # 创建新文件

cat：查看文件内容。

bash
cat file.txt # 显示文件内容

grep：在文件中搜索指定的模式。

bash
grep &quot;pattern&quot; file.txt # 在file.txt中搜索&quot;pattern&quot;
</code></pre><h2 id="系统管理命令" tabindex="-1"><a class="header-anchor" href="#系统管理命令" aria-hidden="true">#</a> 系统管理命令：</h2><pre><code>top：显示系统资源的实时使用情况。

bash
top # 查看实时资源使用情况

在top命令运行时，你可以按q键退出。
</code></pre><h2 id="网络管理命令" tabindex="-1"><a class="header-anchor" href="#网络管理命令" aria-hidden="true">#</a> 网络管理命令：</h2><pre><code>ping：测试与另一台计算机之间的连接。

bash
ping google.com # 向google.com发送网络请求

ifconfig：显示网络接口配置信息。

bash
ifconfig eth0 # 显示名为&quot;eth0&quot;的网络接口信息
</code></pre><h2 id="软件管理命令" tabindex="-1"><a class="header-anchor" href="#软件管理命令" aria-hidden="true">#</a> 软件管理命令：</h2><pre><code>apt update：更新软件包列表。

bash
sudo apt update # 以管理员权限更新软件包列表

apt install：安装软件包。

bash
sudo apt install package_name # 安装指定的软件包

apt remove：卸载软件包。

bash
sudo apt remove package_name # 卸载指定的软件包
</code></pre><h2 id="用户管理命令" tabindex="-1"><a class="header-anchor" href="#用户管理命令" aria-hidden="true">#</a> 用户管理命令：</h2><pre><code>adduser：创建新用户。

bash
sudo adduser new_user # 创建名为new_user的新用户

passwd：更改用户密码。

bash
passwd new_user # 为new_user设置或更改密码
</code></pre><h2 id="文件查找和搜索命令" tabindex="-1"><a class="header-anchor" href="#文件查找和搜索命令" aria-hidden="true">#</a> 文件查找和搜索命令：</h2><pre><code>find：在指定目录中查找文件或目录。

bash
find /home/user -name &quot;*.txt&quot; # 在/home/user目录下查找所有.txt文件

locate：快速查找文件或目录（基于数据库）。

bash
locate filename # 查找名为filename的文件

whereis：查找二进制文件、源代码文件和man手册页的位置。

bash
whereis ls # 查找ls命令的二进制文件、源代码和man手册页
</code></pre><p>请注意，上述命令中有些需要管理员权限（即使用sudo），这是因为它们涉及系统级别的更改或安装软件等操作。执行这些命令时，可能需要输入管理员密码。</p><br>`,18);function b(m,x){const a=i("router-link");return d(),s("div",null,[u,p,l(" more "),n("nav",_,[n("ul",null,[n("li",null,[t(a,{to:"#一、简单介绍"},{default:r(()=>[e("一、简单介绍")]),_:1})]),n("li",null,[t(a,{to:"#文件和目录管理命令"},{default:r(()=>[e("文件和目录管理命令：")]),_:1})]),n("li",null,[t(a,{to:"#系统管理命令"},{default:r(()=>[e("系统管理命令：")]),_:1})]),n("li",null,[t(a,{to:"#网络管理命令"},{default:r(()=>[e("网络管理命令：")]),_:1})]),n("li",null,[t(a,{to:"#软件管理命令"},{default:r(()=>[e("软件管理命令：")]),_:1})]),n("li",null,[t(a,{to:"#用户管理命令"},{default:r(()=>[e("用户管理命令：")]),_:1})]),n("li",null,[t(a,{to:"#文件查找和搜索命令"},{default:r(()=>[e("文件查找和搜索命令：")]),_:1})])])]),f])}const k=o(c,[["render",b],["__file","A-Ubuntu常用命令.html.vue"]]);export{k as default};
