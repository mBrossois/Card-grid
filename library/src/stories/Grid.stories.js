import Grid from '../components/Grid.vue';
import CardVue from '../components/Card.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullWidth = {
  render: () => ({
    components: { Grid,  CardVue},
    template: `
        <Grid>
            <CardVue
              class="full"
              title="Valtech_"
              subtitle="FRONT-END"
              explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
              :show-explanitory-text="false"
              img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
            />
        </Grid>
    `,
  }),
};

export const TwoHalves = {
  render: () => ({
    components: { Grid,  CardVue},
    template: `
        <Grid>
            <CardVue
              class="half"
              title="Valtech_"
              subtitle="FRONT-END"
              explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
              :show-explanitory-text="false"
              img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
            />
            <CardVue
              class="half"
              title="Valtech_"
              subtitle="FRONT-END"
              explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
              :show-explanitory-text="false"
              img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
            />
        </Grid>
    `,
  }),
};

export const OneFourthAndHalf = {
  render: () => ({
    components: { Grid,  CardVue},
    template: `
        <Grid>
            <CardVue
              class="one-fourth"
              title="Valtech_"
              subtitle="FRONT-END"
              explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
              :show-explanitory-text="false"
              img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
            />
            <CardVue
              class="one-fourth"
              title="Valtech_"
              subtitle="FRONT-END"
              explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
              :show-explanitory-text="false"
              img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
            />
            <CardVue
              class="half"
              title="Valtech_"
              subtitle="FRONT-END"
              explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
              :show-explanitory-text="false"
              img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
            />
        </Grid>
    `,
  }),
};