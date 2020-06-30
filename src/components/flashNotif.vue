<template>
    <div :class="{warnTheme: notifTypes[0].active, neutralTheme: notifTypes[1].active, successTheme: notifTypes[2].active, errTheme: notifTypes[3].active, 'animated slideInRight pop-up fixed': true, 'slideOutRight': !notifStatus, top: notifTopPos, bottom: !notifTopPos}"  v-if="notifStatus">
        <div class="flex-row w100p space-btw">
            <div class="flex-col quicksand">
                <h4 class="bold">{{notifMessage.title}}</h4>
                <p class="pad-top-p5 text-p8" >{{notifMessage.text}}</p>
            </div>
            <img src="@/assets/img/cancel-white.png" class="cancel-icon ml-1 point" alt="" @click="closeNotif">
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    notifMessage () {
      return this.$store.getters.notifMessage
    },
    notifTypes () {
      return this.$store.getters.notifTypes
    },
    notifStatus () {
      return this.$store.getters.notifStatus
    },
    notifTopPos () {
      return  this.$store.getters.notifPos
    }
  },
  methods: {
    closeNotif () {
        this.$store.dispatch('closeNotif')
    }
  }
}
</script>

<style scoped>
    .ml-1{
        margin-left: 1rem;
    }
    .point{
        cursor: pointer;
    }
    .fixed{
        position: fixed;
    }
    .w100p{
        width: 100%;
    }
    .pad-top-p5{
        padding-top: .5rem;
    }
    .text-p8{
        font-size: .8rem;
    }
    .cancel-icon{
        width: 1.2rem;
        height: 1.2rem;
    }
    .pop-up{
        padding: 1.5rem;
        right: 1.5rem;
        z-index: 5000;
        width: 15rem;
        border-radius: 5px;
        box-shadow: 0 12px 24px rgba(0,0,0,.1);
        animation-duration: .7s;
    }
    .top{
      top: 15vh;
    }
    .bottom{
      bottom: 10vh;
    }
    .warnTheme{
        background: orange;
        color: white
    }
    .neutralTheme{
        background: #222222;
        color: white;
    }
    .successTheme{
        background: rgb(5, 161, 76);
        color: white;
    }
    .errTheme{
        background: rgb(248, 30, 30);
        color: white;
    }
    .quicksand{
        font-family: 'Quicksand', sans-serif;
    }
    .bold{
        font-weight: 700;
    }
    .semi-bold{
        font-weight: 600;
    }
    .norm{
        font-weight: 500;
    }
    .sticky{
  position: sticky;
  top: 0;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.flex-row-reverse{
  display: flex;
  flex-direction: row-reverse;
}
.wrap{
  flex-wrap: wrap;
}
.flex-col{
  display: flex;
  flex-direction: column;
}
.a-c{
  align-items: center;
  justify-content: center;
}
.a-n-c{
  justify-content: center;
}
.a-c-n{
  align-items: center;
}
.space-btw{
  justify-content: space-between;
}
.space-even{
  justify-content: space-evenly;
}
.align-center{
  align-items: center;  
}
.wrap{
  flex-wrap: wrap;
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.animated.delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.animated.delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.animated.delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

.animated.fast {
  -webkit-animation-duration: 800ms;
  animation-duration: 800ms;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.animated.slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.slower {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

@media (prefers-reduced-motion) {
  .animated {
    -webkit-animation: unset !important;
    animation: unset !important;
    -webkit-transition: none !important;
    transition: none !important;
  }
}
</style>