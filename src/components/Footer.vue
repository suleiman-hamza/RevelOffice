<script setup lang="ts">
import { MapPinHouse } from 'lucide-vue-next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
</script>
<template>
    <footer class="footer">
        <section class="foot-head">
            <h2>
                <span>Revel Office</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                </svg>
            </h2>
            <p>Your one stop destination for quality workspace equipments</p>
        </section>
        <hr>
        <section class="footer-social flex justify-center">
            <div class="flex item-center gap-4">
                <a href="#" class="block border-2 flex justify-center items-center p-1" target="_blank">
                    <img src="@\assets\images\Platform=Instagram, Color=Original.svg" alt="instagram svg" width="24px" height="24px">
                </a>
                <a href="#" class="block border-2 flex justify-center items-center p-1" target="_blank">
                    <img src="@\assets\images\Platform=X (Twitter), Color=Original.svg" alt="instagram svg" width="24px" height="24px">
                </a>
                <a href="#" class="block border-2 flex justify-center items-center p-1" target="_blank">
                    <img src="@\assets\images\Platform=WhatsApp, Color=Original.svg" alt="instagram svg" width="24px" height="24px">
                </a>
                <!-- <a href="#" class="block border-2" target="_blank">
                    <img src="@\assets\images\Platform=Instagram, Color=Original.svg" alt="instagram svg" width="24px" height="24px">
                </a> -->
            </div>
        </section>
        <hr>
        <section class="footer-nav-section">
            <div class="menu">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger class="p-2 bg-gray-50 rounded-sm">Menu</AccordionTrigger>
                    <AccordionContent class="p-2 border">
                        <ul>
                            <li>Sales</li>
                            <li>Collections</li>
                            <li>Cataloque</li>
                            <li>About Us</li>
                            <li>FAQ</li>
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div class="legal">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger class="p-2 bg-gray-50 rounded-sm">Legal</AccordionTrigger>
                    <AccordionContent class="p-2 border">
                        <ul>
                            <li>Shipping</li>
                            <li>Track Orders</li>
                            <li>Return Policy</li>
                            <li>Payments</li>
                            <li>Support</li>
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div class="help">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger class="p-2 bg-gray-50 rounded-sm">Help</AccordionTrigger>
                    <AccordionContent class="p-2 border">
                        <ul>
                            <li>Contact</li>
                            <li>Customer Support</li>
                            <li>Return Policy</li>
                            <li>Inquiries</li>
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
        <hr>
        <section class="office-branch">
            <div class="mt-8 flex gap-2 items-start">
                <MapPinHouse />       
                <span>
                    <h5 class="font-semibold">Corporate Office:</h5>
                    <p>Suit 3, 207 Regent Street London, W18 3HH, UK</p>
                </span>
            </div>
            <div class="mt-4 flex gap-2 items-start">
                <MapPinHouse />
                <span>
                    <h5 class="font-semibold">Operations Office:</h5>
                    <p>Flat 7, Plot 1, 74 Patience Offiong Street, Katampe, Abuja, Nigeria</p>
                </span>
            </div>
        </section>
        <hr>
        <section class="copyright">
            <p class="mt-4 text-center">Copyright @ 2025,  All right reserved.</p>
        </section>
    </footer>
</template>

<style scoped>
.footer {
    /* background-color: rgba(216, 216, 216, 0.281); */
    border-top: 2px solid hsl(220 13% 91%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1rem;
}

.foot-head {
    background-color: #fff;
    /*padding: 1rem;*/
    text-align: center;
}

.foot-head h2 {
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

.foot-head p {
    font-size: 1rem;
    margin-top: 0.5rem;
}
hr {
    border: none;
    border-top: 1px solid #e0e0e0; /* Soft grey color */
    margin: 1rem 0;
}

/* .footer-nav-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;
    padding: 1rem;
    gap: 1rem;
} */

.menu, .legal, .help {
    flex: 1 1 100%;
    /* text-align: center; */
    margin: 0.5rem 0;
}

.menu h4, .legal h4, .help h4 {
    font-weight: 800;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul > li {
    margin: 0.5rem 0;
    font-size: 0.9rem;
}

/* Responsive design */
@media (min-width: 768px) {
    .menu, .legal, .help {
        flex: 1 1 30%;
        text-align: left;
    }

    .footer {
        padding: 2rem;
    }

    .foot-head h2 {
        font-size: 1.5rem;
    }

    .foot-head p {
        font-size: 1.1rem;
    }
}
</style>