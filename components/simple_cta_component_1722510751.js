/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722510751", {
    template: `
    <section id="cta-component" class="backdrop-blur-md bg-pink-200/30 dark:bg-purple-900/30 flex-1 rounded-xl shadow-lg">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-12 mx-auto lg:py-20 lg:px-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-purple-800 dark:text-pink-300">Unlock Blockchain Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-pink-700 dark:text-purple-200 text-lg">Gain a competitive edge with real-time analysis of blockchain data</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-lg px-8 py-3 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-opacity-50 shadow-md">Get Started Today</a>
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
