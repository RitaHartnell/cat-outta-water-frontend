//this is going to have the info for each page in order
import bg01 from '../bg01-hallway.jpg'
import bg02 from '../bg02-dorm.jpg'
import md1 from '../Modern-Dormroom1.png'
import md2 from '../Modern-Dormroom2.png'
import md3 from '../Modern-Dormroom3.png'
import msch1 from '../Modern-School1.png'
import mst1 from '../Modern-Street1.png'
import fm01Body from '../fm01/fm01-body.png'
import fm01EyesGrin from '../fm01/fm01-eyes-grin.png'
import fm01EyesSmile from '../fm01/fm01-eyes-smile.png'
import fm01EyesSoft from '../fm01/fm01-eyes-soft.png'
import fm01EyesUpset from '../fm01/fm01-eyes-upset.png'
import fm01EyesWow from '../fm01/fm01-eyes-wow.png'
import fm01MouthGrin from '../fm01/fm01-mouth-grin00.png' 
import fm01MouthSerious00 from '../fm01/fm01-mouth-serious00.png'
import fm01MouthSerious01 from '../fm01/fm01-mouth-serious01.png'
import fm01MouthSmile00 from '../fm01/fm01-mouth-smile00.png'
import fm01MouthSmile01 from '../fm01/fm01-mouth-smile01.png'
import fm01MouthSoft00 from '../fm01/fm01-mouth-soft00.png'
import fm01MouthSoft01 from '../fm01/fm01-mouth-soft01.png'
import fm01MouthUpset00 from '../fm01/fm01-mouth-upset00.png'
import fm01MouthUpset01 from '../fm01/fm01-mouth-upset01.png'
import fm01MouthWow from '../fm01/fm01-mouth-wow01.png'
import KG070000 from '../cat1/KG070000.png'
import KG070001 from '../cat1/KG070001.png'
import KG070002 from '../cat1/KG070002.png'
import KG070003 from '../cat1/KG070003.png'
import KG070004 from '../cat1/KG070004.png'
import KG070005 from '../cat1/KG070005.png'
import KG070006 from '../cat1/KG070006.png'


const pages = [
    {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesWow,
            mouth: fm01MouthWow
        },
        spriteCenter: {
            body: '',
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: KG070001,
            eyes: '',
            mouth: ''
        },
        text: 'Oh hello there kitty! Where did you come from?',
        choices: {
            a: {
                text: 'meow?',
                goto: 1
            },
            b: {
                text: 'meow.',
                goto: 2
            }
        }
    },
    {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesSmile,
            mouth: fm01MouthSmile01
        },
        spriteCenter: {
            body: '',
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: KG070002,
            eyes: '',
            mouth: ''
        },
        text: "Aww haha cute kitty, you're a good little one, yes yes.",
        choices: {
            a: {
                text: 'nya~',
                goto: 3
            },
            b: null
        }
    },
    {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesGrin,
            mouth: fm01MouthSoft00
        },
        spriteCenter: {
            body: '',
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: KG070006,
            eyes: '',
            mouth: ''
        },
        text: "Well you're very matter of fact, aren't you?",
        choices: {
            a: {
                text: 'meow.',
                goto: 3
            },
            b: null
        }
    },
    {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesSoft,
            mouth: fm01MouthSerious01
        },
        spriteCenter: {
            body: '',
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: KG070004,
            eyes: '',
            mouth: ''
        },
        text: "Okay, I'm gonna go away for a little bit but I'm gonna see what I can do",
        choices: {
            a: {
                text: 'meow!',
                goto: 4
            },
            b: null
        }
    }
]

export default pages