import type { CardProps } from "../types/card";
import type { NavItemProps } from "../types/navitems";
import whiteHeadphone from '../assets/headphone/white-headphone.png'
import orangeWatch from '../assets/watch/orangeWatch.png'
import orangeEcran from '../assets/ordi/orangeEcran.png'
import virturVisio from '../assets/watch/virtaulWhite.jpg'
import ordiNoir from '../assets/ordi/ecranNoir.jpg'
import laptop from '../assets/ordi/ordiArm.jpg'


export const navitems : NavItemProps[] = [
    {
        lien:"/shop",
        page:"All products"
    },
    {
        lien:"/about",
        page:"About Us"
    },
    {
        lien:"/faq",
        page:"FAQ"
    },
    {
        lien:"/blog",
        page:"Blog"
    },
    {
        lien:"/contact",
        page:"Contact"
    }
]

export const cardHome : CardProps[] =[
    {
        image:whiteHeadphone,
        lien:'/shop/headphones-x-28m',
        nom:'headphones-x-28m',
        feature:'Featured',
        prix:"USD 149.99"
    },
    {
        image:orangeWatch,
        lien:'/shop/ewatch-sf-4',
        nom:'eWatch SF 4',
        feature:'Featured',
        prix:"USD 349.99"
    },
    {
        image:orangeEcran,
        lien:'/shop/edisplay-xr',
        nom:'eDisplay XR',
        feature:'Featured',
        prix:"USD 649.99"
    }
]

export const browseCard: CardProps[] = [
    {
        image:virturVisio,
        nom:'The Future of Wearable Tech : Trends and Innovations to Watch',
        lien:'/blog/the-future-of-wearable tech-trends-and-innovations-to-watch',
    },
    {
        image:ordiNoir,
        nom:'The Rise of Smart Home Devices: Transforming the Way We Live',
        lien:'/blog/the-rise-of-smart-home-devices-transforming-the-way-we-live',
    },
    {
        image:laptop,
        nom:'Gaming Gadgets: Revolutionizing Entertainment and Beyond',
        lien:'/blog/gaming-gadgets-revolutionizing-entertainment-and-beyond',
    }
]