<template>
<div id="footer-wrapper">
    <div id="footer-container">
        <div id="copyright" class="footer-content-container">
            <p>© Copyright 2020 - SMARTEVENT.COM | Tous droits réservés</p>
        </div>
        <div id="socials_container" class="footer-content-container">
            <img src="../../public/img/icons/facebook-app-symbol.png" alt="" class="social-item">
            <img src="../../public/img/icons/instagram.png" alt="" class="social-item">
            <img src="../../public/img/icons/google-glass-logo.png" alt="" class="social-item">
        </div>
        <div id="footer_menu_container" class="footer-content-container">
            <ul id="nav-footer-container">
                <li class="nav-footer-item"><a href="#">Contact</a></li>
                <li class="nav-footer-item"><a href="#">Confidentialité</a></li>
                <li class="nav-footer-item"><a href="#">Mentions Légales</a></li>
                <li class="nav-footer-item"><a href="#">CGV</a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: `Footer`,
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#footer-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #F0F0F0;
    padding-top: 20px;
}

.footer-content-container{
    width: 33%;
}

#nav-footer-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.nav-footer-item{
    list-style: none;
}

.nav-footer-item > a {
    text-decoration: none;
    color: #000000;
}

#copyright{
    font-size: 14px;
}

#socials_container{
    display: flex;
    justify-content: center;
}

#socials_container > img:nth-child(2){
    margin: 0px 15px;
}

.social-item{
    width: 32px;
    height: 32px;
}
</style>