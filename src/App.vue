<template>
  <div id="app">
    <particle></particle>
    <div class="container position-relative">
      <header class="d-flex align-items-center">
        <router-link class="logo justify-content-start" to="/">
          <i class="first-text ml-3">Cage Works</i><i> - Wooden Works</i>
        </router-link>
      </header>
      <div class="nav-scroller">
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto d-flex align-items-center">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About Cage Works</router-link>
              </li>
              <li>
                <router-link to="/product">Product</router-link>
              </li>
              <b-nav-item-dropdown text="Products" right>
                <li>
                  <router-link class="dropdown-item" to="/product">Gold finch Cages</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/product">Green finch Cages</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/product">Canary Cages</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/product">Crossbred Cages</router-link>
                </li>
              </b-nav-item-dropdown>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="main-content">
        <div class="tile-bg">
          <router-view />
        </div>
      </div>
      <footer>
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <ul class="d-flex ml-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Cage Works</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-lg-6">
            <p class="text-right mr-3">
              © 2020 - Istanbul Cage Works
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}
canvas {
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

  header {
    height: 55px;
    .logo {
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
      font-family: 'Marck Script', cursive;
      font-size: 18px;
      color: #fff;
      .first-text {
        font-size: 28px;
        line-height: 29px;
      }
    }
    .logo:hover {
      text-decoration: none;
      color: #fff;
    }
  }
  .nav-scroller {
    background: rgba(0, 0, 0, 0.5);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding: 1em 1em 0 1em;
    nav {
      .dropdown-toggle::after {
        vertical-align: 0;
      }
      a {
        cursor: pointer;
        background: #ededed;
        font-family: 'Marck Script', cursive;
        font-size: 20px;
        line-height: 26px;
        font-style: normal;
        text-align: center;
        text-decoration: none;
        border: 1px solid #dcdcdc;
        position: relative;
        text-shadow: 1px 1px 0 #ffffff;
        color: #666;
        margin: 10px;
        padding: 0 10px !important;
        box-shadow: inset 0 1px 0 0 #ffffff;
        border-radius: 42px;
      }
      a:hover {
        background-color: #e3e3e3;
      }
      .dropdown-menu {
        li:first-child a {
          border: none;
          box-shadow: none;
        }
        padding: 10px;
        background: #ededed;
        box-shadow: inset 0 1px 0 0 #ffffff;
        width: 200px;
        top: 42px !important;
        right: inherit;
        bottom: inherit;
        left: 10px !important;
        a.dropdown-item {
          position: relative;
          text-shadow: 1px 1px 0 #ffffff;
          border-top: 1px dotted #666;
          border-right: 0;
          border-bottom: 0;
          border-left: 0;
          font-size: 19px;
          border-radius: 0;
          margin: 0;
        }
      }
    }
  }
  .main-content {
    margin: 0;
    padding: 0 1rem 1rem;
    background: rgba(0, 0, 0, 0.5);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    .tile-bg {
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAPoCAYAAADqSB/uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE1M0VGREZBMzgyMTFFM0FFNzNEN0VGNDBDOTQ1QjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE1M0VGREVBMzgyMTFFM0FFNzNEN0VGNDBDOTQ1QjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNzVCQUY2ODFENzdDNTFBRUY0NDc5MjMwNTA5NTNGQTIiIHN0UmVmOmRvY3VtZW50SUQ9Ijc1QkFGNjgxRDc3QzUxQUVGNDQ3OTIzMDUwOTUzRkEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+w5rk8AAAAPBJREFUeNrsz7EJADAIBED3cP85DSkC6ZLvrxARXvRqZuqqfs1RePcofBY6easYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBi+Ly0BBgDdCFgMesCM4wAAAABJRU5ErkJggg==')
        repeat #000;
    }
  }
  footer {
    font-family: 'Marck Script', cursive;
    font-size: 18px;
    color: #928059;
    text-shadow: 1px 1px 0 #000000;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style-type: none;
        margin: 5px 10px;
        position: relative;
      }
      li a {
        color: #928059;
      }
      li a:hover {
        text-decoration: underline;
        color: #928059;
      }
      li a:before {
        content: '|';
        position: absolute;
        top: 0;
        right: -10px;
        font-size: 20px;
      }
    }
  }
}
</style>
<script>
import Particle from '@/components/Particle';
export default {
  components: {
    particle: Particle,
  },
};
</script>
