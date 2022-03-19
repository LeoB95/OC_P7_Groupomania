# P7_LeoBlanchon_01032022

Assurezvous d'avoir installé sur votre machine node.js et MySQL qui nous servira pour notre base de donnée
FRONTEND:
Accéder au dossier frontend puis lancer la commande "npm install". Ensuite lancer l'application vue.js avec la commande "npm run serve"

MySQL:
Après avoir installé et créer votre identifiant utilisateur et le mot de passe, ouvrir le fichier "database.sql" et effectuer les commandes écrites.
Vous pouvez aussi directement importer ce fichier avec la commande dans le terminal MySQL:
SOURCE (chemin vers le fichier database.sql);
 
BACKEND:
Accéder au dossier backend puis lancer la commande "npm install". 
Installer dotenv pour pouvoir connecter le projet à la database MySQL avec la commande "npm install dotenv", puis créer un fichier ".env" dans le dossier backend avec:

DB_USERNAME='Nom de L'utilisateur de la base de données MySQL' 
DB_PASSWORD='mot de passe de l'utilisateur de la base de données MySQL' 
DB_HOST='lien de la base de données MySQL' 
DB_Name='nom de la base de données MySQL'

Ensuite lancer le serveur avec la commande "node server.js"



