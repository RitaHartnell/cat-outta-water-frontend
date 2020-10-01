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
import fm02Body from '../fm02/fm02-body.png'
import fm02EyesJoy from '../fm02/fm02-eyes-joy.png'
import fm02EyesNervous from '../fm02/fm02-eyes-nervous.png'
import fm02EyesSmile from '../fm02/fm02-eyes-smile.png'
import fm02EyesBawl from '../fm02/fm02-eyes-bawl.png'
import fm02EyesUpset from '../fm02/fm02-eyes-upset.png'
import fm02EyesWow from '../fm02/fm02-eyes-wow.png'
import fm02MouthCry from '../fm02/fm02-mouth-cry01.png' 
import fm02MouthNervous00 from '../fm02/fm02-mouth-nervous00.png'
import fm02MouthNervous01 from '../fm02/fm02-mouth-nervous01.png'
import fm02MouthSmile00 from '../fm02/fm02-mouth-smile00.png'
import fm02MouthSmile01 from '../fm02/fm02-mouth-smile01.png'
import fm02MouthUpset00 from '../fm02/fm02-mouth-upset00.png'
import fm02MouthUpset01 from '../fm02/fm02-mouth-upset01.png'
import fm02MouthWow from '../fm02/fm02-mouth-wow01.png'
import KG070000 from '../cat1/KG070000.png'
import KG070001 from '../cat1/KG070001.png'
import KG070002 from '../cat1/KG070002.png'
import KG070003 from '../cat1/KG070003.png'
import KG070004 from '../cat1/KG070004.png'
import KG070005 from '../cat1/KG070005.png'
import KG070006 from '../cat1/KG070006.png'


const pages = {
    0: {
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
        text: 'Jen: Oh hello there kitty! Where did you come from?',
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
    1: {
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
        text: "Jen: Aww haha cute kitty, you're a good little one, yes yes.",
        choices: {
            a: {
                text: 'nya~',
                goto: 3
            },
            b: null
        }
    },
    2: {
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
        text: "Jen: Well you're very matter of fact, aren't you?",
        choices: {
            a: {
                text: 'meow.',
                goto: 3
            },
            b: null
        }
    },
    3: {
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
        text: "Jen: Okay, I'm gonna go away for a little bit but I'm gonna see what I can do",
        choices: {
            a: {
                text: 'meow!',
                goto: 4
            },
            b: null
        }
    },
    4: {
        background: mst1,
        spriteLeft: {
            body: KG070005,
            eyes: '',
            mouth: ''
        },
        spriteCenter: {
            body: '',
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: '',
            eyes: '',
            mouth: ''
        },
        text: "At this point, nya, you figure there's no point in not waiting around, nya. There definitely could be food as a reward",
        choices: {
            a: null,
            b: null
        }
    },
    5: {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesSoft,
            mouth: fm01MouthSerious00
        },
        spriteCenter: {
            body: KG070001,
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: fm02Body,
            eyes: fm02EyesWow,
            mouth: fm02MouthWow
        },
        text: "Nan: Oh My Gosh! You were right, Jen, it's so cute and sweet. Can we keep it? Can we keep it??",
        choices: {
            a: {
                text: 'meow!',
                goto: 6
            },
            b: null
        }
    },
    6: {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesUpset,
            mouth: fm01MouthSerious00
        },
        spriteCenter: {
            body: KG070002,
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: fm02Body,
            eyes: fm02EyesBawl,
            mouth: fm02MouthCry
        },
        text: "Jen: I dunno Nan, it doesn't seem smart to smuggle a cat into the dorm..",
        choices: {
            a: {
                text: 'purrrr',
                goto: 7
            },
            b: null
        }
    },
    7: {
        background: mst1,
        spriteLeft: {
            body: fm01Body,
            eyes: fm01EyesSoft,
            mouth: fm01MouthSoft01
        },
        spriteCenter: {
            body: KG070002,
            eyes: '',
            mouth: ''
        },
        spriteRight: {
            body: fm02Body,
            eyes: fm02EyesBawl,
            mouth: fm02MouthCry
        },
        text: "Nan: **sniff** You're so mean, look how much she loves ussss",
        choices: {
            a: {
                text: 'nya~~',
                goto: 7
            },
            b: null
        }
    }

}

export default pages