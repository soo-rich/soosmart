// ===== SERVICES =====
export const services = [
  {
    id: "network",
    icon: "Network",
    color: "cyan",
    titleFr: "Réseaux & Télécommunications",
    titleEn: "Networks & Telecommunications",
    descFr:
      "Conception, déploiement et maintenance d'infrastructures réseau haute performance. LAN/WAN, Wi-Fi entreprise, MPLS, SD-WAN. Nous garantissons une connectivité optimale et une haute disponibilité.",
    descEn:
      "Design, deployment and maintenance of high-performance network infrastructures. LAN/WAN, Enterprise Wi-Fi, MPLS, SD-WAN. We guarantee optimal connectivity and high availability.",
    features: ["LAN / WAN", "Wi-Fi Entreprise", "MPLS & SD-WAN", "Switching & Routing"],
  },
  {
    id: "security",
    icon: "ShieldCheck",
    color: "green",
    titleFr: "Cybersécurité",
    titleEn: "Cybersecurity",
    descFr:
      "Protection avancée de vos systèmes et données sensibles. Firewall nouvelle génération, VPN, SIEM, audit de sécurité, tests d'intrusion et services SOC 24/7.",
    descEn:
      "Advanced protection of your systems and sensitive data. Next-gen firewall, VPN, SIEM, security audit, penetration testing and 24/7 SOC services.",
    features: ["Firewall NGFW", "Audit & Pentest", "SIEM / SOC", "VPN & Zero Trust"],
  },
  {
    id: "voip",
    icon: "Phone",
    color: "cyan",
    titleFr: "Voix sur IP (VoIP)",
    titleEn: "Voice over IP (VoIP)",
    descFr:
      "Solutions de téléphonie d'entreprise modernes et économiques. Unified Communications, centre d'appels IP, intégration CRM et collaboration unifiée.",
    descEn:
      "Modern and cost-effective enterprise telephony solutions. Unified Communications, IP call center, CRM integration and unified collaboration.",
    features: ["IP PBX", "Unified Comm.", "Call Center IP", "Intégration CRM"],
  },
  {
    id: "support",
    icon: "Headphones",
    color: "green",
    titleFr: "Support & Maintenance",
    titleEn: "Support & Maintenance",
    descFr:
      "Assistance technique réactive, supervision proactive 24/7, helpdesk multi-niveaux et maintenance préventive de vos équipements informatiques.",
    descEn:
      "Responsive technical assistance, proactive 24/7 monitoring, multi-level helpdesk and preventive maintenance of your IT equipment.",
    features: ["Helpdesk 24/7", "Supervision NOC", "Maintenance préventive", "Télémaintenance"],
  },
  {
    id: "cloud",
    icon: "Cloud",
    color: "cyan",
    titleFr: "Cloud & Virtualisation",
    titleEn: "Cloud & Virtualization",
    descFr:
      "Migration cloud sécurisée, virtualisation des serveurs avec VMware/Hyper-V, gestion Azure & Microsoft 365, sauvegarde et plan de reprise d'activité.",
    descEn:
      "Secure cloud migration, server virtualization with VMware/Hyper-V, Azure & Microsoft 365 management, backup and disaster recovery planning.",
    features: ["Microsoft Azure", "VMware / Hyper-V", "Microsoft 365", "Disaster Recovery"],
  },
  {
    id: "consulting",
    icon: "BarChart3",
    color: "green",
    titleFr: "Conseil & Audit IT",
    titleEn: "IT Consulting & Audit",
    descFr:
      "Audit complet de votre infrastructure existante, élaboration de votre plan de transformation numérique et accompagnement stratégique personnalisé.",
    descEn:
      "Complete audit of your existing infrastructure, digital transformation roadmap development and personalized strategic IT support.",
    features: ["Audit Infrastructure", "Schéma directeur IT", "Transformation digitale", "RSSI externalisé"],
  },
] as const;

