<template>
    <div class="card">
        <div class="content-card">
            <header>
                <h2>{{ subtitle }}</h2>
                <h1>{{ title }}</h1>
            </header>
            <p :class="{'show': showExplanitoryText}">{{ explanitoryText }}</p>
            <button>Read more about {{ title }}</button>
        </div>
        <img :src="imgSrc" alt="Background image">
    </div>
</template>

<script setup>

defineProps({
  title: String,
  subtitle: String,
  explanitoryText: String,
  showExplanitoryText: Boolean,
  imgSrc: String
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.card {
    position: relative;
    z-index: 0;

    height: 25rem;
    width: 100%;

    border-radius: .5rem;

    color: white;
    font-family: 'Ubuntu', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    overflow: hidden;
    min-width: 320px;

}

.card:hover > .content-card > p,
.card:hover > .content-card > button,
.show {
    visibility: visible;
    opacity: 1;
}

.card:hover > .content-card > p {
    height: 10rem;
    padding: 1rem 0;
}

.card:hover > .content-card > button {
    padding: 1rem;
    height: auto;
}


h2 {
    font-size: 1.2rem;
}

h1 {
    font-size: 3rem;
    margin: 0;
}

p {
    display: table-cell;
    vertical-align: middle;
    padding: 0;

    height: 0;
    transition: all 200ms ease-in-out;

}

p.show {
    padding: 1rem 0;
}

.content-card {
    position: relative;
    z-index: 100;

    width: 18rem;
    text-align: center;
}

p, button {
    opacity: 0;
    visibility: hidden;
}

button {
    background-color: unset;
    border: 1px solid white;
    height: 0;
    padding: 0;
    color: white;
    transition: all 200ms ease-in-out;

}

button:hover {
    cursor: pointer;
    background-color: white;
    color: black;
}

img {
    position: absolute;
    z-index: 50;
}
</style>