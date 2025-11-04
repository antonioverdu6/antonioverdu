import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CONTACT_FORM_ACTION, CONTACT_EMAIL } from '../config';
import { useTranslation } from 'react-i18next';

// Contact: form will POST to CONTACT_FORM_ACTION if set (e.g., Formspree endpoint).
// If CONTACT_FORM_ACTION is empty, the form falls back to opening the user's mail client via mailto:CONTACT_EMAIL.
export default function Contact(){
  const { t } = useTranslation();
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sending, setSending] = useState(false);

  function onChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function onSubmit(e){
    if(!CONTACT_FORM_ACTION){
      // fallback to mailto: open user's mail client with prefilled body
      e.preventDefault();
      const subjectRaw = t('contact.mailto_subject', { name: form.name || '' });
      const subject = encodeURIComponent(subjectRaw);
      const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    // If CONTACT_FORM_ACTION is set, submit via fetch so we can show success/failure without page reload.
    e.preventDefault();
    setSending(true);
    try{
      const resp = await fetch(CONTACT_FORM_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if(resp.ok){
        alert(t('alerts.form_send_success'));
        setForm({ name:'', email:'', message:'' });
      } else {
        const text = await resp.text();
        console.error('Form submit error', resp.status, text);
        alert(t('alerts.form_send_error'));
      }
    }catch(err){
      console.error(err);
      alert(t('alerts.form_send_error_network'));
    }finally{
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-max mx-auto max-w-xl">
  <h3 className="text-2xl font-semibold text-white">{t('contact.title')}</h3>
  <p className="text-gray-400 mt-2">{t('contact.subtitle')}</p>

        { !CONTACT_FORM_ACTION && (
          <div className="mt-4 text-sm text-yellow-300 bg-[rgba(255,255,255,0.02)] p-3 rounded">
            {t('contact.form_notice', { email: CONTACT_EMAIL })}
            <br />
            <span className="block mt-2">{t('contact.form_config_note', { file: 'src/config.js' })}</span>
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 bg-[var(--panel)] p-6 rounded-md glass">
          <label className="block text-sm text-gray-300">{t('contact.name')}
            <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-gray-700 text-gray-200" />
          </label>

          <label className="block text-sm text-gray-300 mt-4">{t('contact.email')}
            <input name="email" type="email" value={form.email} onChange={onChange} required className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-gray-700 text-gray-200" />
          </label>

          <label className="block text-sm text-gray-300 mt-4">{t('contact.message')}
            <textarea name="message" value={form.message} onChange={onChange} rows={5} required className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-gray-700 text-gray-200"></textarea>
          </label>

          <div className="mt-4 text-right">
            <button disabled={sending} type="submit" className="px-4 py-2 rounded bg-[var(--accent)] text-black font-medium">{sending ? t('contact.sending') : t('contact.send')}</button>
          </div>
        </form>

        <div className="mt-6 flex gap-4 items-center">
          <p className="text-gray-400">{t('contact.find_me')}</p>
          <a href="https://github.com/antonioverdu6" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[var(--accent)]"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/antonio-verdu-salpico/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[var(--accent)]"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
