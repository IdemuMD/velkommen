#!/usr/bin/env bash
set -euo pipefail

SITE_NAME="velkommen"
SITE_ROOT="/var/www/${SITE_NAME}"
NGINX_CONF="/etc/nginx/sites-available/${SITE_NAME}"
NGINX_LINK="/etc/nginx/sites-enabled/${SITE_NAME}"

if ! command -v nginx >/dev/null 2>&1; then
  sudo apt update
  sudo apt install -y nginx
fi

sudo mkdir -p "${SITE_ROOT}"
sudo cp index.html style.css app.js config.js "${SITE_ROOT}/"

sudo tee "${NGINX_CONF}" >/dev/null <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root ${SITE_ROOT};
    index index.html;

    server_name _;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF

sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf "${NGINX_CONF}" "${NGINX_LINK}"

sudo nginx -t
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "Ferdig. Nettsiden kjører nå automatisk ved startup via Nginx."
