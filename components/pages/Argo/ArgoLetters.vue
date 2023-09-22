<template>
  <div class="letters">
    <svg
      class="letters__letter letters__letter--A"
      xmlns="http://www.w3.org/2000/svg"
      width="244"
      height="258"
      viewBox="0 0 244 258"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="1"
          x2="0"
          y1="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop
            offset="0"
            stop-color="var(--stop-color)"
            stop-opacity="var(--stop-opacity-1)"
          ></stop>
          <stop
            offset="1"
            stop-color="var(--stop-color)"
            stop-opacity="var(--stop-opacity-2)"
          ></stop>
        </linearGradient>
      </defs>
      <path
        id="A"
        class="letter"
        d="M151.394-245.566l108.364 244H209.7l-25.463-59.385H75.171L51.461-1.566H1.758l101.163-244zM89.573-96.756h79.209l-41.449-96.587z"
        transform="rotate(90 .096 -1.662)"
      />
    </svg>
    <svg
      class="letters__letter letters__letter--R"
      xmlns="http://www.w3.org/2000/svg"
      width="244"
      height="200"
      viewBox="0 0 244 200"
    >
      <path
        id="R"
        class="letter"
        d="M115.161-245.566q34.5 0 56.217 19.038t21.716 49.6q0 20.785-10.771 36.242t-31.961 24.365A70.88 70.88 0 0 1 171.2-99.2q9.11 10.828 22.6 36.5 22.412 44.366 33.27 61.134h-52.714q-5.429-8.034-14.711-25.675-20.315-38.95-29.773-52.486t-18.213-19.212a36.2 36.2 0 0 0-20.14-5.676H74.356V-1.566H27.07v-244zm-10.683 104.1q18.564 0 29.159-9.257t10.6-25.326q0-16.767-10.508-25.064t-29.947-8.3H74.356v67.943z"
        transform="rotate(90 12.752 -14.318)"
      />
    </svg>
    <svg
      class="letters__letter letters__letter--G"
      xmlns="http://www.w3.org/2000/svg"
      width="252"
      height="234"
      viewBox="0 0 252 234"
    >
      <path
        id="G"
        class="letter"
        d="M156.148-248.73q45.427 0 90.149 20.223v43.436q-44.722-22.685-88.036-22.685-26.939 0-47.892 10.727a77.093 77.093 0 0 0-32.485 30.863q-11.533 20.135-11.533 44.931 0 37.633 25.09 60.582T157.556-37.7a116.685 116.685 0 0 0 21.569-1.934 146.664 146.664 0 0 0 24.562-7.386v-40.8h-40.673v-37.105h88.212v101.289q-18.135 12.661-43.577 19.783a195.352 195.352 0 0 1-52.91 7.122q-38.912 0-70.517-16t-49.3-44.843q-17.7-28.84-17.7-64.363 0-36.05 17.871-65.242t49.828-45.371q31.962-16.18 71.227-16.18z"
        transform="rotate(90 10.249 -6.978)"
      />
    </svg>
    <svg
      class="letters__letter letters__letter--O"
      xmlns="http://www.w3.org/2000/svg"
      width="252"
      height="270"
      viewBox="0 0 252 270"
    >
      <path
        id="O"
        class="letter"
        d="M152.4-248.73q38 0 68.375 15.739a120.806 120.806 0 0 1 48.414 45.371 122.621 122.621 0 0 1 18.035 64.978 122.416 122.416 0 0 1-17.6 63.923A121.264 121.264 0 0 1 221.3-13Q190.573 3.27 152.051 3.27q-38 0-69.076-16.53T34.561-58.719q-17.334-28.928-17.334-63.924a123.951 123.951 0 0 1 17.335-63.484 120.576 120.576 0 0 1 47.8-46.162Q112.83-248.73 152.4-248.73zM66.079-122.643q0 24.444 11.031 43.964a76.836 76.836 0 0 0 30.73 30.247Q127.538-37.7 152.4-37.7q37.646 0 61.9-23.74t24.251-61.2q0-24.444-10.944-44.052a75.816 75.816 0 0 0-30.817-30.335q-19.874-10.727-44.737-10.727t-44.737 10.815a74.976 74.976 0 0 0-30.556 30.245q-10.681 19.432-10.681 44.051z"
        transform="rotate(90 10.249 -6.978)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArgoLetters'
}
</script>

<style lang="scss" scoped>
.letters {
  position: absolute;
  top: -28px;
  left: -40px;
  width: 320px;
  display: flex;
  opacity: 0.2;

  @include bp(desktop) {
    right: 0;
    top: -80px;
    left: auto;
    justify-content: flex-end;
    width: 880px;
  }
}

.letters__letter {
  transform: rotate(-90deg);
  width: 90px;

  @include bp(desktop) {
    width: 252px;
  }

  &--A {
    height: 87px;

    @include bp(desktop) {
      height: 258px;
    }
  }

  &--R {
    height: 72px;
    margin-top: 8px;
    margin-left: -6px;

    @include bp(desktop) {
      height: 200px;
      margin-top: 28px;
      margin-left: -18px;
    }
  }

  &--G {
    height: 85px;
    margin-top: 4px;
    margin-left: -16px;

    @include bp(desktop) {
      height: 234px;
      margin-top: 15px;
      margin-left: -44px;
    }
  }

  &--O {
    height: 98px;
    margin-top: -2px;

    @include bp(desktop) {
      height: 270px;
    }
  }
}

.letter {
  fill: url(#linear-gradient);
}

#linear-gradient {
  --stop-color: #fff;
  --stop-opacity-1: 1;
  --stop-opacity-2: 0;
}

stop {
  transition: all 0.5s ease;
}

.nutshell__header:hover {
  #linear-gradient {
    --stop-opacity-1: 0;
    --stop-opacity-2: 1;
    transition: all 0.3s;
  }
}
</style>
