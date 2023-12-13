<template>
    <div class="flex-grid">
        <slot></slot>
    </div>
</template>


<style>
.flex-grid {
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.full,
.half,
.one-fourth {
    flex-grow: 1;
    flex-basis: 100%;
}

@media screen and (min-width: 768px) {
    .flex-grid {
        padding: 1rem;
    }

    .one-fourth {
        flex: .5;
    }

    .half.card > .content-card {
        width: 24rem;
    }
}

@media screen and (min-width: 1024px) {
    .half {
        flex: .5;
    }

    .one-fourth {
        flex: .25;
    }

    .full.card > .content-card {
        width: 40rem;
    }
}
</style>