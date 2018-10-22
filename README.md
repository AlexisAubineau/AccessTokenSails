

# Access token sails

Réalisée lors d'un cours de **Node JS**, cette application a eu pour but d'apprendre à utiliser les **Access token sous sails** pour la création d'une API  _Node JS_.

## Installation 

Cette application nécessite d'avoir nodeJs d'installé.
```bash
git clone https://github.com/AlexisAubineau/AccesssTokenSails.git
npm install 
node app.js
```

## Utilisation

### Routes

Voici la liste des routes de l'application.    

| Route | Méthode | Retour |
| --- | --- | --- |
| /user/login | POST | Se connecter avec les identifiants |
| /user/signup | POST | Inscription de l'utilisateur |
| /restaurants/ | GET | Récupérer tous les restaurants |
| /restaurant/ | POST | Créer un restaurant |
| /restaurant/:id | GET | Récupérer un restaurant par son ID |
| /restaurant/:id | PUT | Update un restaurant par rapport à son ID |
| /restaurant/:id | DELETE | Supprimer un restaurant par rapport à son ID |
| /restaurant/:id/employees/ | GET | Récupérer tous les employées associé à un restaurant |
| /restaurant/:id/employees/ | POST | Créer un employée associé à un restaurant |
| /restaurant/:id/employees/:id | GET | Récupérer un employée associé à un restaurant par rapport à son ID |
| /restaurant/:id/employees/:id | PUT | Update un employée par rapport à son ID associé à un restaurant par rapport à son ID |
| /restaurant/:id/employees/:id | DELETE | Supprimer un employée par rapport à son ID associé à un restaurant par rapport à son ID |
