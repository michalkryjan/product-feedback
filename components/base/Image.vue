<script setup lang="ts">
import type { ImageOptions, ImageSizes } from '@nuxt/image'

interface IBaseImageProps {
  srcType?: 'local' | 'firebase'
  srcDesktop: string
  srcTablet?: string
  srcMobile?: string
  alt?: string
  lazy?: boolean
  preload?: boolean
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'sync' | 'async' | 'auto'
  targetFormat?: 'png' | 'jpg' | 'webp' | 'avif' | 'gif' | 'svg'
  targetQuality?: `${1|2|3|4|5|6|7|8|9}` | `${1|2|3|4|5|6|7|8|9}${1|2|3|4|5|6|7|8|9|0}` | '100'
  densities?: string
  sizes?: string
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
  width?: number
  height?: number
  roundedType?: 'full'
  isFullWidth?: boolean
  isFullHeight?: boolean
  isCenter?: boolean
  pictureClass?: string
  imgClass?: string
}

const props = withDefaults(defineProps<IBaseImageProps>(), {
  srcType: 'local',
  srcTablet: undefined,
  srcMobile: undefined,
  alt: '',
  lazy: true,
  preload: false,
  fetchPriority: 'auto',
  decoding: 'sync',
  targetFormat: 'webp',
  targetQuality: '80',
  densities: '1x 2x',
  sizes: undefined,
  fit: 'cover',
  width: undefined,
  height: undefined,
  roundedType: undefined,
  isFullWidth: true,
  isFullHeight: false,
  isCenter: false,
  pictureClass: undefined,
  imgClass: undefined
})

defineOptions({
  inheritAttrs: false
})

const nuxtApp = useNuxtApp()
const imgService = useImage()

const isSVG = computed<boolean>(() => {
  return [
    props.srcDesktop,
    props.srcTablet ?? '',
    props.srcMobile ?? ''
  ].some(srcPath => srcPath.match(/\.(svg)$/i))
})

const isGIF = computed<boolean>(() => {
  return [
    props.srcDesktop,
    props.srcTablet ?? '',
    props.srcMobile ?? ''
  ].some(srcPath => srcPath.match(/\.(gif)$/i))
})

const imgModifiers = computed<ImageOptions['modifiers']>(() => ({
  quality: !isSVG.value && !isGIF.value ? props.targetQuality : '100',
  format: !isSVG.value && !isGIF.value ? props.targetFormat : undefined,
  densities: !isSVG.value && !isGIF.value ? props.densities : '1x',
  width: props.width,
  height: props.height,
  fit: props.fit
}))

const storageSrcDesktop = props.srcType === 'firebase' ? nuxtApp.$firebase.storage.getImage(props.srcDesktop) : undefined
const storageSrcTablet = props.srcType === 'firebase' && props.srcTablet ? nuxtApp.$firebase.storage.getImage(props.srcTablet) : undefined
const storageSrcMobile = props.srcType === 'firebase' && props.srcMobile ? nuxtApp.$firebase.storage.getImage(props.srcMobile) : undefined

const desktopUrl = computed(() => props.srcType === 'firebase' && unref(storageSrcDesktop) ? unref(storageSrcDesktop) : props.srcDesktop)
const tabletUrl = computed(() => props.srcType === 'firebase' && unref(storageSrcTablet) ? unref(storageSrcTablet) : props.srcTablet)
const mobileUrl = computed(() => props.srcType === 'firebase' && unref(storageSrcMobile) ? unref(storageSrcMobile) : props.srcMobile)

const sizesDesktop = computed<ImageSizes | undefined>(() => props.sizes && desktopUrl.value ? getSizesForSrc(desktopUrl.value) : undefined)
const sizesTablet = computed<ImageSizes | undefined>(() => props.sizes && tabletUrl.value ? getSizesForSrc(tabletUrl.value) : undefined)
const sizesMobile = computed<ImageSizes | undefined>(() => props.sizes && mobileUrl.value ? getSizesForSrc(mobileUrl.value) : undefined)

const srcDesktopOptimized = computed<string>(() => desktopUrl.value ? imgService(desktopUrl.value, imgModifiers.value) : '')
const srcTabletOptimized = computed<string | undefined>(() => tabletUrl.value && !sizesTablet.value ? imgService(tabletUrl.value, imgModifiers.value) : undefined)
const srcMobileOptimized = computed<string | undefined>(() => mobileUrl.value && !sizesMobile.value ? imgService(mobileUrl.value, imgModifiers.value) : undefined)

const classesPicture = computed<string[]>(() => {
  return [
    'relative flex m-0',
    props.isFullWidth ? 'w-full' : '',
    props.isFullHeight ? 'h-full' : '',
    props.isCenter ? 'justify-center items-center' : '',
    props.roundedType ? {
      full: 'rounded-full'
    }[props.roundedType] + ' overflow-hidden' : '',
    props.pictureClass ?? ''
  ]
})

const classesImg = computed<string[]>(() => {
  return [
    props.isFullWidth ? 'w-full' : '',
    props.isFullHeight ? 'h-full' : '',
    props.imgClass ?? ''
  ]
})

if (props.preload) {
  useHead({
    link: [
      {
        rel: 'preload',
        href: srcMobileOptimized.value ?? srcTabletOptimized.value ?? srcDesktopOptimized.value,
        as: 'image',
        fetchpriority: props.fetchPriority
      },
    ],
  })
}

function getSizesForSrc (src: string): ImageSizes {
  return imgService.getSizes(src, {
    sizes: props.sizes,
    modifiers: imgModifiers.value
  })
}
</script>

<template>
  <picture :class="classesPicture">
    <source
      v-if="sizesMobile"
      media="(max-width: 670px)"
      :srcset="sizesMobile.srcset"
      :sizes="sizesMobile.sizes">
    <source
      v-else-if="srcMobileOptimized"
      media="(max-width: 670px)"
      :srcset="srcMobileOptimized">

    <source
      v-if="sizesTablet"
      media="(max-width: 1200px)"
      :srcset="sizesTablet.srcset"
      :sizes="sizesTablet.sizes">
    <source
      v-else-if="srcTabletOptimized"
      media="(max-width: 1200px)"
      :srcset="srcTabletOptimized">

    <source
      v-if="sizesDesktop"
      media="(max-width: 1200px)"
      :srcset="sizesDesktop.srcset"
      :sizes="sizesDesktop.sizes">

    <img
      :src="sizesDesktop ? sizesDesktop.src : srcDesktopOptimized"
      :width="width"
      :height="height"
      :class="classesImg">
  </picture>
</template>