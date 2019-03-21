<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a href="#" v-on:click="closeMenu" id="show-sidebar" class="btn btn-sm btn-dark">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <router-link to="/admin">pro sidebar</router-link>
                        <div class="close-sidebar">
                            <button v-on:click="closeMenu"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="img/user.png" alt="User picture">
                        </div>
                        <div class="user-info">
                            <span class="user-name">Jhon
                                <strong>Smith</strong>
                            </span>
                            <span class="user-role">Administrator</span>
                            <span class="user-status">
                                <i class="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <div class="sidebar-item sidebar-search">
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control search-menu" placeholder="Search...">
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sidebar-menu  -->
                    <div class=" sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link to="/admin/overview">
                                    <i class="fa fa-tachometer-alt"></i>
                                    <span class="menu-text">Dashboard</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/products">
                                    <i class="fa fa-book"></i>
                                    <span class="menu-text">Products</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-calendar"></i>
                                    <span class="menu-text">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-folder"></i>
                                    <span class="menu-text">Examples</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>
            </nav>
            <!-- page-content  -->
            <main class="page-content">
                <router-view/>
            </main>
            <!-- page-content" -->
        </div>
        <!-- page-wrapper -->
    </div>
</template>

<script>
export default {
    name: 'Admin',
    methods: {
        closeMenu(){
            $('.page-wrapper').toggleClass('toggled');
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {
    display: none;
}
</style>
