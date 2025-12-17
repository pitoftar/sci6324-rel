## Sélection des listes de lecture

Les données de la visualisation ont été récoltées à partir de l'[API de Spotify](https://developer.spotify.com/) le 13 novembre 2025, grâce à une requête pour récupérer les listes de lecture de `chansons quebecoises`.
27 listes de lecture ont été extraites de cette façon : nous inférons qu'il s'agit des premiers résultats de recherche.
De celles-ci, nous avons écarté des listes de lecture thématiques ou saisonnières (e.g. de musique de Noël) qui risquaient d'interférer avec les données d'écoute de manière généralisée.
Par la suite, 58 listes de lectures disponibles sur le [profil utilisateur de MusiQC](https://open.spotify.com/user/313awqjv57r24tr4lb6ucxapono4) ont été récupérées.
De celles-ci, une sélection de 27 listes de lecture a été effectuée sur la base de leur pertinence.
Nous avons notamment écarté les titres mettant en valeur la musique francophone non-québécoise (française, belge, suisse...) et sélectionné les listes restantes selon trois critères : 1) programmées par une personnalité du milieu culturel québécois (de type « Untel aime ça ! »); 2) encourageant l'écoute passive de musique, destinées comme adatptées à une activité ou à un contexte en particulier (de type « Apéro romantique »); 3) remplissant une fonction politique ou programmatique propre à la mission de MusiQC (de type « Rentrée scolaire 2025 ! », programmée par le ministre de l'Éducation Bernard Drainville).

## Visualisation

Pour créer une carte de toutes les chansons figurant dans 25 listes de lecture uniques, nous avons utilisé [Kumu](https://kumu.io/).
Il s'agit d'une plateforme de visualisation qui permet de comprendre les relations entre des éléments.
Nous avons utilisé [ce tutoriel](https://blog.kumu.io/endless-data-possibilities-utilizing-apis-for-data-import-into-kumu-869c9e328728) pour créer nos cartes.

### Extraire les données

> Outils utilisés : Google Sheets; API Connector, abonnement Spotify Premium

#### Configurer un connecteur API

Nous avons utilisé [API Connector](https://workspace.google.com/marketplace/app/api_connector/95804724197), un plugiciel (_plug-in_) pour Google Sheets.
Il était assez facile à utiliser et nous a permis d'extraire des données de Spotify.
Une fois installée à partir de la page du _plug-in_, l'API est disponible dans l'onglet Extensions dans Google Sheets. 

À partir de l’onglet « Requests », sélectionnez le bouton « Create request ».  

Si vous utilisez le connecteur pour la première fois, vous devrez ajouter une nouvelle connexion OAuth (à Spotify dans notre cas).

Sous « Add new OAuth », recherchez Spotify, puis cliquez sur « Connect ». 

Sélectionnez « Create new request » pour créer votre première requête. 

#### Créer la requête

Nous nous sommes référés à la [documentation de Spotify](https://developer.spotify.com/documentation/web-api) pour créer une requête.
Il existe plusieurs façons de procéder.

D’abord, nous étions intéressés par un genre spécifique reconnu par Spotify : « Chanson Quebecois ». Nous nous sommes référé·es à [cette liste](https://gist.github.com/andytlr/4104c667a62d8145aa3a), partagée _via_ GitHub Gist, pour trouver le genre qui nous intéressait et confirmer son orthographe.

La requête que nous avons utilisée pour récupérer la liste des playlists est la suivante : 

`https://api.spotify.com/v1/search?q=chansons%2520quebecois&type=playlist&market=CA&limit=50`

Nous souhaitions également extraire les listes de lecture créées par un utilisateur spécifique, MusiQC. L'identifiant utilisateur a été trouvé sur le site Web de Spotify en accédant directement au profil de l'utilisateur et en récupérant le code alphanumérique dans l'URL. 

La requête que nous avons utilisée pour récupérer la liste des playlists est la suivante : 

`https://api.spotify.com/v1/users/313awqjv57r24tr4lb6ucxapono4/playlists`

#### Extraire des listes de lecture depuis Spotify

À ce stade, nous travaillions dans un document Google Sheets et nous avions le panneau API Connector ouvert sur le côté droit.

Nous avons collé la requête que nous avons créée dans la case « Request URL » (URL de requête). 

Nous avons sélectionné Spotify dans la section OAuth. Vous devriez déjà être inscrit avec votre identifiant Spotify. 

Sélectionnez la cellule et indiquez la feuille dans laquelle vous souhaitez que les données soient exportées sous « Output Settings » (Paramètres de sortie), puis exécutez la requête ! Les résultats devraient ressembler à ceci :



#### Extraire des chansons des listes de lecture

### Mise en forme des données

#### Récupérer toutes les données importantes

#### Formatter les données pour Kumu

##### Création des deux feuilles distinctes

##### Création d'une colonne pour les artistes

#### Formatter dans PowerQuery (dans Excel) 

##### Préparer le tableau

##### Charger dans PowerQuery

##### Agréger les données dans PowerQuery

#### Combiner les informations dans PowerQuery

## Créer la visualisation dans Kumu

### Importer les données

### Créer les liens

### Classer les chansons par popularité

### Décorer les éléments

### Mettre les éléments en place

### Ajouter des informations aux éléments

### Créer des filtres pour les éléments
