export const Skill_data = [
    {
        skill_name: "JavaScript",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "Java",
        Image: "/java.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "PHP",
        Image: "/php.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "Python",
        Image: "/python.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "SQL",
        Image: "/mysql.png",
        width: 40,
        height: 40,
    },
];

export const Socials = [
    {
        name: "Linkedin",
        src: "/linkedin.svg",
        link: "https://www.linkedin.com/in/clerc-leo/",
    },
    {
        name: "Github",
        src: "/github.svg",
        link: "https://github.com/Y0uS3elff",
    },
];

export const Frontend_skill = [
    {
        skill_name: "JavaScript",
        Image: "/js.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Java",
        Image: "/java.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "PHP",
        Image: "/php.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Python",
        Image: "/python.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "SQL",
        Image: "/mysql.png",
        width: 45,
        height: 45,
    },
    {
        skill_name: "HTML",
        Image: "/html.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "CSS",
        Image: "/css.png",
        width: 50,
        height: 50,
    },
];

export const Backend_skill = [
    {
        skill_name: "Git / GitHub",
        Image: "/gitwhite.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "VS Code",
        Image: "/vs.svg",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Postman",
        Image: "/postman.png",
        width: 50,
        height: 50,
    },
];

export const DevTools = [];

export const libraries = [
    {
        skill_name: "Laravel",
        Image: "/laravel.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Angular",
        Image: "/angular.png",
        width: 50,
        height: 50,
    },
];

export interface ProjectScreen {
    title: string;
    description: string;
    image?: string;
}

export interface EpreuveE5Competence {
    name: string;
    activities: string[];
}

export interface Project {
    slug: string;
    src: string;
    title: string;
    description: string;
    detailedDescription: string;
    technologies: string[];
    context?: string;
    period?: string;
    organisation?: string;
    team?: string;
    githubUrl?: string;
    liveUrl?: string;
    features?: string[];
    architecture?: string;
    architectureImage?: string;
    mcdImage?: string;
    competences?: string[];
    resourcesProvided?: string[];
    expectedResults?: string[];
    screens?: ProjectScreen[];
    epreuveE5?: EpreuveE5Competence[];
}

