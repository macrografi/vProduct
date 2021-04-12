<template>
  <div id="app">
    <particle></particle>
    <div class="container position-relative">
      <header class="d-flex align-items-center justify-content-between">
        <router-link class="logo" to="/"> <i class="first-text ml-3">Cage Works</i><i> - Wooden Works</i> </router-link>
        <ul class="d-flex auth-content mr-3">
          <li>Welcome User</li>
          <li class="mx-3">-</li>
          <li class="auth-menu">
            <a href="#">LOGIN</a>
            or
            <a href="#">REGISTER</a>
          </li>
        </ul>
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
            <p class="text-right mr-3 my-1">
              © 2020 - Istanbul Cage Works
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style lang="scss">
@import 'assets/scss/core.scss';
</style>
<script>
import Particle from '@/components/Particle';
export default {
  components: {
    particle: Particle,
  },
};
</script>
