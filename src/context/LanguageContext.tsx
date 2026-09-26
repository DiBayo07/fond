'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ru' | 'kg' | 'en';

export interface Translations {
  // Navigation
  navHome: string;
  navAbout: string;
  navHomes: string;
  navVolunteer: string;
  navReports: string;
  navDonate: string;
  navContact: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  heroDonateBtn: string;
  heroVolunteerBtn: string;
  heroWhoNeedsBtn: string;

  // Features bar
  featSupport: string;
  featSupportDesc: string;
  featEdu: string;
  featEduDesc: string;
  featVolunteer: string;
  featVolunteerDesc: string;
  featFundraising: string;
  featFundraisingDesc: string;
  featEduSupport: string;
  featEduSupportDesc: string;
  featCommunity: string;
  featCommunityDesc: string;

  // Sections
  urgentNeedsTitle: string;
  viewAll: string;
  urgentNeedsHelpBtn: string;
  urgentItem: string;

  ourImpactTitle: string;
  statKids: string;
  statVolunteers: string;
  statEvents: string;
  statRaised: string;

  recentEventsTitle: string;
  viewReports: string;

  howCanIHelpTitle: string;
  howCanIHelpDesc: string;
  helpDonateMoney: string;
  helpDonateMoneyDesc: string;
  helpDonateItems: string;
  helpDonateItemsDesc: string;
  helpVolunteer: string;
  helpVolunteerDesc: string;
  helpTeach: string;
  helpTeachDesc: string;

  transparencyTitle: string;
  transparencyDesc: string;
  transparencyBtn: string;

  // Footer
  footerDesc: string;
  footerLinksTitle: string;
  footerContactsTitle: string;
  footerRights: string;
}

