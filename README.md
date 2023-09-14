# GENDRON-GREDT-MATHIEU-ProjetBlue

## **Le Projet** :

Le Projet est la création d'un jeu vidéo en ligne qui se compose de la création d'un personnage, une partie de jeu ou l'on gère un royaume avec une succession d'évènements qui arrive aléatoirement. Le jeu s'appel Blue King. Si tout se passe bien, après les évènements, vous gagnerez la partie. Si jamais vous vous retrouvez à 0 ou à 100 de l'une des quatre catégorie vous perdez la partie.

Nous sommes 4 à avoir travailler sur ce dernier. Il y a [GENDRON Adrien](https://github.com/AdrienGend), [GREDT Mathis](https://github.com/MathisGredtYnov), [MATHIEU Philippe](https://github.com/PhilippeMath49) et [MONFORTE Pierre](https://github.com/BUSTERDAY).

## Lancer le jeu

Pour lancer le jeu, commencer par télécharger le fichier zip.

Puis dézipper le dossier.

Ouvrez le dossier du projet, ainsi que le dossier src.

Double cliquez sur start.html.

Enfin suivez les instructions sur la page d'accueil.

## L'Arborescence

Dans la racine, on retrouve le README.md, la répartition des tâches ainsi que le dossier [src](src) qui regroupe tout les dossiers et fichiers du jeu.

Dans le dossier [src](src), on retrouve :

* On retrouve le dossier de la police du jeu : [Black Knight Kong font](src\black-knight-kong-font)
* Ensuite dans le dossier [css](src\css) :

  On a le fichier[create.css](src\css\create.css) qui contient tout le css de la page [create.html](src\create.html).

  On a le fichier[end.css](src\css\end.css) qui contient tout le css de la page [end.html](src\end.html).

  On a le fichier[game.css](src\css\game.css) qui contient tout le css de la page [game.html](src\game.html).

  On a le fichier[header.css](src\css\header.css) qui contient tout le css du header.

  On a le fichier[start.css](src\css\start.css) qui contient tout le css de la page [start.html](src\start.html).
* On retrouve le dossier [image](src\image) qui contient tous les ASSETS du jeu.
* Dans le dossier [js](src\js) :

  On a le fichier[create.js](src\js\create.js) qui contient les fonctions lier à la création de personnage.

  On a le fichier[end.js](src\js\end.js) qui contient les fonctions lier aux fin du jeu.

  On a le fichier[evenement.js](src\js\evenement.js) qui contient les fonctions lier aux évènements.

  On a le fichier[game.js](src\js\game.js) qui contient les fonctions lier au jeu.

  On a le fichier[marchand.js](src\js\marchand.js) qui contient les fonctions lier au marchant.

  On a le fichier[objet.js](src\js\objet.js) qui contient les fonctions lier aux objets.

  On a le fichier[player.js](src\js\player.js) qui contient les fonctions lier au personnage directement.
* On retrouve le dossier [json](src\json) qui contient le fichier [event.json](src\json\event.json) qui contient les evenements et les personnages associer.
* La page [create.html](src\create.html) qui permet de créer son personnage.
* La page [end.html](src\end.html) qui est la page de fin du jeu.
* La page [game.html](src\game.html) qui est la page de jeu.
* La page [start.html](src\start.html) qui est la page de départ qui permet de lancer le jeu.
* Le [README.md](README.md)
* Enfin, on retrouve le [word de la répartition des tâches](Répartition des taches.docx).

## La répartition des tâches

Nous avons réparti les tâches de la manière suivante :

***Adrien :***

Backend :

* Marchand.js
* Les objets
* Les évènements
* Fonction Random des évènements
* Fonction random
* Fonction marchant

***Mathis :***

* Interface jeu
* Inventaire
* Header
* page game.html
* page create.html
* Fonction affichage des personnages
* Optimisation fonction création personnage
* Fonction game.js
* Ajustement fonction end.js
* Description des objets

***Philippe :***

Backend page game :

* player.js
* Create.js
* Fonction Initialisation du jeu
* Fonction affichage des ressources du jeu
* Fonction random pour les évènements
* Fonction affichage des évènements
* Fonction changement des ressources

***Pierre :***

* Page d'accueil et pages de fin (frontend et backend start.html, start.js, end.html et end.js)
* Recherche dimages
* Equilibrage évènements (backend)
