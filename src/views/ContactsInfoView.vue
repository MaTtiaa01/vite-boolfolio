<script>
export default {
  name: "ContactsInfoView",
  data() {
    return {};
  },
};
</script>

<template>
  <section class="contacts">
    <div
      class="container p-5 text-center d-flex flex-column justify-content-between align-items-center"
    >
      <div class="touch p-5 d-flex">
        <img src="../assets/img/contact.png" alt="" />
        <div class="d-flex flex-column justify-content-center text">
          <h1 class="text-uppercase">Let's Get in Touch!</h1>
          <div class="mail d-flex align-items-center justify-content-center">
            <img src="../assets/img/mailbox.png" alt="mailbox" />
            <div class="mx-3" href="mailto: mattia2001@live.it">
              mattia2001@live.it
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  background-color: rgba(93, 112, 131, 0.676);
  //background-image: url(../assets/img/contact.png);
  background-position: center;
  background-repeat: no-repeat;
  //background-size: cover;
  padding-top: 3rem;

  .container {
    height: 1000px;

    .touch {
      width: 80%;
      height: 80%;
      background-color: white;

      h1 {
        font-size: 30px;
        font-weight: bold;
        color: black;
        font-weight: bold;
        padding: 0.3rem;
      }
      .text {
        width: 100%;
        background-color: rgba(93, 112, 131, 0.676);
      }
    }

    .mail {
      background-color: white;
      img {
        width: 80px;
      }
      div {
        font-weight: bold;
        font-size: 22px;
      }
    }
  }
}
</style>
