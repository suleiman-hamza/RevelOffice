<template>
    <footer class="footer">
        <div class="foot-head">
            <h2>Revel Office</h2>
            <p>Your one stop destination for quality workspace equipments</p>
        </div>
        <section>
            <div class="menu">
                <h4>Menu</h4>
                <ul>
                    <li>Sales</li>
                    <li>Collections</li>
                    <li>Cataloque</li>
                </ul>
            </div>
            <div class="legal">
                <h4>Legal</h4>
                <ul>
                    <li>Shipping</li>
                    <li>Track Orders</li>
                    <li>Return Policy</li>
                    <li>Payments</li>
                    <li>Support</li>
                </ul>
            </div>
            <div class="help">
                <h4>Help</h4>
                <ul>
                    <li>Contact</li>
                    <li>Customer Support</li>
                    <li>Return Policy</li>
                    <li>Inquiries</li>
                </ul>
            </div>
        </section>
    </footer>
</template>

<style scoped>
.footer {
    background-color: rgb(216, 216, 216, 0.281);
}
.foot-head {
    border-top: 1px solid hsl(214.3 31.8% 91.4%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    padding: 1rem;
    h2 {
        font-size: 0.85rem;
        font-weight: 700;
        /* font-style: italic; */
    }
}
.foot-head p {
    font-size: 1rem;
}
.menu, .legal, .help {
    h4 {
        font-weight: 800;
    }
    ul > li {
        margin-left: 1rem;
    }
}
section {
    background-color: #fff;
    padding: 1rem;
}
</style>