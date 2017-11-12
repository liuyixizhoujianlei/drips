    
> list为图片列表快捷设置，如果你需要自定义一些样式，或者内容并不为纯图片，可以引用swiper-item组件来自定义。
    
    list 格式如下 
    [{
        url: '',
        img: '',
        title: ''
    }, {
        url: '',
        img: '',
        title: ''
    }]
    
##### 注意：
**在使用 swiper-item 而非 list 图片列表时，如果只有两项，将无法实现 loop 循环播放.**

***

##### props: [type , default, desc]

1. list  ` [array, null，图片列表]`


    list 格式如下 
    [{
        url: '',
        img: '',
        title: ''
    }, {
        url: '',
        img: '',
        title: ''
    }]
    

2. direction  `[string, horizontal, 轮播方向]`


    direction值
    horizontal   // 左右轮播
    vertical     // 上下轮播

3. show-dots `[bool, true, 是否显示提示点]`

4. show-desc-mask `[bool, false, 是否显示半透明遮罩]`

5. dots-position `[string, right, 提示点位置]`

    
    value:  left | center | right | left-down | right_down | center-down
    // 前三个提示点在图片内部，后三个在图片下方

6. dots-class `[string, null, 提示点的className]`

7. auto `[bool, false, 是否自动轮播]`

8. loop `[bool, false, 是否循环]`

9. interval `[number, 3000, 轮播停留时长]`

10. threshold `[number, 50, 滑动超出这个距离才开始滑动]`

11. duration `[number, 300, 切换动画时间]`

12. height `[string, 180px, 高度值。如果为100%宽度并且知道宽高比，可以设置aspect-ratio自动计算高度]`

13. aspect-ratio `[number, null, 用以根据当前可用宽度计算高度值]`

14. min-moving-distance `[number, 0, 超过这个距离才滑动]`

15. v-model `[number, 0, index绑定，使用v-model，一般不需要绑定]`


***

name | params | description
---|--- | --- | ---
on-index-change | currentIndex | 轮播 index 变化时触发
