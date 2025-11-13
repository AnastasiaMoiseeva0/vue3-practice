const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'Это из свойства template'
        }
    },
    // template: `
    //     <div class="card center" id="app">
    //         <h1>{{title}}</h1>
    //         <button class="btn" @click="title = 'Изменили!'">Изменить</button>
    //     </div>
    // 
    methods: {
        changeTitle() {
            this.title = 'Изменили!'
        }
    },
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn',
                onClick: this.changeTitle
            }, 'Изменить')
        ])
    },
    beforeCreate() {
        console.log('beforeCreated')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    beforeUpdate() {

    },
    updated() {

    }
})

app.mount('#app');

Vue.createApp({
    data() {
        return {
            title: 'Это из свойства template'
        }
    },
    methods: {
        changeTitle() {
            console.log(this)
            this.title = "Изменили!"
        }
    }
}).mount('#app2')