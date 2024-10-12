import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as a,c as s,d as p,a as l,e as t,w as r,b as i,f as d}from"./app-2a2d189a.js";const c={},h=l("h1",{id:"d-内在维度",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#d-内在维度","aria-hidden":"true"},"#"),i(" D-内在维度")],-1),u=l("p",null,"D-内在维度",-1),_=l("div",{class:"hint-container info"},[l("p",{class:"hint-container-title"},"相关信息"),l("ul",null,[l("li",null,"主要的一些向量检索中的内在维度的东西；"),l("li",null,"关于内在维度，可能要先了解一下 PCA降维这些东西；")])],-1),g={class:"table-of-contents"},C=d('<h2 id="一、简单介绍lid" tabindex="-1"><a class="header-anchor" href="#一、简单介绍lid" aria-hidden="true">#</a> 一、简单介绍LID</h2><p>一个数据集的局部本征维度（Local Intrinsic Dimensionality，LID）是描述数据集特性的一个指标。</p><p><strong>1、内在维度的含义</strong></p><p>LID 值较大意味着该数据集“更难”。具体来说，较高的 LID 值可能表明数据在高维空间中的分布更加复杂、分散，或者数据的结构更加难以捕捉和建模。例如，在高维空间中，数据点之间的距离可能变得难以衡量，传统的距离度量方法可能不再适用。</p><p><strong>2、对数据集的影响</strong></p><ol><li><p><strong>索引构建方面</strong>：</p><ul><li><strong>影响索引构建效率</strong>：高 LID 值的数据集可能需要更多的计算资源和时间来构建索引。这是因为数据的复杂性增加，算法需要更多的步骤来分析和组织数据，以便构建有效的索引结构。</li><li><strong>影响索引大小</strong>：高 LID 值的数据集可能导致索引更大。为了准确地表示复杂的数据结构，索引可能需要存储更多的信息，从而增加了索引的大小。</li></ul></li><li><p><strong>搜索方面</strong>：</p><ul><li><strong>搜索效率</strong>：在搜索过程中，高 LID 值的数据集可能会降低搜索效率。由于数据的复杂性，算法可能需要进行更多的距离计算和比较，以找到最近邻。这会导致搜索时间增加，从而降低每秒查询数（QPS）和加速比。</li><li><strong>搜索准确性</strong>：高 LID 值的数据集可能会降低搜索的准确性。数据的复杂性使得准确确定最近邻变得更加困难，可能导致召回率降低。</li><li><strong>其他指标</strong>：高 LID 值的数据集可能会增加搜索期间的候选集大小和平均查询路径长度。这是因为算法需要考虑更多的数据点来找到最近邻，从而增加了搜索的复杂性。</li></ul></li></ol><h2 id="二、关于pca" tabindex="-1"><a class="header-anchor" href="#二、关于pca" aria-hidden="true">#</a> 二、关于PCA</h2><ul><li><p>PCA全名principal component analysis，即主成分分析，听起来倒是非常的简单清爽，但是这主成分三个字里可是大有玄机。简单地说，主成分分析是一组变量通过正交变换转变成另一组变量的分析方法，来实现数据降维的目的。转换后得到的这一组变量，即是我们所说的主成分。</p></li><li><p>降维？降维又是什么？降维打击？可能直接上概念比较抽象，那么我们先来举个栗子。比方说，我们手里有一组重测序得到的变异数据，有n个突变位点，或者有一组转录组表达量数据，有n个转录本的表达量信息。那么我们就相当于有了一组n个变量，这个n可能非常大，可能随随便便就上万，甚至十万百万。想要直接比较两个或多个数据，显然就十分困难。而经过主成分分析，这样一组包含n个变量的数据经过转换变成了一组包含r个变量的数据，其中<code>r&lt;n</code>，</p></li><li><p>这样的过程即是降维，得到即是r个主成分。这r个主成分会依据方差的大小进行排序，称作主成分（PC）1、主成分2、……主成分r。而每个主成分的方差在这一组变量中的总方差中所占的比例，即是主成分的贡献度。通常来说，我们仅考察贡献度前2或者前3的主成分，经过可视化后，即得到了二维或三维PCA散点图。可能看到这里你会问，这个过程我明白了，但是为什么较多的变量经过数据变换之后变成了较少的几个变量呢？这不是会有大量的信息丢失掉吗？如果你考虑到这个问题，那么恭喜，这说明你对主成分分析的思考已经很深了。在我们最开始得到的一组变量中，变量之间并不是完全相互独立的。例如我们一个位点发生了变异，那么与之连锁的几个位点也大概率会发生变异；或者一个基因的表达量发生了变化，同一条通路中的其他基因的表达量也大概率会发生变化，即变量之间是存在相关性的。极端一点，假设两个位点完全连锁，那么我们去掉其中一个突变的所有信息，并不会影响总的信息含量。主成分分析也即是基于这样一种思想开展的，将变量之间根据相关性进行分解、合并和降维，<mark>类似于从n维空间到r维空间的投影</mark>。如果对具体的计算方法感兴趣，有很多相关的资料可供参考，当然也有很多工具可以方便我们直接对数据进行主成分分析。那么具体到我们的报告当中，PCA图又说明了什么问题呢？</p></li><li><p>每一个主成分都是原始向量某几个维度的线性组合吗？<br> 是的，每一个主成分确实是原始向量中某几个维度的线性组合，并且这种组合方式是为了最大化方差。</p></li><li><p>主成分分析（PCA）的数学原理：</p><ul><li>数据标准化：PCA通常从数据标准化开始，以确保每个特征（维度）具有零均值和单位方差。</li><li>协方差矩阵：计算标准化数据的协方差矩阵，以确定特征之间的关系。</li><li>特征值和特征向量：对协方差矩阵进行特征分解，得到一组特征值和对应的特征向量。特征值表示该特征向量方向上的方差大小，而特征向量则指示了数据在该方向上的分布情况。</li><li>选择主成分：按照特征值从大到小的顺序选择前k个特征向量，这些向量被称为主成分。选择的主成分能够解释数据方差的最大部分。</li><li>构造新特征空间：原始数据被投影到这些选定的主成分上，生成新的降维数据集。</li><li>主成分的线性组合：每个主成分都是原始数据集中所有特征的线性组合，其系数由特征向量给出。具体来说：</li><li>特征向量：每个特征向量都是一个权重向量，指示了在形成该主成分时每个原始特征的<mark>相对重要性</mark></li><li>线性组合：每个主成分可以表示为所有原始特征与其对应的特征向量权重的乘积之和。</li></ul></li></ul><h2 id="三、pca估算lid" tabindex="-1"><a class="header-anchor" href="#三、pca估算lid" aria-hidden="true">#</a> 三、PCA估算LID</h2><p>通过PCA（主成分分析）来估计数据集的内在维度，主要涉及以下步骤：</p><ol><li><p><strong>数据标准化</strong>：首先对数据进行标准化处理，确保每个特征的均值为0，标准差为1，这样做是为了消除原始数据中不同特征量纲和数值范围的影响。</p></li><li><p><strong>构建协方差矩阵</strong>：计算数据的协方差矩阵，以确定数据特征间的线性关联。</p></li><li><p><strong>计算特征值和特征向量</strong>：对协方差矩阵进行特征值分解，得到一组特征值和对应的特征向量。特征值表示每个特征向量的方差，而特征向量表示主成分的方向。</p></li><li><p><strong>选择主成分</strong>：根据特征值的大小，选择前几个最大的特征值对应的特征向量作为主成分。这些主成分能够解释数据大部分的方差。</p></li><li><p><strong>累计贡献率</strong>：计算每个主成分的方差贡献率，并累加。累计贡献率达到某个阈值（如90%或95%）时，所选择的主成分数量可以视为数据的内在维度。</p></li><li><p><strong>降维</strong>：将数据投影到选定的主成分上，得到降维后的数据集。</p></li></ol><ul><li><p>通过这个过程，PCA帮助我们找到数据的主要成分，这些成分捕捉了数据集中最重要的变异性。内在维度通常是指累计贡献率达到一个较高值（例如95%）时的主成分数量。这意味着这些主成分能够代表原始数据集中大部分的信息，而不需要使用所有的特征。</p></li><li><p>在实际应用中，可以通过观察PCA的方差解释率（即特征值）来确定数据的内在维度。通常，我们会选择那些解释了大部分方差的主成分，而忽略那些贡献较小的主成分。例如，如果我们选择的主成分能够解释总方差的95%，那么这些主成分的数量就可以被认为是数据的内在维度。</p></li><li><p>值得注意的是，PCA是一种线性降维技术，它假设数据的主要成分是线性的。对于非线性关系的数据，PCA可能不是最佳选择。此外，PCA对异常值也比较敏感，因此在应用PCA之前，通常需要对数据进行适当的预处理。</p></li></ul><h2 id="四、疑问" tabindex="-1"><a class="header-anchor" href="#四、疑问" aria-hidden="true">#</a> 四、疑问</h2><ul><li>目前解决的都算 是内在维度 较小的; 如果大的话 邻居的邻居可能不是邻居;（基于图的结构）？？？？</li></ul>',14);function f(m,P){const n=e("router-link");return a(),s("div",null,[h,u,p(" more "),_,l("nav",g,[l("ul",null,[l("li",null,[t(n,{to:"#一、简单介绍lid"},{default:r(()=>[i("一、简单介绍LID")]),_:1})]),l("li",null,[t(n,{to:"#二、关于pca"},{default:r(()=>[i("二、关于PCA")]),_:1})]),l("li",null,[t(n,{to:"#三、pca估算lid"},{default:r(()=>[i("三、PCA估算LID")]),_:1})]),l("li",null,[t(n,{to:"#四、疑问"},{default:r(()=>[i("四、疑问")]),_:1})])])]),C])}const I=o(c,[["render",f],["__file","D-内在维度.html.vue"]]);export{I as default};
