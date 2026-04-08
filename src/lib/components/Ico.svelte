<script lang="ts">
    import { Icons } from '$data/Icons';

    let { name, class: className, ...restProps } = $props<{
        name: keyof typeof Icons;
        class?: string;
        [key: string]: any;
    }>();
    
    let displayIcon = $derived(Icons[name]);
</script>

{#if displayIcon}
<svg
    class={className}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox={displayIcon.viewBox}
    {...restProps}
>
    {@html displayIcon.svg}
</svg>
{/if}