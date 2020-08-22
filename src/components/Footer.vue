<script>
const name = "footer";
export default {
  name,
  data() {
    return {
      list: [
        "DMCA Disclaimer |",
        "2257 Statement |",
        "Terms of Service |",
        "观看方案|",
        "下载方案 |",
        "联络我们"
      ],
      hrefs: [
        "http://d.golog.jp",
        "http://d.golog.jp",
        "http://d.golog.jp",
        "http://d.golog.jp",
        "http://d.golog.jp",
        "http://d.golog.jp"
      ],
      content: "© AVHD101 2020 ",
      bottom: "草榴导航"
    };
  },
  computed: {
    _footer() {
      return [`${name}`];
    },
    _nav() {
      return [`${name}-nav`];
    },
    _content() {
      return [`${name}-content`];
    },
    _bottom() {
      return [`${name}-bottom`];
    }
  },
  methods: {
    handleClick() {
      window.location.href = "http://d.golog.jp";
    }
  },
  render() {
    const { content, bottom, _footer, _nav, _content, _bottom } = this;
    return (
      <div class={_footer}>
        <div class={_nav}>
          {this.list.map((item, index) => {
            return <a href={this.hrefs[index]}>{item}</a>;
          })}
        </div>
        <p class={_content}>{content}</p>
        <P class={_bottom} onClick={this.handleClick}>
          {bottom}
        </P>
      </div>
    );
  }
};
</script>

<style scoped lang="less">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 122px;
  background-color: #333333;
  box-sizing: border-box;
  &-nav {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    a {
      text-decoration: none;
      color: #a7a7a7;
      margin-right: 10px;
      &:hover {
        color: #ff8382;
      }
      &:active {
        color: #ff8382;
      }
    }
  }
  &-content {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 17px;
    color: #a7a7a7;
  }
  &-bottom {
    height: 30px;
    line-height: 30px;
    color: #a7a7a7;
    cursor: pointer;
    &:hover {
      color: #ff8382;
    }
    &:active {
      color: #ff8382;
    }
  }
}
</style>
