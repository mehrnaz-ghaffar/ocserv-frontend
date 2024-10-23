import { createI18n } from "vue-i18n";

// Function to dynamically import locale messages
function loadLocaleMessages() {
  const messages: { [key: string]: object } = {};

  // Manually import locales using dynamic import
  const localeFiles = import.meta.glob("./locales/*.json", { eager: true });

  Object.keys(localeFiles).forEach((filePath) => {
    const matched = filePath.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = localeFiles[filePath].default;
    }
  });

  return messages;
}

// Create i18n instance
const i18n = createI18n({
  legacy: true, // Use Composition API mode (Vue 3 default)
  locale: "fa", // Default locale
  fallbackLocale: "en", // Fallback locale
  globalInjection: true, // To use $t globally in components
  messages: loadLocaleMessages(), // Load messages dynamically
});

export default i18n;
