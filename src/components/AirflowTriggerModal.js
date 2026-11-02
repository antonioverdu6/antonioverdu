import React, { useState } from 'react';
import { FaPlay, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { CONTACT_FORM_ACTION, CONTACT_EMAIL } from '../config';
import i18n from 'i18next';

export default function AirflowTriggerModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    priority: 'Oportunidad Profesional / Entrevista',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!CONTACT_FORM_ACTION) {
      // Fallback to mailto
      const subject = encodeURIComponent(`[Contacto Web] ${form.priority} — ${form.name} (${form.company || 'Empresa'})`);
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\nMotivo: ${form.priority}\n\nMensaje:\n${form.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setSubmitting(false);
      onClose();
      return;
    }

    try {
      const resp = await fetch(CONTACT_FORM_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `[Contacto Web] ${form.priority} — ${form.name} (${form.company || 'Empresa'})`
        })
      });

      if (resp.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2200);
      } else {
        alert('Error al enviar el formulario. Abriendo cliente de correo...');
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=Contacto&body=${encodeURIComponent(form.message)}`;
      }
    } catch (err) {
      console.error(err);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=Contacto&body=${encodeURIComponent(form.message)}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn font-mono text-xs">
      <div 
        className="bg-[#141c2e] border border-[#22304a] rounded-lg max-w-xl w-full shadow-2xl text-gray-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0a0e17] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#22304a] flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#017cee] animate-pulse flex-shrink-0"></span>
            <span className="text-white font-bold text-xs sm:text-sm truncate">
              Trigger DAG: <span className="text-[#00c7b7]">antonio_verdu</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#1f2937] flex-shrink-0"
            aria-label="Close modal"
          >
            <FaTimes size={15} />
          </button>
        </div>

        {/* Configuration Notice */}
        <div className="bg-[#0f172a] px-4 py-2 border-b border-[#22304a] text-[11px] text-gray-400 flex items-center justify-between">
          <span>{i18n.language === 'en' ? 'Direct Contact & Message Dispatch' : 'Formulario de Contacto & Despacho'}</span>
          <span className="text-[#00c7b7]">antoverdusal@gmail.com</span>
        </div>

        {/* Success Confirmation Toast */}
        {success ? (
          <div className="p-8 text-center space-y-3 font-mono">
            <FaCheckCircle className="text-[#00c07f] mx-auto" size={42} />
            <div className="text-base font-bold text-white">
              {i18n.language === 'en' ? 'Message Sent Successfully!' : '¡Mensaje Enviado con Éxito!'}
            </div>
            <p className="text-gray-300 font-sans text-xs">
              {i18n.language === 'en'
                ? 'Your message has been dispatched to Antonio Verdú. Expect a prompt response.'
                : 'Tu mensaje ha sido entregado a Antonio Verdú. Te responderé a la mayor brevedad.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 font-sans text-xs">
            
            {/* Sender Name */}
            <div>
              <label className="block text-gray-300 font-mono text-[11px] mb-1">
                {i18n.language === 'en' ? 'sender_name *' : 'Nombre *'}
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={i18n.language === 'en' ? 'e.g. María Gómez' : 'Ej: María Gómez'}
                className="w-full bg-[#0a0e17] border border-[#22304a] rounded px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00c7b7]"
              />
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 font-mono text-[11px] mb-1">
                  {i18n.language === 'en' ? 'sender_email *' : 'Email *'}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-[#0a0e17] border border-[#22304a] rounded px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00c7b7]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-mono text-[11px] mb-1">
                  {i18n.language === 'en' ? 'organization / company' : 'Empresa / Organización'}
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={i18n.language === 'en' ? 'e.g. Acme Corp' : 'Ej: Empresa o institución'}
                  className="w-full bg-[#0a0e17] border border-[#22304a] rounded px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00c7b7]"
                />
              </div>
            </div>

            {/* Reason Selection */}
            <div>
              <label className="block text-gray-300 font-mono text-[11px] mb-1">
                {i18n.language === 'en' ? 'message_category' : 'Motivo del Mensaje'}
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full bg-[#0a0e17] border border-[#22304a] rounded px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00c7b7]"
              >
                <option value="Oportunidad Profesional / Entrevista">
                  {i18n.language === 'en' ? 'Career Opportunity / Interview' : 'Oportunidad Profesional / Entrevista'}
                </option>
                <option value="Propuesta de Proyecto / Colaboración">
                  {i18n.language === 'en' ? 'Project Proposal / Collaboration' : 'Propuesta de Proyecto / Colaboración'}
                </option>
                <option value="Consulta Técnica / General">
                  {i18n.language === 'en' ? 'Technical Inquiry / General' : 'Consulta Técnica / General'}
                </option>
              </select>
            </div>

            {/* Payload Message */}
            <div>
              <label className="block text-gray-300 font-mono text-[11px] mb-1">
                {i18n.language === 'en' ? 'message_body *' : 'Mensaje *'}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder={i18n.language === 'en' ? 'Details of the opportunity or inquiry...' : 'Detalles de la propuesta, proyecto o consulta...'}
                className="w-full bg-[#0a0e17] border border-[#22304a] rounded px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00c7b7]"
              ></textarea>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#22304a] font-mono">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#0a0e17] hover:bg-[#1b263b] text-gray-300 border border-[#22304a] rounded transition text-xs"
              >
                {i18n.language === 'en' ? 'Cancel' : 'Cancelar'}
              </button>
              
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 bg-[#017cee] hover:bg-[#006bd1] text-white rounded transition text-xs font-bold flex items-center gap-1.5 shadow-md"
              >
                <FaPlay size={10} />
                <span>{submitting ? 'Enviando...' : (i18n.language === 'en' ? 'Send Message' : 'Enviar Mensaje')}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
