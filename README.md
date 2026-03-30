# Read me

## Run project

> npm run dev

## Mindset

- Réaliser un site léger, avec une très bonne perf et accessibilité.
- Tenter de trouver un compromis entre les services les plus populaires et l'OpenSource / les outils européens.

## Stack

Jamstack avec Preact (React mais plus léger) si besoin, Astro et Decap CMS.

Le déploiement automatisé pourrait se faire via Static.app.

### Pourquoi un Headless CMS ?

- Si on a besoin d'articles de blog
- Pour éditer les textes et les prix des différents soins
- Plus généralement pour laisser la main sur les contenus qui peuvent changer fréquemment

On aurait pu prendre TinaCMS, DecapCMS l'a emporté grâce à sa traduction en français et sa plus grande popularité. Decap est maintenu par TM Tech Hub qui est slovène.

## Autres outils / features

### Contact

- On peut afficher un numéro de téléphone / un mail
- Créer un formulaire de contact en passant par un service dédié (HeroTofu ou Static.app si on passe par ce service)

### Calendrier

- Pas sûr d'en avoir besoin
- Si jamais on pourrait passer par Brevo (français), Cal.com (Open Source) ou YouCanBookMe (UK). A fouiller.

### Paiements

- Les paiements pourront être fait au moment du soin
- On envisage de demander un paiement en ligne lorsque l'utilisateur passe par l'éventuel système de calendrier. Pour ça on devra passer par Stripe car c'est le seul service proposé par les calendrier (pas de possibilité d'alternative européenne / open source donc).

### Carte localisation

- Besoin non iminent
- A priori utiliser Google, à voir s'il existe un autre service

### Témoignages

- Pour l'instant les témoignages seront "en dur"
- Après un certain temps on pourrait envisager de passer par les avis Google mais pas tout de suite

### Hébergement

Dans l'idée l'hébergement du site serait sur un serveur français. Il faut voir si ça se goupille bien avec le déploiement automatisé depuis la CI/CD de Github. On pourrait passer par EasyHoster ou LWS.

## La structure

Voici les différentes pages à implémenter :

- Home / Accueil : présentation rapide des services proposés par le site
- Qui suis-je : présentation d'Aurore
- Soins : liste des soins avec description et prix
- Livre d'or (ou autre nom un peu plus moderne) : avis de personnes ayant déjà reçu des soins
- Contact : Formulaire de contact, numéro de téléphone, mail

### A discuter

- Ajouter un lien vers un calendrier pour prendre RDV / payer en ligne
