#  Stripe Checkout Integration

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Stripe](https://img.shields.io/badge/Stripe-API-635bff?logo=stripe)](https://stripe.com)
[![Tests](https://img.shields.io/badge/tests-7%20passed-brightgreen)]()
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://stripe-checkout-nextjs.vercel.app)

Демонстрационный проект интеграции Stripe Checkout с Next.js App Router. Включает тесты (Vitest), обработку ошибок, страницы успеха/отмены, адаптивный дизайн.

## 🚀 Демо

[https://stripe-checkout-nextjs.vercel.app](https://stripe-checkout-nextjs.vercel.app)

## 🛠️ Технологии

- Next.js 15 (App Router)
- TypeScript
- Stripe API
- Vitest + Testing Library
- Vercel (деплой)

## 📦 Установка

```bash
git clone https://github.com/Zero4nik/stripe-checkout-nextjs.git
cd stripe-checkout-nextjs
npm install
cp .env.example .env.local
# Добавь свои ключи Stripe в .env.local
npm run dev
