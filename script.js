var app1 = new Vue({
    el: "#reverseMessage",
    data: {
        message: ""
    },
    methods: {
        openURL: function(){
            window.open('https://www.facebook.com');
        }
    },
    computed: {
        styleObj: function(){
            return {
                color: 'red',
                border: '1px solid red'
            }
        }
    }
})

console.log(app1);

// var app6 = new Vue({
//     el: '#app-6',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })