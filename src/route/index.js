// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Olena',
    lastname: 'Bakulina',
  },
  position: 'developer',
  salary: ' 200000',
  address: 'Ukrain, Odessa',


};
var footer = {
  social: {
    email: {
      text: 'bakulinaelena800@gmail.com',
      href: 'bakulinaelena800@gmail.com',
    },
    phone: {
      text: '+420773164125',
      href: 'tel:+420773164125',


    },
  },
}

//==================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('', {




  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'resume',
    },
    header,

    main: {
      summary: {
        title: 'summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`
      },
      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`
      },
    },
    footer,



  })
})

// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'resume | education',
    },
    header,

    main: {

      educations: [
        { name: 'дет сад', isEnd: true },
        { name: 'школа', isEnd: true },
        { name: 'университет', isEnd: true },
      ],
      certificates: [
        { name: 'js pro', id: 76856 },
        { name: 'js', id: 98766 },
        { name: 'basik', id: 76876 },

      ],



    },
    footer,


  })
})

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'resume',
    },
    header,
    main: {
      skills: [
        {
          name: 'html',
          point: 10,
          istop: true,
        },
        {
          name: 'handlebars',
          point: 10,
        },
        {
          name: 'vs code',
          point: 9,
        },
        {
          name: 'git',
          point: 6,
        },
        {
          name: 'terminal',
          point: 10,
        },
        {
          name: 'php',
          point: null,
        },

        {
          name: 'react.js',
          point: 0,
        },
      ],
    },
    footer,


  })
})



// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'resume | work',
    },
    header,

    main: {
      works: [
        {
          position: 'junior Fullstack Developer',
          company: {
            name: 'git hub',
            url: 'https://resume.com.ua/',
          },
          duration: {
            from: '1.05.2023',
            to: null,
          },
          projectAmount: 3,
          projec: [
            {
              name: 'resume',
              url: 'https://github.com/',
              about: 'сайт про технологии',
              stacks: [
                {
                  name: 'react. js',
                },
                {
                  name: 'html/ css',
                },
                {
                  name: 'nodejs',
                },
              ],
              awards: [
                {
                  name: 'я учюсь в этой школе'
                },
                {
                  name: 'мне очень нравится'
                },
              ],
            },

          ],
        },
      ],


    },


    footer,


  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopreview', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopreview', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },
    formBlock: {
      header: 'Відгуки покупців про Ноут',
      rating: {
        title: 'Оцінка',
        value: '4.5/5',
      },
      actionBlock: {
        tabs: [
          { text: 'Про товар' },
          { text: 'Характеристики' },
          { text: 'Відгуки', isActive: true },
        ],
        report: {
          title: 'Залиште відгук про товар',
          button: {
            text: 'Написати відгук',
            link: 'https://www.youtube.com/',
          },
        },
      },
      feedbackBlock: {
        title:
          'Хочете поділитись своєю думкою про наш магазин?',
        buttons: [
          {
            text: 'Додати відгук',
            isWarning: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Позитивні відгуки',
            isSuccess: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Негативні відгуки',
            isDanger: true,
            link: 'https://www.youtube.com/',
          },
        ],
      },
      goodsInfo: {
        photo: 'https://picsum.photos/110/100',
        name: 'Ноут Asus',
        price: '25 000 ₴',
        inMarket: true,
        buttons: [
          {
            text: 'Купити',
            isPrimary: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Купити в кредит',
            isSecondary: true,
            link: 'https://www.youtube.com/',
          },
        ],
        seller: {
          title: 'Продавець',
          value: 'Machinery',
        },
      },
    },

    reviewList: [
      {
        title: {
          userName: 'Іван Іванов',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
          ],
          advantages: {
            title: 'Переваги',
            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Перегрів, ємкість жосткого диску',
          },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
            {
              userName: 'Користувач',
              date: '3 січня 2023',
              text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
            },
            {
              userName: 'Користувач',
              date: '10 січня 2023',
              text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
            },
          ],
        },
      },
      {
        title: {
          userName: 'Петро Петров',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
          ],
          advantages: {
            title: 'Переваги',
            text: 'Обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Не виявлено',
          },
          images: ['https://picsum.photos/110/100'],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
          ],
        },
      },
    ],

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router

