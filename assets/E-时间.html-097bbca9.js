import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,d as l,a as n,e as t,w as e,b as s,f as u}from"./app-2a2d189a.js";const r={},d=n("h1",{id:"e-时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#e-时间","aria-hidden":"true"},"#"),s(" E-时间")],-1),m=n("p",null,"E-时间",-1),k={class:"table-of-contents"},v=u(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><ul><li>====</li><li></li><li></li></ul><br><h2 id="二、时间戳转换" tabindex="-1"><a class="header-anchor" href="#二、时间戳转换" aria-hidden="true">#</a> 二、时间戳转换</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
datetime<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>cur_time_z<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span>

time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>cur_time_z<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span>


ta <span class="token operator">=</span> time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>cur_time_z<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span>
ya<span class="token punctuation">,</span> ma<span class="token punctuation">,</span> da<span class="token punctuation">,</span> Ha<span class="token punctuation">,</span> Ma<span class="token punctuation">,</span> Sa <span class="token operator">=</span> ta<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>

关于转换时间戳的

ta <span class="token operator">=</span> time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>cur_time<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span>、

otherStyleTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> timeArray<span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,6);function _(h,b){const a=o("router-link");return p(),c("div",null,[d,m,l(" more "),n("nav",k,[n("ul",null,[n("li",null,[t(a,{to:"#一、简单介绍"},{default:e(()=>[s("一、简单介绍")]),_:1})]),n("li",null,[t(a,{to:"#二、时间戳转换"},{default:e(()=>[s("二、时间戳转换")]),_:1})])])]),v])}const g=i(r,[["render",_],["__file","E-时间.html.vue"]]);export{g as default};
