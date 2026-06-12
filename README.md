# Velkommen-side

En enkel statisk forside for oppgave 1 og 2.

## Endre innhold

Åpne `config.js` og fyll inn:

- `alias`
- `pool`
- subnett i CIDR-format
- IP-adresser
- plassering
- meldingen til neste års elev

## Kjør lokalt

```bash
python3 -m http.server 8080
```

Åpne deretter:

```text
http://localhost:8080
```

## Push til Git

```bash
git init
git add .
git commit -m "Lag velkommen-side"
git branch -M main
git remote add origin <git-url>
git push -u origin main
```

## Clone på VM for test

```bash
git clone <git-url>
cd Velkommen
python3 -m http.server 8080
```

## Publiser med Nginx på VM

Den enkleste måten er å kjøre install-scriptet etter at repoet er klonet:

```bash
chmod +x install-nginx.sh
./install-nginx.sh
```

Scriptet installerer Nginx hvis det mangler, kopierer nettsiden til `/var/www/velkommen`, setter opp Nginx og gjør at Nginx starter automatisk ved boot.

Sjekk status:

```bash
systemctl status nginx
```

Da skal siden kunne åpnes på IP-adressen eller DNS-navnet til VM-en.

Hvis du endrer filene senere, kjør scriptet på nytt for å kopiere ny versjon til Nginx.
