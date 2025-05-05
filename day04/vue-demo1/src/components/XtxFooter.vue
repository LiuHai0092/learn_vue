<template>
  <!-- 版权底部 -->
  <div class="footer">
    
  </div>
</template>

<script>
export default {
  name: 'XtxFooter',
}
</script>

<style>
.footer {
  height: 580px;
  background-color: #F5F5F5;
}
.footer .service {
  padding: 60px 0;
  height: 180px;
  border-bottom: 1px solid #E8E8E8;
}
.footer .service ul {
  display: flex;
  justify-content: space-around;
}
.footer .service li {
  display: flex;
  line-height: 58px;
}
.footer .service span {
  display: block;
  margin-right: 20px;
  width: 58px;
  height: 58px;
  background-image: url(~@/assets/images/sprite.png);
}
.footer .service li:nth-child(2) span {
  background-position: 0 -58px;
}
.footer .service li:nth-child(3) span {
  background-position: 0 -116px;
}
.footer .service li:nth-child(4) span {
  background-position: 0 -174px;
}
.footer .service p {
  font-size: 28px;
}
.footer .help {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.footer .help .left {
  display: flex;
}
.footer .help .left dl {
  margin-right: 84px;
}
.footer .help .left dt {
  margin-bottom: 30px;
  font-size: 18px;
}
.footer .help .left dd {
  margin-bottom: 10px;
}
.footer .help .left dd a {
  color: #969696;
}
.footer .help .right ul {
  display: flex;
  align-items: flex-start;
}
.footer .help .right li:nth-child(1) {
  margin-right: 55px;
  text-align: center;
}
.footer .help .right div {
  margin-bottom: 10px;
  width: 120px;
  height: 120px;
  color: #969696;
}
.icon-customer-service {
  margin-left: 3px;
  color: #00BE9A;
}
.copyright {
  margin-top: 100px;
  text-align: center;
  color: #A1A1A1;
}
.copyright p {
  margin-bottom: 15px;
}
.copyright a {
  margin: 0 10px;
  color: #A1A1A1;
}
</style>
