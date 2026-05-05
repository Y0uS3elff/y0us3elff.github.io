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
        title: "Projets Internes Java",
        description: "Développement de projets internes en Java pour MTB by Creative. Applications métiers et outils de gestion.",
        detailedDescription: "Développement d'outils internes pour MTB by Creative avec une interface Web via Angular.\n\nProjet réalisé avec des technologies internes de l'entreprise pour des besoins métiers spécifiques.\n\nApplications métiers et outils de gestion pour améliorer les processus internes de l'entreprise.",
        context: "Projet réalisé en alternance chez MTB by Creative",
        technologies: ["Java", "Angular", "TypeScript", "Technologies internes"],
        features: [
            "Développement d'outils internes métiers",
            "Interface web Angular connectée à un back-end Java",
            "Amélioration des processus internes de l'entreprise",
            "Intégration avec les technologies propriétaires de l'entreprise",
        ]
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
    },
    {
        slug: "laravel-admin-films",
        src: "/laravel_rftg.png",
        title: "Application Laravel Admin Films",
        description: "Application web Laravel pour l'administration et la gestion du stock de films. Gestion du catalogue, des locations et des statistiques. Projet BTS SIO.",
        detailedDescription: "Application web Laravel développée dans le cadre du BTS SIO pour l'administration du catalogue de films.\n\nFonctionnalités :\n- Gestion complète du catalogue de films\n- Ajout, modification et suppression de films\n- Gestion des stocks et disponibilités\n- Suivi des locations et retours\n- Statistiques détaillées sur les locations\n- Interface d'administration moderne et ergonomique",
        context: "Projet académique — BTS SIO",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        features: [
            "Gestion complète du catalogue de films",
            "Ajout, modification et suppression de films",
            "Gestion des stocks et disponibilités",
            "Suivi des locations et retours",
            "Statistiques détaillées sur les locations",
            "Interface d'administration moderne et ergonomique",
        ]
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