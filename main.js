Vue.createApp({
  data() {
    return {
      message: "Hi!!",
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
            title: "wenispr2703"
          }
        },
        imageProfile:
          "./images/profile.png",
      },
      articles: [
        {
          title: 'Pengaruh Musik Untuk Kesehatan Mental.',
          description: "Gemar mendengarkan musik dapat memberikan dampak bagi kesehatan.",
          thumbnail: 'https://i.pinimg.com/564x/eb/53/b2/eb53b291af241664a3d106f749fdf161.jpg'
        },
        {
          title: 'Pengaruh Musik Untuk Kesehatan Mental.',
          description: "Gemar mendengarkan musik dapat memberikan dampak bagi kesehatan.",
          thumbnail: 'https://i.pinimg.com/564x/eb/53/b2/eb53b291af241664a3d106f749fdf161.jpg'
        },
        {
          title: 'Pengaruh Musik Untuk Kesehatan Mental.',
          description: "Gemar mendengarkan musik dapat memberikan dampak bagi kesehatan.",
          thumbnail: 'https://i.pinimg.com/564x/eb/53/b2/eb53b291af241664a3d106f749fdf161.jpg'
        }
      ]
    };
  },
  mounted:()=>{    
    axios.get("https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/header.json")
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}).mount("#app");
