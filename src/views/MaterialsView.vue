<script setup>

import {useLabels} from "@/stores/labels";

const label = useLabels().label

</script>

<template>
  <div class="container">
    <div class="materials">
      <h1>{{ label(['materials', 'header']) }}</h1>
      <ul>
        <li>
          <a href="https://lms.ibispb.ru/" target="_blank">{{ label(['materials', 'link-lms']) }}</a>
        </li>
        <li>
          <a href="https://outlook.com/" target="_blank">{{ label(['materials', 'link-mail']) }}</a>
        </li>
        <li>
          <a href="https://iprbookshop.ru/" target="_blank">{{ label(['materials', 'link-e-lib']) }}</a>
        </li>
        <li>
          <a href="https://www.ibispb.ru/students/magazine-bank-a/" target="_blank">
            {{ label(['materials', 'link-magazine']) }}
          </a>
        </li>
        <li>
          <a href="https://www.ibispb.ru/students/student-life/" target="_blank">
            {{ label(['materials', 'link-stud-life']) }}
          </a>
        </li>
        <li>
          <a href="https://www.ibispb.ru/contacts/" target="_blank">{{ label(['materials', 'link-contacts']) }}</a>
        </li>
        <li>
          <a href="https://www.ibispb.ru/sveden/paid_edu/payment/" target="_blank">
            {{ label(['materials', 'link-pay']) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/materials";

</style>