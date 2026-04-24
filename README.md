# The Link

## I - Explication du projet 

Le projet *The Link* est un jeu de soirée qui se joue entre 2 et 4 joueurs. Le but étant de s'amuser tout en ayant un attrait compétitif. Chacun son tour, un joueur aura une phrase qu'un joueur aura dit et devra deviner qui l'aura dit.

## II - Explication de la pipeline 


## III - Le déploiement

Afin de les tester en local, voici les différentes étapes à suivre : 

*a) Récupération du projet en local :*

- Faire un clone du repository : ```git clone https://github.com/yanis-meziane/The-Link.git```

*b) Initialisation des dépendances :*

- Une fois le projet récupéré, il sera nécessaire d'installer toutes les dépendances pour le bon fonctionnement du projet avec ```npm install``` à la racine du projet.

*c) Lancement du projet :*

- Deux possibilités s'offrent à nous, le lancer en local ou utiliser une image docker. 

1. Dans le premier cas, il sera nécessaire d'avoir deux terminals différents. Le premier sera dans le dossier **frontend**  (lancer la commande ```npm start``` et le second dans le **backend** ```node server.js```. 

2. Dans le second cas, à la racine du projet avec Docker : 
```bash
docker build -t thelink .
docker run -p 3000:3000 thelink
```

## IV - Les difficultés rencontrées

Les principales difficultées rencontrées étaient la création des tests et la mise en place de la CI-CD. Pour y remédier, je me suis aidé de la documentation en ligne afin de pouvoir les mettre en place. 