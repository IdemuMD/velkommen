window.siteConfig = {
  // Endre disse verdiene for din VM/alias før du pusher til Git.
  alias: "ditt-alias",
  pool: "02",
  vlan: "1202",
  nextYearMessage:
    "Mitt beste tips: Ingenting er blokkert på Geir sitt nett. Det betyr at du teknisk sett kan game nesten hva du vil uten at det blir blokka, men gjør oppgaven først så du ikke mister kontrollen på VM-en din. Vi bruker 24-bit maske (/24), så de tre første oktettene bestemmer subnettet, og du velger bare siste oktett selv. Bruk gjerne ID-nummeret til VM-en som siste oktett i IP-adressen, da blir det mye enklere å huske hvilken IP som hører til hvilken VM.",
  hosts: [
    {
      host: "pve-frontend.ikt-fag.no",
      subnet: "10.10.9.0/24",
      ip: "10.10.9.101:8006",
      location: "Frontend / Proxmox",
    },
    {
      host: "pve-backend.ikt-fag.no",
      subnet: "10.10.1.0/24",
      ip: "10.10.1.100:8006",
      location: "Backend / Proxmox",
    },
    {
      host: "[alias].ikt-fag.no",
      subnet: "10.12.2.0/24",
      ip: "10.12.2.10",
      location: "Din VM",
    },
    {
      host: "gateway",
      subnet: "10.12.2.0/24",
      ip: "10.12.2.1",
      location: "Gateway",
    },
    {
      host: "dns delegering backend",
      subnet: "10.12.2.0/24",
      ip: "10.12.2.10",
      location: "DNS backend",
    },
  ],
};
