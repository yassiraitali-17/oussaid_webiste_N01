import { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/212123456789', '_blank'),
      color: 'bg-[#25D366] hover:bg-[#20BD5A]',
    },
    {
      icon: Phone,
      label: 'Call',
      action: () => window.location.href = 'tel:+212123456789',
      color: 'bg-primary hover:bg-primary/90',
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.location.href = 'mailto:info@oussaidtourism.com',
      color: 'bg-secondary hover:bg-secondary/90',
    },
  ];

  return (
    <>
      {/* Contact Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 animate-scale-in">
          {contactOptions.map((option, index) => (
            <button
              key={option.label}
              onClick={option.action}
              className={`${option.color} text-white rounded-full px-6 py-3 shadow-elegant flex items-center gap-3 transition-all hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <option.icon className="w-5 h-5" />
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={`fixed bottom-6 right-4 z-50 rounded-full w-14 h-14 shadow-elegant transition-all hover:scale-110 ${
          isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'
        }`}
        aria-label="Contact menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 animate-scale-in" />
        ) : (
          <MessageCircle className="w-6 h-6 animate-scale-in" />
        )}
      </Button>
    </>
  );
};

export default ContactMenu;
