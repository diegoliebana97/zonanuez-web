import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: number;
    name: string;
    size: string;
    price: string;
    quantity: number;
    image: string;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: number, size: string) => void;
    updateQuantity: (id: number, size: string, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
}

const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace('$', '').replace('.', '').replace(',', '.'));
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem) => {
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.id === newItem.id && item.size === newItem.size
                    );
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === newItem.id && item.size === newItem.size
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return { items: [...state.items, { ...newItem, quantity: 1 }] };
                });
            },
            removeItem: (id, size) => {
                set((state) => ({
                    items: state.items.filter((item) => !(item.id === id && item.size === size)),
                }));
            },
            updateQuantity: (id, size, quantity) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id && item.size === size ? { ...item, quantity: Math.max(0, quantity) } : item
                    ).filter(item => item.quantity > 0),
                }));
            },
            clearCart: () => set({ items: [] }),
            getTotal: () => {
                return get().items.reduce((total, item) => {
                    return total + parsePrice(item.price) * item.quantity;
                }, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
