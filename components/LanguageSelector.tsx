"use client";

import { useLanguage, type Language } from "@/components/LanguageProvider";

const LANGUAGES: {
  code: Language;
  name: string;
  flag: string;
}[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "tn", name: "Setswana", flag: "🇧🇼" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
];

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  function handleLanguageChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setLanguage(event.target.value as Language);
  }

  return (
    <div className="language-selector">
      <span className="language-selector-icon" aria-hidden="true">
        🌐
      </span>

      <label
        className="language-selector-label"
        htmlFor="chainlab-language-select"
      >
        {t("language")}
      </label>

      <select
        id="chainlab-language-select"
        value={language}
        onChange={handleLanguageChange}
        aria-label="Choose website language"
      >
        {LANGUAGES.map((item) => (
          <option key={item.code} value={item.code}>
            {item.flag} {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}