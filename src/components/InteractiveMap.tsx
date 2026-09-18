"use client";
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { sanggars, Talent } from "@/data/demo";

interface InteractiveMapProps {
  filteredTalents: Talent[];
  onSelectTalent: (talent: Talent) => void;
  selectedTalentId?: string;
}

export default function InteractiveMap({
  filteredTalents,
  onSelectTalent,
  selectedTalentId,
}: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Inisialisasi Map terpusat di Kota Salatiga
      const map = L.map(mapContainerRef.current, {
        center: [-7.3305, 110.504],
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
      });

      // Dark Matter Tiles dari CartoDB (sempurna untuk tema kelir gelap Nusantara)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd",
      }).addTo(map);

      L.control.zoom({ position: "topright" }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    // 1. Tambahkan Marker Sanggar
    sanggars.forEach((s) => {
      // Titik koordinat estimasi sanggar di Salatiga
      const lat = s.id === "SGR-001" ? -7.322 : s.id === "SGR-003" ? -7.342 : -7.355;
      const lng = s.id === "SGR-001" ? 110.498 : s.id === "SGR-003" ? 110.515 : 110.485;

      const sanggarIcon = L.divIcon({
        className: "custom-sanggar-marker",
        html: `<div style="background:#43d59a; width:22px; height:22px; border-radius:6px; display:flex; align-items:center; justify-content:center; border:2px solid #002113; box-shadow:0 0 12px rgba(67,213,154,0.5);">
          <span style="color:#002113; font-size:12px; font-weight:bold;">🏛️</span>
        </div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marker = L.marker([lat, lng], { icon: sanggarIcon });
      marker.bindPopup(`
        <div style="font-family:sans-serif; padding:4px; color:#dfe2f1; background:#1c1f2a; border-radius:8px;">
          <strong style="color:#43d59a; font-size:12px;">${s.name}</strong><br/>
          <span style="font-size:11px; color:#d1c5af;">Pembina: ${s.leader}</span><br/>
          <span style="font-size:10px; color:#ffd56d;">${s.kecamatan}, Salatiga</span>
        </div>
      `);
      markersGroup.addLayer(marker);
    });

    // 2. Tambahkan Marker Talenta
    filteredTalents.forEach((t) => {
      const isSelected = t.id === selectedTalentId;
      const size = isSelected ? 34 : 26;

      const talentIcon = L.divIcon({
        className: "custom-talent-marker",
        html: `
          <div style="
            background: ${isSelected ? "#ffd56d" : "#e5b842"};
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid ${isSelected ? "#fff" : "#251a00"};
            box-shadow: 0 0 16px ${isSelected ? "rgba(255,213,109,0.8)" : "rgba(229,184,66,0.5)"};
            cursor: pointer;
            transition: all 0.3s;
          ">
            <span style="color:#251a00; font-size:${isSelected ? 16 : 13}px; font-weight:bold;">🪆</span>
          </div>
        `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      const marker = L.marker([t.lat, t.lng], { icon: talentIcon });
      marker.on("click", () => {
        onSelectTalent(t);
        map.panTo([t.lat, t.lng]);
      });

      marker.bindTooltip(`<b>${t.name}</b><br/>${t.sanggar} (${t.style})`, {
        direction: "top",
        offset: [0, -size / 2],
        className: "bg-surface-container text-on-surface border border-primary/30 text-xs rounded-lg px-2 py-1 shadow-lg",
      });

      markersGroup.addLayer(marker);
    });
  }, [filteredTalents, onSelectTalent, selectedTalentId]);

  return (
    <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30">
      <div ref={mapContainerRef} className="w-full h-full min-h-[420px] z-0" />
    </div>
  );
}
