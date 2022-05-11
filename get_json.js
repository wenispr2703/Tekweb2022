Vue.createApp({
  data() {
    return {
      message: "Hii!!",
      header: {},
    };
  },
  methods: {
    getHeaderData()
    {
      axios
        .get(
          "https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/contents/header.json"
        )
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getHeaderData()
  },
}).mount("#app");
