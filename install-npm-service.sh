#!/usr/bin/env bash
set -euo pipefail

APP_NAME="velkommen"
APP_ROOT="/opt/${APP_NAME}"
SERVICE_FILE="/etc/systemd/system/${APP_NAME}.service"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  sudo apt update
  sudo apt install -y nodejs npm
fi

sudo mkdir -p "${APP_ROOT}"
sudo cp index.html style.css app.js config.js package.json server.js "${APP_ROOT}/"
sudo chown -R www-data:www-data "${APP_ROOT}"

sudo tee "${SERVICE_FILE}" >/dev/null <<EOF
[Unit]
Description=Velkommen-side med npm
After=network.target

[Service]
Type=simple
WorkingDirectory=${APP_ROOT}
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=5
User=www-data
Group=www-data
Environment=PORT=80
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable "${APP_NAME}"
sudo systemctl restart "${APP_NAME}"

echo "Ferdig. npm-serveren kjører nå automatisk ved startup på port 80."
