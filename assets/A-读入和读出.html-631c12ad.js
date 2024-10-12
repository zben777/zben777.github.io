import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as o,d as i,a as n,e,w as t,b as a,f as d}from"./app-2a2d189a.js";const r={},u=n("h1",{id:"a-读入和读出",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-读入和读出","aria-hidden":"true"},"#"),a(" A-读入和读出")],-1),k=n("p",null,"A-读入和读出",-1),v={class:"table-of-contents"},h=d(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><ul><li>====</li><li></li><li></li></ul><br><h2 id="二、读入excel文件" tabindex="-1"><a class="header-anchor" href="#二、读入excel文件" aria-hidden="true">#</a> 二、读入Excel文件</h2><h3 id="_2-将excel文件读取到pandas-dataframe-中" tabindex="-1"><a class="header-anchor" href="#_2-将excel文件读取到pandas-dataframe-中" aria-hidden="true">#</a> 2：将Excel文件读取到pandas [DataFrame]中</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_excel<span class="token punctuation">(</span>xlsx<span class="token punctuation">)</span>
data<span class="token punctuation">.</span>values  转化为矩阵
所以可以：
<span class="token keyword">for</span> val <span class="token keyword">in</span> data<span class="token punctuation">.</span>values<span class="token punctuation">:</span>
    val：这时候val是矩阵：所以 val<span class="token punctuation">[</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-将读取的比如-012353-读入的时候" tabindex="-1"><a class="header-anchor" href="#_3-将读取的比如-012353-读入的时候" aria-hidden="true">#</a> 3：将读取的比如 012353 读入的时候</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>默认模式读入
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;data.csv&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>

结果 为：<span class="token number">12353</span>

解决方法：
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;data.csv&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span>converters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;基金代码&#39;</span><span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>
得到的结果为： <span class="token number">012353</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-将xls格式转化为csv模式" tabindex="-1"><a class="header-anchor" href="#_4-将xls格式转化为csv模式" aria-hidden="true">#</a> 4： 将xls格式转化为csv模式</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_excel<span class="token punctuation">(</span><span class="token string">&#39;123.xls&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Sheet1&#39;</span><span class="token punctuation">,</span>index_col<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
data<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span><span class="token string">&#39;data.csv&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function m(_,b){const s=l("router-link");return c(),o("div",null,[u,k,i(" more "),n("nav",v,[n("ul",null,[n("li",null,[e(s,{to:"#一、简单介绍"},{default:t(()=>[a("一、简单介绍")]),_:1})]),n("li",null,[e(s,{to:"#二、读入excel文件"},{default:t(()=>[a("二、读入Excel文件")]),_:1}),n("ul",null,[n("li",null,[e(s,{to:"#_2-将excel文件读取到pandas-dataframe-中"},{default:t(()=>[a("2：将Excel文件读取到pandas [DataFrame]中")]),_:1})]),n("li",null,[e(s,{to:"#_3-将读取的比如-012353-读入的时候"},{default:t(()=>[a("3：将读取的比如 012353 读入的时候")]),_:1})]),n("li",null,[e(s,{to:"#_4-将xls格式转化为csv模式"},{default:t(()=>[a("4： 将xls格式转化为csv模式")]),_:1})])])])])]),h])}const g=p(r,[["render",m],["__file","A-读入和读出.html.vue"]]);export{g as default};
