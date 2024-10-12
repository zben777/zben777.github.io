import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as o,d as c,a as e,e as r,w as s,b as l,f as d}from"./app-2a2d189a.js";const _={},u=e("h1",{id:"d-服务器配置cuda",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#d-服务器配置cuda","aria-hidden":"true"},"#"),l(" D-服务器配置CUDA")],-1),h=e("p",null,"D-服务器配置CUDA",-1),m=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("ul",null,[e("li",null,"主要是在Ubuntu服务器上如果已经安装了CUDA驱动以及其它东西的话"),e("li",null,"需要配置环境变量"),e("li",null,"这个东西也在CUDA那个的相关环境配置里面写了更详细")])],-1),f={class:"table-of-contents"},D=d('<h2 id="一、简单介绍" tabindex="-1"><a class="header-anchor" href="#一、简单介绍" aria-hidden="true">#</a> 一、简单介绍</h2><ul><li><mark>配置环境</mark></li><li>假设 服务器上 之前已经 安装了 CUDA，</li><li>然后新开了一个 账户，那么在新的账户上进行 which nvcc 可能是没有的</li><li>那么就需要进行配置下环境就可以了：</li><li>bash</li><li>which nvcc # 确认一下</li><li>export PATH=/usr/local/cuda-12.2/bin:$PATH</li><li>export LD LIBRARY PATH=/usr/local/cuda-12.2/lib64</li><li></li></ul><br>',3);function p(A,C){const t=a("router-link");return n(),o("div",null,[u,h,c(" more "),m,e("nav",f,[e("ul",null,[e("li",null,[r(t,{to:"#一、简单介绍"},{default:s(()=>[l("一、简单介绍")]),_:1})])])]),D])}const U=i(_,[["render",p],["__file","D-服务器配置CUDA.html.vue"]]);export{U as default};
