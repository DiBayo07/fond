-- ==============================================================
-- SQL Скрипт для базы данных Supabase (PostgreSQL)
-- Проект: Project Sky (Фонд помощи детям Кыргызстана)
-- ==============================================================

-- 1. Таблица детских домов
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
  card_number TEXT DEFAULT '1033020001504962',
  recipient_name TEXT DEFAULT 'ИП Токтоналиева А. Т.',
  email TEXT DEFAULT 'info@projectsky.kg',
  office TEXT DEFAULT 'Кыргызстан, г. Бишкек, ул. Токтогула 125',
  instagram TEXT DEFAULT '@projectsky',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Включение Row Level Security (RLS)
ALTER TABLE homes ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики, если они существовали
DROP POLICY IF EXISTS "Allow all homes" ON homes;
DROP POLICY IF EXISTS "Allow all settings" ON settings;
DROP POLICY IF EXISTS "Allow all volunteers" ON volunteers;
DROP POLICY IF EXISTS "Allow all donations" ON donations;
DROP POLICY IF EXISTS "Public read homes" ON homes;
DROP POLICY IF EXISTS "Public read settings" ON settings;
DROP POLICY IF EXISTS "Public insert volunteers" ON volunteers;
DROP POLICY IF EXISTS "Public insert donations" ON donations;

-- Полный доступ для работы сайта и админ-панели через anon-ключ
CREATE POLICY "Allow all homes" ON homes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all settings" ON settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all volunteers" ON volunteers FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all donations" ON donations FOR ALL USING (true) WITH CHECK (true);

-- Первоначальные настройки реквизитов (ИП Токтоналиева А. Т., счет 1033020001504962)
INSERT INTO settings (id, phone, card_number, recipient_name, email, office, instagram)
VALUES ('main', '+996 709 809 017', '1033020001504962', 'ИП Токтоналиева А. Т.', 'info@projectsky.kg', 'Кыргызстан, г. Бишкек, ул. Токтогула 125', '@projectsky')
ON CONFLICT (id) DO UPDATE SET
  card_number = EXCLUDED.card_number,
  recipient_name = EXCLUDED.recipient_name;

-- Начальные данные детских домов (если таблица пуста)
INSERT INTO homes (id, name, city, type, children_count, age_range, address, phone, email, director, image, description, status, needs)
VALUES
('nadezhda', 'Детский дом «Надежда»', 'Бишкек', 'Детский дом', 45, '3 – 18 лет', 'г. Бишкек, ул. Жумабека 123', '+996 312 12 34 56', 'nadejda@mail.kg', 'Асанова Гульнара Касымовна', 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop', 'Детский дом заботится о детях, оставшихся без попечения родителей.', 'Urgent Support Needed', 'Школьные принадлежности, средства гигиены, теплая одежда'),
('svet', 'Детский дом «Свет»', 'Ош', 'Детский дом', 38, '2 – 18 лет', 'г. Ош, ул. Ленина 88', '+996 322 23 45 67', 'svet-osh@mail.kg', 'Исмаилов Бакыт Токтогулович', 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop', 'Учреждение в южном регионе Кыргызстана для детей дошкольного и школьного возраста.', 'Verified', 'Зимняя обувь, учебники, продукты длительного хранения'),
('dostuk', 'Детский дом «Достук»', 'Каракол', 'Детский дом', 30, '5 – 18 лет', 'г. Каракол, ул. Гагарина 14', '+996 392 24 56 78', 'dostuk-karakol@mail.kg', 'Мамытова Венера Султановна', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop', 'Особое внимание уделяется профориентации подростков и изучению языков.', 'Needs Updated', 'Ноутбуки для компьютерного класса, спортивный инвентарь')
ON CONFLICT (id) DO NOTHING;
