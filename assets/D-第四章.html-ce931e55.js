const l=JSON.parse('{"key":"v-d7d9827a","path":"/article/CUDA/B-CUDAc-Programming/D-%E7%AC%AC%E5%9B%9B%E7%AB%A0.html","title":"D-第四章节","lang":"zh-CN","frontmatter":{"date":"2024-05-31T00:00:00.000Z","category":["C++","CUDA开启的GPU编程"],"tag":["C++","CUDA开启的GPU编程"],"seo":false,"head":[]},"headers":[{"level":2,"title":"简单介绍主要是基础","slug":"简单介绍主要是基础","link":"#简单介绍主要是基础","children":[]},{"level":2,"title":"第4章 全局内存","slug":"第4章-全局内存","link":"#第4章-全局内存","children":[]},{"level":2,"title":"4.1 CUDA内存模型概述","slug":"_4-1-cuda内存模型概述","link":"#_4-1-cuda内存模型概述","children":[{"level":3,"title":"4.1.1 内存层次结构的优点","slug":"_4-1-1-内存层次结构的优点","link":"#_4-1-1-内存层次结构的优点","children":[]},{"level":3,"title":"4.1.2 CUDA内存模型","slug":"_4-1-2-cuda内存模型","link":"#_4-1-2-cuda内存模型","children":[]},{"level":3,"title":"4.1.2.1 寄存器[重点]","slug":"_4-1-2-1-寄存器-重点","link":"#_4-1-2-1-寄存器-重点","children":[]},{"level":3,"title":"4.1.2.2 本地内存","slug":"_4-1-2-2-本地内存","link":"#_4-1-2-2-本地内存","children":[]},{"level":3,"title":"4.1.2.3 共享内存","slug":"_4-1-2-3-共享内存","link":"#_4-1-2-3-共享内存","children":[]},{"level":3,"title":"4.1.2.4 常量内存","slug":"_4-1-2-4-常量内存","link":"#_4-1-2-4-常量内存","children":[]},{"level":3,"title":"4.1.2.5 纹理内存","slug":"_4-1-2-5-纹理内存","link":"#_4-1-2-5-纹理内存","children":[]},{"level":3,"title":"4.1.2.6 全局内存","slug":"_4-1-2-6-全局内存","link":"#_4-1-2-6-全局内存","children":[]},{"level":3,"title":"4.1.2.7 GPU缓存","slug":"_4-1-2-7-gpu缓存","link":"#_4-1-2-7-gpu缓存","children":[]},{"level":3,"title":"4.1.2.8 CUDA变量声明总结","slug":"_4-1-2-8-cuda变量声明总结","link":"#_4-1-2-8-cuda变量声明总结","children":[]},{"level":3,"title":"4.1.2.9 静态全局内存","slug":"_4-1-2-9-静态全局内存","link":"#_4-1-2-9-静态全局内存","children":[]}]},{"level":2,"title":"4.2 内存管理","slug":"_4-2-内存管理","link":"#_4-2-内存管理","children":[{"level":3,"title":"4.2.1 内存分配和释放","slug":"_4-2-1-内存分配和释放","link":"#_4-2-1-内存分配和释放","children":[]},{"level":3,"title":"4.2.2 内存传输","slug":"_4-2-2-内存传输","link":"#_4-2-2-内存传输","children":[]},{"level":3,"title":"4.2.3 固定内存","slug":"_4-2-3-固定内存","link":"#_4-2-3-固定内存","children":[]},{"level":3,"title":"4.2.4 零拷贝内存","slug":"_4-2-4-零拷贝内存","link":"#_4-2-4-零拷贝内存","children":[]},{"level":3,"title":"4.2.5 统一虚拟寻址","slug":"_4-2-5-统一虚拟寻址","link":"#_4-2-5-统一虚拟寻址","children":[]},{"level":3,"title":"4.2.6 统一内存寻址","slug":"_4-2-6-统一内存寻址","link":"#_4-2-6-统一内存寻址","children":[]}]},{"level":2,"title":"4.3 内存访问模式","slug":"_4-3-内存访问模式","link":"#_4-3-内存访问模式","children":[{"level":3,"title":"4.3.1 对齐与合并访问","slug":"_4-3-1-对齐与合并访问","link":"#_4-3-1-对齐与合并访问","children":[]},{"level":3,"title":"4.3.2 全局内存读取","slug":"_4-3-2-全局内存读取","link":"#_4-3-2-全局内存读取","children":[]},{"level":3,"title":"4.3.2.1 缓存加载","slug":"_4-3-2-1-缓存加载","link":"#_4-3-2-1-缓存加载","children":[]},{"level":3,"title":"4.3.2.2 没有缓存的加载","slug":"_4-3-2-2-没有缓存的加载","link":"#_4-3-2-2-没有缓存的加载","children":[]},{"level":3,"title":"4.3.2.3 非对齐读取的示例","slug":"_4-3-2-3-非对齐读取的示例","link":"#_4-3-2-3-非对齐读取的示例","children":[]},{"level":3,"title":"4.3.2.4 只读缓存","slug":"_4-3-2-4-只读缓存","link":"#_4-3-2-4-只读缓存","children":[]},{"level":3,"title":"4.3.3 全局内存写入","slug":"_4-3-3-全局内存写入","link":"#_4-3-3-全局内存写入","children":[]},{"level":3,"title":"4.3.4 结构体数组与数组结构体","slug":"_4-3-4-结构体数组与数组结构体","link":"#_4-3-4-结构体数组与数组结构体","children":[]},{"level":3,"title":"4.3.4.1 示例：使用AoS数据布局的简单数学运算","slug":"_4-3-4-1-示例-使用aos数据布局的简单数学运算","link":"#_4-3-4-1-示例-使用aos数据布局的简单数学运算","children":[]},{"level":3,"title":"4.3.4.2 示例：使用SoA数据布局的简单数学运算","slug":"_4-3-4-2-示例-使用soa数据布局的简单数学运算","link":"#_4-3-4-2-示例-使用soa数据布局的简单数学运算","children":[]},{"level":3,"title":"4.3.5 性能调整","slug":"_4-3-5-性能调整","link":"#_4-3-5-性能调整","children":[]},{"level":3,"title":"4.3.5.1 展开技术","slug":"_4-3-5-1-展开技术","link":"#_4-3-5-1-展开技术","children":[]},{"level":3,"title":"4.3.5.2 增大并行性","slug":"_4-3-5-2-增大并行性","link":"#_4-3-5-2-增大并行性","children":[]}]},{"level":2,"title":"4.4 核函数可达到的带宽","slug":"_4-4-核函数可达到的带宽","link":"#_4-4-核函数可达到的带宽","children":[{"level":3,"title":"4.4.1 内存带宽","slug":"_4-4-1-内存带宽","link":"#_4-4-1-内存带宽","children":[]},{"level":3,"title":"4.4.2 矩阵转置问题","slug":"_4-4-2-矩阵转置问题","link":"#_4-4-2-矩阵转置问题","children":[]},{"level":3,"title":"4.4.2.1 为转置核函数设置性能的上限和下限","slug":"_4-4-2-1-为转置核函数设置性能的上限和下限","link":"#_4-4-2-1-为转置核函数设置性能的上限和下限","children":[]},{"level":3,"title":"4.4.2.2 朴素转置：读取行与读取列","slug":"_4-4-2-2-朴素转置-读取行与读取列","link":"#_4-4-2-2-朴素转置-读取行与读取列","children":[]},{"level":3,"title":"4.4.2.3 展开转置：读取行与读取列","slug":"_4-4-2-3-展开转置-读取行与读取列","link":"#_4-4-2-3-展开转置-读取行与读取列","children":[]},{"level":3,"title":"4.4.2.4 对角转置：读取行与读取列","slug":"_4-4-2-4-对角转置-读取行与读取列","link":"#_4-4-2-4-对角转置-读取行与读取列","children":[]},{"level":3,"title":"4.4.2.5 使用瘦块来增加并行性","slug":"_4-4-2-5-使用瘦块来增加并行性","link":"#_4-4-2-5-使用瘦块来增加并行性","children":[]}]},{"level":2,"title":"4.5 使用统一内存的矩阵加法","slug":"_4-5-使用统一内存的矩阵加法","link":"#_4-5-使用统一内存的矩阵加法","children":[]},{"level":2,"title":"4.6 总结","slug":"_4-6-总结","link":"#_4-6-总结","children":[]},{"level":2,"title":"4.7 习题","slug":"_4-7-习题","link":"#_4-7-习题","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":96.49,"words":28948},"filePathRelative":"article/CUDA/B-CUDAc-Programming/D-第四章.md","localizedDate":"2024年5月31日"}');export{l as data};
