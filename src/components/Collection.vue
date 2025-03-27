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
                <h5>${{ item.price }} USD</h5>
            </div>
            <Button @click="store.addStuff(item)"
            variant="outline"
            class="addbtn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Button>
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
.addbtn {
    display: flex;
    place-items: center;
    padding: 0.4rem;
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
    border: none;
    /* background-color: grey; */
    border-radius: 10px;
    border-top: 2px solid #e0e0e0; /* Soft grey color */
    margin: 1rem 0;
}
hr {
  border: none;
    border-top: 1px solid #e0e0e0; /* Soft grey color */
    margin: 1rem 0;
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

  h4 {
    font-weight: 500;
  }
  h5 {
    color: #aca9a9;
  }
}
</style>