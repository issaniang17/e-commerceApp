import type { CardProps } from "../types/card";
import type { NavItemProps } from "../types/navitems";
import whiteHeadphone from "../assets/headphone/white-headphone.png";
import orangeWatch from "../assets/watch/orangeWatch.png";
import orangeEcran from "../assets/ordi/orangeEcran.png";
import virturVisio from "../assets/watch/virtaulWhite.jpg";
import ordiNoir from "../assets/ordi/ecranNoir.jpg";
import laptop from "../assets/ordi/ordiArm.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import type { socialLinkProps } from "../types/socialLink";
import type { SupportLink } from "../types/pageSupportLink";
import type { shopListProps } from "../types/shopList";

import dXG from "../assets/ordi/xg.png";
import dXE from "../assets/ordi/xe.png";
import dXS from "../assets/ordi/xs.png";

import orangeHeadphone from "../assets/headphone/orange.png";
import whiteHead from "../assets/headphone/white.png";
import greenHead from "../assets/headphone/green.png";
import blackHead from "../assets/headphone/black.png";
import faceWHite from "../assets/headphone/faceWhite.png";

import iphone15Black from "../assets/phones/iphone15Black.png";
import iphone15Red from "../assets/phones/iphone15red.png";
import iphone15White from "../assets/phones/iphone15White.png";

import blackWatch from "../assets/watch/blackWatch.png";
import whiteWatch from "../assets/watch/whiteWAtch.png";

import heroWatch from '../assets/watch/watchHero.png'
import girlWatch from '../assets/watch/girlWatch.png'
import watch1 from '../assets/watch/watch1.png'
import manWatch from '../assets/watch/manWatch.png'

import heroHeadphone from '../assets/headphone/heroHeadphone.png'
import fitGirl from '../assets/headphone/girlyFitHead.png'
import sleepHeadGirl from '../assets/headphone/sleepHead.png'
import whiteHeadArm from '../assets/headphone/armWhiteHead.png'


import heroScreen from '../assets/ordi/ecranHero.png'
import screenGirl from '../assets/ordi/maniEcran.png'
import manScreenNight from '../assets/ordi/manScreenNight.png'
import screenNight from '../assets/ordi/screenNight.png'

import phoneHero from '../assets/phones/phoneHero.png'
import girlPhone from '../assets/phones/girlPhone.png'
import manManipPhone from '../assets/phones/phoneManipMan.png'
import girlPhoneManip from '../assets/phones/girlManipPhone.png'
import { CreditCard, Headset, MoveRight, Package, ShieldCheck, Undo2, Van } from "lucide-react";

import xrOne from '../assets/ordi/xr1.png'
import xrTwo from '../assets/ordi/xr2.png'
import xrThree from '../assets/ordi/xr3.png'

import xgOne from '../assets/ordi/xg1.png'
import xgTwo from '../assets/ordi/xg2.png'
import xgThree from '../assets/ordi/xg3.png'

import xeOne from '../assets/ordi/xe1.png'
import xeTwo from '../assets/ordi/xe2.png'
import xeThree from '../assets/ordi/xe3.png'

import xsOne from '../assets/ordi/xs1.png'
import xsTwo from '../assets/ordi/xs2.png'
import xsThree from '../assets/ordi/xs3.png'

import red1 from '../assets/headphone/red1.png'
import red2 from '../assets/headphone/red2.png'
import red3 from '../assets/headphone/red3.png'
import red from '../assets/headphone/red.png'


import c961 from '../assets/headphone/c961.png'
import c962 from '../assets/headphone/c962.png'
import c963 from '../assets/headphone/c963.png'

import black1 from '../assets/headphone/black1.png'
import black2 from '../assets/headphone/black2.png'
import black3 from '../assets/headphone/black3.png'

import w991 from '../assets/headphone/w991.png'
import w992 from '../assets/headphone/w992.png'
import w993 from '../assets/headphone/w993.png'

import x281 from '../assets/headphone/x281.png'
import x282 from '../assets/headphone/x282.png'
import x283 from '../assets/headphone/x283.png'

import green1 from '../assets/headphone/green1.png'
import green2 from '../assets/headphone/green2.png'
import green3 from '../assets/headphone/green3.png'

import iblack1 from '../assets/phones/iblack1.png'
import iblack2 from '../assets/phones/iblack2.png'
import iblack3 from '../assets/phones/iblack3.png'

import ired1 from '../assets/phones/ired1.png'
import ired2 from '../assets/phones/ired2.png'
import ired3 from '../assets/phones/ired3.png'