const translations: Record<Language, Translations> = {
  ru: {
    navHome: 'ГЛАВНАЯ',
    navAbout: 'О ПРОЕКТЕ',
    navHomes: 'ДЕТСКИЕ ДОМА',
    navVolunteer: 'ВОЛОНТЁРУ',
    navReports: 'ОТЧЁТЫ',
    navDonate: 'ПОЖЕРТВОВАТЬ',
    navContact: 'КОНТАКТЫ',

    heroTitle: 'Project Sky',
    heroSubtitle: 'Supporting Kids & Youth',
    heroDesc: 'Благотворительный проект, направленный на поддержку детей и молодёжи Кыргызстана через помощь детским домам, образовательные занятия, волонтёрство и благотворительные инициативы.',
    heroDonateBtn: 'ПОЖЕРТВОВАТЬ',
    heroVolunteerBtn: 'СТАТЬ ВОЛОНТЁРОМ',
    heroWhoNeedsBtn: 'УЗНАТЬ, КОМУ НУЖНА ПОМОЩЬ',

    featSupport: 'Поддержка детских домов',
    featSupportDesc: 'Помощь организациям в соответствии с их потребностями.',
    featEdu: 'Образовательные занятия',
    featEduDesc: 'Проведение занятий для детей в детских домах, которые поддерживает Project Sky.',
    featVolunteer: 'Волонтёрство',
    featVolunteerDesc: 'Привлечение людей, готовых помогать своим временем и навыками.',
    featFundraising: 'Благотворительные сборы',
    featFundraisingDesc: 'Организация сборов на конкретные нужды детских домов.',
    featEduSupport: 'Образовательная поддержка',
    featEduSupportDesc: 'Занятия для детей в детских домах (Не публичные курсы).',
    featCommunity: 'Сообщество',
    featCommunityDesc: 'Объединяем людей ради общей цели и лучшего будущего.',

    urgentNeedsTitle: 'Срочные потребности',
    viewAll: 'СМОТРЕТЬ ВСЕ →',
    urgentNeedsHelpBtn: 'ПОМОЧЬ →',
    urgentItem: 'Срочно необходимо:',

    ourImpactTitle: 'Наш вклад',
    statKids: 'детей получили помощь',
    statVolunteers: 'волонтёров',
    statEvents: 'проведённых мероприятий',
    statRaised: 'сом собрано',

    recentEventsTitle: 'Последние мероприятия',
    viewReports: 'СМОТРЕТЬ ОТЧЁТЫ →',

    howCanIHelpTitle: 'Каждый может помочь',
    howCanIHelpDesc: 'Иногда помощь — это пожертвование, вещи, знания или несколько часов своего времени.',
    helpDonateMoney: 'Пожертвовать деньги',
    helpDonateMoneyDesc: 'Поддержать конкретный детский дом или Project Sky.',
    helpDonateItems: 'Передать вещи',
    helpDonateItemsDesc: 'Одежда, книги, канцтовары, средства гигиены, техника.',
    helpVolunteer: 'Стать волонтёром',
    helpVolunteerDesc: 'Помогать в мероприятиях и деятельности проекта.',
    helpTeach: 'Помочь с занятиями',
    helpTeachDesc: 'Помогать в проведении развивающих занятий для детей.',

    transparencyTitle: 'Прозрачность',
    transparencyDesc: 'Мы стремимся открыто рассказывать о проведённой работе, собранных средствах и результатах помощи.',
    transparencyBtn: 'СМОТРЕТЬ ОТЧЁТЫ',

    footerDesc: 'Мост между людьми, которые хотят помочь, и детьми и молодежью, которым нужна поддержка.',
    footerLinksTitle: 'Быстрые ссылки',
    footerContactsTitle: 'Контакты',
    footerRights: 'Все права защищены.',
  },
  kg: {
    navHome: 'БАШКЫ БЕТ',
    navAbout: 'ДОЛБООР ЖӨНҮНДӨ',
    navHomes: 'БАЛДАР ҮЙЛӨРҮ',
    navVolunteer: 'ЫКТЫЯРЧЫЛАРГА',
    navReports: 'ОТЧЕТТОР',
    navDonate: 'ЖАРДАМ БЕРҮҮ',
    navContact: 'БАЙЛАНЫШ',

    heroTitle: 'Project Sky',
    heroSubtitle: 'Supporting Kids & Youth',
    heroDesc: 'Кыргызстандагы балдар үйлөрүнө колдоо көрсөтүү, билим берүүчү сабактар, ыктыярчылык жана кайрымдуулук демилгелери аркылуу балдарды жана жаштарды колдоого багытталган долбоор.',
    heroDonateBtn: 'ЖАРДАМ БЕРҮҮ',
    heroVolunteerBtn: 'ЫКТЫЯРЧЫ БОЛУУ',
    heroWhoNeedsBtn: 'КАНДАЙ ЖАРДАМ КЕРЕК?',

    featSupport: 'Балдар үйлөрүн колдоо',
    featSupportDesc: 'Муктаждыктарга жараша мекемелерге көмөк көрсөтүү.',
    featEdu: 'Билим берүү сабактары',
    featEduDesc: 'Project Sky колдогон балдар үйлөрүндө өнүктүрүүчү сабактар.',
    featVolunteer: 'Ыктыярчылык',
    featVolunteerDesc: 'Өз убактысын жана билимин арнаган адамдарды тартуу.',
    featFundraising: 'Кайрымдуулук каражат чогултуу',
    featFundraisingDesc: 'Балдардын конкреттүү муктаждыктарына каражат топтоо.',
    featEduSupport: 'Билим берүүгө колдоо',
    featEduSupportDesc: 'Балдар үйлөрүндөгү балдар үчүн атайын сабактар.',
    featCommunity: 'Коомдоштук',
    featCommunityDesc: 'Жалпы максат жана жакшы келечек үчүн адамдарды бириктирүү.',

    urgentNeedsTitle: 'Шашылыш муктаждыктар',
    viewAll: 'БААРЫН КӨРҮҮ →',
    urgentNeedsHelpBtn: 'ЖАРДАМ БЕРҮҮ →',
    urgentItem: 'Тез арада керектелет:',

    ourImpactTitle: 'Биздин салым',
    statKids: 'бала жардам алды',
    statVolunteers: 'ыктыярчылар',
    statEvents: 'өткөрүлгөн иш-чаралар',
    statRaised: 'сом чогултулду',

    recentEventsTitle: 'Акыркы иш-чаралар',
    viewReports: 'ОТЧЕТТОРДУ КӨРҮҮ →',

    howCanIHelpTitle: 'Ар бир адам жардам бере алат',
    howCanIHelpDesc: 'Кээде жардам — бул акчалай салым, буюмдар, билим же бир нече саат убактыңыз.',
    helpDonateMoney: 'Акчалай жардам берүү',
    helpDonateMoneyDesc: 'Балдар үйүнө же Project Sky долбооруна колдоо көрсөтүү.',
    helpDonateItems: 'Буюмдарды өткөрүп берүү',
    helpDonateItemsDesc: 'Кийим-кече, китептер, окуу куралдары, гигиеналык каражаттар.',
    helpVolunteer: 'Ыктыярчы болуу',
    helpVolunteerDesc: 'Долбоордун иш-чараларына жана ишмердүүлүгүнө көмөктөшүү.',
    helpTeach: 'Сабактар менен жардам берүү',
    helpTeachDesc: 'Балдар үчүн пайдалуу жана кызыктуу сабактарды өткөрүү.',

    transparencyTitle: 'Ачыктык жана тазалык',
    transparencyDesc: 'Биз жасалган иштер, чогулган каражаттар жана көмөктүн натыйжалары тууралуу ачык айтууга умтулабыз.',
    transparencyBtn: 'ОТЧЕТТОРДУ КӨРҮҮ',

    footerDesc: 'Жардам берүүнү каалаган адамдар менен колдоого муктаж балдардын ортосундагы көпүрө.',
    footerLinksTitle: 'Тез шилтемелер',
    footerContactsTitle: 'Байланыштар',
    footerRights: 'Бардык укуктар корголгон.',
  },
  en: {
    navHome: 'HOME',
    navAbout: 'ABOUT US',
    navHomes: "CHILDREN'S HOMES",
    navVolunteer: 'VOLUNTEER',
    navReports: 'REPORTS',
    navDonate: 'DONATE',
    navContact: 'CONTACT',

    heroTitle: 'Project Sky',
    heroSubtitle: 'Supporting Kids & Youth',
    heroDesc: 'A charitable project dedicated to supporting children and youth in Kyrgyzstan through aid to children’s homes, educational lessons, volunteering, and charity campaigns.',
    heroDonateBtn: 'DONATE',
    heroVolunteerBtn: 'BECOME A VOLUNTEER',
    heroWhoNeedsBtn: 'SEE WHO NEEDS HELP',

    featSupport: "Children's Homes Support",
    featSupportDesc: 'Targeted assistance to institutions according to their actual needs.',
    featEdu: 'Educational Sessions',
    featEduDesc: "Classes for children in shelters and homes supported by Project Sky.",
    featVolunteer: 'Volunteering',
    featVolunteerDesc: 'Involving energetic people willing to donate their skills and time.',
    featFundraising: 'Charity Fundraising',
    featFundraisingDesc: 'Organizing targeted fundraising for essential needs.',
    featEduSupport: 'Educational Mentorship',
    featEduSupportDesc: 'Non-public dedicated developmental classes for kids.',
    featCommunity: 'Community Building',
    featCommunityDesc: 'Uniting compassionate people for a brighter tomorrow.',

    urgentNeedsTitle: 'Urgent Needs',
    viewAll: 'VIEW ALL →',
    urgentNeedsHelpBtn: 'HELP NOW →',
    urgentItem: 'Urgently needed:',

    ourImpactTitle: 'Our Impact',
    statKids: 'children reached',
    statVolunteers: 'active volunteers',
    statEvents: 'events organized',
    statRaised: 'KGS collected',

    recentEventsTitle: 'Recent Activities',
    viewReports: 'VIEW REPORTS →',

    howCanIHelpTitle: 'Everyone Can Help',
    howCanIHelpDesc: 'Sometimes helping means a donation, warm clothes, knowledge, or just a few hours of your time.',
    helpDonateMoney: 'Donate Funds',
    helpDonateMoneyDesc: 'Support a specific children’s home or Project Sky directly.',
    helpDonateItems: 'Donate Items',
    helpDonateItemsDesc: 'Clothing, books, stationery, hygiene supplies, electronics.',
    helpVolunteer: 'Become a Volunteer',
    helpVolunteerDesc: 'Join our team for events, teaching, and logistics.',
    helpTeach: 'Help with Classes',
    helpTeachDesc: 'Teach languages, science, or life skills to children.',

    transparencyTitle: 'Transparency',
    transparencyDesc: 'We believe every donation deserves full transparency, public reporting, and audited spending.',
    transparencyBtn: 'VIEW REPORTS',

    footerDesc: 'A bridge between people who want to help and children & youth who need support.',
    footerLinksTitle: 'Quick Links',
    footerContactsTitle: 'Contacts',
    footerRights: 'All rights reserved.',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
  t: translations.ru,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('project_sky_lang') as Language | null;
    if (saved && (saved === 'ru' || saved === 'kg' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('project_sky_lang', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
