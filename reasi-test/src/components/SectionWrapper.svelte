<script>
    export let id
</script>

<section {id} class={"min-h-screen flex flex-col px-4 "}>
    <div class="flex flex-col flex-1 max-w-[1400] mx-auto w-full">
        <slot />

    </div>

</section>