import iwhite1 from '../assets/phones/iwhite1.png'
import iwhite2 from '../assets/phones/iwhite2.png'
import iwhite3 from '../assets/phones/iwhite3.png'

import blackWatch1 from '../assets/watch/blackWatch1.png'
import blackWatch2 from '../assets/watch/blackWatch2.png'
import blackWatch3 from '../assets/watch/blackWatch3.png'

import white1 from '../assets/watch/white1.png'

import orange1 from '../assets/watch/orange1.png'
import type { servicesGarantiesProps } from "../types/garantieService";

export const navitems: NavItemProps[] = [
  {
    lien: "/shop",
    page: "All products",
  },
  {
    lien: "/about",
    page: "About Us",
  },
  {
    lien: "/faq",
    page: "FAQ",
  },
  {
    lien: "/blog",
    page: "Blog",
  },
  {
    lien: "/contact",
    page: "Contact",
  },
];

export const supportLinks: SupportLink = {
  pages: [
    {
      lien: "/",
      page: "Home",
    },
    {
      lien: "/shop",
      page: "Shop",
    },
    {
      lien: "/about",
      page: "About",
    },
    {
      lien: "/blog",
      page: "Blog",
    },
  ],
  support: [
    {
      lien: "/faq",
      page: "FAQ",
    },
    {
      lien: "/contact",
      page: "Contact",
    },
    {
      lien: "/shop/headphones-x-28m",
      page: "Product",
    },
    {
      lien: "/404",
      page: "404",
    },
  ],
};

export const cardHome: CardProps[] = [
  {
    image: whiteHeadphone,
    lien: "/shop/headphones-x-28m",
    nom: "headphones-x-28m",
    feature: "Featured",
    prix: "USD 149.99",
  },
  {
    image: orangeWatch,
    lien: "/shop/ewatch-sf-4",
    nom: "eWatch SF 4",
    feature: "Featured",
    prix: "USD 349.99",
  },
  {
    image: orangeEcran,
    lien: "/shop/edisplay-xr",
    nom: "eDisplay XR",
    feature: "Featured",
    prix: "USD 649.99",
  },
];

export const browseCard: CardProps[] = [
  {
    image: virturVisio,
    nom: "The Future of Wearable Tech : Trends and Innovations to Watch",
    lien: "/blog/the-future-of-wearable tech-trends-and-innovations-to-watch",
  },
  {
    image: ordiNoir,
    nom: "The Rise of Smart Home Devices: Transforming the Way We Live",
    lien: "/blog/the-rise-of-smart-home-devices-transforming-the-way-we-live",
  },
  {
    image: laptop,
    nom: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    lien: "/blog/gaming-gadgets-revolutionizing-entertainment-and-beyond",
  },
];

export const socialLinks: socialLinkProps[] = [
  {
    name: "Facebook",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
  },
  {
    name: "X",
    icon: BsTwitterX,
  },
];

