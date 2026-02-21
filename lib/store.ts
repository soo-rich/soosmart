import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Realisation, realisations as initialRealisations } from "@/lib/data";

interface AdminStore {
  realisations: Realisation[];
  isAuthenticated: boolean;

  // Actions
  login: (password: string) => boolean;
  logout: () => void;
  addRealisation: (item: Omit<Realisation, "id">) => void;
  updateRealisation: (id: string, item: Partial<Realisation>) => void;
  deleteRealisation: (id: string) => void;
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "soosmart2024";

export const useAdminStore = create<AdminStore>()(
  persist(
    (set, get) => ({
      realisations: initialRealisations,
      isAuthenticated: false,

      login: (password) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => set({ isAuthenticated: false }),

      addRealisation: (item) => {
        const id = `real-${Date.now()}`;
        set((state) => ({
          realisations: [...state.realisations, { ...item, id }],
        }));
      },

      updateRealisation: (id, item) => {
        set((state) => ({
          realisations: state.realisations.map((r) =>
            r.id === id ? { ...r, ...item } : r
          ),
        }));
      },

      deleteRealisation: (id) => {
        set((state) => ({
          realisations: state.realisations.filter((r) => r.id !== id),
        }));
      },
    }),
    {
      name: "soosmart-admin",
      partialize: (state) => ({
        realisations: state.realisations,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
