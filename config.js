window.siteConfig = {
  // Endre disse verdiene for din VM/alias før du pusher til Git.
  alias: "ditt-alias",
  pool: "02",
  vlan: "1202",
  nextYearMessage:
    "Mitt beste tips er å dokumentere alt du endrer, ta backup før du tester store endringer, og sjekke IP, DNS og gateway rolig når noe ikke virker. Start enkelt, test ett steg om gangen, og ikke vær redd for å spørre om hjelp.",
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