export const productList: shopListProps = {
  all: [
    {
      image: dXG,
      buyImg:{img1:xgOne, img2:xgTwo, img3:xgThree},
      nom: "eDisplay XG",
      lien: "/shop/edisplay-xg",
      prix: "USD 649.99",
    },
    {
      image: orangeHeadphone,
      buyImg:{img1:red1, img2:red2, img3:red3},
      nom: "Headphones or-27n",
      lien: "/shop/headphones-or-27n",
      prix: "USD 97.99",
    },
    {
      image: iphone15Black,
      buyImg:{img1:iblack1, img2:iblack2, img3:iblack3},
      nom: "iphone 15 Black",
      lien: "/shop/iphone-15-black",
      prix: "USD 799.99",
    },
    {
      image: whiteHead,
      buyImg:{img1:c961, img2:c962, img3:c963},
      nom: "Headphones w-96c",
      lien: "/shop/headphones-w-96c",
      prix: "USD 129.99",
    },
    {
      image: dXE,
       buyImg:{img1:xeOne, img2:xeTwo, img3:xeThree},
      nom: "eDisplay XE",
      lien: "/shop/edisplay-xe",
      prix: "USD 649.99",
    },
    {
      image: blackHead,
      buyImg:{img1:black1, img2:black2, img3:black3},
      nom: "Headphones z-23c",
      lien: "/shop/headphones-z-23c",
      prix: "USD 149.99",
    },
    {
      image: iphone15Red,
      buyImg:{img1:ired1, img2:ired2, img3:ired3},
      nom: "iphone 15 Red",
      lien: "/shop/iphone-15-red",
      prix: "USD 799.99",
    },
    {
      image: iphone15White,
      buyImg:{img1:iwhite1, img2:iwhite2, img3:iwhite3},
      nom: "iphone 15 White",
      lien: "/shop/iphone-15-white",
      prix: "USD 799.99",
    },
    {
      image: blackWatch,
      buyImg:{img1:blackWatch1, img2:blackWatch2, img3:blackWatch3},
      nom: "eWatch SF Black",
      lien: "/shop/ewatch-sf-black",
      prix: "USD 319.99",
    },
    {
      image: whiteWatch,
      buyImg:{img1:white1, img2:blackWatch2, img3:blackWatch3},
      nom: "eWatch SF 3 White",
      lien: "/shop/ewatch-sf-3-white",
      prix: "USD 319.99",
    },
    {
      image: dXS,
      buyImg:{img1:xsOne, img2:xsTwo, img3:xsThree},
      nom: "eDisplay XS",
      lien: "/shop/edisplay-xs",
      prix: "USD 649.99",
    },
    {
      image: faceWHite,
      buyImg:{img1:w991, img2:w992, img3:w993},
      nom: "Headphones w-99",
      lien: "/shop/headphones-w-99",
      prix: "USD 129.99",
    },
    {
      image: greenHead,
      buyImg:{img1:green1, img2:green2, img3:green3},
      nom: "Headphones e-11g",
      lien: "/shop/headphones-e-11g",
      prix: "USD 97.99",
    },
    {
      image: whiteHeadphone,
      buyImg:{img1:x281, img2:x282, img3:x283},
      nom: "Headphones x-28m",
      lien: "/shop/headphones-x-28m",
      prix: "USD 149.99",
      feature: 'Feature'
    },
    {
      image: orangeWatch,
      buyImg:{img1:orange1, img2:blackWatch2, img3:blackWatch3},
      nom: "eWatch SF 4",
      lien: "/shop/ewatch-sf-4",
      prix: "USD 349.99",
      feature: 'Feature'
    },
    {
      image: orangeEcran,
      buyImg:{img1:xrOne, img2:xrTwo, img3:xrThree},
      nom: "eDisplay XR",
      lien: "/shop/edisplay-xr",
      prix: "USD 649.99",
      feature: 'Feature'
    }
  ],
  headphones: [
    {
      image: whiteHeadphone,
      nom: "Headphones x-28m",
      lien: "/shop/headphones-x-28m",
      prix: "USD 149.99",
    },
    {
      image: greenHead,
      nom: "Headphones e-11g",
      lien: "/shop/headphones-e-11g",
      prix: "USD 97.99",
    },
    {
      image: blackHead,
      nom: "Headphones z-23c",
      lien: "/shop/headphones-z-23c",
      prix: "USD 149.99",
    },
    {
      image: whiteHead,
      nom: "Headphones w-96c",
      lien: "/shop/headphones-w-96c",
      prix: "USD 129.99",
    },
    {
      image: whiteHead,
      nom: "Headphones w-99",
      lien: "/shop/headphones-w-99",
      prix: "USD 129.99",
      feature: 'Feature'
    },
    {
      image: red,
      nom: "Headphones or-27n",
      lien: "/shop/headphones-or-27n",
      prix: "USD 129.99",
    }
  ],
  displays: [
    {
      image: dXG,
      
      nom: "eDisplay XG",
      lien: "/shop/edisplay-xg",
      prix: "USD 649.99",
    },
    {
      image: dXE,
     
      nom: "eDisplay XE",
      lien: "/shop/edisplay-xe",
      prix: "USD 649.99",
    },
    {
      image: dXS,
      
      nom: "eDisplay XS",
      lien: "/shop/edisplay-xs",
      prix: "USD 649.99",
    },
    {
      image: orangeEcran,
     
      nom: "eDisplay XR",
      lien: "/shop/edisplay-xr",
      prix: "USD 649.99",
      feature: 'Feature'
    }
  ],
  phones: [
    {
      image: iphone15Black,
      
      nom: "iphone 15 Black",
      lien: "/shop/iphone-15-black",
      prix: "USD 799.99",
    },
    {
      image: iphone15Red,
      
      nom: "iphone 15 Red",
      lien: "/shop/iphone-15-red",
      prix: "USD 799.99",
    },
    {
      image: iphone15White,
      
      nom: "iphone 15 White",
      lien: "/shop/iphone-15-white",
      prix: "USD 799.99",
    },
  ],
  watch: [
    {
      image: blackWatch,
      
      nom: "eWatch SF Black",
      lien: "/shop/ewatch-sf-black",
      prix: "USD 319.99",
    },
    {
      image: whiteWatch,
      
      nom: "eWatch SF 3 White",
      lien: "/shop/ewatch-sf-3-white",
      prix: "USD 319.99",
    },
    {
      image: orangeWatch,
      
      nom: "eWatch SF 4",
      lien: "/shop/ewatch-sf-4",
      prix: "USD 349.99",
      feature: 'Feature'
    },
  ],
};

