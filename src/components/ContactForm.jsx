import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre no puede exceder los 50 caracteres'),
  apellidos: z.string().min(2, 'Los apellidos deben tener al menos 2 caracteres').max(50, 'Los apellidos no pueden exceder los 50 caracteres'),
  telefono: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Por favor, introduce un número de teléfono válido'),
  email: z.string().email('Por favor, introduce un correo electrónico válido'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(500, 'El mensaje no puede exceder los 500 caracteres'),
});

const ContactForm = () => {
  const lang = useSelector((state) => state.language.lang);

  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('VITE_EMAILJS_USER_ID:', import.meta.env.VITE_EMAILJS_USER_ID);

  const content = {
    es: {
      title: 'Contáctame',
      nombre: 'Nombre',
      apellidos: 'Apellidos',
      telefono: 'Teléfono',
      email: 'Email',
      mensaje: 'Mensaje',
      enviar: 'Enviar',
      successMessage: '¡Mensaje enviado con éxito! Te contactaré pronto.',
      errorMessage: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
    },
    en: {
      title: 'Contact Me',
      nombre: 'First Name',
      apellidos: 'Last Name',
      telefono: 'Phone',
      email: 'Email',
      mensaje: 'Message',
      enviar: 'Send',
      successMessage: 'Message sent successfully! I will get back to you soon.',
      errorMessage: 'There was an error sending the message. Please try again.',
    },
  };

  const texts = content[lang] || content.en;

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        nombre: data.nombre,
        apellidos: data.apellidos,
        telefono: data.telefono,
        email: data.email,
        mensaje: data.mensaje,
      };

      if (!import.meta.env.VITE_EMAILJS_USER_ID) {
        throw new Error('Public key (User ID) is not defined in environment variables.');
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6 animate-fadeIn">
        {texts.title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center space-x-3">
          <FiUser className="text-primary w-6 h-6" />
          <div className="flex-1">
            <input
              type="text"
              placeholder={texts.nombre}
              {...register('nombre')}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-matching-gradient"
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FiUser className="text-primary w-6 h-6" />
          <div className="flex-1">
            <input
              type="text"
              placeholder={texts.apellidos}
              {...register('apellidos')}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-matching-gradient"
            />
            {errors.apellidos && <p className="text-red-500 text-sm mt-1">{errors.apellidos.message}</p>}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FiPhone className="text-primary w-6 h-6" />
          <div className="flex-1">
            <input
              type="text"
              placeholder={texts.telefono}
              {...register('telefono')}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-matching-gradient"
            />
            {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FiMail className="text-primary w-6 h-6" />
          <div className="flex-1">
            <input
              type="email"
              placeholder={texts.email}
              {...register('email')}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-matching-gradient"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FiMessageSquare className="text-primary w-6 h-6 mt-3" />
          <div className="flex-1">
            <textarea
              placeholder={texts.mensaje}
              {...register('mensaje')}
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-matching-gradient resize-none"
            />
            {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-matching-gradient text-white rounded-lg hover:scale-105 transition-transform"
        >
          <FiSend className="w-5 h-5" />
          <span>{texts.enviar}</span>
        </button>

        {status === 'success' && (
          <p className="text-green-500 text-center mt-4 animate-fadeIn">{texts.successMessage}</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mt-4 animate-fadeIn">{texts.errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;