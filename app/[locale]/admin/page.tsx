"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Plus, Trash2, Lock, LogOut, Edit3, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "realisations" | "overview";

export default function AdminPage({ params: { locale } }: { params: { locale: string } }) {
  const { isAuthenticated, login, logout, realisations, addRealisation, deleteRealisation } =
    useAdminStore();
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReal, setNewReal] = useState({
    titleFr: "", titleEn: "", category: "network", client: "",
    descFr: "", descEn: "", tags: "", year: String(new Date().getFullYear()),
  });

  const handleLogin = () => {
    const ok = login(password);
    if (!ok) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 2000);
    }
  };

  const handleAdd = () => {
    if (!newReal.titleFr || !newReal.client) return;
    addRealisation({
      titleFr: newReal.titleFr,
      titleEn: newReal.titleEn || newReal.titleFr,
      category: newReal.category,
      client: newReal.client,
      descFr: newReal.descFr,
      descEn: newReal.descEn || newReal.descFr,
      tags: newReal.tags.split(",").map((t) => t.trim()).filter(Boolean),
      year: newReal.year,
      featured: false,
    });
    setNewReal({ titleFr: "", titleEn: "", category: "network", client: "", descFr: "", descEn: "", tags: "", year: String(new Date().getFullYear()) });
    setShowAddForm(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-800 pt-20">
        <div className="w-full max-w-sm px-4">
          <div className="glass-card rounded-2xl p-8 border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-5 h-5 text-cyan-400" />
            </div>
            <h1 className="font-display font-bold text-white text-2xl text-center mb-2">Admin</h1>
            <p className="text-slate-500 text-sm text-center mb-6">SOOSMART GROUP</p>
            <div className="space-y-3">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-dark-700 border text-white placeholder-slate-600 text-sm outline-none transition-all",
                  loginError
                    ? "border-red-500/40 bg-red-500/5"
                    : "border-white/10 focus:border-cyan-500/50"
                )}
              />
              {loginError && (
                <p className="text-red-400 text-xs text-center">Mot de passe incorrect</p>
              )}
              <Button variant="primary" className="w-full" onClick={handleLogin}>
                Connexion
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-800 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-white text-2xl">Administration</h1>
            <p className="text-slate-500 text-sm font-mono">SOOSMART GROUP — Backoffice</p>
          </div>
          <Button variant="ghost" size="sm" onClick={logout}>
            <LogOut className="w-4 h-4" />
            Déconnexion
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
          {(["overview", "realisations"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                tab === t ? "bg-cyan-500/10 text-cyan-400" : "text-slate-500 hover:text-white"
              )}
            >
              {t === "overview" ? "Vue d'ensemble" : "Réalisations"}
            </button>
          ))}
        </div>

        {/* Overview tab */}
        {tab === "overview" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Réalisations", value: realisations.length, color: "cyan" },
              { label: "En vedette", value: realisations.filter((r) => r.featured).length, color: "green" },
              { label: "Catégories", value: [...new Set(realisations.map((r) => r.category))].length, color: "cyan" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                <div className={cn("font-display font-extrabold text-4xl mb-1", stat.color === "cyan" ? "text-gradient-cyan" : "text-neon-green")}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Realisations tab */}
        {tab === "realisations" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-white text-lg">
                Réalisations ({realisations.length})
              </h2>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                <Plus className="w-4 h-4" />
                Ajouter
              </Button>
            </div>

            {/* Add form */}
            {showAddForm && (
              <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 mb-6">
                <h3 className="font-display font-semibold text-white mb-4">Nouvelle réalisation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "titleFr", placeholder: "Titre (FR) *" },
                    { key: "titleEn", placeholder: "Title (EN)" },
                    { key: "client", placeholder: "Client *" },
                    { key: "year", placeholder: "Année" },
                  ].map(({ key, placeholder }) => (
                    <input
                      key={key}
                      placeholder={placeholder}
                      value={newReal[key as keyof typeof newReal]}
                      onChange={(e) => setNewReal({ ...newReal, [key]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-cyan-500/50 transition-all"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <select
                    value={newReal.category}
                    onChange={(e) => setNewReal({ ...newReal, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-700 border border-white/10 text-white text-sm outline-none focus:border-cyan-500/50"
                  >
                    {["network", "security", "voip", "cloud", "formation"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Description (FR) *"
                    value={newReal.descFr}
                    onChange={(e) => setNewReal({ ...newReal, descFr: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-cyan-500/50 resize-none"
                  />
                  <input
                    placeholder="Tags (séparés par virgule)"
                    value={newReal.tags}
                    onChange={(e) => setNewReal({ ...newReal, tags: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-cyan-500/50"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="primary" size="sm" onClick={handleAdd}>
                    <CheckCircle className="w-4 h-4" />
                    Enregistrer
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setShowAddForm(false)}>
                    Annuler
                  </Button>
                </div>
              </div>
            )}

            {/* List */}
            <div className="space-y-3">
              {realisations.map((real) => (
                <div
                  key={real.id}
                  className="glass-card rounded-xl p-4 border border-white/5 flex items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-white text-sm truncate">
                        {real.titleFr}
                      </h3>
                      {real.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20 font-mono flex-shrink-0">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-xs font-mono">
                      <span>{real.client}</span>
                      <span>·</span>
                      <span>{real.category}</span>
                      <span>·</span>
                      <span>{real.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {real.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-dark-600 text-slate-500 text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteRealisation(real.id)}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
