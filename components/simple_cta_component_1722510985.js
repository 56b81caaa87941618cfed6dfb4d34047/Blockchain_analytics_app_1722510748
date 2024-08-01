/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722510985", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto backdrop-blur-md bg-white/20 rounded-3xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock Blockchain Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-pink-100 md:text-xl">Gain a competitive edge with real-time analysis of blockchain data</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white/70 hover:bg-white/90 focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-lg px-8 py-3 mr-2 mb-2 transition-all duration-300 ease-in-out backdrop-blur-sm shadow-md hover:shadow-lg">Get Started Today</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
