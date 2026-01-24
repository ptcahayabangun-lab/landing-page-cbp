import {
  Building,
  Diamond,
  DoorOpen,
  Droplet,
  FolderOpenDot,
  GlassWater,
  Hammer,
  Layers,
  LayoutPanelLeft,
  Wind,
} from "lucide-react";

export const dataCategories = [
  {
    label: "Atap",
    icon: Building,
  },
  {
    label: "Pintu",
    icon: DoorOpen,
  },
  {
    label: "Semen & Perekat",
    icon: Layers,
  },
  {
    label: "Keramik & Lantai",
    icon: LayoutPanelLeft,
  },
  {
    label: "Air & Plumbing",
    icon: Droplet,
  },
  {
    label: "Ventilasi",
    icon: Wind,
  },
  {
    label: "Pelapis & Waterproofing",
    icon: GlassWater,
  },
  {
    label: "Besi & Baja",
    icon: Hammer,
  },
  {
    label: "Plafon & Partisi",
    icon: Diamond,
  },
  {
    label: "Lainnya",
    icon: FolderOpenDot,
  },
];
