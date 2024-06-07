import { createI18n } from 'vue-i18n'
import translate_kh from "./km/index"

const i18n = createI18n({
    locale: 'kh',
    fallbackLocale: 'en',
    messages: {
      en: {
        message: {
          hello: 'hello',
          home: 'Home',
          about: 'About',
          service: 'Service',
          contact: 'Contact',
          upload: 'Upload',
          user: 'User',
          login: 'Login',
          gotoabout: 'Go to about',
          count: 'Count',
          increment: 'Increment',
          decrement: 'Decrement',
        }
      },
      kh: translate_kh
    }
  })

  export default i18n