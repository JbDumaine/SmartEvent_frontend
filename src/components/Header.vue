<template>
<div id="wrapper">
    <div class="header_container">
    <nav id="nav_container">
        <ul id="list_nav">
            <li class="nav-item"><a href="">Accueil</a></li>
            <li class="nav-item"><a href="">Evènements</a></li>
            <li class="nav-item"><a href="">Contact</a></li>
        </ul>
    </nav>
    <a href="" id="logout_btn">Se déconnecter</a>
  </div>
</div>
</template>

<script>
export default {
  name: `Header`,
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header_container{
    display: flex;
    justify-content: space-between;
    background: $pink;
}

h1{
    font-family: 'Work Sans', sans-serif;
}

#nav_container{
    width: 50%;
}

.nav-item{
    list-style: none;
    background: $green;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 50px;
}

.nav-item > a{
    text-decoration: none;
    color: $white;
}

.nav-item:hover {
    background: $pink;
}

#logout_btn{
    background: $blue;
    color: $white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

#list_nav{
    display: flex;
    justify-content: space-around;
    height: 100%;
}
</style>