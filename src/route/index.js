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
router.get('/home', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('home', {
    // ↙ сюди вводимо JSON дані
    layout: 'home',
  })
})

// Підключаємо роутер до бек-енду
module.exports = router



