import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'


export const useStore = defineStore('store', () => {

    
const router = useRouter();
    const count = ref(4);
    const items = reactive([
        {
            name: 'Knoll reGeneration FK7',
            price: 480,
            id: 434,
            quantity: 0
        },
        {
            name: 'Furniture Group G20',
            price: 136,
            id: 442,
            quantity: 0
        },
        {
            name: 'Gaming ErgoChair 210s',
            price: 480,
            id: 434,
            quantity: 0
        }, 
        {
            name: 'Rocky ErgoChair 2 X24',
            price: 480,
            id: 434,
            quantity: 0
        }, 
        {
            name: 'Gaming ErgoChair200',
            price: 480,
            id: 434,
            quantity: 0
        }, 
        {
            name: 'Gaming Cooler chair',
            price: 480,
            id: 434,
            quantity: 0
        }, 
    ]);

    const cart = ref([
        {
            name: 'Knoll reGeneration FK7',
            price: 480,
            id: 434,
            quantity: 0
        },
        {
            name: 'Furniture Group G20',
            price: 136,
            id: 442,
            quantity: 0
        },
        {
            name: 'Gaming ErgoChair 210s',
            price: 480,
            id: 434,
            quantity: 0
        },
        {
            name: 'Rocky ErgoChair 2 X24',
            price: 480,
            id: 434,
            quantity: 0
        },
        {
            name: 'Gaming ErgoChair210',
            price: 480,
            id: 434,
            quantity: 0
        },
        {
            name: 'Gaming ErgoChair67',
            price: 480,
            id: 434,
            quantity: 0
        },
    ])

    function addStuff(item) {
        const index = items.findIndex(i => i.name === item.name)
        console.log(index)
            if (index !== -1) {
                cart.value[index].quantity++;
            } else {
                cart.value.push(item.name)
            }

        toast('Added an item to cart', {
        description: `${item.name}`,
        action: {
          label: 'Checkout',
          onClick: () => router.push('/checkout'),
        },
      })
    }

    const total = computed(() => {
        return cart.value.reduce((acc, item) => {
        return acc + item.quantity
        }, 0)
    });

    const totalcart = computed(() => {
        let ret; 
        ret = cart.value.reduce((acc, item) => { 
            let prod = items.find((p) => {
                return p.name === item.name
            })
            return acc + (prod.price * item.quantity)
        }, 0)
        return ret
    })

    return {
        count,
        addStuff,
        items,
        cart,
        totalcart,
        total
    }
})

// export const useCartStore = defineStore('cart', () => {
//     // const items = reactive(['alli', 'hikmat']);
//     // const total = computed(() => {
//     //     return items.reduce((acc, item) => {
//     //     return acc + item.quantity
//     //     }, 0)
//     // });
//     function add() {
//         console.log('store works')
//         // const index = items.findIndex(i => i.id === item.id)
//         // if (index > -1) {
//         //     items[index].quantity += item.quantity
//         // } else {
//         //     items.push(item)
//         // }
//     }
//     const price = ref(800);

//     return { price, add }
// })