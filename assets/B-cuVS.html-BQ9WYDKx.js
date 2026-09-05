import{_ as d,c,b as s,d as p,e as t,a as i,w as e,r,o,f as l}from"./app-BC3GIMfQ.js";const v={},u={class:"table-of-contents"};function m(b,n){const a=r("router-link");return o(),c("div",null,[n[3]||(n[3]=s("h1",{id:"b-cuvs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#b-cuvs"},[s("span",null,"B-cuVS")])],-1)),n[4]||(n[4]=s("p",null,"B-cuVS",-1)),p(" more "),n[5]||(n[5]=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"相关信息"),s("ul",null,[s("li",null,"主要是记录下之前在进行cuVS的安装配置的")])],-1)),s("nav",u,[s("ul",null,[s("li",null,[i(a,{to:"#一、首先下载miniconda"},{default:e(()=>n[0]||(n[0]=[l("一、首先下载miniconda")])),_:1,__:[0]})]),s("li",null,[i(a,{to:"#二、在conda中下载cuvs"},{default:e(()=>n[1]||(n[1]=[l("二、在conda中下载cuVS")])),_:1,__:[1]})]),s("li",null,[i(a,{to:"#三、使用代码"},{default:e(()=>n[2]||(n[2]=[l("三、使用代码")])),_:1,__:[2]})])])]),n[6]||(n[6]=t(`<p>✅ 一键式命令流程（建议复制粘贴）</p><h2 id="一、首先下载miniconda" tabindex="-1"><a class="header-anchor" href="#一、首先下载miniconda"><span>一、首先下载miniconda</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Step 1：下载 Miniconda 安装脚本（Linux 64位）</span></span>
<span class="line"><span>wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Step 2：验证是否下载成功（可选）</span></span>
<span class="line"><span>ls -lh Miniconda3-latest-Linux-x86_64.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Step 3：运行安装脚本</span></span>
<span class="line"><span>bash Miniconda3-latest-Linux-x86_64.sh -b -p /home/bzhang/code/miniconda_code</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Miniconda 配置</span></span>
<span class="line"><span>echo &#39;export PATH=&quot;/home/bzhang/code/miniconda_code/bin:$PATH&quot;&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>source ~/.bashrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 测试是否安装成功</span></span>
<span class="line"><span>conda --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、在conda中下载cuvs" tabindex="-1"><a class="header-anchor" href="#二、在conda中下载cuvs"><span>二、在conda中下载cuVS</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>一定要调整版本号： 目前是12.2 用nvidia-smi查看 dell1T上是12.6</span></span>
<span class="line"><span>conda install -c rapidsai -c conda-forge -c nvidia libcuvs cuda-version=12.2</span></span>
<span class="line"><span>（从 RAPIDS/NVIDIA 的 Conda 仓库中，安装与 CUDA 12.2 兼容的 libcuvs 库及其依赖 到当前激活的 Conda 环境中）</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>下面这个从cuvs里面获取</span></span>
<span class="line"><span>https://github.com/rapidsai/cuvs/blob/branch-25.08/conda/environments/all_cuda-128_arch-x86_64.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>conda env create --name cuvs -f conda/environments/all_cuda-122_arch-x86_64.yaml</span></span>
<span class="line"><span>conda activate cuvs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后在conda里面按要求下载更新 cmake</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /home/bzhang/miniconda3/envs/cuvs</span></span>
<span class="line"><span>mkdir bzhang_code</span></span>
<span class="line"><span>然后将 自己写的模版给传过来：</span></span>
<span class="line"><span>记得更改CMakeLists里面的 cuda-12.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用代码" tabindex="-1"><a class="header-anchor" href="#三、使用代码"><span>三、使用代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>一定要记得激活conda</span></span>
<span class="line"><span></span></span>
<span class="line"><span>conda activate cuvs</span></span>
<span class="line"><span>cd /build</span></span>
<span class="line"><span>make -j</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7))])}const g=d(v,[["render",m]]),k=JSON.parse('{"path":"/logs/C-Conda_Docker/B-cuVS.html","title":"B-cuVS","lang":"zh-CN","frontmatter":{"date":"2024-10-24T00:00:00.000Z","category":["小技术","cuVS"],"tag":["小技术","cuVS"],"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"一、首先下载miniconda","slug":"一、首先下载miniconda","link":"#一、首先下载miniconda","children":[]},{"level":2,"title":"二、在conda中下载cuVS","slug":"二、在conda中下载cuvs","link":"#二、在conda中下载cuvs","children":[]},{"level":2,"title":"三、使用代码","slug":"三、使用代码","link":"#三、使用代码","children":[]}],"git":{"createdTime":1787540590000,"updatedTime":1787540590000,"contributors":[{"name":"z-ben","username":"z-ben","email":"12800262+z-ben@user.noreply.gitee.com","commits":1,"url":"https://github.com/z-ben"}]},"readingTime":{"minutes":0.97,"words":291},"filePathRelative":"logs/C-Conda&Docker/B-cuVS.md","localizedDate":"2024年10月24日"}');export{g as comp,k as data};
