import { CartItem } from '../types';

export const generateWhatsAppMessage = (items: CartItem[], totalPrice: number): string => {
  const businessPhone = "254794817881"; // Updated business WhatsApp number
  
  let message = "🏗️ *New Order from Dompers Boards*\n\n";
  message += "📋 *Order Details:*\n";
  
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.product.name}*\n`;
    message += `   Category: ${item.product.subCategory}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    if (item.product.price > 0) {
      message += `   Price: KSh ${item.product.price.toLocaleString()} each\n`;
      message += `   Subtotal: KSh ${(item.product.price * item.quantity).toLocaleString()}\n\n`;
    } else {
      message += `   *Custom Order - Price on Request*\n\n`;
    }
  });
  
  if (totalPrice > 0) {
    message += `💰 *Total Amount: KSh ${totalPrice.toLocaleString()}*\n\n`;
  } else {
    message += `💰 *Total Amount: Price on Request*\n\n`;
  }
  
  message += "📍 *Delivery Information:*\n";
  message += "Please let us know your delivery location and preferred delivery time.\n\n";
  message += "🚚 *Available in:* Nakuru, Nyahururu, Narok, Kisii & Bomet\n\n";
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