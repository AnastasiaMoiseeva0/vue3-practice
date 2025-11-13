const App = {
    data: () => ({
        myHtml: '<h1>Vue3 App</h1>',
        title: 'Заголовок',
        items: [1, 2]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log(item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}

Vue.createApp(App).mount('#app');