var data = [
    {
        id: 1,
        title: "Wake up"
    },
    {
        id: 2,
        title: "Have Breakfast"
    },
    {
        id: 3,
        title: "Go to work"
    },
    {
        id: 4,
        title: "Have lunch"
    }
];
var len = data.length;

var app = new Vue({
    el: "#app",
    data: {
        message: "Hello VueJS",
        name: "other",
        numbers: [1,2,3,4,5,6],
        newTodoText: '',
        todos: data,
        count: 0,
        isDisabled: false
    },
    methods: {
        openURL: function(){
            window.open('https://www.facebook.com');
        },
        addNewTodo: function(){
            this.todos.push({
                id: ++len,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        removeTodo: function(index){
            this.todos.splice(index, 1);
        },
        countNumber: function(){
            this.count++;
            if(this.count === 10)
                this.isDisabled = true;
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

console.log(typeof app.todos);
