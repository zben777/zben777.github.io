import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as s,d,a as e,e as l,w as t,b as a,f as c}from"./app-2a2d189a.js";const h={},_=e("h1",{id:"b-主成分分析-因子分析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b-主成分分析-因子分析","aria-hidden":"true"},"#"),a(" B-主成分分析 因子分析")],-1),u=e("p",null,"B-主成分分析 因子分析",-1),b={class:"table-of-contents"},f=c(`<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><ul><li>思想是运用较少的变量去解释原始数据中的大部分变异，通过对原始数据相关矩阵内部结构关系的分析和计算，产生一系列互不相关的新变量。根据需要从中选取比原始变量个数少的几个新变量，这些新的变量就是所谓的主成分</li><li>步骤：原始数据（X1,X2,⋯⋯, Xn）标准化，建立变量的相关系数阵，计算特征根和相应的特征向量，确定主成分的个数k（k&lt;n），建立主成分（F1,F2,⋯⋯, Fk）的表达式，建立综合指标F的表达式。<br><br></li></ul><h2 id="二、注意事项" tabindex="-1"><a class="header-anchor" href="#二、注意事项" aria-hidden="true">#</a> 二、注意事项</h2><ul><li>多个指标 ， 每个指标 都是 数值么？</li><li>是如何通过各个对象在各个指标的数值 进行 打分的？</li><li></li></ul><br><h2 id="三、方法步骤" tabindex="-1"><a class="header-anchor" href="#三、方法步骤" aria-hidden="true">#</a> 三、方法步骤</h2><ol><li><p>读取数据:<br> 数据的形式一般为多个样本的多个指标： 数值的形式，</p></li><li><p>数据标准化<br> 主成分分析的结果直接受指标量纲的影响。由于各指标的单位可能不一样，因此进行量化评分得到的数据值大小也是不同的。如埋深的单位是米，相应指标在0.8到2.0之间，而人口密度指标的数据值在280左右，这样会导致分析结果的不准确。因此数据的标准化是主成分分析的前提条件，所以实际中可以先把各指标的数据标准化。标准化结果保存在data中。（Z-Score标准化是数据处理的一种常用方法。通过它能够将不同量级的数据转化为统一量度的Z-Score分值进行比较。）</p></li><li><p>计算相关系数矩阵<br> 完成数据的标准化后，对所得结果计算得到标准化数据的相关系数矩阵（相关系数矩阵保存在r中）。相关系数代表了不同指标之间的相关程度，绝对值越大代表相关性越高。相关性较高的变量之间存在信息上的重叠，信息重叠在很大程度上会影响评价结果的客观性，因此相关性矩阵可以证明进行主成分分析的必要性。</p></li><li><p>待选主成分<br> 由相关系数矩阵可以计算出特征值与特征向量，计算得到与指标数量n相等的n个待选主成分。n个特征值代表了n个主成分对最终评价结果的贡献程度，特征值保存在lamda中，从大到小排列。主成分的特征向量为n*n的矩阵保存在vec1中，表示主成分和相应的原始数据的相关关系，其绝对值越大，则主成分对该指标的代表性越大。为了方便计算，修改特征向量的正负号，使得每个特征向量的分量和为正，即为最终的特征向量，特征向量保存在vec2中，每一列代表一个特征向量，对应一个主成分。</p></li><li><p>选择最终主成分<br> 在主成分的选取上，对应的特征值大小是一个重要衡量因素，普遍的做法是保存特征值要大于1的主成分，舍弃特征值小于1 的主成分，因此最终的主成分个数会小于指标个数n。也可以根据贡献度大小，累计贡献度达到某个程度，不同标准有70%以上，85%以上或其他。这里选取所有特征值大于1的主成分，选取的主成分个数保存在num中，一共有3个。第1主成分对应的就是vec2中的第一列特征向量，以此类推，具体见下表。</p></li><li><p>得到评分<br> 将<strong>特征贡献率</strong>作为系数，对应的指标作为自变量，可以得出<strong>每一个主成分的计算表达式</strong>。将标准化数据<strong>Xi</strong>代入表达式，就可以得到对应的主成分值带入之前求得的主成分值，得到每个样本的综合评价值（<strong>保存在tf中</strong>）。将综合评价值从高到低排序（<strong>保存在stf中</strong>），并输出对应的样本编号（<strong>保存在ind中</strong>）。</p></li></ol><br><h2 id="四、模型方程建立与求解" tabindex="-1"><a class="header-anchor" href="#四、模型方程建立与求解" aria-hidden="true">#</a> 四、模型方程建立与求解</h2><br><h2 id="五、案例分析" tabindex="-1"><a class="header-anchor" href="#五、案例分析" aria-hidden="true">#</a> 五、案例分析</h2><div class="language-matlab line-numbers-mode" data-ext="matlab"><pre class="language-matlab"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br>`,13);function m(p,g){const r=i("router-link");return o(),s("div",null,[_,u,d(" more "),e("nav",b,[e("ul",null,[e("li",null,[l(r,{to:"#一、简单介绍"},{default:t(()=>[a("一、简单介绍")]),_:1})]),e("li",null,[l(r,{to:"#二、注意事项"},{default:t(()=>[a("二、注意事项")]),_:1})]),e("li",null,[l(r,{to:"#三、方法步骤"},{default:t(()=>[a("三、方法步骤")]),_:1})]),e("li",null,[l(r,{to:"#四、模型方程建立与求解"},{default:t(()=>[a("四、模型方程建立与求解")]),_:1})]),e("li",null,[l(r,{to:"#五、案例分析"},{default:t(()=>[a("五、案例分析")]),_:1})])])]),f])}const k=n(h,[["render",m],["__file","B-主成分分析 因子分析.html.vue"]]);export{k as default};
