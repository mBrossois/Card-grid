import Card from '../components/Card.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    explanitoryText: {
      control: 'text',
    },
    showExplanitoryText: {
      control: 'boolean'
    },
    imgSrc: {
      control: 'text'
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullWidth = {
  args: {
    title: 'Valtech_',
    subtitle: 'FRONT-END',
    explanitoryText: 'Welcome to Valtech, we are happy to see that you are interested in our company!',
    showExplanitoryText: false,
    imgSrc: 'https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg'
  },
};

export const ShowExplanitoryText = {
  args: {
    title: 'Valtech_',
    subtitle: 'FRONT-END',
    explanitoryText: 'Welcome to Valtech, we are happy to see that you are interested in our company!',
    showExplanitoryText: true,
    imgSrc: 'https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg'
  },
};