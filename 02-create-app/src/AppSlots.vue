<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Slots</h2>
      </div>
      <app-list>
        <template #default="{idx, iter}">
          <span style="color: red">
            <strong>{{idx + 1}}</strong>
            Item: {{iter}}</span>
        </template>
      </app-list>
      <app-block>
        <p>Это самый важный текст для нового блока</p>
        <template v-slot:header>
         <h3>Это заголовок!</h3>
        </template>
        <template #footer>
          <hr />
          <small>Footer</small>
        </template>
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from './AppBlock.vue'
import AppList from './AppList.vue'

export default {
  components: {
    AppBlock,
    AppList
  }
}
</script>

<style scoped>

</style>
