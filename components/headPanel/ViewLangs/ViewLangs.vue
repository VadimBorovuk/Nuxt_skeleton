<template>
  <UDropdown :items="langsList"
             :popper="{ placement: 'bottom-start' }">
    <UKbd class="bg-atlantis-500 text-white px-2 py-1 rounded-md"
          size="lg" :value="locale.toLocaleUpperCase()"/>
  </UDropdown>
  <!--  <div class="ml-3">-->
  <!--    <div class="flex items-center">-->
  <!--      <button @click="changeLang('en')">En</button>-->
  <!--      <button @click="changeLang('uk')">Uk</button>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script setup>
import {useLangStore} from "~/stores/langStore";
import {useI18n} from 'vue-i18n'; // Додано імпорт useI18n
import {useCookie} from 'nuxt/app'; // Додано імпорт useCookie

const cc_locale = useCookie('cc_locale');
const {selectLocale, locales} = useLangStore();

// Викликаємо useI18n і зберігаємо результат у змінну i18n
const i18n = useI18n();

// Деструктуризація i18n для отримання необхідних значень
const {t, locale} = i18n;

const changeLang = async (value) => {
  await selectLocale(value, i18n); // Передаємо i18n
  cc_locale.value = value;
  // setLocale(value);
};

const langsList = computed(() => {
  return [locales.map((lang) => ({
        label: lang.code,
        disabled: locale === lang.code,
        click: async (e) => {
          await selectLocale(e.target.textContent, i18n);
        }
      }
  ))]
})

const items = [
  [{
    label: 'en',
    disabled: false,
    click: async (e) => {
      await selectLocale(e.target.textContent, i18n);
    }
  },
    {
      label: 'uk',
      disabled: false,
      click: async (e) => {
        await selectLocale(e.target.textContent, i18n);
      }
    }]
]
</script>

<style lang="scss" scoped>

</style>
