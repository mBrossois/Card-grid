import GridVue from "./components/Grid.vue";
import CardVue from "./components/Card.vue";

export { CardVue, GridVue}

export default {
    install: (app, options) => {
        app.component('CardVue', CardVue)
        app.component('GridVue', GridVue)
    }
}