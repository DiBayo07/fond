import { DEFAULT_ORGANIZATIONS, Organization } from '@/data/homesData';

const STORAGE_KEY_HOMES = 'sky_admin_homes';
const STORAGE_KEY_VOLUNTEERS = 'sky_admin_volunteers';
const STORAGE_KEY_SETTINGS = 'sky_admin_settings';

// Supabase environment variables (optional - connects to free Supabase cloud PostgreSQL)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const DEFAULT_SETTINGS = {
  phone: '+996 709 809 017',
  cardNumber: '4169 5853 5799 0323',
  email: 'info@projectsky.kg',
  office: 'Кыргызстан, г. Бишкек, ул. Токтогула 125',
  instagram: '@projectsky',
};

// ==========================================
// 1. ДЕТСКИЕ ДОМА (HOMES)
// ==========================================
export async function getHomes(): Promise<Organization[]> {
  // If Supabase is configured, fetch directly from cloud DB
  if (isSupabaseConfigured) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/homes?select=*`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY_HOMES, JSON.stringify(data));
          }
          return data;
        }
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local storage:', e);
    }
  }

  // Fallback: LocalStorage / Default mock data
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY_HOMES);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {}
    }
  }
  return DEFAULT_ORGANIZATIONS;
}

export async function saveHome(home: Organization): Promise<Organization> {
  // 1. Save to Supabase cloud DB if configured
  if (isSupabaseConfigured) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/homes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: 'resolution=merge-duplicates',
        },
        body: JSON.stringify(home),
      });
    } catch (e) {
      console.error('Error saving to Supabase:', e);
    }
  }

  // 2. Save to LocalStorage and trigger reactive update across tabs
  if (typeof window !== 'undefined') {
    let current = await getHomes();
    const existingIndex = current.findIndex((h) => h.id === home.id);
    if (existingIndex >= 0) {
      current[existingIndex] = { ...current[existingIndex], ...home };
    } else {
      current = [...current, home];
    }
    localStorage.setItem(STORAGE_KEY_HOMES, JSON.stringify(current));
    window.dispatchEvent(new Event('sky_homes_updated'));
  }
  return home;
}

export async function deleteHome(id: string): Promise<boolean> {
  // 1. Delete from Supabase
  if (isSupabaseConfigured) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/homes?id=eq.${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
    } catch (e) {
      console.error('Error deleting from Supabase:', e);
    }
  }

  // 2. Delete from LocalStorage
  if (typeof window !== 'undefined') {
    const current = await getHomes();
    const updated = current.filter((h) => h.id !== id);
    localStorage.setItem(STORAGE_KEY_HOMES, JSON.stringify(updated));
    window.dispatchEvent(new Event('sky_homes_updated'));
  }
  return true;
}

// ==========================================
// 2. НАСТРОЙКИ И РЕКВИЗИТЫ (SETTINGS)
// ==========================================
export async function getSettings() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
  }
  return DEFAULT_SETTINGS;
}

export async function saveSettings(settings: Partial<typeof DEFAULT_SETTINGS>) {
  if (typeof window !== 'undefined') {
    const current = await getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(updated));
    return updated;
  }
  return settings;
}

// ==========================================
// 3. АНКЕТЫ ВОЛОНТЁРОВ (VOLUNTEERS)
// ==========================================
export async function getVolunteers() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY_VOLUNTEERS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
  }
  return [];
}

export async function saveVolunteer(vol: any) {
  if (typeof window !== 'undefined') {
    const current = await getVolunteers();
    const newVol = { ...vol, id: Date.now(), date: new Date().toLocaleDateString('ru-RU') };
    const updated = [newVol, ...current];
    localStorage.setItem(STORAGE_KEY_VOLUNTEERS, JSON.stringify(updated));
    return newVol;
  }
  return vol;
}

export async function updateVolunteerStatus(id: number, status: string) {
  if (typeof window !== 'undefined') {
    const current = await getVolunteers();
    const updated = current.map((v: any) => (v.id === id ? { ...v, status } : v));
    localStorage.setItem(STORAGE_KEY_VOLUNTEERS, JSON.stringify(updated));
    return updated;
  }
}
