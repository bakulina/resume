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
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    layout: 'basik',
    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })




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



//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {
    layout: 'basik',

    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================





// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router
