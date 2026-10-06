# Mate – pages légales

En ligne : https://marshall-dieme.github.io/mate-legal/

- Confidentialité : https://marshall-dieme.github.io/mate-legal/privacy.html
- Suppression des données : https://marshall-dieme.github.io/mate-legal/data-deletion.html

Site statique (HTML/CSS, sans build) avec les pages exigées par Meta (Facebook Login), Google Play et l'App Store :

| Page | Fichier | Où la déclarer |
|---|---|---|
| Politique de confidentialité | `privacy.html` | Meta → Paramètres de l'app → Général ; Play Console → Contenu de l'application ; App Store Connect |
| Suppression des données | `data-deletion.html` | Meta → « URL des instructions de suppression des données » ; Play Console → Sécurité des données → Suppression des données |

Chaque page est en français et en anglais : bouton FR / EN, langue du navigateur par défaut, ou `?lang=en` dans l'adresse.

## Mettre à jour

- Le contenu doit refléter ce que fait réellement l'app ([mate-flutter](https://github.com/marshall-dieme/mate-flutter)) : données collectées, services tiers, procédure de suppression. À revoir à chaque nouvelle fonctionnalité qui touche aux données.
- Changer la date « Dernière mise à jour / Last updated » des deux langues à chaque modification.
- Email de contact : `marshalldieme@gmail.com`, présent dans les trois pages.

## Publication

GitHub Pages (branche `main`, dossier racine) : chaque push sur `main` met le site à jour en une ou deux minutes. Le dépôt doit rester public (Pages gratuit).

## Aperçu local

Ouvrir `index.html` dans un navigateur.
