import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'Outfit:300,400,500,600,700',
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})