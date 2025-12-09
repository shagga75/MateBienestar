import { Lead } from '../types';

const DB_KEY = 'mate_bienestar_leads';

// Simula una latencia de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const leadService = {
  // Simula: POST /api/leads
  async createLead(data: Omit<Lead, 'id' | 'date' | 'status'>): Promise<Lead> {
    await delay(1000); // Simular tiempo de servidor

    const newLead: Lead = {
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      status: 'new'
    };

    // "Database" Insert
    const currentLeads = this.getLeadsSync();
    const updatedLeads = [newLead, ...currentLeads];
    localStorage.setItem(DB_KEY, JSON.stringify(updatedLeads));

    return newLead;
  },

  // Simula: GET /api/leads
  async getLeads(): Promise<Lead[]> {
    await delay(500);
    return this.getLeadsSync();
  },

  // Helper síncrono interno para leer la DB
  getLeadsSync(): Lead[] {
    try {
      const data = localStorage.getItem(DB_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error reading database", error);
      return [];
    }
  },

  // Simula: DELETE /api/leads/:id
  async deleteLead(id: string): Promise<void> {
    await delay(300);
    const leads = this.getLeadsSync();
    const filtered = leads.filter(l => l.id !== id);
    localStorage.setItem(DB_KEY, JSON.stringify(filtered));
  }
};