// ===== FORMATIONS =====
export const formations = [
  {
    id: "ccna",
    category: "cisco",
    badge: "CCNA",
    color: "#00E5FF",
    titleFr: "Cisco Certified Network Associate",
    titleEn: "Cisco Certified Network Associate",
    descFr:
      "Maîtrisez les fondamentaux des réseaux Cisco : configuration, maintenance et dépannage des infrastructures réseau petite à moyenne échelle.",
    descEn:
      "Master Cisco networking fundamentals: configuration, maintenance and troubleshooting of small to medium-scale network infrastructures.",
    duration: "5 jours",
    level: "Associate",
  },
  {
    id: "ccnp",
    category: "cisco",
    badge: "CCNP",
    color: "#00E5FF",
    titleFr: "Cisco Certified Network Professional",
    titleEn: "Cisco Certified Network Professional",
    descFr:
      "Concevez, déployez et gérez des réseaux Cisco complexes et évolutifs. Maîtrise du routage, commutation, sécurité et gestion avancée.",
    descEn:
      "Design, deploy and manage complex and scalable Cisco networks. Mastery of routing, switching, security and advanced management.",
    duration: "10 jours",
    level: "Professional",
  },
  {
    id: "ccie",
    category: "cisco",
    badge: "CCIE",
    color: "#39FF14",
    titleFr: "Cisco Certified Internetwork Expert",
    titleEn: "Cisco Certified Internetwork Expert",
    descFr:
      "La certification réseau la plus prestigieuse au monde. Conception, implémentation et gestion expert des réseaux Cisco à grande échelle.",
    descEn:
      "The world's most prestigious networking certification. Expert design, implementation and management of large-scale Cisco networks.",
    duration: "Sur mesure",
    level: "Expert",
  },
  {
    id: "mcp",
    category: "microsoft",
    badge: "MCP",
    color: "#00E5FF",
    titleFr: "Microsoft Certified Professional",
    titleEn: "Microsoft Certified Professional",
    descFr:
      "Attestez de votre expertise dans les technologies Microsoft. Maîtrise des fondamentaux des produits et solutions Microsoft.",
    descEn:
      "Attest to your expertise in Microsoft technologies. Mastery of Microsoft products and solutions fundamentals.",
    duration: "3 jours",
    level: "Associate",
  },
  {
    id: "mcsa",
    category: "microsoft",
    badge: "MCSA",
    color: "#00E5FF",
    titleFr: "Microsoft Certified Solutions Associate",
    titleEn: "Microsoft Certified Solutions Associate",
    descFr:
      "Déployez, configurez et gérez les solutions Microsoft en environnement professionnel avec une expertise certifiée.",
    descEn:
      "Deploy, configure and manage Microsoft solutions in a professional environment with certified expertise.",
    duration: "5 jours",
    level: "Associate",
  },
  {
    id: "mcse",
    category: "microsoft",
    badge: "MCSE",
    color: "#39FF14",
    titleFr: "Microsoft Certified Solutions Expert",
    titleEn: "Microsoft Certified Solutions Expert",
    descFr:
      "Concevez, mettez en œuvre et gérez des infrastructures complètes basées sur les technologies Microsoft.",
    descEn:
      "Design, implement and manage complete infrastructures based on Microsoft technologies.",
    duration: "10 jours",
    level: "Expert",
  },
  {
    id: "comptia-aplus",
    category: "comptia",
    badge: "A+",
    color: "#00E5FF",
    titleFr: "CompTIA A+",
    titleEn: "CompTIA A+",
    descFr:
      "Devenez technicien informatique compétent. Diagnostiquez et résolvez les problèmes matériels et logiciels, installation et configuration.",
    descEn:
      "Become a competent IT technician. Diagnose and resolve hardware and software issues, installation and configuration.",
    duration: "4 jours",
    level: "Fondamental",
  },
  {
    id: "comptia-network",
    category: "comptia",
    badge: "Network+",
    color: "#00E5FF",
    titleFr: "CompTIA Network+",
    titleEn: "CompTIA Network+",
    descFr:
      "Expertise en gestion des réseaux. Configuration et dépannage des réseaux, compétences reconnues vendeur-neutres.",
    descEn:
      "Expertise in network management. Network configuration and troubleshooting, vendor-neutral recognized skills.",
    duration: "5 jours",
    level: "Associate",
  },
  {
    id: "comptia-linux",
    category: "comptia",
    badge: "Linux+",
    color: "#39FF14",
    titleFr: "CompTIA Linux+",
    titleEn: "CompTIA Linux+",
    descFr:
      "Administration des systèmes Linux. Principes fondamentaux et gestion efficace des systèmes d'exploitation Linux.",
    descEn:
      "Linux system administration. Fundamentals and effective management of Linux operating systems.",
    duration: "5 jours",
    level: "Associate",
  },
  {
    id: "office365",
    category: "bureautique",
    badge: "Office 365",
    color: "#00E5FF",
    titleFr: "Formation Bureautique Microsoft 365",
    titleEn: "Microsoft 365 Office Training",
    descFr:
      "Maîtrisez Word, Excel, PowerPoint, Teams et Outlook. Boost de productivité en environnement professionnel Microsoft 365.",
    descEn:
      "Master Word, Excel, PowerPoint, Teams and Outlook. Productivity boost in Microsoft 365 professional environment.",
    duration: "3 jours",
    level: "Tous niveaux",
  },
] as const;

// ===== RÉALISATIONS =====
export interface Realisation {
  id: string;
  titleFr: string;
  titleEn: string;
  category: string;
  client: string;
  descFr: string;
  descEn: string;
  tags: string[];
  year: string;
  image?: string;
  featured?: boolean;
}

