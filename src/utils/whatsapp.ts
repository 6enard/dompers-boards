import { CartItem } from '../types';

export const generateWhatsAppMessage = (items: CartItem[], totalPrice: number): string => {
  const businessPhone = "254794817881"; // Updated business WhatsApp number
  
  let message = "🏗️ *New Order from Dompers Boards*\n\n";
  message += "📋 *Order Details:*\n";
  
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.product.name}*\n`;
    message += `   Category: ${item.product.subCategory}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   *Price: Please provide current pricing*\n\n`;
  });
  
  message += "💰 *Total Amount: Price on Request*\n\n";
  
  message += "📍 *Delivery Information:*\n";
  message += "Please let us know your delivery location and preferred delivery time.\n\n";
  message += "🚚 *Available in:* Nakuru, Nyahururu, Narok, Kisii & Bomet\n\n";
  message += "💬 *Please provide:*\n";
  message += "• Current pricing for the above items\n";
  message += "• Availability confirmation\n";
  message += "• Delivery options and costs\n\n";
  message += "Thank you for choosing Dompers Boards! 🙏";
  
  return message;
};

export const openWhatsApp = (items: CartItem[], totalPrice: number): void => {
  const message = generateWhatsAppMessage(items, totalPrice);
  const encodedMessage = encodeURIComponent(message);
  const businessPhone = "254794817881"; // Updated business WhatsApp number
  
  const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};