export const projects: Project[] = [
    {
        slug: "laravel-assurance",
        src: "/cnp-assurances.jpg",
        title: "Application Laravel Assurance",
        description: "Développement d'une application web Laravel pour une compagnie d'assurance chez MTB by Creative. Gestion des polices, clients et sinistres.",
        detailedDescription: "Application pour la gestion et la création des contrats d'assurance pour les entreprises, gérée par les techniciens de l'assurance.",
        context: "Projet réalisé en alternance chez MTB by Creative",
        technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        features: [
            "Gestion des contrats d'assurance entreprise",
            "Création et modification des polices d'assurance",
            "Suivi des clients et de leurs contrats",
            "Gestion des sinistres",
            "Interface dédiée aux techniciens de l'assurance",
        ]
    },
    {
        slug: "projets-java",
        src: "/java.png",
        title: "Projets Internes Java / Angular",
        description: "Évolutions sur une application interne Java avec front-end Angular en alternance chez MTB by Creative — refactoring TypeScript, tests, documentation et évolutions UI selon les demandes client.",
        detailedDescription: "Dans le cadre de mon alternance chez MTB by Creative, je contribue depuis ma deuxième année aux évolutions d'une application interne Java avec une interface web Angular, utilisée par l'équipe R&D.\n\nLe projet étant interne et confidentiel, le détail métier ne peut être divulgué. Je peux en revanche décrire mes apports techniques : refactoring de modules en TypeScript, écriture de tests automatisés, mise à jour de la documentation technique, évolutions fonctionnelles et graphiques de l'interface, et adaptations aux retours des utilisateurs et des clients.\n\nCe projet m'a permis de travailler en mode projet sur une stack Java + Angular + TypeScript dans un environnement professionnel exigeant, en partageant la responsabilité du code avec une équipe de développeurs.",
        context: "Projet en alternance — MTB by Creative",
        period: "Juillet 2025 – en cours",
        organisation: "MTB by Creative",
        team: "En équipe (R&D)",
        technologies: ["Java", "Angular", "TypeScript", "Tests automatisés", "Outils internes"],
        features: [
            "Refactoring (recompose) de modules en TypeScript sur l'application existante",
            "Écriture de tests automatisés pour valider les modules refondus",
            "Mise à jour et rédaction de documentation technique du projet Angular",
            "Évolutions fonctionnelles et graphiques de l'interface web",
            "Modification des règles de génération de visualisations selon les besoins client",
            "Adaptation de l'affichage et de la représentation des données aux demandes utilisateurs",
        ],
        epreuveE5: [
            {
                name: "Gérer le patrimoine informatique",
                activities: [
                    "Recenser et identifier les ressources numériques",
                    "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
                    "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
                    "Vérifier les conditions de la continuité d'un service informatique",
                    "Gérer des sauvegardes",
                    "Vérifier le respect des règles d'utilisation des ressources numériques",
                ],
            },
            {
                name: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
                activities: [
                    "Collecter, suivre et orienter des demandes",
                    "Traiter des demandes concernant les services réseau et système, applicatifs",
                    "Traiter des demandes concernant les applications",
                ],
            },
            {
                name: "Travailler en mode projet",
                activities: [
                    "Analyser les objectifs et les modalités d'organisation d'un projet",
                    "Planifier les activités",
                    "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
                ],
            },
            {
                name: "Mettre à disposition des utilisateurs un service informatique",
                activities: [
                    "Réaliser les tests d'intégration et d'acceptation d'un service",
                    "Déployer un service",
                    "Accompagner les utilisateurs dans la mise en place d'un service",
                ],
            },
            {
                name: "Organiser son développement professionnel",
                activities: [
                    "Mettre en place son environnement d'apprentissage personnel",
                    "Mettre en œuvre des outils et stratégies de veille informationnelle",
                    "Gérer son identité professionnelle",
                    "Développer son projet professionnel",
                ],
            },
        ],
    },
    {
        slug: "android-films",
        src: "/mobile.png",
        title: "Application Android Location Films",
        description: "Application mobile Android (RFTG — Luigi) permettant aux clients de louer des DVDs. Authentification JWT, catalogue, panier et validation de réservation via API REST Spring.",
        detailedDescription: "Dans le cadre du BTS SIO option SLAM (Épreuve E5), j'ai développé l'application mobile Android Luigi pour l'organisation fictive RFTG (Raise From The Graveyard), une vidéothèque de location de DVDs.\n\nL'application s'inscrit dans un système d'information complet : le client Android (Luigi) communique via HTTP avec un webservice REST centralisé (API Spring — Toad), qui accède à une base de données MySQL basée sur le schéma Sakila (Peach). Une application web (Mario) permet à l'administrateur de gérer le catalogue depuis une borne/comptoir.",
        context: "BTS SIO SLAM — Épreuve E5",
        period: "Septembre 2025 – Mai 2026",
        organisation: "RFTG (Raise From The Graveyard)",
        team: "Seul et en équipe",
        githubUrl: "https://github.com/Yourselffff/lcl_luigi",
        technologies: ["Android", "Java", "SQL", "MySQL", "API REST", "Spring", "JPA / ORM", "SessionManager", "Android Studio", "VS Code", "GitHub"],
        architecture: "App Android (Luigi) → HTTP Query → Webservice Toad (API Spring) → ORM (JPA) → SQL → BDD MySQL (Schéma Peach / Sakila)",
        architectureImage: "/rftg-architecture.png",
        mcdImage: "/rftg-mcd.png",
        competences: [
            "Concevoir et développer une solution applicative",
            "Gérer les données",
        ],
        resourcesProvided: [
            "Description du contexte et de l'existant",
            "Expression du besoin",
            "Code existant",
            "Script de la base de données existante",
        ],
        expectedResults: [
            "Évolution du code de la partie front office",
            "Accès sécurisé avec authentification",
            "Tests unitaires",
            "Documentation technique",
            "Tests fonctionnels avec contrôle de compatibilité",
        ],
        features: [
            "Authentification par email/mot de passe — token JWT via SessionManager",
            "Sélection du serveur API via menu déroulant ou saisie d'URL manuelle",
            "Catalogue de films avec recherche par titre",
            "Fiche détail d'un film : titre, année, disponibilité, description, catégories, réalisateurs, acteurs",
            "Ajout au panier depuis le catalogue ou la fiche détail",
            "Gestion du panier : affichage des films sélectionnés, suppression à l'unité",
            "Actions panier : vider, valider la réservation (checkout), continuer les achats",
        ],
        screens: [
            {
                title: "Page de connexion",
                description: "Première page de l'application. L'utilisateur saisit son email et son mot de passe pour s'authentifier. Il peut sélectionner le serveur API via un menu déroulant ou entrer une URL manuellement. Sans connexion réussie, l'accès au reste de l'application est impossible.",
                image: "/rftg-ecran-connexion.png",
            },
            {
                title: "Catalogue de films",
                description: "Affichée après connexion, cette page liste les films disponibles. Chaque film est présenté avec son image, son titre et son support (DVD). Deux boutons sont disponibles par film : \"Détail\" pour consulter la fiche complète, et \"Ajouter\" pour mettre le film au panier. Une barre de recherche filtre les films par titre.",
                image: "/rftg-catalogue.png",
            },
            {
                title: "Fiche détail d'un film",
                description: "Accessible depuis le bouton \"Détail\" du catalogue. Affiche toutes les informations d'un film : titre, année de sortie, disponibilité, description, catégories, réalisateurs et acteurs. Un bouton \"Ajouter au panier\" en bas de page permet d'ajouter directement le film.",
                image: "/rftg-detail.png",
            },
            {
                title: "Panier",
                description: "Affiche les films sélectionnés avec leur image, titre et support (DVD). Chaque item peut être supprimé individuellement. Trois actions sont disponibles en bas : \"Vider le panier\", \"Valider la réservation\" pour finaliser la commande, et \"Continuer les achats\" pour retourner au catalogue.",
                image: "/rftg-ecran-panier.png",
            },
        ],
        epreuveE5: [
            {
                name: "Travailler en mode projet",
                activities: [
                    "Analyser les objectifs et les modalités d'organisation d'un projet",
                    "Planifier les activités",
                    "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
                ],
            },
            {
                name: "Mettre à disposition des utilisateurs un service informatique",
                activities: [
                    "Réaliser les tests d'intégration et d'acceptation d'un service",
                    "Déployer un service",
                    "Accompagner les utilisateurs dans la mise en place d'un service",
                ],
            },
        ],
    },
    {
        slug: "laravel-admin-films",
        src: "/laravel_rftg.png",
        title: "Application Laravel Admin Films",
        description: "Application web Laravel (RFTG — Mario) pour l'administration du catalogue de films, des locations et du stock de DVDs depuis le comptoir, via une API REST Spring.",
        detailedDescription: "Dans le cadre du BTS SIO option SLAM (Épreuve E5), j'ai développé l'application web Laravel Mario pour l'organisation fictive RFTG (Raise From The Graveyard), une vidéothèque de location de DVDs.\n\nL'application s'inscrit dans un système d'information complet : le back-office web (Mario) communique via HTTP avec un webservice REST centralisé (API Spring — Toad), qui accède à une base de données MySQL basée sur le schéma Sakila (Peach). En parallèle, une application mobile Android (Luigi) permet aux clients de louer des films à distance.",
        context: "BTS SIO SLAM — Épreuve E5",
        period: "Septembre 2025 – Mai 2026",
        organisation: "RFTG (Raise From The Graveyard)",
        team: "Seul et en équipe",
        githubUrl: "https://github.com/Yourselffff/lcl_mario",
        liveUrl: "http://sso.rftg.mtb111.com",
        technologies: ["Laravel", "PHP", "SQL", "MySQL", "API REST", "Spring", "JPA / ORM", "HTML", "CSS", "JavaScript", "Bootstrap", "VS Code", "GitHub"],
        architecture: "App Web Laravel (Mario) → HTTP Query → Webservice Toad (API Spring) → ORM (JPA) → SQL → BDD MySQL (Schéma Peach / Sakila)",
        architectureImage: "/rftg-architecture.png",
        mcdImage: "/rftg-mcd.png",
        competences: [
            "Concevoir et développer une solution applicative",
            "Gérer les données",
        ],
        resourcesProvided: [
            "Description du contexte et de l'existant",
            "Expression du besoin",
            "Code existant",
            "Script de la base de données existante",
        ],
        expectedResults: [
            "Évolution du code de la partie back-office",
            "Accès sécurisé avec authentification",
            "Tests unitaires",
            "Documentation technique",
            "Tests fonctionnels avec contrôle de compatibilité des navigateurs",
        ],
        features: [
            "Authentification administrateur via Laravel Auth / SSO",
            "Gestion complète du catalogue : ajout, modification, suppression de films",
            "Gestion des stocks et des disponibilités des DVDs",
            "Suivi des locations en cours et des retours",
            "Statistiques détaillées sur les locations",
            "Interface d'administration depuis le comptoir / borne",
            "Communication avec le webservice REST Spring (Toad)",
        ],
        screens: [
            {
                title: "Page de connexion",
                description: "Page d'authentification du back-office Mario. L'administrateur saisit son email et son mot de passe pour accéder à l'espace d'administration. L'authentification est gérée via Laravel Auth en lien avec le SSO de l'organisation, avec une option \"Remember Me\" et un lien de récupération de mot de passe. Sans connexion réussie, l'accès au back-office est impossible.",
                image: "/rftg-mario-connexion.png",
            },
            {
                title: "Gestion du catalogue de films",
                description: "Vue principale d'administration listant l'ensemble du catalogue (1001 films). Chaque ligne présente l'ID, le titre, la description, l'année, la durée et la note du film. Trois actions sont disponibles par film : \"Voir\" pour consulter la fiche détaillée, \"Modifier\" pour éditer les informations et \"Supprimer\" pour retirer le film du catalogue. La pagination et un bouton \"Ajouter un film\" complètent l'interface.",
                image: "/rftg-mario-catalogue.png",
            },
            {
                title: "Ajout d'un nouveau film",
                description: "Formulaire de création d'un film accessible depuis le catalogue. L'administrateur renseigne les informations principales (titre, année de sortie, langue, description), les détails techniques (durée, coût de remplacement, classification, langue originale) et les caractéristiques spéciales (bonus, commentaires, scènes supprimées, making-of). Les champs obligatoires sont signalés par un astérisque.",
                image: "/rftg-mario-ajout.png",
            },
            {
                title: "Fiche détail d'un film",
                description: "Page de consultation détaillée d'un film. Affiche l'ID, l'année de sortie, la langue, la durée, la note, les caractéristiques spéciales, les acteurs, les réalisateurs et la date de dernière mise à jour. Deux actions rapides permettent de \"Modifier\" ou \"Supprimer\" le film, et un bouton \"Retour à la liste\" ramène au catalogue.",
                image: "/rftg-mario-detail.png",
            },
            {
                title: "Gestion de stock",
                description: "Page dédiée à la gestion des stocks. Liste chaque film avec son nombre d'exemplaires (DVDs disponibles) et le nombre de magasins concernés. Un bouton \"Voir les DVDs\" permet de consulter le détail des exemplaires d'un film, et un bouton \"Créer un DVD\" en haut à droite permet d'ajouter une nouvelle copie au stock.",
                image: "/rftg-mario-stock.png",
            },
        ],
        epreuveE5: [
            {
                name: "Travailler en mode projet",
                activities: [
                    "Analyser les objectifs et les modalités d'organisation d'un projet",
                    "Planifier les activités",
                    "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
                ],
            },
            {
                name: "Mettre à disposition des utilisateurs un service informatique",
                activities: [
                    "Réaliser les tests d'intégration et d'acceptation d'un service",
                    "Déployer un service",
                    "Accompagner les utilisateurs dans la mise en place d'un service",
                ],
            },
        ],
    },
    {
        slug: "java-vote-restaurant",
        src: "/mtbeat.png",
        title: "Application Java Vote Restaurant",
        description: "Application Java desktop permettant aux employés de voter pour un restaurant. Génération de menus personnalisés et exploration de restaurants. Projet BTS SIO.",
        detailedDescription: "Application Java réalisée pour le bloc 2 de la première année de BTS SIO.\n\nFonctionnalités :\n- Système d'authentification des utilisateurs\n- Affichage de 3 choix de restaurants\n- Vote pour le restaurant du midi en cliquant sur un choix\n- Mise en favori du restaurant sélectionné\n- Visualisation en temps réel des votes des autres utilisateurs\n- Chaque utilisateur peut voir qui a voté pour quel restaurant\n- Interface conviviale et intuitive",
        context: "Projet académique — BTS SIO (1ère année, Bloc 2)",
        technologies: ["Java", "Swing", "Base de données"],
        features: [
            "Authentification des utilisateurs",
            "Affichage de 3 choix de restaurants",
            "Vote pour le restaurant du midi",
            "Mise en favori du restaurant sélectionné",
            "Visualisation en temps réel des votes",
            "Vue partagée : chaque utilisateur voit qui a voté pour quoi",
        ]
    }
];