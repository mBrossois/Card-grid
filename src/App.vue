<template>
  <GridVue>
    <CardVue
      class="full"
      title="Valtech_"
      subtitle="FRONT-END"
      explanitory-text="Welcome to Valtech, we are happy to see that you are interested in our company!"
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_1280.jpg"
    />

    <CardVue
      class="half"
      title="VENICE"
      subtitle="ITALY"
      explanitory-text="Venice is a captivating and unique city located in northeastern Italy. Renowned for its extraordinary architecture, intricate canal system, and rich history, Venice is built on a group of 118 small islands separated by canals and linked by bridges."
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2013/10/12/23/59/gondolas-194835_1280.jpg"
    />
    <CardVue
      class="one-fourth"
      title="BERLIN"
      subtitle="GERMANY"
      explanitory-text="Berlin, Germany's capital, is a city of historical significance, featuring landmarks like the Brandenburg Gate and the Reichstag. Known for its thriving arts scene, diverse nightlife, and a blend of rich heritage with contemporary vibrancy, Berlin stands as a dynamic and captivating European destination."
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2019/12/16/17/13/oberbaum-bridge-4699765_1280.jpg"
    />
    <CardVue
      class="one-fourth"
      title="BARCELONA"
      subtitle="SPAIN"
      explanitory-text="Barcelona, Spain's vibrant coastal city, is renowned for its captivating blend of modernist architecture, cultural richness, and Mediterranean allure."
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2018/03/14/23/00/barcelona-3226639_1280.jpg"
    />

    <CardVue
      class="one-fourth"
      title="PARIS"
      subtitle="FRANCE"
      explanitory-text="Paris, the capital of France, is a city of timeless elegance and romance, characterized by iconic landmarks like the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral."
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg"
    />
    <CardVue
      class="one-fourth"
      title="AMSTERDAM"
      subtitle="NETHERLANDS"
      explanitory-text="Amsterdam, the capital of the Netherlands, is a picturesque city known for its historic canals, charming architecture, and cultural diversity, offering a unique blend of rich heritage and modern vibrancy."
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2021/11/25/09/27/building-6822998_1280.jpg"
    />
    <CardVue
      class="half"
      title="LONDON"
      subtitle="UNITED KINGDOM"
      explanitory-text="London, the capital of the United Kingdom, is a global metropolis renowned for its rich history, iconic landmarks such as Big Ben and the Tower of London, a thriving cultural scene with world-class museums, theaters, and diverse neighborhoods that showcase both tradition and modernity."
      :show-explanitory-text="false"
      img-src="https://cdn.pixabay.com/photo/2010/12/13/10/21/bridge-2715_1280.jpg"
    />
  </GridVue>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
