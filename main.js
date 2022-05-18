Vue.createApp({
  data() {
    return {
      massage:"Hi",
      header: {
        title: "Weni Sepriani",
        desc: "Seorang mahasiswi program studi Sistem Informasi Universitas Ahmad Dahlan angkatan tahun 2020. Masih sangat baru dalam hal coding, masih perlu banyak belajar dan referensi. Tidak harus terburu buru tidak harus sekarang, perlahan tapi pasti karna hal indah butuh waktu. Life is not about taking what you sow, stay a good person because the things you sow maybe can be replaced by someone else. Stay as a human being who has the principle of --stay a good person even if you are not treated well.--",
        description: "Be beautiful according to your own version.",
        social: {
          ig: {
            url: "https://instagram.com/weniseprianiii__",
            title: " weniseprianiii__ ",
          },
          github: {
            url: "https://github.com/wenispr2703",
            title: " wenispr2703 ",
          }
        },
        imageProfile:
          "./images/profile.png",
      },
      articles:[],
      article:null,
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get(
          "https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/contents/header.json"
        )
        .then((res) => {
          this.header = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get(
          "https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/contents/articles.json"
        )
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const articles = urlParams.get('article');
      var converter = new showdown.Converter();
      console.log(articles);
      axios
        .get(
          src = "https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/contents/" + articles
        )
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  beforeMount() {
    this.getHeaderData(),
      this.getArticles(),
      this.getMarkdown()
  }
}).mount("#app");

