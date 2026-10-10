export interface Organization {
  id: string;
  name: string;
  city: string;
  type: string;
  childrenCount: number;
  ageRange: string;
  address: string;
  phone: string;
  email: string;
  director: string;
  image: string;
  gallery?: string[];
  description: string;
  status: 'Verified' | 'Urgent Support Needed' | 'Needs Updated' | string;
  needs: string;
  urgentNeeds?: { item: string; needed: number; received: number; unit: string }[];
}

export const DEFAULT_ORGANIZATIONS: Organization[] = [
  {
    id: 'nadezhda',
    name: 'Детский дом «Надежда»',
    city: 'Бишкек',
    type: 'Детский дом',
    childrenCount: 45,
    ageRange: '3 – 18 лет',
    address: 'г. Бишкек, ул. Жумабека 123',
    phone: '+996 312 12 34 56',
    email: 'nadejda@mail.kg',
    director: 'Асанова Гульнара Касымовна',
    status: 'Urgent Support Needed',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Детский дом «Надежда» заботится о детях, оставшихся без попечения родителей. Здесь дети получают уход, питание, обучение и поддержку. Учреждение нуждается в нашей помощи для создания более комфортных условий и развития детей.',
    needs: 'Школьные принадлежности, средства гигиены, теплая одежда',
    urgentNeeds: [
      { item: 'Школьные принадлежности (тетради, ручки)', needed: 150, received: 105, unit: 'компл.' },
      { item: 'Средства личной гигиены (мыло, пасты)', needed: 80, received: 30, unit: 'наборов' },
      { item: 'Зимняя теплая одежда и куртки', needed: 45, received: 10, unit: 'шт.' },
    ],
  },
  {
    id: 'svet',
    name: 'Детский дом «Свет»',
    city: 'Ош',
    type: 'Детский дом',
    childrenCount: 38,
    ageRange: '2 – 18 лет',
    address: 'г. Ош, ул. Ленина 88',
    phone: '+996 322 23 45 67',
    email: 'svet-osh@mail.kg',
    director: 'Исмаилов Бакыт Токтогулович',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Учреждение в южном регионе Кыргызстана, в котором воспитываются дети дошкольного и школьного возраста. В детском доме организованы кружки творчества и спортивные секции.',
    needs: 'Зимняя обувь, учебники, продукты длительного хранения',
    urgentNeeds: [
      { item: 'Зимняя теплая обувь (размеры 30-40)', needed: 38, received: 15, unit: 'пар' },
      { item: 'Учебники и художественная литература', needed: 120, received: 90, unit: 'книг' },
    ],
  },
  {
    id: 'dostuk',
    name: 'Детский дом «Достук»',
    city: 'Каракол',
    type: 'Детский дом',
    childrenCount: 30,
    ageRange: '5 – 18 лет',
    address: 'г. Каракол, ул. Гагарина 14',
    phone: '+996 392 24 56 78',
    email: 'dostuk-karakol@mail.kg',
    director: 'Мамытова Венера Султановна',
    status: 'Needs Updated',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      '«Достук» находится в Иссык-Кульской области. Особое внимание здесь уделяется профориентации подростков, изучению иностранных языков и цифровой грамотности.',
    needs: 'Ноутбуки для компьютерного класса, спортивный инвентарь',
    urgentNeeds: [
      { item: 'Ноутбуки для компьютерного класса', needed: 6, received: 2, unit: 'шт.' },
      { item: 'Спортивный инвентарь (мячи, сетки)', needed: 20, received: 12, unit: 'ед.' },
    ],
  },
  {
    id: 'aidanek',
    name: 'Детский дом «Айданэк»',
    city: 'Токмок',
    type: 'Детский дом',
    childrenCount: 28,
    ageRange: '4 – 17 лет',
    address: 'г. Токмок, ул. Дубовицкого 5',
    phone: '+996 313 85 12 34',
    email: 'aidanek@mail.kg',
    director: 'Кожоева Айнура Муратовна',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Уютный дом для 28 воспитанников в Чуйской области. Педагоги уделяют внимание социализации и подготовке выпускников к самостоятельной жизни.',
    needs: 'Школьная форма, канцтовары',
    urgentNeeds: [
      { item: 'Школьная форма', needed: 28, received: 18, unit: 'компл.' },
      { item: 'Канцтовары', needed: 50, received: 40, unit: 'наборов' },
    ],
  },
  {
    id: 'umut',
    name: 'Реабилитационный центр «Умут»',
    city: 'Бишкек',
    type: 'Центр',
    childrenCount: 22,
    ageRange: '2 – 16 лет',
    address: 'г. Бишкек, 7 мкр, 12/1',
    phone: '+996 312 51 09 87',
    email: 'umut-center@mail.kg',
    director: 'Садыков Эркин Жолдошевич',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Специализированный центр реабилитации для детей с ограниченными возможностями здоровья. Требуются развивающие тренажеры и квалифицированная помощь волонтеров.',
    needs: 'Развивающие логопедические игры, массажные коврики',
    urgentNeeds: [
      { item: 'Развивающие логопедические игры', needed: 15, received: 5, unit: 'наборов' },
    ],
  },
  {
    id: 'akzhol',
    name: 'Детский дом «Ак-Жол»',
    city: 'Нарын',
    type: 'Детский дом',
    childrenCount: 35,
    ageRange: '3 – 18 лет',
    address: 'г. Нарын, ул. Орозбакова 42',
    phone: '+996 352 25 67 89',
    email: 'akzhol-naryn@mail.kg',
    director: 'Темиров Азамат Керимович',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Высокогорный детский дом в Нарынской области. Суровый климат требует постоянной обеспеченности теплом, теплой одеждой и калорийным питанием.',
    needs: 'Теплые зимние одеяла и пледы, термобелье',
    urgentNeeds: [
      { item: 'Теплые зимние одеяла и пледы', needed: 35, received: 20, unit: 'шт.' },
    ],
  },
];

export const STORAGE_KEY_HOMES = 'sky_admin_homes';

export function getOrganizations(): Organization[] {
  if (typeof window === 'undefined') return DEFAULT_ORGANIZATIONS;
  const saved = localStorage.getItem(STORAGE_KEY_HOMES);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error('Error parsing homes from storage', e);
    }
  }
  return DEFAULT_ORGANIZATIONS;
}

export async function fetchOrganizations(): Promise<Organization[]> {
  try {
    const { getHomes } = await import('@/lib/db');
    return await getHomes();
  } catch (e) {
    console.warn('fetchOrganizations failed, using getOrganizations():', e);
    return getOrganizations();
  }
}

export function saveOrganizations(orgs: Organization[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_HOMES, JSON.stringify(orgs));
    window.dispatchEvent(new Event('sky_homes_updated'));
  }
}

