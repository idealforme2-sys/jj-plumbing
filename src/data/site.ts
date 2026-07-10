import { Flame, Gauge, Search, Wrench } from 'lucide-react';

export const brand = {
  name: 'JJ Plumbing',
  line: 'Reliable. Honest. Quality.',
  phone: '(555) 557-5862',
  phoneHref: 'tel:5555575862',
  logo: '/assets/JJPLB.png',
};

export const services = [
  {
    title: 'Emergency Plumbing',
    text: 'Burst pipes, active leaks, shut-off failures, and urgent repairs handled by a live dispatch desk.',
    icon: Flame,
  },
  {
    title: 'Drain & Sewer',
    text: 'Camera inspection, root removal, hydro-jetting, and clean drain restoration without guesswork.',
    icon: Search,
  },
  {
    title: 'Water Heaters',
    text: 'Tank and tankless repair, replacement, flushing, and code-compliant installation.',
    icon: Gauge,
  },
  {
    title: 'Fixture & Pipework',
    text: 'Premium fixture installs, valve replacement, copper, PEX, and tidy finish work.',
    icon: Wrench,
  },
];

export const processSteps = [
  ['01', 'Triage', 'A dispatcher confirms the issue, risk level, and arrival window.'],
  ['02', 'Diagnose', 'Your technician tests the system and shows the problem before quoting.'],
  ['03', 'Repair', 'Approved work is completed cleanly with warrantied parts and labor.'],
] as const;
