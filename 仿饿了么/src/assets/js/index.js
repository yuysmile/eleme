    new Vue({
        el:'#app',
        data:{
            input: '',
            items: [
              { name: '首页' },
              { name: '社会招聘', },
              { name: '实习生招聘' },
              { name: '校园招聘' },
              { name: '公司介绍' },
              { name: '个人中心' },
              { name: '登陆' }
            ],
            posts: [
              { name: '数据分析师' ,address:'北京',num:3,time:'2017-09-04'},
              { name: '客服专员' ,address:'上海',num:1,time:'2017-04-7'},
              { name: '市场推广专员' ,address:'杭州',num:2,time:'2017-06-14'},
              { name: '数品牌设计师助理' ,address:'深圳',num:4,time:'2017-02-04'},
              { name: '创意设计师助理' ,address:'北京',num:1,time:'2017-03-04'},
              { name: '运营设计师助理' ,address:'北京',num:1,time:'2017-04-04'},
              { name: 'DAS系统方向' ,address:'杭州',num:2,time:'2017-09-05'},
              { name: '行政助理' ,address:'深圳',num:5,time:'2017-08-04'},
              { name: '人力资源助理' ,address:'广州',num:2,time:'2017-07-04'},
              { name: 'Java工程师' ,address:'上海',num:2,time:'2017-06-04'},
              { name: '全栈工程师' ,address:'深圳',num:1,time:'2017-05-04'},
              { name: '数据工程师' ,address:'北京',num:2,time:'2017-06-04'},
              { name: '算法工程师' ,address:'上海',num:3,time:'2017-07-04'},
              { name: 'Python工程师' ,address:'北京',num:3,time:'2017-09-04'}
            ]
        },
        methods: {
            showrightbar:function(){
                $('.rightnav').animate({width: 'toggle'},'fast'); 
            },

            querySearchAsync(queryString, cb) {
              var restaurants = this.restaurants;
              var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

              clearTimeout(this.timeout);
              this.timeout = setTimeout(() => {
                cb(results);
              }, 3000 * Math.random());
            },

            handleSelect(item) {
              console.log(item);
            }
          },
    })


 

