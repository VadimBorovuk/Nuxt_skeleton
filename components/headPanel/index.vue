<template>
  <header>
    <ul class="flex items-center gap-2 h-[70px] bg-neutral-700 text-white px-6">
      <li>
        <NuxtLink to="/" active-class="text-blue-500 font-bold">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink active-class="text-blue-500 font-bold" to="/manager">manager</NuxtLink>
      </li>
      <li>
        <NuxtLink active-class="text-blue-500 font-bold" to="/workplace">workplace</NuxtLink>
      </li>
      <li>
        <NuxtLink active-class="text-blue-500 font-bold" to="/calendar">calendar</NuxtLink>
      </li>
    </ul>


    <h1>{{ locale }}</h1>
    <b>cookie - {{ cc_locale }}</b>
    <div>
      <button class="mr-2" @click="changeLang('en')">en</button>
      <button class="mr-2" @click="changeLang('uk')">uk</button>
    </div>

    <client-only>
      <p>{{ $t('t.back') }}</p>
    </client-only>
  </header>
</template>

<script setup>
import {useLangStore} from "~/stores/langStore";
import {useI18n} from 'vue-i18n'; // Додано імпорт useI18n
import {useCookie} from 'nuxt/app'; // Додано імпорт useCookie

const cc_locale = useCookie('cc_locale');
const {selectLocale} = useLangStore();

// Викликаємо useI18n і зберігаємо результат у змінну i18n
const i18n = useI18n();

// Деструктуризація i18n для отримання необхідних значень
const {t, locale, setLocale, locales} = i18n;

const changeLang = async (value) => {
  await selectLocale(value, i18n); // Передаємо i18n
  cc_locale.value = value;
  setLocale(value);
};
</script>

<style scoped>
/* Стилі */
</style>
