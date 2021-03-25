import enUS from './en-us'
import de from './de'

const languages = {
  "en-us": "English",
  de: "Deutsch",
}


export default {
  'en-us': {...enUS, ...languages },
  'de': {...de, ...languages},
}
