<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
        <span>Открыто: {{openRate}} | Прочитано: <strong>{{readRate}}</strong></span>
      </div>
        <app-news
          v-for="item in news"
          :key="item.id"
          :title="item.title"
          :id="item.id"
          :is-open="item.isOpen"
          :was-read="item.wasRead"
          @open-news="openRate += 1"
          @read-news="readNews"
          @unmark="unreadNews"
        ></app-news>
    </div>
  </div>
</template>

<script>

import AppNews from './AppNews.vue'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [{
        title: 'News 1',
        id: 1,
        isOpen: false,
        wasRead: false
      },
      {
        title: 'News 2',
        id: 2,
        isOpen: false,
        wasRead: false
      }]
    }
  },
  methods: {
    openNews () {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews (id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: {
    AppNews
  }
}
</script>

<style></style>
