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
            id: 1
        },
        {
            name: 'Gaming ErgoChair 210s',
            price: 480,
            id: 21
        }, 
        {
            name: 'Rocky ErgoChair 2 X24',
            price: 480,
            id: 31
        }, 
        {
            name: 'Gaming ErgoChair200',
            price: 480,
            id: 41
        }, 
    ]);

    const cart = ref([]);
    const collections = reactive([
        {
            name: 'Knoll reGeneration FK7',
            price: 480,
            id: 1,
            itemsLeft: 102,
            description: "Lorem ipsum odo lor tsu ya far to the lenghty part of iran and russian alliances, or isreal and america alliances, americans are evil"
        },
        {
            name: 'Gaming Cooler chair',
            price: 480,
            id: 51,
            itemsLeft: 12,
            description: "Lorem ipsum odo lor tsu ya far to the lenghty part of iran and russian alliances, or isreal and america alliances, americans are evil"
        },
        {
            name: 'Gaming ErgoChair200',
            price: 480,
            id: 41,
            itemsLeft: 24,
            description: "Lorem ipsum odo lor tsu ya far to the lenghty part of iran and russian alliances, or isreal and america alliances, americans are evil"
        },
        {
            name: 'Furniture Group G20',
            price: 136,
            id: 11,
            itemsLeft: 8,
            description: "Lorem ipsum odo lor tsu ya far to the lenghty part of iran and russian alliances, or isreal and america alliances, americans are evil"
        }
    ])

    function addStuff(item, index) {
        console.log(index)
        console.log(item)

        if(cart.value[index]) {
            console.log('truewwey')
        }
        cart.value.push(item)
        // console.log(index)
        // console.log(item)
        console.log(cart.value)
    //     if(cart.value.find(itemm => itemm.id = item.id)) {
    //         cart.value.push(item.quantity++)

    //     }

    //         if (index !== -1) {
    //             cart.value.push(item)
    //         } 

    //     console.log(cart.value)

    //     toast('Added an item to cart', {
    //     description: `${item.name}`,
    //     action: {
    //       label: 'Checkout',
    //       onClick: () => router.push('/checkout'),
    //     },
    //   })
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
        total,
        collections
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