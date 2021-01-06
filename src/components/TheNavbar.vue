<template>
  <nav class="navbar navbar-expand-md navbar-light bg-warning">
    <div class="container">
      <router-link to="/" class="navbar-brand">BaiToto</router-link>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- ml-auto AND text-right -->
        <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/flip-game" class="nav-link">
              Flip Game
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
