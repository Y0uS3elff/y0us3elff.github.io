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

export interface Project {
    src: string;
    title: string;
    description: string;
    detailedDescription: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        src: "/cnp-assurances.jpg",
        title: "Application Laravel Assurance",
        description: "Développement d'une application web Laravel pour une compagnie d'assurance chez MTB by Creative. Gestion des polices, clients et sinistres.",
        detailedDescription: "Application pour la gestion et la création des contrats d'assurance pour les entreprises, gérée par les techniciens de l'assurance.",
        technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
        src: "/java.png",
        title: "Projets Internes Java",
        description: "Développement de projets internes en Java pour MTB by Creative. Applications métiers et outils de gestion.",
        detailedDescription: "Développement d'outils internes pour MTB by Creative avec une interface Web via Angular.\n\nProjet réalisé avec des technologies internes de l'entreprise pour des besoins métiers spécifiques.\n\nApplications métiers et outils de gestion pour améliorer les processus internes de l'entreprise.",
        technologies: ["Java", "Angular", "TypeScript", "Technologies internes"]
    },
    {
        src: "/mobile.png",
        title: "Application Android Location Films",
        description: "Application mobile Android permettant aux utilisateurs de louer des films. Interface intuitive pour parcourir le catalogue et gérer ses locations. Projet BTS SIO.",
        detailedDescription: "Application mobile Android développée dans le cadre du BTS SIO permettant la location de films.\n\nFonctionnalités :\n- Parcourir le catalogue de films\n- Rechercher des films par titre, genre ou acteur\n- Ajouter des films au panier\n- Gérer ses locations en cours\n- Interface utilisateur intuitive et moderne\n- Système de recommandations",
        technologies: ["Android", "Java", "SQLite", "XML"]
    },
    {
        src: "/laravel_rftg.png",
        title: "Application Laravel Admin Films",
        description: "Application web Laravel pour l'administration et la gestion du stock de films. Gestion du catalogue, des locations et des statistiques. Projet BTS SIO.",
        detailedDescription: "Application web Laravel développée dans le cadre du BTS SIO pour l'administration du catalogue de films.\n\nFonctionnalités :\n- Gestion complète du catalogue de films\n- Ajout, modification et suppression de films\n- Gestion des stocks et disponibilités\n- Suivi des locations et retours\n- Statistiques détaillées sur les locations\n- Interface d'administration moderne et ergonomique",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"]
    },
    {
        src: "/mtbeat.png",
        title: "Application Java Vote Restaurant",
        description: "Application Java desktop permettant aux employés de voter pour un restaurant. Génération de menus personnalisés et exploration de restaurants. Projet BTS SIO.",
        detailedDescription: "Application Java réalisée pour le bloc 2 de la première année de BTS SIO.\n\nFonctionnalités :\n- Système d'authentification des utilisateurs\n- Affichage de 3 choix de restaurants\n- Vote pour le restaurant du midi en cliquant sur un choix\n- Mise en favori du restaurant sélectionné\n- Visualisation en temps réel des votes des autres utilisateurs\n- Chaque utilisateur peut voir qui a voté pour quel restaurant\n- Interface conviviale et intuitive",
        technologies: ["Java", "Swing", "Base de données"]
    }
];