export const shopLisNav :  NavItemProps[] =[
    {
        lien:'/shop',
        page:'All products'
    },
    {
        lien:'/shop/headphones',
        page:'Headphones'
    },
    {
        lien:'/shop/displays',
        page:'Displays'
    },
    {
        lien:'/shop/watches',
        page:'Watches'
    },
    {
        lien:'/shop/phones',
        page:'Phones'
    }
] 

export const buyProductsList = {
    watchImg:[
        {
            heroImg:heroWatch,
            description:'Stay connected, organized, and motivated with eWatch. Enjoy seamless connectivity, comprehensive fitness tracking, stylish design, and convenient smart features—all in one sleek package.',
            presentation:[
                {
                    image:girlWatch,
                    titre:"Fitness Tracking",
                    description:"Monitor your health and fitness goals with precision, tracking your activity, heart rate, and more."
                },
                {
                    image:watch1,
                    titre:"Versatile Design",
                    description:"Elevate your look with a sleek and modern design that seamlessly transitions from the gym to the boardroom."
                },
                {
                    image:manWatch,
                    titre:"Effortless Connectivity",
                    description:"Seamlessly stay in touch with your world, receiving notifications and calls directly on your wrist."
                }
            ],
            testimonials:[
                {body:"I was skeptical about wearing a smartwatch at first, but the eWatch has truly won me over. It's become an essential part of my daily routine, helping me stay connected and productive wherever I go.",
                    author: 'Ryan I.'
                },
                {body:"I was skeptical about wearing a smartwatch at first, but the eWatch has truly won me over. It's become an essential part of my daily routine, helping me stay connected and productive wherever I go.",
                    author: 'Peter K.'
                },
                {body:"I can't imagine my day without my eWatch now. It's not just a timepiece; it's my personal assistant, keeping me organized and on track throughout the day.",
                    author: 'Tomas B.'
                }
                
            ]
        }
    ],
    headphonesImg:[
        {
            heroImg:heroHeadphone,
            description:"Whether you're on the move or powering through your workout, these headphones are designed to keep up with your active lifestyle effortlessly.",
            presentation:[
                {
                    image:fitGirl,
                    titre:"Sound Superiority, Anywhere",
                    description:"Experience top-tier audio quality. Whether you're into rock or classical, these buds deliver exceptional sound across all genres."
                },
                {
                    image:sleepHeadGirl,
                    titre:"Power on the Move",
                    description:"Stay charged with portable capsule, giving you 4 full charges for your headphones wherever you roam."
                },
                {
                    image:whiteHeadArm,
                    titre:"Tailored Comfort",
                    description:"With 6 tips in varying sizes, our headphones ensures a perfect fit for every ear, guaranteeing comfort during extended wear."
                }
            ],
            testimonials:[
                {body:"I couldn't be happier with my purchase from this store. The headphones I bought exceeded my expectations in terms of sound quality and comfort. Plus, the customer service was excellent. Highly recommend!",
                    author: 'Alex K'
                },
                {body:"I was skeptical about buying headphones online, but I'm so glad I did. These headphones are fantastic! They're comfortable to wear for long periods, and the sound quality is amazing. Definitely worth every penny.",
                    author: 'Emily J'
                },
                {body:"I've been searching for the perfect pair of headphones for ages, and I finally found them here. Not only do they sound incredible, but they're also durable and well-designed. I use them every day and couldn't be happier with my purchase.",
                    author: 'Michael S'
                }
                
            ]
        }
    ],
    displaysImg:[
        {
            heroImg:heroScreen,
            description:"Upgrade your workspace with the eDisplay XS and take your productivity to new heights.",
            presentation:[
                {
                    image:screenGirl,
                    titre:"Crystal Clear Visuals",
                    description:"Experience stunning clarity and vibrant colors on the Apple Display SE 3, bringing your content to life like never before."
                },
                {
                    image:manScreenNight,
                    titre:"Seamless Connectivity",
                    description:"Effortlessly connect to your Mac, iPad, or other devices with Thunderbolt and USB-C ports for enhanced productivity."
                },
                {
                    image:screenNight,
                    titre:"Sleek Design",
                    description:"With its slim profile and edge-to-edge glass, the eDisplay adds a modern touch to any workspace while maximizing your viewing area."
                }
            ],
            testimonials:[
                {body:"The eDisplay monitor I purchased from this store has completely transformed my work setup. The display quality is stunning, and I love how seamless it is to connect to my devices. It's made a noticeable difference in my productivity and overall workflow.",
                    author: 'Sarah C'
                },
                {body:"I was hesitant to invest in a new monitor, but I'm so glad I did. The eDisplay monitor exceeded my expectations in terms of both performance and design. It's sleek, it's vibrant, and it's made my gaming and movie-watching experiences so much more immersive.",
                    author: 'Jason M'
                },
                {body:"I've been using the eDisplay monitor for a few weeks now, and I'm blown away by its versatility. Whether I'm editing photos or streaming videos, the colors are always accurate and vibrant. It's definitely raised the bar for what I expect from a monitor.",
                    author: 'Emily K'
                }
                
            ]
        }
    ],
    phonesImg:[
        {
            heroImg:phoneHero,
            description:"Experience the pinnacle of technology and design with iPhone. Seamlessly integrated features, stunning display, and powerful performance redefine what's possible in the world of smartphones.",
            presentation:[
                {
                    image:girlPhone,
                    titre:"Powerful Performance",
                    description:"Experience lightning-fast processing speeds and smooth multitasking, empowering you to tackle any task with ease and efficiency."
                },
                {
                    image:manManipPhone,
                    titre:"Innovative Features",
                    description:"Explore a wealth of innovative features and apps designed to streamline your daily life, from augmented reality experiences to voice-activated assistants."
                },
                {
                    image:girlPhoneManip,
                    titre:"Sleek Design",
                    description:"Make a statement with the iPhone's sleek and elegant design, crafted from premium materials for a sophisticated look and feel."
                }
            ],
            testimonials:[
                {body:"The iPhone has been an absolute game-changer for me. From its seamless performance to its stunning camera quality, it's exceeded all my expectations. I can't imagine ever going back to another smartphone.",
                    author: 'John J.'
                },
                {body:"I've been a loyal iPhone user for years, and the latest model continues to impress. The battery life is phenomenal, the interface is intuitive, and the overall experience is simply unmatched. It's truly the best smartphone on the market",
                    author: 'Isabel O.'
                },
                {body:"I was hesitant to switch to the iPhone at first, but now I can't imagine my life without it. The reliability, the speed, and the sleek design are just some of the reasons why I'm a proud iPhone owner. It's more than just a phone; it's a lifestyle.",
                    author: 'Caroline P.'
                }
                
            ]
        }
    ]
}

