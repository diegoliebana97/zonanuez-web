import { ShoppingCart, X, Plus, Minus, Trash2, Send } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore();

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const formatWhatsAppMessage = () => {
        const header = "*Nuevo Pedido - Zona Nuez*\n\n";
        const itemsList = items
            .map(
                (item) =>
                    `- ${item.name} (${item.size})\n  Cant: ${item.quantity} x ${item.price} = *$${(
                        parseFloat(item.price.replace('$', '').replace('.', '').replace(',', '.')) * item.quantity
                    ).toLocaleString('es-AR')}*`
            )
            .join('\n\n');
        const footer = `\n\n*Total: $${getTotal().toLocaleString('es-AR')}*\n\n_Realizado desde el sitio web._`;

        return encodeURIComponent(header + itemsList + footer);
    };

    const handleCheckout = () => {
        const message = formatWhatsAppMessage();
        window.open(`https://wa.me/5492234395644?text=${message}`, '_blank');
    };

    return (
        <>
            {/* Mini Cart Button */}
            <motion.button
                key={totalItems}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-40 bg-brand-brown text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group"
            >
                <div className="relative">
                    <ShoppingCart className="h-6 w-6" />
                    {totalItems > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 bg-brand-green text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center animate-pulse"
                        >
                            {totalItems}
                        </motion.span>
                    )}
                </div>
            </motion.button>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b flex items-center justify-between bg-brand-light">
                                <div className="flex items-center gap-2">
                                    <ShoppingCart className="h-6 w-6 text-brand-brown" />
                                    <h2 className="text-xl font-bold text-brand-brown">Tu Carrito</h2>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-stone-200 rounded-full transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto p-6 space-y-6">
                                {items.length === 0 ? (
                                    <div className="text-center py-20 space-y-4">
                                        <div className="bg-brand-cream/30 h-24 w-24 rounded-full flex items-center justify-center mx-auto">
                                            <ShoppingCart className="h-10 w-10 text-stone-300" />
                                        </div>
                                        <p className="text-stone-500 font-medium">Tu carrito está vacío</p>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="text-brand-green font-bold hover:underline"
                                        >
                                            Empezar a comprar
                                        </button>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-brand-light/20 p-3 rounded-2xl border border-stone-50">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-20 w-20 object-cover rounded-xl"
                                            />
                                            <div className="flex-grow">
                                                <div className="flex justify-between">
                                                    <h3 className="font-bold text-brand-brown text-sm line-clamp-1">{item.name}</h3>
                                                    <button
                                                        onClick={() => removeItem(item.id, item.size)}
                                                        className="text-stone-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-stone-500">{item.size}</p>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-3 bg-white rounded-lg border border-stone-100 p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                            className="p-1 hover:text-brand-green"
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </button>
                                                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                            className="p-1 hover:text-brand-green"
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                    <span className="font-extrabold text-brand-green">
                                                        ${(parseFloat(item.price.replace('$', '').replace('.', '').replace(',', '.')) * item.quantity).toLocaleString('es-AR')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {items.length > 0 && (
                                <div className="p-6 border-t bg-brand-light/50 space-y-4">
                                    <div className="flex justify-between items-center text-xl font-bold text-brand-brown">
                                        <span>Total estimativo:</span>
                                        <span className="text-brand-green">${getTotal().toLocaleString('es-AR')}</span>
                                    </div>
                                    <p className="text-xs text-stone-500 text-center">
                                        Los precios finales serán confirmados por WhatsApp.
                                    </p>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-[#128C7E] transition-all transform hover:scale-[1.02]"
                                    >
                                        <Send className="h-5 w-5" />
                                        Enviar pedido por WhatsApp
                                    </button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full text-stone-400 text-sm font-medium hover:text-red-500 transition-colors"
                                    >
                                        Vaciar carrito
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
