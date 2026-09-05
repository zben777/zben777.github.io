import{_ as c,c as p,b as a,d,e as r,a as l,w as i,r as v,o as m,f as e}from"./app-BC3GIMfQ.js";const t={},u={class:"table-of-contents"};function o(b,s){const n=v("router-link");return m(),p("div",null,[s[2]||(s[2]=a("h1",{id:"s-clamav",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#s-clamav"},[a("span",null,"S-clamav")])],-1)),s[3]||(s[3]=a("p",null,"S-clamav",-1)),d(" more "),s[4]||(s[4]=a("div",{class:"hint-container info"},[a("p",{class:"hint-container-title"},"说明"),a("ul",null,[a("li",null,"关于在ubuntu上杀毒")])],-1)),a("nav",u,[a("ul",null,[a("li",null,[l(n,{to:"#一、简单介绍安装与自己的兼容版本"},{default:i(()=>s[0]||(s[0]=[e("一、简单介绍安装与自己的兼容版本")])),_:1,__:[0]})]),a("li",null,[l(n,{to:"#二、安装指定的版本"},{default:i(()=>s[1]||(s[1]=[e("二、安装指定的版本")])),_:1,__:[1]})])])]),s[5]||(s[5]=r(`<h2 id="一、简单介绍安装与自己的兼容版本" tabindex="-1"><a class="header-anchor" href="#一、简单介绍安装与自己的兼容版本"><span>一、简单介绍安装与自己的兼容版本</span></a></h2><ul><li><p>本文介绍了如何在Linux系统中通过apt安装ClamAV防病毒软件，进行手动和定时扫描以保护系统安全。步骤包括更新系统，安装ClamAV及其守护进程，停止服务以更新病毒库，使用freshclam命令更新数据库，然后重启服务。同时，设置了cronjob每天23:30执行clamscan扫描，并将结果记录在日志文件中。</p></li><li><p><mark>直接apt安装</mark></p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get install clamav clamav-daemon</span></span>
<span class="line"><span>clamscan --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>停止服务更新病毒库</mark></li><li>为了手动更新数据库，暂时停止服务</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ sudo systemctl stop clamav-freshclam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><mark>运行freshclam</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>freshclam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><mark>重启服务</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo systemctl start clamav-freshclam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><mark>扫描</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>clamscan -r -i /home -l /var/log/clamscan.log</span></span>
<span class="line"><span>选项参数：</span></span>
<span class="line"><span>-r：递归扫描目录（Recursive），会扫描指定目录下的所有子目录和文件。</span></span>
<span class="line"><span>-i：只显示感染的文件（Infected），忽略扫描干净的文件，使输出更简洁。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>扫描路径：</span></span>
<span class="line"><span>/home：指定要扫描的目录，这里是用户主目录（通常包含个人文件和数据）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>日志输出：</span></span>
<span class="line"><span>-l /var/log/clamscan.log：将扫描结果保存到指定日志文件中，便于后续查看和分析。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>定时任务</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>crontab -e</span></span>
<span class="line"><span>30 23 * * * sh /usr/local/crontab/clamav_scan.sh &gt; /dev/null 2&gt;&amp;1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、安装指定的版本" tabindex="-1"><a class="header-anchor" href="#二、安装指定的版本"><span>二、安装指定的版本</span></a></h2><ul><li><mark>1、官网下载</mark></li><li>地址：<a href="https://www.clamav.net/downloads" target="_blank" rel="noopener noreferrer">https://www.clamav.net/downloads</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>​wget https://www.clamav.net/downloads/production/clamav-0.104.2.linux.x86_64.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><mark>2、在服务器上安装</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo rpm -ivh --prefix=/usr/local/clamav clamav-0.104.2.linux.x86_64.rpm</span></span>
<span class="line"><span>deb同理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>3、添加用户组及创建用户</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo groupadd clamav</span></span>
<span class="line"><span>sudo useradd -g clamav clamav</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>4、创建日志目录和病毒库目录</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo mkdir -p /usr/local/clamav/logs</span></span>
<span class="line"><span>sudo mkdir -p /usr/local/clamav/update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>5、创建日志文件</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo touch /usr/local/clamav/logs/clamd.log</span></span>
<span class="line"><span>sudo touch /usr/local/clamav/logs/freshclam.log</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>6、文件授权</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo chown clamav:clamav /usr/local/clamav/logs/clamd.log</span></span>
<span class="line"><span>sudo chown clamav:clamav /usr/local/clamav/logs/freshclam.log</span></span>
<span class="line"><span>sudo chown clamav:clamav /usr/local/clamav/update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>7、修改文件配置</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd /usr/local/clamav/etc/</span></span>
<span class="line"><span>ls</span></span>
<span class="line"><span>sudo mv clamd.conf.sample clamd.conf</span></span>
<span class="line"><span>sudo mv freshclam.conf.sample freshclam.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo vim /usr/local/clamav/etc/clamd.conf</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#Example　　//注释掉这一行</span></span>
<span class="line"><span>#添加以下内容</span></span>
<span class="line"><span>LogFile /usr/local/clamav/logs/clamd.log</span></span>
<span class="line"><span>PidFile /usr/local/clamav/update/clamd.pid</span></span>
<span class="line"><span>DatabaseDirectory /usr/local/clamav/update</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo vim /usr/local/clamav/etc/freshclam.conf</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#Example　　//注释掉这一行</span></span>
<span class="line"><span>#添加以下内容</span></span>
<span class="line"><span>DatabaseDirectory /usr/local/clamav/update</span></span>
<span class="line"><span>UpdateLogFile /usr/local/clamav/logs/freshclam.log</span></span>
<span class="line"><span>PidFile /usr/local/clamav/update/freshclam.pid</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo cp /usr/local/clamav/etc/*.conf /usr/local/etc/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>7、从网络更新病毒库</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#在原文基础上加此命令修改权限，否则无法写入日志文件导致无法更新病毒库</span></span>
<span class="line"><span>sudo chown -R clamav.clamav /usr/local/clamav/</span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/local/clamav/bin/freshclam</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这个时候会发现链接库不对劲，因为链接库是在 /usr/local/clamav/lib64 下面的；</span></span>
<span class="line"><span>echo &quot;/usr/local/clamav/lib64&quot; | sudo tee /etc/ld.so.conf.d/clamav.conf</span></span>
<span class="line"><span>sudo ldconfig</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后会发现 下载病毒代码库的时候连不上：</span></span>
<span class="line"><span>sudo mkdir -p /etc/pki/tls/certs</span></span>
<span class="line"><span>sudo ln -sf /etc/ssl/certs/ca-certificates.crt /etc/pki/tls/certs/ca-bundle.crt</span></span>
<span class="line"><span>这样就可以了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>再运行下</span></span>
<span class="line"><span>/usr/local/clamav/bin/freshclam</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这个时候就可以使用</span></span>
<span class="line"><span>/usr/local/clamav/bin/clamscan </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loading:    13s, ETA:   0s [========================&gt;]    8.71M/8.71M sigs       </span></span>
<span class="line"><span>Compiling:   2s, ETA:   0s [========================&gt;]       41/41 tasks </span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamav.so.12.0.3: OK</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclammspack.so.0: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libfreshclam.so: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamav_rust.a: OK</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclammspack.so.0.8.0: OK</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamunrar.so.12.0.3: OK</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamunrar_iface.so.12: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libfreshclam.so.3.0.2: OK</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamunrar_iface.so.12.0.3: OK</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libfreshclam.so.3: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamav.so.12: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamunrar.so: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamunrar_iface.so: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclammspack.so: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamunrar.so.12: Symbolic link</span></span>
<span class="line"><span>/usr/local/clamav/lib64/libclamav.so: Symbolic link</span></span>
<span class="line"><span></span></span>
<span class="line"><span>----------- SCAN SUMMARY -----------</span></span>
<span class="line"><span>Known viruses: 8707471</span></span>
<span class="line"><span>Engine version: 1.4.2</span></span>
<span class="line"><span>Scanned directories: 1</span></span>
<span class="line"><span>Scanned files: 6</span></span>
<span class="line"><span>Infected files: 0</span></span>
<span class="line"><span>Data scanned: 90.67 MB</span></span>
<span class="line"><span>Data read: 57.00 MB (ratio 1.59:1)</span></span>
<span class="line"><span>Time: 21.598 sec (0 m 21 s)</span></span>
<span class="line"><span>Start Date: 2025:05:31 13:34:05</span></span>
<span class="line"><span>End Date:   2025:05:31 13:34:26</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><mark>配置全局</mark></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>echo &#39;export PATH=&quot;/usr/local/clamav/bin:$PATH&quot;&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>source ~/.bashrc  # 立即生效</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $PATH  # 应显示 /usr/local/clamav/bin 在路径中</span></span>
<span class="line"><span>clamscan --version  # 应正常显示版本信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo ln -s /usr/local/clamav/bin/clamscan /usr/bin/</span></span>
<span class="line"><span>sudo ln -s /usr/local/clamav/bin/freshclam /usr/bin/</span></span>
<span class="line"><span>sudo ln -s /usr/local/clamav/bin/clamdscan /usr/bin/</span></span>
<span class="line"><span># 可根据需要添加其他命令（如 clamdtop、sigtool 等）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建配置文件</span></span>
<span class="line"><span>echo &#39;/usr/local/clamav/lib64&#39; | sudo tee /etc/ld.so.conf.d/clamav.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新动态链接器缓存</span></span>
<span class="line"><span>sudo ldconfigsudo vim /usr/local/clamav/etc/freshclam.conf</span></span>
<span class="line"><span># 修改或取消注释以下行：</span></span>
<span class="line"><span>DatabaseDirectory /usr/local/clamav/lib64/clamav</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>clamscan --version  # 应正常显示版本</span></span>
<span class="line"><span>freshclam  # 应能正常更新病毒库</span></span>
<span class="line"><span>clamscan /path/to/directory  # 扫描指定目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clamscan --help  # 查看扫描命令帮助</span></span>
<span class="line"><span>freshclam  # 更新病毒库</span></span>
<span class="line"><span>clamdscan /path/to/file  # 使用守护进程模式扫描</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32))])}const k=c(t,[["render",o]]),g=JSON.parse('{"path":"/logs/Z-Ubuntu%E7%9F%A5%E8%AF%86/S-Ubuntu%E6%9D%80%E6%AF%92.html","title":"S-clamav","lang":"zh-CN","frontmatter":{"date":"2024-03-24T00:00:00.000Z","category":["小技术","杀毒"],"tag":["小技术","杀毒"],"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"一、简单介绍安装与自己的兼容版本","slug":"一、简单介绍安装与自己的兼容版本","link":"#一、简单介绍安装与自己的兼容版本","children":[]},{"level":2,"title":"二、安装指定的版本","slug":"二、安装指定的版本","link":"#二、安装指定的版本","children":[]}],"git":{"createdTime":1787540590000,"updatedTime":1787540590000,"contributors":[{"name":"z-ben","username":"z-ben","email":"12800262+z-ben@user.noreply.gitee.com","commits":1,"url":"https://github.com/z-ben"}]},"readingTime":{"minutes":3.09,"words":926},"filePathRelative":"logs/Z-Ubuntu知识/S-Ubuntu杀毒.md","localizedDate":"2024年3月24日"}');export{k as comp,g as data};
