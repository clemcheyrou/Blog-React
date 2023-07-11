# Projet de Blog React avec Firebase

**Lien direct :[reactblog-clemcheyrou.netlify.app](https://reactblog-clemcheyrou.netlify.app)**

Ce projet est un exemple d'application de blog créée avec React et Firebase. Il m'a permis de découvrir comment utiliser Firebase en tant que base de données pour stocker des articles et des images, ainsi que l'utilisation de fonctionnalités telles que l'authentification des utilisateurs, les likes et les commentaires.

## Installation

Avant de pouvoir exécuter l'application, assurez-vous d'avoir [Node.js](https://nodejs.org) installé sur votre machine. Ensuite, suivez les étapes ci-dessous :

1. Clonez ce dépôt sur votre machine : 
git clone git@github.com:clemcheyrou/Blog-React.git

2. Accédez au répertoire du projet


3. Installez les dépendances en exécutant la commande suivante :
npm install

## Configuration de Firebase

Avant de pouvoir exécuter l'application, vous devrez créer un projet Firebase et obtenir vos clés d'API. Suivez les étapes ci-dessous pour configurer Firebase :

1. Rendez-vous sur le [site Web Firebase](https://firebase.google.com) et connectez-vous avec votre compte Google.

2. Créez un nouveau projet et donnez-lui un nom.

3. Dans la console Firebase, accédez à la section "Database" et activez la base de données Firestore.

4. Dans la section "Storage" de la console Firebase, activez le stockage pour votre projet.

5. Dans la section "Authentication" de la console Firebase, activez la méthode d'authentification que vous souhaitez utiliser (par exemple, l'authentification par e-mail et mot de passe).

6. Dans le répertoire du projet, copiez le fichier `.env.example` en tant que `.env` et remplacez les valeurs des variables d'environnement par vos propres clés d'API Firebase.

## Exécution de l'application

Une fois que vous avez terminé les étapes d'installation et de configuration de Firebase, vous pouvez exécuter l'application en utilisant la commande suivante :
npm start 


Cela démarrera l'application en mode de développement. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour voir votre blog en direct.

## Fonctionnalités

Ce projet de blog React avec Firebase comprend les fonctionnalités suivantes :

- Affichage des articles avec leurs images associées à partir de la base de données Firebase.
- Possibilité de créer de nouveaux articles avec des images.
- Authentification des utilisateurs avec Firebase.
- Possibilité de "liker" les articles.
- Possibilité de commenter les articles.
