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
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.full-width {
    flex: 1;
}

.half {
    flex: .5;
}

.one-fourth {
    flex: .25;
}
</style>