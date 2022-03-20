# PROJET 7 : Groupomania
Compétences évaluées :
- Authentifier un utilisateur et maintenir sa session
- Personnaliser le contenu envoyé à un client web
- Gérer un stockage de données à l'aide de SQL
- Implémenter un stockage de données sécurisé en utilisant SQL

Technologies utilisées :
NodeJs - VueJs - MySQL - Bootstrap - Sass

# frontend

## Project setup
```
npm install
```

### Démarrer l'application
```
npm run serve
```
Aller sur le lien http://localhost:8080/


# Database
Après avoir installé MySQL sur votre machine et créer un mot de passe pour "root"


# backend

## Project setup
```
npm install
```
## Installer dotenv
```
npm install dotenv
```
Créer un fichier .env avec
DB_USERNAME='root'
DB_PASSWORD='votreMDPdeMySQL'
DB_HOST='localhost'
DB_Name='groupomania'

### Dans le terminal MySQL, import du fichier database.sql
```
SOURCE (chemin vers le fichier database.sql);
```
(Remplacer les slash du chemin d'accès par ceux-là "/"; exemple "C/users/public/bureau/projet/database.sql")

### Démarrer le serveur backend
```
node server
```
 
