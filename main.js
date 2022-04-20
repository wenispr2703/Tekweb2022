Vue.createApp({
  data() {
    return {
      message: "MyProfilee",
      header: {
        title: "Weni Sepriani",
        description:
          "Be beautiful according to your own version.",
        social: {
          ig: {
            url: "https://instagram.com/weniseprianiii__",
            title: "weniseprianiii__",
          },
          github: {
            url: "https://github.com/wenispr2703",
            title: "wenispr2703",
          },
        },
        imageProfile: 'images/profile.png',
      },
      portofolio: [
        {
          title: 'Artikel 1',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate facilis, dolore sunt nemo necessitatibus similique fugiat dicta maxime atque quis!',
          image: 'https://i.pinimg.com/originals/ae/ea/85/aeea85a49816cabad5e3809297c5c3f8.jpg'
        },
        {
          title: 'Artikel 2',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate facilis, dolore sunt nemo necessitatibus similique fugiat dicta maxime atque quis!',
          image: 'https://i.pinimg.com/originals/1e/8e/47/1e8e47c874c0beabe158717fb623e11b.jpg'
        },
        
      ]
    };
  },
}).mount("#app");