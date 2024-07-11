# Wander-App

Die Wander-App ist eine webbasierte Anwendung, die es Benutzern ermöglicht, weltweit Wanderwege anzuzeigen und ihre eigenen Routen zu planen. Die App integriert die Google Maps API für die Kartendarstellung und bietet Funktionen wie Social Login und die Speicherung von Wanderhistorien in einer MySQL-Datenbank.

## Funktionen

- **Social Login:** Benutzer können sich mit ihren Social Media Konten oder per E-Mail und Passwort anmelden.
- **Wanderwege anzeigen:** Anzeige von Wanderwegen weltweit mithilfe der Google Maps API.
- **Routenplanung:** Benutzer können neue Routen erstellen und deren Kilometerstand speichern.
- **Wanderhistorie:** Speichert und aggregiert die Kilometer aller gelaufenen Routen im Benutzer-Dashboard.

## Technologien

- **Frontend:** React.js mit TypeScript für eine robuste und typsichere Entwicklung.
- **Backend:** MySQL-Datenbank für die Speicherung von Benutzerinformationen und Wanderhistorien.
- **Firebase:** Integration für die Authentifizierung und Social Login.
- **Styling:** CSS für das Styling der Benutzeroberfläche.

## Ordnerstruktur

wander-app/
├── public/ # Öffentliche Ressourcen und index.html
├── src/ # Quellcode der React-Anwendung
│ ├── components/ # Wiederverwendbare React-Komponenten
│ ├── pages/ # Hauptseiten der Anwendung (Dashboard, LandingPage, MapPage)
│ ├── styles/ # CSS-Dateien für das Styling der Anwendung
│ ├── firebase.ts # Firebase-Konfigurationsdatei (ignoriert in .gitignore)
│ ├── App.tsx # Hauptkomponente, Routen-Definitionen
│ ├── index.tsx # Einstiegspunkt der React-Anwendung
│ └── ... # Weitere Hilfsdateien und Konfigurationen
├── .gitignore # Liste von Dateien und Ordnern, die von Git ignoriert werden sollen
├── README.md # Diese Datei, Erklärung des Projekts
└── package.json # Abhängigkeiten und Skripte für das Projekt


## Installation und Start

1. **Clone das Repository:**

   ```bash
   git clone https://github.com/dein-benutzername/wander-app.git
   cd wander-app

2. **Installiere die Abhängigkeiten:**
   npm install

3. **Firebase-Konfiguration:**

Erstelle eine Firebase-Projekt in der Firebase Console.
Füge deine Firebase-Konfigurationsdaten in src/firebase.ts ein (die Datei ist in .gitignore ausgeschlossen).

4. **Starte die Anwendung:**
   npm start

Öffne deinen Browser und gehe zu http://localhost:3000, um die Wander-App zu sehen.
