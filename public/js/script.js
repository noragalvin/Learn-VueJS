var app = new Vue({
    el: "#app",
    data: {
        message: "Hello VueJS",
        name: "other",
        numbers: [1,2,3,4,5,6]
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
        },
        reverseMessage: function(){
            return this.message.split(' ').reverse().join(' ');
        }
    }
})

console.log(app);

// var app6 = new Vue({
//     el: '#app-6',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })