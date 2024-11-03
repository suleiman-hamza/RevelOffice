<template>
    <section class="collections">
        <div class="title">
        <h3>Our Collections</h3>
        <hr class="hre">
        </div>
        <div class="all-collection">
        <article class="collection" v-for="(item, index) in store.items">
            <img src="@/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png" height="300" width="200">
            <hr>
            <div class="detail">
            <div>
                <h4>{{ item.name }}</h4>
                <h5>{{ item.price }} USD</h5>
            </div>
            <Button @click="store.addStuff(item)">Cart</Button>
            </div>
        </article>
        <RouterView />
        </div>
    </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/cartStore';
const store = useStore();

</script>

<style scoped>
.collections {
  padding: 1rem;
  background-color: rgb(216, 216, 216, 0.281);
}
.title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h3 {
    white-space: nowrap;
  }

  .hre {
    width: 100%;
    height: 2px;
    border: none;
    background-color: grey;
    border-radius: 10px;
}
}

.collection {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #ffffffe8;
  max-width: 400px;
  margin-inline: auto;
  margin-bottom: 1rem;
  border-radius: 10px;

  img {
    margin-inline: auto;
  }
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

hr {
    background-color: brown;
    height: 2px;
    width: 100%;
}
</style>