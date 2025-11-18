<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <async-component></async-component>
        <h2>Динамические и асинхронные компоненты</h2>
        <app-button
          :color="oneColor"
          @action="active = 'one'"
          >One</app-button
        >
        <app-button
          :color="twoColor"
          @action="active = 'two'"
          >Two</app-button
        >
      </div>
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppTextOne from './AppTextOne.vue'
import AppTextTwo from './AppTextTwo.vue'

export default {
  data () {
    return {
      active: 'one'
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.componentName = 'new comp name'
    // }, 1500)
  },
  methods: {
  },
  computed: {
    // componentName () {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {
        console.log('componentName', value)
      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  }
}
</script>

<style scoped>
</style>
