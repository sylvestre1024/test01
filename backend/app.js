const express = require('express');

const app = express();


//Cette application Express contient quatre �l�ments de middleware:


//le premier enregistre � Requ�te re�ue! � dans la console et passe l'ex�cution ;
app.use((req, res, next) => {
    console.log('Requ�te re�ue 2 !');
    next();
});

//le deuxi�me ajoute un code d'�tat 201 � la r�ponse et passe l'ex�cution;
app.use((req, res, next) => {
    res.status(201);
    next();
});

//le troisi�me envoie la r�ponse JSON et passe l'ex�cution ;
app.use((req, res, next) => {
    res.json({ message: 'Votre requ�te a bien �t� re�ue 2 !' });
    next();
});

//le dernier �l�ment de middleware enregistre � R�ponse envoy�e avec succ�s! � dans la console.
app.use((req, res, next) => {
    console.log('R�ponse envoy�e avec succ�s 2 !');
});

module.exports = app;