export const realisations: Realisation[] = [
  {
    id: "infra-reseau-entreprise",
    titleFr: "Refonte Infrastructure Réseau",
    titleEn: "Network Infrastructure Overhaul",
    category: "network",
    client: "Entreprise Industrielle",
    descFr:
      "Refonte complète de l'infrastructure réseau d'une entreprise de 200 employés. Déploiement de commutateurs Cisco Catalyst, routeurs ISR, segmentation VLAN et mise en place d'une politique QoS.",
    descEn:
      "Complete network infrastructure overhaul for a 200-employee company. Deployment of Cisco Catalyst switches, ISR routers, VLAN segmentation and QoS policy implementation.",
    tags: ["Cisco", "VLAN", "QoS", "LAN/WAN"],
    year: "2024",
    featured: true,
  },
  {
    id: "cybersecurite-pme",
    titleFr: "Sécurisation Système Information PME",
    titleEn: "SME Information System Security",
    category: "security",
    client: "PME Financière",
    descFr:
      "Déploiement d'un firewall Fortinet NGFW, mise en place d'un VPN SSL/IPSec pour 80 utilisateurs distants, audit de sécurité et plan de remédiation.",
    descEn:
      "Fortinet NGFW firewall deployment, SSL/IPSec VPN setup for 80 remote users, security audit and remediation plan.",
    tags: ["Fortinet", "VPN", "Audit", "NGFW"],
    year: "2024",
    featured: true,
  },
  {
    id: "voip-callcenter",
    titleFr: "Déploiement Centre d'Appels IP",
    titleEn: "IP Call Center Deployment",
    category: "voip",
    client: "Centre de Services",
    descFr:
      "Mise en place d'un centre d'appels IP pour 50 agents avec Cisco Unified Communications Manager, file d'attente ACD, enregistrement et reporting avancé.",
    descEn:
      "IP call center setup for 50 agents with Cisco Unified Communications Manager, ACD queue, recording and advanced reporting.",
    tags: ["Cisco CUCM", "VoIP", "Call Center", "UC"],
    year: "2023",
    featured: true,
  },
  {
    id: "cloud-migration",
    titleFr: "Migration Microsoft Azure",
    titleEn: "Microsoft Azure Migration",
    category: "cloud",
    client: "Société de Distribution",
    descFr:
      "Migration complète de l'infrastructure on-premise vers Azure. Active Directory hybride, Microsoft 365, sauvegarde Azure Backup et plan PRA.",
    descEn:
      "Complete on-premise infrastructure migration to Azure. Hybrid Active Directory, Microsoft 365, Azure Backup and disaster recovery plan.",
    tags: ["Azure", "Microsoft 365", "AD Hybride", "PRA"],
    year: "2023",
  },
  {
    id: "wifi-entreprise",
    titleFr: "Déploiement Wi-Fi Entreprise",
    titleEn: "Enterprise Wi-Fi Deployment",
    category: "network",
    client: "Hôtel 4 étoiles",
    descFr:
      "Déploiement d'un réseau Wi-Fi 802.11ax (Wi-Fi 6) couvrant 150 chambres et espaces communs. Contrôleur centralisé, portail captif et segmentation client/corporate.",
    descEn:
      "802.11ax (Wi-Fi 6) network deployment covering 150 rooms and common areas. Centralized controller, captive portal and client/corporate segmentation.",
    tags: ["Wi-Fi 6", "Cisco", "Portail captif", "802.11ax"],
    year: "2024",
  },
  {
    id: "formation-cisco",
    titleFr: "Programme Certification Cisco",
    titleEn: "Cisco Certification Program",
    category: "formation",
    client: "Institut de Formation",
    descFr:
      "Conception et délivrance d'un programme de formation CCNA/CCNP pour 30 ingénieurs réseau. 80% de taux de certification obtenu.",
    descEn:
      "Design and delivery of CCNA/CCNP training program for 30 network engineers. 80% certification pass rate achieved.",
    tags: ["CCNA", "CCNP", "Formation", "Certification"],
    year: "2023",
  },
];

// ===== STATS =====
export const stats = [
  { value: 50, suffix: "+", labelFr: "Projets réalisés", labelEn: "Projects completed" },
  { value: 40, suffix: "+", labelFr: "Clients satisfaits", labelEn: "Satisfied clients" },
  { value: 15, suffix: "+", labelFr: "Certifications", labelEn: "Certifications" },
  { value: 5, suffix: "+", labelFr: "Années d'expertise", labelEn: "Years of expertise" },
] as const;

// ===== TEAM =====
export const team = [
  {
    nameFr: "Équipe Réseau",
    nameEn: "Network Team",
    roleFr: "Ingénieurs Réseau Certifiés CCNP",
    roleEn: "CCNP Certified Network Engineers",
    certifications: ["CCNA", "CCNP"],
  },
  {
    nameFr: "Équipe Sécurité",
    nameEn: "Security Team",
    roleFr: "Experts Cybersécurité",
    roleEn: "Cybersecurity Experts",
    certifications: ["CompTIA Security+", "CEH"],
  },
  {
    nameFr: "Équipe Cloud",
    nameEn: "Cloud Team",
    roleFr: "Architectes Cloud Microsoft",
    roleEn: "Microsoft Cloud Architects",
    certifications: ["MCSE", "Azure"],
  },
];

// ===== CERTIFICATIONS PARTENAIRES =====
export const partners = [
  { name: "Cisco", logo: "/images/partners/cisco.svg" },
  { name: "Microsoft", logo: "/images/partners/microsoft.svg" },
  { name: "CompTIA", logo: "/images/partners/comptia.svg" },
  { name: "Fortinet", logo: "/images/partners/fortinet.svg" },
  { name: "VMware", logo: "/images/partners/vmware.svg" },
];
