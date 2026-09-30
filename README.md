# SLIMAX — лендинг

Один проект, четыре языка:
`/` (английский, по умолчанию), `/pl`, `/cs`, `/sk`, `/en`.
Каждая страница — одна картинка `public/landing-<язык>.webp` с невидимыми ссылками поверх неё:
PL / CS / SK / EN (переключают язык), «Консультация» и «Перейти в каталог» (пульсирует).

## Где менять ссылки
`config/site.ts`:
- `CONSULTATION_URL` — кнопка «Консультация»
- `CATALOG_URL` — кнопка «Перейти в каталог»
- `DEFAULT_LOCALE` — какой язык открывается на главной "/"

## Деплой на Vercel
Загрузить папку в репозиторий GitHub, затем на vercel.com: Add New → Project → выбрать репозиторий → Deploy.
Или из терминала: `npm install && npx vercel --prod`.

## Как изменить тексты на картинках
1. Отредактировать `design/texts.json` (или дизайн в `design/poster.html`).
2. `cd design && npm install && npm run render`
   Скрипт перерисует `public/landing-*.webp` и сам пересчитает координаты зон в `config/landing.ts`.
