FROM debian:12

# Évite les prompts interactifs
ENV DEBIAN_FRONTEND=noninteractive

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    python3 \
    python3-pip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Installer Node.js (via NodeSource)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Vérification (optionnel)
RUN node -v && npm -v && python3 --version

COPY . .

# Installer les dépendances (Vite inclus ici)
RUN npm install

# Copier le reste du projet

# Exposer le port Vite
EXPOSE 5173

# Lancer Vite (IMPORTANT: pas de --open)
CMD ["npm", "run", "dev", "--", "--host"]