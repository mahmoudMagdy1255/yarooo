<template>
  <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{name:'Yaro'}">Yaro</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name:'Home'}">
            <i class="fa fa-home"></i>
            Home
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link class="nav-link" :to="{name:'Login'}">
            Login
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link class="nav-link" :to="{name:'Register'}">
            Register
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link class="nav-link" :to="{}">
            About
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link class="nav-link" :to="{}">
            Contact Us
          </router-link>
        </li>

      </ul>
      
    </div>
  </nav>
</template>

<script>
  export default{

  }
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  font-size: 0.75rem;
  position: absolute;
  right: 0;
  font-family: sans-serif;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 3px;
  line-height: 12px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  top: -10px;
}

@media (min-width: 576px) {
  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 768px) {
  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}
</style>