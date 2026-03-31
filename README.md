💳 Stripe Checkout Integration

https://img.shields.io/badge/Next.js-15-black?logo=next.js
https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript
https://img.shields.io/badge/Stripe-API-635bff?logo=stripe
https://img.shields.io/badge/tests-7%2520passed-brightgreen
https://img.shields.io/badge/Deployed%2520on-Vercel-000000?logo=vercel

Демонстрационный проект интеграции Stripe Checkout с Next.js App Router.
Включает тесты (Vitest), обработку ошибок, страницы успеха/отмены и адаптивный дизайн.

🚀 Демо
🔗 stripe-checkout-nextjs.vercel.app

🛠️ Технологии
Next.js 15 (App Router)

TypeScript

Stripe API

Vitest + Testing Library

Vercel (деплой)

📦 Установка и запуск
git clone https://github.com/Zero4nik/stripe-checkout-nextjs.git
cd stripe-checkout-nextjs
npm install
cp .env.example .env.local
Добавь свои ключи Stripe в .env.local:

env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
Запусти проект:
npm run dev


🧪 Запуск тестов
npm run test:run      # однократный запуск
npm run test          # просмотр


📁 Структура проекта
app/
├── api/create-payment/route.ts   # API эндпоинт Stripe
├── components/PaymentButton.tsx  # Кнопка оплаты
├── success/page.tsx              # Страница успеха (Suspense)
├── cancel/page.tsx               # Страница отмены
└── page.tsx                      # Главная страница

💳 Тестовая карта
Для тестовых платежей используй карту Stripe:
Номер: 4242 4242 4242 4242
Срок: любая будущая дата
CVV: 123