export const serviceWarranty = [
    {
        icon:<Van />,
        titre:'Free Shipping',
        description:'$24+ orders ship free'
    },
    {
        icon:<CreditCard />,
        titre:'Secure Payments',
        description:'Trusted payment options'
    },
    {
        icon:<Undo2 />,
        titre:'45 Days Free Return',
        description:'Easy, risk-free returns'
    }
]

export const warranty:servicesGarantiesProps[] = [
  {
    icon:<ShieldCheck size={22}/>,
    name:'Warranty',
    arrow:<MoveRight size={14}/>,
    description: <div><p>Etec offers a two-year manufacturer warranty on all new headphones purchased from authorized retailers in most countries. Refurbished products purchased from authorized retailers are covered by a one-year manufacturer warranty. If you believe your product is faulty and is within the warranty period, please fill out this form to submit a warranty claim here.</p>
    <p>After you’ve completed and submitted the warranty claim form our customer service team will proceed with your claim within two business days. If you are required to return your product prior to approval, you will receive an email with a prepaid return shipping label. Please do not mail your product to etec without a prepaid return label provided by Etec as this will delay the claims process.</p>
    <p>If no further information is needed, you’ll receive an approval confirmation email, followed by a shipping confirmation email with a tracking number for your replacement headphones once they have been shipped. Please do not discard your faulty headphones until you receive your replacement.</p></div>,
    valeur:'Warranty'
  },
  {
    icon:<Package size={22}/>,
    name:'Shipping & Delivery',
    arrow:<MoveRight size={14}/>,
    description: <div><p>For all orders exceeding a value of 100USD shipping is offered for free.</p>
    <p>Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on unworn items. You, as a Customer, are obliged to inform us via email before you return the item.</p>
    <p>Otherwise, standard shipping charges apply. Check out our delivery Terms & Conditions for more details.</p></div>,
    valeur:'Shipping & Delivery'
  },
  {
    icon:<Headset size={22}/>,
    name:'Support',
    arrow:<MoveRight size={14}/>,
    description: <div><h2>Get in touch our team today </h2>
    <p>Need any help? Send us a message usingthe form below and we'll get back to you as fast as we can! </p>
  </div>,
  valeur:'Support'
  }
]