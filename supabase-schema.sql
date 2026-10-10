-- ==============================================================
-- SQL Скрипт для бесплатной базы данных Supabase (PostgreSQL)
-- Проект: Project Sky (Фонд помощи детям Кыргызстана)
-- ==============================================================

-- 1. Таблица детских домов и партнерских организаций
CREATE TABLE IF NOT EXISTS homes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  type TEXT DEFAULT 'Детский дом',
  children_count INTEGER DEFAULT 0,
  age_range TEXT DEFAULT '3 – 18 лет',
  address TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  email TEXT DEFAULT '',
  director TEXT DEFAULT '',
  image TEXT NOT NULL,
  description TEXT DEFAULT '',
  status TEXT DEFAULT 'Verified',
  needs TEXT DEFAULT '',
  urgent_needs JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Таблица анкет волонтёров
CREATE TABLE IF NOT EXISTS volunteers (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT DEFAULT '',
  age TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  occupation TEXT DEFAULT '',
  directions JSONB DEFAULT '[]'::jsonb,
  availability TEXT DEFAULT 'Выходные',
  motivation TEXT DEFAULT '',
  parent_name TEXT DEFAULT '',
  parent_phone TEXT DEFAULT '',
  status TEXT DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Таблица пожертвований
CREATE TABLE IF NOT EXISTS donations (
  id TEXT PRIMARY KEY,
  amount NUMERIC NOT NULL,
  target TEXT NOT NULL,
  donor_name TEXT DEFAULT 'Анонимный благотворитель',
  donor_email TEXT DEFAULT '',
  payment_method TEXT NOT NULL,
  frequency TEXT DEFAULT 'once',
  status TEXT DEFAULT 'Completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Таблица системных настроек и реквизитов
CREATE TABLE IF NOT EXISTS settings (
  id TEXT PRIMARY KEY DEFAULT 'main',
  phone TEXT DEFAULT '+996 709 809 017',
  card_number TEXT DEFAULT '4169 5853 5799 0323',
  email TEXT DEFAULT 'info@projectsky.kg',
  office TEXT DEFAULT 'Кыргызстан, г. Бишкек, ул. Токтогула 125',
  instagram TEXT DEFAULT '@projectsky',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Включение Row Level Security (RLS) для защиты данных
ALTER TABLE homes ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Публичный доступ на чтение для посетителей сайта
CREATE POLICY "Public read homes" ON homes FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON settings FOR SELECT USING (true);
CREATE POLICY "Public insert volunteers" ON volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert donations" ON donations FOR INSERT WITH CHECK (true);
