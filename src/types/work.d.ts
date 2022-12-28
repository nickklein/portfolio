type LinkType = {
    url: string,
    label: string,
}

type TextType = {
    title?: string,
    text: string,
}

type CurrentType = {
    show: boolean,
    title: string,
    shortened_title: string,
    color?: string,
    background_image?: string,
    category: string,
    slug: string,
    logo?: string,
    thumbnail?: string,
    text: Array<TextType>,
    tags?: Array<string>,
    links?: Array<LinkType>,
    screenshots?: Array<string>,
    related?: Array<string>
}