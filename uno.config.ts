import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind3,
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
        presetWind3(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'Outfit:300,400,500,600,700',
                Arsenal: {
                    name: 'Arsenal SC',
                    weights: ['800']
                }
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})