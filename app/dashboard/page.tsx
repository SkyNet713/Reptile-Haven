"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { reptiles, getReptile } from "@/data/reptiles";
import {
  deletePersonalReptile,
  getCurrentUser,
  type PersonalReptile,
  updateProfile,
  upsertPersonalReptile,
  type UserProfile,
} from "@/lib/storage";

const emptyForm = {
  id: "",
  name: "",
  speciesSlug: "bearded-dragons",
  notes: "",
  age: "",
  lastFed: "",
  lastWatered: "",
  feedingSchedule: "",
  wateringSchedule: "",
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [profileName, setProfileName] = useState("");
  const [message, setMessage] = useState("");

  function refresh() {
    const current = getCurrentUser();
    setUser(current);
    setProfileName(current?.displayName ?? "");
  }

  useEffect(() => {
    const current = getCurrentUser();
    if (!current) {
      router.replace("/login");
      return;
    }
    setUser(current);
    setProfileName(current.displayName);
    setReady(true);
  }, [router]);

  const selectedGuide = useMemo(
    () => getReptile(form.speciesSlug),
    [form.speciesSlug]
  );

  function openCreate() {
    const guide = getReptile("bearded-dragons");
    setForm({
      ...emptyForm,
      feedingSchedule: guide?.scheduleDefaults.feeding ?? "",
      wateringSchedule: guide?.scheduleDefaults.watering ?? "",
    });
    setModalOpen(true);
  }

  function openEdit(pet: PersonalReptile) {
    setForm({
      id: pet.id,
      name: pet.name,
      speciesSlug: pet.speciesSlug,
      notes: pet.notes,
      age: pet.age,
      lastFed: pet.lastFed,
      lastWatered: pet.lastWatered,
      feedingSchedule: pet.feedingSchedule,
      wateringSchedule: pet.wateringSchedule,
    });
    setModalOpen(true);
  }

  function onSpeciesChange(slug: string) {
    const guide = getReptile(slug);
    setForm((prev) => ({
      ...prev,
      speciesSlug: slug,
      feedingSchedule: prev.feedingSchedule || guide?.scheduleDefaults.feeding || "",
      wateringSchedule:
        prev.wateringSchedule || guide?.scheduleDefaults.watering || "",
    }));
  }

  function onSavePet(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    upsertPersonalReptile({
      id: form.id || undefined,
      name: form.name.trim(),
      speciesSlug: form.speciesSlug,
      notes: form.notes,
      age: form.age,
      lastFed: form.lastFed,
      lastWatered: form.lastWatered,
      feedingSchedule: form.feedingSchedule,
      wateringSchedule: form.wateringSchedule,
    });
    setModalOpen(false);
    setMessage("Reptile profile saved.");
    refresh();
  }

  function onDelete(id: string) {
    if (!window.confirm("Remove this reptile from your list?")) return;
    deletePersonalReptile(id);
    setMessage("Reptile removed.");
    refresh();
  }

  function markDone(pet: PersonalReptile, field: "lastFed" | "lastWatered") {
    upsertPersonalReptile({
      ...pet,
      [field]: new Date().toISOString().slice(0, 10),
    });
    refresh();
  }

  function onSaveProfile(e: FormEvent) {
    e.preventDefault();
    updateProfile(profileName.trim() || user?.displayName || "Keeper");
    setMessage("Profile updated.");
    refresh();
  }

  if (!ready || !user) {
    return (
      <section className="section">
        <p className="page-intro">Loading your haven…</p>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="dash-header">
        <div>
          <p className="eyebrow">Keeper dashboard</p>
          <h1>My reptiles</h1>
          <p className="page-intro">
            Update profiles, log care days, and keep feeding/watering schedules
            beside species-specific health-risk signs.
          </p>
        </div>
        <button type="button" className="btn primary" onClick={openCreate}>
          Add reptile
        </button>
      </div>

      {message ? <p className="form-success">{message}</p> : null}

      <article className="care-panel" style={{ marginBottom: "1.25rem" }}>
        <h2>User information</h2>
        <form className="form" onSubmit={onSaveProfile}>
          <label>
            Display name
            <input
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input value={user.email} disabled />
          </label>
          <button type="submit" className="btn secondary small">
            Save profile
          </button>
        </form>
      </article>

      {user.reptiles.length === 0 ? (
        <div className="empty-state">
          <p>No personal reptiles yet. Add one to build a care schedule.</p>
          <button type="button" className="btn primary" onClick={openCreate}>
            Add your first reptile
          </button>
        </div>
      ) : (
        <div className="pet-grid">
          {user.reptiles.map((pet) => {
            const guide = getReptile(pet.speciesSlug);
            return (
              <article key={pet.id} className="pet-panel">
                <div>
                  <h3>{pet.name}</h3>
                  <p className="pet-meta">
                    {guide?.name ?? pet.speciesSlug}
                    {pet.age ? ` · ${pet.age}` : ""}
                  </p>
                </div>

                <div className="schedule-box">
                  <div>
                    <strong>Feeding schedule:</strong> {pet.feedingSchedule || "—"}
                  </div>
                  <div>
                    <strong>Watering schedule:</strong>{" "}
                    {pet.wateringSchedule || "—"}
                  </div>
                  <div>
                    <strong>Last fed:</strong> {pet.lastFed || "Not logged"}
                  </div>
                  <div>
                    <strong>Last watered:</strong> {pet.lastWatered || "Not logged"}
                  </div>
                </div>

                {pet.notes ? (
                  <p className="pet-meta">Notes: {pet.notes}</p>
                ) : null}

                {guide ? (
                  <div className="schedule-box">
                    <strong>Health-risk signs for {guide.name}:</strong>
                    <ul>
                      {guide.healthRiskSigns.slice(0, 4).map((sign) => (
                        <li key={sign}>{sign}</li>
                      ))}
                    </ul>
                    <Link href={`/reptiles/${guide.slug}`}>Open full guide →</Link>
                  </div>
                ) : null}

                <div className="pet-actions">
                  <button
                    type="button"
                    className="btn secondary small"
                    onClick={() => markDone(pet, "lastFed")}
                  >
                    Log feeding
                  </button>
                  <button
                    type="button"
                    className="btn secondary small"
                    onClick={() => markDone(pet, "lastWatered")}
                  >
                    Log watering
                  </button>
                  <button
                    type="button"
                    className="btn secondary small"
                    onClick={() => openEdit(pet)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn danger small"
                    onClick={() => onDelete(pet.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {modalOpen ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <h2>{form.id ? "Update reptile" : "Add reptile"}</h2>
            <form className="form" onSubmit={onSavePet}>
              <label>
                Name
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Spike"
                  required
                />
              </label>
              <label>
                Species
                <select
                  value={form.speciesSlug}
                  onChange={(e) => onSpeciesChange(e.target.value)}
                >
                  {reptiles.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Age / life stage
                <input
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  placeholder="Juvenile · 8 months"
                />
              </label>
              <label>
                Feeding schedule
                <textarea
                  value={form.feedingSchedule}
                  onChange={(e) =>
                    setForm({ ...form, feedingSchedule: e.target.value })
                  }
                />
              </label>
              <label>
                Watering schedule
                <textarea
                  value={form.wateringSchedule}
                  onChange={(e) =>
                    setForm({ ...form, wateringSchedule: e.target.value })
                  }
                />
              </label>
              <label>
                Last fed
                <input
                  type="date"
                  value={form.lastFed}
                  onChange={(e) => setForm({ ...form, lastFed: e.target.value })}
                />
              </label>
              <label>
                Last watered
                <input
                  type="date"
                  value={form.lastWatered}
                  onChange={(e) =>
                    setForm({ ...form, lastWatered: e.target.value })
                  }
                />
              </label>
              <label>
                Notes
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Shedding, vet visits, preferences…"
                />
              </label>
              {selectedGuide ? (
                <p className="form-success">
                  Defaults available from the {selectedGuide.name} guide.
                </p>
              ) : null}
              <div className="pet-actions">
                <button type="submit" className="btn primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
