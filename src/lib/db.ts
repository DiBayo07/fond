import { DEFAULT_ORGANIZATIONS, Organization } from '@/data/homesData';

const STORAGE_KEY_HOMES = 'sky_admin_homes';
const STORAGE_KEY_VOLUNTEERS = 'sky_admin_volunteers';
const STORAGE_KEY_SETTINGS = 'sky_admin_settings';

// Supabase environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bosyeujkqjplpvbcxusp.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_1aIi7Ilw2ZTJVWWmePHF_g_7dYrgob6';

const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const DEFAULT_SETTINGS = {
  phone: '+996 709 809 017',
  cardNumber: '1033020001504962',
  recipientName: 'ИП Токтоналиева А. Т.',
  bankName: 'MBank / Mbusiness',
  email: 'info@projectsky.kg',
  office: 'Кыргызстан, г. Бишкек, ул. Токтогула 125',
  instagram: '@projectsky',
};

function toDbHome(home: Organization) {
  return {
    id: home.id,
    name: home.name,
    city: home.city,
    type: home.type || 'Детский дом',
    children_count: Number(home.childrenCount) || 0,
    age_range: home.ageRange || '3 – 18 лет',
    address: home.address || '',
    phone: home.phone || '',
    email: home.email || '',
    director: home.director || '',
    image: home.image || '',
    description: home.description || '',
    status: home.status || 'Verified',
    needs: home.needs || '',
    urgent_needs: home.urgentNeeds || [],
  };
}

function fromDbHome(dbHome: any): Organization {
  return {
    id: dbHome.id,
    name: dbHome.name,
    city: dbHome.city,
    type: dbHome.type || 'Детский дом',
    childrenCount: Number(dbHome.children_count) || Number(dbHome.childrenCount) || 0,
    ageRange: dbHome.age_range || dbHome.ageRange || '3 – 18 лет',
    address: dbHome.address || '',
    phone: dbHome.phone || '',
    email: dbHome.email || '',
    director: dbHome.director || '',
    image: dbHome.image || '',
    gallery: dbHome.gallery || [dbHome.image],
    description: dbHome.description || '',
    status: dbHome.status || 'Verified',
    needs: dbHome.needs || '',
    urgentNeeds: dbHome.urgent_needs || dbHome.urgentNeeds || [],
  };
}

// ==========================================
// 1. ДЕТСКИЕ ДОМА (HOMES)
// ==========================================
export async function getHomes(): Promise<Organization[]> {
  // If Supabase is configured, fetch directly from cloud DB
  if (isSupabaseConfigured) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/homes?select=*&order=name.asc`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map(fromDbHome);
          if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY_HOMES, JSON.stringify(mapped));
          }
          return mapped;
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
  const dbRecord = toDbHome(home);

  // 1. Save to Supabase cloud DB if configured
  if (isSupabaseConfigured) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/homes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: 'resolution=merge-duplicates',
        },
        body: JSON.stringify(dbRecord),
      });
      if (!res.ok) {
        console.error('Failed to save home to Supabase:', await res.text());
      }
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
  if (isSupabaseConfigured) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/settings?id=eq.main&select=*`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
      if (res.ok) {
        const rows = await res.json();
        if (Array.isArray(rows) && rows.length > 0) {
          const row = rows[0];
          const mapped = {
            phone: row.phone || DEFAULT_SETTINGS.phone,
            cardNumber: row.card_number || DEFAULT_SETTINGS.cardNumber,
            recipientName: row.recipient_name || DEFAULT_SETTINGS.recipientName,
            bankName: DEFAULT_SETTINGS.bankName,
            email: row.email || DEFAULT_SETTINGS.email,
            office: row.office || DEFAULT_SETTINGS.office,
            instagram: row.instagram || DEFAULT_SETTINGS.instagram,
          };
          if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(mapped));
          }
          return mapped;
        }
      }
    } catch (e) {
      console.warn('Failed to load settings from Supabase:', e);
    }
  }

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
  if (isSupabaseConfigured) {
    try {
      const dbPayload: any = {
        id: 'main',
        phone: settings.phone,
        card_number: settings.cardNumber,
        recipient_name: settings.recipientName || 'ИП Токтоналиева А. Т.',
        email: settings.email,
        office: settings.office,
        instagram: settings.instagram,
        updated_at: new Date().toISOString(),
      };
      await fetch(`${SUPABASE_URL}/rest/v1/settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: 'resolution=merge-duplicates',
        },
        body: JSON.stringify(dbPayload),
      });
    } catch (e) {
      console.error('Error saving settings to Supabase:', e);
    }
  }

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
  if (isSupabaseConfigured) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/volunteers?select=*&order=created_at.desc`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
      if (res.ok) {
        const rows = await res.json();
        if (Array.isArray(rows) && rows.length > 0) {
          const mapped = rows.map((r: any) => ({
            id: r.id,
            name: (r.first_name + ' ' + (r.last_name || '')).trim(),
            age: r.age,
            city: r.city,
            phone: r.phone,
            email: r.email,
            parentName: r.parent_name || '-',
            parentPhone: r.parent_phone || '-',
            directions: r.directions || [],
            status: r.status || 'New',
            date: new Date(r.created_at).toLocaleDateString('ru-RU'),
          }));
          if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY_VOLUNTEERS, JSON.stringify(mapped));
          }
          return mapped;
        }
      }
    } catch (e) {
      console.warn('Failed to load volunteers from Supabase:', e);
    }
  }

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
  if (isSupabaseConfigured) {
    try {
      const nameParts = (vol.name || '').split(' ');
      const dbRow = {
        first_name: nameParts[0] || vol.name,
        last_name: nameParts.slice(1).join(' ') || '',
        age: String(vol.age || ''),
        city: vol.city || '',
        phone: vol.phone || '',
        email: vol.email || '',
        occupation: vol.occupation || '',
        directions: vol.directions || [],
        availability: vol.availability || 'Выходные',
        motivation: vol.motivation || '',
        parent_name: vol.parentName || '',
        parent_phone: vol.parentPhone || '',
        status: vol.status || 'New',
      };
      await fetch(`${SUPABASE_URL}/rest/v1/volunteers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(dbRow),
      });
    } catch (e) {
      console.error('Error saving volunteer to Supabase:', e);
    }
  }

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
  if (isSupabaseConfigured) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/volunteers?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ status }),
      });
    } catch (e) {
      console.error('Error updating volunteer status in Supabase:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const current = await getVolunteers();
    const updated = current.map((v: any) => (v.id === id ? { ...v, status } : v));
    localStorage.setItem(STORAGE_KEY_VOLUNTEERS, JSON.stringify(updated));
    return updated;
  }
}
