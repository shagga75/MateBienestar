import React, { useEffect, useState } from 'react';
import { Lead } from '../types';
import { leadService } from '../services/leadService';
import { Trash2, Loader2, Users } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const data = await leadService.getLeads();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este contacto?')) {
      await leadService.deleteLead(id);
      fetchLeads();
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="animate-spin text-brand-green mb-4" size={32} />
        <p className="text-gray-500">Cargando base de datos...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <div className="bg-brand-green p-2 rounded-lg text-white">
          <Users size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Panel de Embajadores</h2>
          <p className="text-sm text-gray-500">{leads.length} solicitudes recibidas</p>
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
          <p className="text-gray-500">No hay solicitudes de embajadores aún.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-800 uppercase font-bold text-xs">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Fecha</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Contacto</th>
                <th className="px-4 py-3">Ubicación</th>
                <th className="px-4 py-3 rounded-tr-lg text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border rounded-lg">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(lead.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {lead.name}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-gray-900">{lead.email}</span>
                      <span className="text-xs text-gray-500">{lead.phone}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {lead.city}, {lead.country}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button 
                      onClick={() => handleDelete(lead.id)}
                      className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};