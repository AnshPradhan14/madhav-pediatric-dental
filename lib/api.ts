const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

function getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("admin_token");
}

function authHeaders(): HeadersInit {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, options);
    if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "Unknown error" }));
        throw new Error(err.detail ?? "Request failed");
    }
    return res.json() as Promise<T>;
}

// Auth
export async function login(email: string, password: string): Promise<string> {
    const body = new URLSearchParams({ username: email, password });
    const res = await fetch(`${API_BASE}/api/auth/login`, { method: "POST", body, headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    if (!res.ok) throw new Error("Invalid credentials");
    const data = await res.json();
    return data.access_token;
}

// Upload
export async function uploadImage(file: File): Promise<string> {
    const token = getToken();
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API_BASE}/api/upload`, { method: "POST", headers, body: formData });
    if (!res.ok) throw new Error("Upload failed");
    const data = await res.json();
    return `${API_BASE}${data.url}`;
}

// Appointments
export const getAppointments = () => apiFetch<Appointment[]>("/api/appointments", { headers: authHeaders() });
export const createAppointment = (data: AppointmentCreate) => apiFetch<Appointment>("/api/appointments", { method: "POST", headers: authHeaders(), body: JSON.stringify(data) });
export const updateAppointmentStatus = (id: number, status: string) => apiFetch<Appointment>(`/api/appointments/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify({ status }) });
export const deleteAppointment = (id: number) => apiFetch(`/api/appointments/${id}`, { method: "DELETE", headers: authHeaders() });

// Doctors
export const getDoctors = () => apiFetch<Doctor[]>("/api/doctors");
export const createDoctor = (data: DoctorCreate) => apiFetch<Doctor>("/api/doctors", { method: "POST", headers: authHeaders(), body: JSON.stringify(data) });
export const updateDoctor = (id: number, data: Partial<DoctorCreate>) => apiFetch<Doctor>(`/api/doctors/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) });
export const deleteDoctor = (id: number) => apiFetch(`/api/doctors/${id}`, { method: "DELETE", headers: authHeaders() });

// Treatments
export const getTreatments = () => apiFetch<Treatment[]>("/api/treatments");
export const createTreatment = (data: TreatmentCreate) => apiFetch<Treatment>("/api/treatments", { method: "POST", headers: authHeaders(), body: JSON.stringify(data) });
export const updateTreatment = (id: number, data: Partial<TreatmentCreate>) => apiFetch<Treatment>(`/api/treatments/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) });
export const deleteTreatment = (id: number) => apiFetch(`/api/treatments/${id}`, { method: "DELETE", headers: authHeaders() });

// Gallery
export const getGallery = () => apiFetch<GalleryImage[]>("/api/gallery");
export const addGalleryImage = (data: GalleryImageCreate) => apiFetch<GalleryImage>("/api/gallery", { method: "POST", headers: authHeaders(), body: JSON.stringify(data) });
export const deleteGalleryImage = (id: number) => apiFetch(`/api/gallery/${id}`, { method: "DELETE", headers: authHeaders() });

// Messages
export const getMessages = () => apiFetch<ContactMessage[]>("/api/messages", { headers: authHeaders() });
export const submitContact = (data: ContactMessageCreate) => apiFetch<ContactMessage>("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
export const deleteMessage = (id: number) => apiFetch(`/api/messages/${id}`, { method: "DELETE", headers: authHeaders() });

// Settings
export const getSettings = () => apiFetch<WebsiteSettings>("/api/settings");
export const updateSettings = (data: Partial<WebsiteSettings>) => apiFetch<WebsiteSettings>("/api/settings", { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) });

// Types
export interface Appointment { id: number; name: string; phone: string; email?: string; treatment?: string; preferred_date?: string; message?: string; status: string; created_at: string; }
export interface AppointmentCreate { name: string; phone: string; email?: string; treatment?: string; preferred_date?: string; message?: string; }
export interface Doctor { id: number; name: string; specialization: string; qualification: string; description: string; photo_url?: string; }
export interface DoctorCreate { name: string; specialization: string; qualification: string; description: string; photo_url?: string; }
export interface Treatment { id: number; title: string; description: string; icon?: string; }
export interface TreatmentCreate { title: string; description: string; icon?: string; }
export interface GalleryImage { id: number; image_url: string; caption?: string; }
export interface GalleryImageCreate { image_url: string; caption?: string; }
export interface ContactMessage { id: number; name: string; email?: string; phone?: string; message: string; created_at: string; }
export interface ContactMessageCreate { name: string; email?: string; phone?: string; message: string; }
export interface WebsiteSettings { id?: number; phone?: string; whatsapp?: string; address?: string; clinic_hours?: string; email?: string; facebook_url?: string; instagram_url?: string; }
