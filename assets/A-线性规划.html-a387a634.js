import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,d as l,a as n,e as p,w as t,b as s,f as i}from"./app-2a2d189a.js";const k={},r=n("h1",{id:"a-线性规划",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-线性规划","aria-hidden":"true"},"#"),s(" A-线性规划")],-1),b=n("p",null,"A-线性规划",-1),m={class:"table-of-contents"},d=i(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><ul><li></li></ul><br><h2 id="二、注意事项" tabindex="-1"><a class="header-anchor" href="#二、注意事项" aria-hidden="true">#</a> 二、注意事项</h2><ul><li>matlab有规定形式：1： min 2： &lt;= 3： lb&lt;=x&lt;=ub</li><li>线性规划一般:列目标函数，方程式等等</li><li>规定标准形式 比如： Ax&gt;=b 转化为 -Ax&lt;= -b 都转化为 &lt;= 且都要转化为 最小值。</li><li>函数形式：linprog(c,A,b); 要了解 这个函数形式的内的 各个参数所表示的意思才行。<br><br></li></ul><h2 id="三、方法步骤" tabindex="-1"><a class="header-anchor" href="#三、方法步骤" aria-hidden="true">#</a> 三、方法步骤</h2><br><h2 id="四、模型方程建立与求解" tabindex="-1"><a class="header-anchor" href="#四、模型方程建立与求解" aria-hidden="true">#</a> 四、模型方程建立与求解</h2><br><h2 id="五、案例分析" tabindex="-1"><a class="header-anchor" href="#五、案例分析" aria-hidden="true">#</a> 五、案例分析</h2><h3 id="规定" tabindex="-1"><a class="header-anchor" href="#规定" aria-hidden="true">#</a> 规定</h3><div class="language-matlab line-numbers-mode" data-ext="matlab"><pre class="language-matlab"><code><span class="token comment">%规定 </span>
min 列向量 c  x
s<span class="token punctuation">.</span>t<span class="token punctuation">.</span><span class="token operator">:</span>

<span class="token number">1</span><span class="token operator">:</span>Ax<span class="token operator">&lt;=</span>b   <span class="token number">2</span><span class="token operator">:</span>Aeq<span class="token operator">*</span>x<span class="token operator">=</span>beq   <span class="token number">3</span><span class="token operator">:</span>lb<span class="token operator">&lt;=</span>x<span class="token operator">&lt;=</span>ub
c<span class="token punctuation">,</span>x<span class="token punctuation">,</span>b<span class="token punctuation">,</span>beq<span class="token punctuation">,</span>lb<span class="token punctuation">,</span>ub<span class="token punctuation">,</span>均为列向量    A  Aeq 为矩阵
先写出来 标准形式：  		<span class="token comment">%c是目标</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span>fval<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>A<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">%A ,b 是不等式约束</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span>fval<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>Aeq<span class="token punctuation">,</span>beq<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">% Aeq，beq 等式约束</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span>fval<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>Aeq<span class="token punctuation">,</span>beq<span class="token punctuation">,</span>lb<span class="token punctuation">,</span>ub<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">%界限</span>

c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">;</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span>
A<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
b<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
Aeq<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>beq<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>
lb<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">%记得列向量   和矩阵</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span>fval<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span><span class="token operator">-</span>c<span class="token punctuation">,</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>Aeq<span class="token punctuation">,</span>beq<span class="token punctuation">,</span>lb<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">%界限</span>
x<span class="token punctuation">,</span>fval<span class="token operator">=</span><span class="token operator">-</span>fval



clc<span class="token punctuation">,</span>clear<span class="token punctuation">;</span>
a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>hold on <span class="token comment">%保留原图像</span>
c<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">0.05</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">0.27</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">0.19</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">0.185</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">0.185</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
Aeq<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.01</span><span class="token punctuation">,</span><span class="token number">1.02</span><span class="token punctuation">,</span><span class="token number">1.045</span><span class="token punctuation">,</span><span class="token number">1.065</span><span class="token punctuation">]</span><span class="token punctuation">;</span>beq<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
A<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.025</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.015</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.055</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.026</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
lb<span class="token operator">=</span><span class="token function">zeros</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> a<span class="token operator">&lt;</span><span class="token number">0.05</span>
    b<span class="token operator">=</span><span class="token function">ones</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>x<span class="token punctuation">,</span>fval<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>Aeq<span class="token punctuation">,</span>beq<span class="token punctuation">,</span>lb<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    fval<span class="token operator">=</span><span class="token operator">-</span>fval<span class="token punctuation">;</span>
    <span class="token function">plot</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>fval<span class="token punctuation">,</span><span class="token string">&#39;*k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token operator">=</span>a<span class="token operator">+</span><span class="token number">0.001</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><div class="language-matlab line-numbers-mode" data-ext="matlab"><pre class="language-matlab"><code>c<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">;</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
A<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token number">3</span> <span class="token number">2</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
b<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">;</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>x z<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span><span class="token operator">-</span>A<span class="token punctuation">,</span><span class="token operator">-</span>b<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token function">zeros</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

c<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
A <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token number">3</span> <span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">;</span><span class="token number">3</span> <span class="token number">2</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
b<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">;</span><span class="token number">42</span><span class="token punctuation">;</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
lb<span class="token operator">=</span><span class="token function">zeros</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">%下界限制</span>
<span class="token punctuation">[</span>x z<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>lb<span class="token punctuation">)</span>

c<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">;</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
A<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">-</span><span class="token number">5</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
b<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
aeq<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>beq<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">%等式</span>
lb<span class="token operator">=</span><span class="token function">zeros</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>x z<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">linprog</span><span class="token punctuation">(</span><span class="token operator">-</span>c<span class="token punctuation">,</span><span class="token operator">-</span>A<span class="token punctuation">,</span><span class="token operator">-</span>b<span class="token punctuation">,</span>aeq<span class="token punctuation">,</span>beq<span class="token punctuation">,</span>lb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,15);function v(h,f){const a=e("router-link");return c(),u("div",null,[r,b,l(" more "),n("nav",m,[n("ul",null,[n("li",null,[p(a,{to:"#一、简单介绍"},{default:t(()=>[s("一、简单介绍")]),_:1})]),n("li",null,[p(a,{to:"#二、注意事项"},{default:t(()=>[s("二、注意事项")]),_:1})]),n("li",null,[p(a,{to:"#三、方法步骤"},{default:t(()=>[s("三、方法步骤")]),_:1})]),n("li",null,[p(a,{to:"#四、模型方程建立与求解"},{default:t(()=>[s("四、模型方程建立与求解")]),_:1})]),n("li",null,[p(a,{to:"#五、案例分析"},{default:t(()=>[s("五、案例分析")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#规定"},{default:t(()=>[s("规定")]),_:1})]),n("li",null,[p(a,{to:"#案例"},{default:t(()=>[s("案例")]),_:1})])])])])]),d])}const A=o(k,[["render",v],["__file","A-线性规划.html.vue"]]);export{A as default};
