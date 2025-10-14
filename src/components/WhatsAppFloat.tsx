import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppFloat = () => {
  const phoneNumber = "5511999999999"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de saber mais informações.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        <div className="relative bg-[#25D366] rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
