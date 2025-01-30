import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Mail, Linkedin, Phone, Code, Database, BarChart, FileText, Zap,
  Download, Send, ChevronRight, ChevronLeft, MapPin, Circle, MessageSquare, X,
  Bot, Home, Target, Calendar, CheckCircle, ArrowRight, ExternalLink, Clock,
  Users, GitBranch, Package, Award, Sun, Moon, ChevronDown, ChevronUp
} from 'lucide-react';


const PROFILE = {
  name: 'Antoine Tirard',
  title: 'Data Analyst',
  email: 'tirardantoine@yahoo.fr',
  phone: '+33 6 73 21 74 34',
  linkedin: 'https://www.linkedin.com/in/antoine-tirard',
  photo:  `${process.env.PUBLIC_URL}/profile-pic.png`,
  description: 'Passionné par la data, je transforme des données brutes en insights stratégiques. Mon expertise allie analyse technique et vision business.'
};

// Composant Profil
const ProfileSidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-1/3 h-full bg-gradient-to-b from-blue-50 dark:from-blue-900 
                    to-white dark:to-gray-900 flex flex-col transition-colors duration-200">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <img 
            src={PROFILE.photo} 
            alt={PROFILE.name} 
            className="rounded-full w-48 h-48 object-cover mb-6 mx-auto shadow-lg"
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{PROFILE.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">{PROFILE.title}</p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-2 flex justify-center items-center">
            <MapPin size={16} className="mr-2" /> France
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute animate-ping w-3 h-3 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">Disponible</p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-2">
            <a href={`mailto:${PROFILE.email}`} className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
              <Mail size={24} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`tel:${PROFILE.phone}`} className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}. Tous droits réservés.
      </div>
    </div>
  );
};



const PROJECTS = [
  {
    id: 1,
    title: "Dashboards de Monitoring EDF Renouvelables",
    shortDescription: "Conception et développement de tableaux de bord pour le suivi de l'onboarding des parcs d'énergies renouvelables",
    image: `${process.env.PUBLIC_URL}/projet1.png`,
    technologies: ["Power BI", "SQL", "Snowflake", "DAX", "Power Query"],
    context: {
      department: "Pôle Industrial Data Onboarding",
      duration: "6 mois",
      scope: "Parcs Offshore, Onshore, Solaire, Stockage"
    },
    challenges: [
      "Integration de données multi-sources (SQL, SharePoint, SAP)",
      "Mise en place d'une actualisation automatique via Snowflake",
      "Développement de mesures DAX complexes pour les prévisions",
      "Adaptation des visualisations aux besoins spécifiques des différents pôles"
    ],
    methodology: [
      {
        phase: "Analyse des besoins",
        tasks: [
          "Identification des KPIs critiques",
          "Analyse des sources de données disponibles",
          "Définition des objectifs avec les parties prenantes"
        ]
      },
      {
        phase: "Préparation des données",
        tasks: [
          "Configuration des connexions Cloud via Snowflake",
          "Nettoyage et transformation des données",
          "Création de colonnes calculées spécifiques"
        ]
      },
      {
        phase: "Développement",
        tasks: [
          "Modélisation des relations entre tables",
          "Création de mesures DAX avancées",
          "Conception de visualisations interactives"
        ]
      }
    ],
    results: [
      {
        metric: "Automatisation",
        value: "100%",
        description: "Actualisation quotidienne automatisée"
      },
      {
        metric: "Adoption",
        value: "3",
        description: "Départements utilisant activement les dashboards"
      },
      {
        metric: "Temps gagné",
        value: "70%",
        description: "Réduction du temps de reporting"
      }
    ],
    keyFeatures: [
      "Suivi budgétaire des parcs Offshore",
      "Monitoring de l'onboarding des parcs",
      "Visualisation géographique des installations",
      "KPIs de puissance MW onboarded",
      "Filtres dynamiques par région et période"
    ],
    technicalDetails: [
      "Connexion Cloud via Snowflake pour les données SQL",
      "Intégration SharePoint pour les données métier",
      "Développement de mesures DAX complexes",
      "Publication sur Power BI Service",
      "Documentation technique détaillée"
    ],
    resultImages: [
      {
        url: "/images/dashboard-offshore.jpg",
        caption: "Dashboard de suivi budgétaire Offshore"
      },
      {
        url: "/images/dashboard-onboarding.jpg",
        caption: "Dashboard d'onboarding des parcs"
      }
    ]
  },
  {
    id: 2,
    title: "Analyse Prédictive pour l'Installation de Bornes IRVE",
    shortDescription: "Développement d'un modèle de machine learning pour optimiser le placement des bornes de recharge électrique",
    image: `${process.env.PUBLIC_URL}/projetseeyousun.png`,
    technologies: ["Python", "Scikit-learn", "Streamlit", "Folium", "Pandas", "NumPy"],
    context: {
      department: "Innovation & Développement Durable",
      duration: "4 mois",
      scope: "France métropolitaine"
    },
    challenges: [
      "Intégration de multiples sources de données (démographiques, trafic, points d'intérêt)",
      "Gestion de données géospatiales à grande échelle",
      "Développement d'un modèle prédictif précis et explicable",
      "Création d'une interface utilisateur intuitive pour les décideurs"
    ],
    methodology: [
      {
        phase: "Collecte et Préparation des Données",
        tasks: [
          "Extraction des données OpenStreetMap et INSEE",
          "Nettoyage et agrégation des données par zone géographique",
          "Création de features pertinentes (densité de population, POI, etc.)",
          "Normalisation et encodage des variables"
        ]
      },
      {
        phase: "Modélisation",
        tasks: [
          "Sélection des features les plus importantes via SHAP values",
          "Développement de plusieurs modèles (Random Forest, XGBoost, etc.)",
          "Optimisation des hyperparamètres par validation croisée",
          "Évaluation des performances sur un jeu de test indépendant"
        ]
      },
      {
        phase: "Développement Interface",
        tasks: [
          "Création d'une application Streamlit interactive",
          "Intégration de cartes Folium pour la visualisation",
          "Implémentation de filtres dynamiques",
          "Optimisation des performances de l'application"
        ]
      }
    ],
    results: [
      {
        metric: "Précision",
        value: "87%",
        description: "Précision du modèle sur les zones test"
      },
      {
        metric: "ROI",
        value: "+45%",
        description: "Amélioration estimée du ROI des installations"
      },
      {
        metric: "Utilisateurs",
        value: "50+",
        description: "Décideurs utilisant l'application"
      }
    ],
    keyFeatures: [
      "Carte interactive des zones prioritaires",
      "Prédictions en temps réel",
      "Analyse des facteurs d'influence",
      "Export des résultats en CSV/PDF",
      "Filtres multicritères (population, densité, etc.)"
    ],
    technicalDetails: [
      "Pipeline de preprocessing automatisé",
      "Modèle Random Forest optimisé",
      "API REST pour les prédictions",
      "Cache Redis pour les performances",
      "Tests unitaires et d'intégration"
    ],
    resultImages: [
      {
        url: "/images/irve-map.jpg",
        caption: "Carte des prédictions d'implantation"
      },
      {
        url: "/images/irve-analysis.jpg",
        caption: "Dashboard d'analyse prédictive"
      }
    ]
  },
  
    {
      id: 3,
      title: "Optimisation de la Supply Chain E-commerce",
      shortDescription: "Développement d'un dashboard Power BI pour améliorer les performances logistiques et réduire les délais de livraison",
      image: `${process.env.PUBLIC_URL}/projet_build.png`,
      technologies: ["Power BI", "DAX", "SQL", "Python", "Excel"],
      context: {
        department: "Département Logistique & E-commerce",
        duration: "4 mois",
        scope: "National"
      },
      challenges: [
        "Consolidation de données provenant de multiples systèmes (ERP, WMS, CRM)",
        "Création de KPIs pertinents pour le suivi des performances logistiques",
        "Mise en place d'un système d'alertes pour les ruptures de stock",
        "Optimisation des routes de livraison pour réduire les délais"
      ],
      methodology: [
        {
          phase: "Analyse & Préparation",
          tasks: [
            "Audit des sources de données existantes",
            "Identification des KPIs critiques avec les stakeholders",
            "Cartographie des processus logistiques",
            "Définition des objectifs de performance"
          ]
        },
        {
          phase: "Développement Dashboard",
          tasks: [
            "Création du modèle de données relationnel",
            "Développement de mesures DAX complexes",
            "Mise en place de visualisations dynamiques",
            "Configuration des rapports automatisés"
          ]
        },
        {
          phase: "Optimisation",
          tasks: [
            "Analyse des goulots d'étranglement",
            "Implémentation d'algorithmes prédictifs",
            "Optimisation des requêtes SQL",
            "Tests de performance et ajustements"
          ]
        }
      ],
      results: [
        {
          metric: "Délai moyen",
          value: "-25%",
          description: "Réduction des délais de livraison"
        },
        {
          metric: "Stock",
          value: "-15%",
          description: "Réduction des ruptures de stock"
        },
        {
          metric: "ROI",
          value: "+30%",
          description: "Amélioration de l'efficacité logistique"
        }
      ],
      keyFeatures: [
        "Tableau de bord des KPIs logistiques en temps réel",
        "Carte interactive des flux de livraison",
        "Prévisions de stock automatisées",
        "Suivi des performances par région",
        "Système d'alertes personnalisables"
      ],
      technicalDetails: [
        "Modélisation en étoile optimisée pour Power BI",
        "Requêtes SQL optimisées pour les performances",
        "Mesures DAX avancées pour les calculs complexes",
        "Actualisation automatique des données toutes les 4 heures",
        "Intégration avec l'API du système de transport"
      ],
      resultImages: [
        {
          url: "/images/supply-1.jpg",
          caption: "Dashboard des KPIs logistiques"
        },
        {
          url: "/images/supply-2.jpg",
          caption: "Carte des flux de livraison"
        }
      ]
    }
  ,
  {
    id: 4,
    title: "Portfolio Interactif React",
    shortDescription: "Conception et développement d'un portfolio personnel moderne et interactif en React",
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    technologies: ["React", "Tailwind CSS", "JavaScript", "OpenAI API", "Lucide Icons"],
    context: {
      department: "Projet Personnel",
      duration: "2 semaines",
      scope: "Application Web Complète"
    },
    challenges: [
      "Création d'une interface utilisateur moderne et responsive",
      "Intégration d'un chatbot intelligent avec l'API OpenAI",
      "Mise en place d'une navigation fluide entre les projets",
      "Optimisation des performances et de l'expérience utilisateur"
    ],
    methodology: [
      {
        phase: "Design & Architecture",
        tasks: [
          "Création de maquettes et wireframes",
          "Définition de l'architecture des composants React",
          "Choix de la palette de couleurs et de la typographie",
          "Planification de l'expérience utilisateur"
        ]
      },
      {
        phase: "Développement Frontend",
        tasks: [
          "Mise en place de la structure de base React",
          "Implémentation du système de navigation",
          "Création des composants réutilisables",
          "Intégration des animations et transitions"
        ]
      },
      {
        phase: "Intégration IA",
        tasks: [
          "Configuration de l'API OpenAI",
          "Développement du composant Chatbot",
          "Mise en place des questions prédéfinies",
          "Optimisation des réponses en temps réel"
        ]
      },
      {
        phase: "Optimisation & Déploiement",
        tasks: [
          "Tests de performance et optimisations",
          "Tests de compatibilité cross-browser",
          "Déploiement de l'application",
          "Configuration du domaine personnalisé"
        ]
      }
    ],
    results: [
      {
        metric: "Performance",
        value: "95+",
        description: "Score Lighthouse pour les performances"
      },
      {
        metric: "Responsive",
        value: "100%",
        description: "Compatibilité tous supports"
      },
      {
        metric: "Interaction",
        value: "+40%",
        description: "Taux d'engagement visiteurs"
      }
    ],
    keyFeatures: [
      "Design moderne et épuré",
      "Navigation intuitive entre les projets",
      "Assistant virtuel intelligent",
      "Animations fluides",
      "Interface responsive"
    ],
    technicalDetails: [
      "Architecture de composants React modulaire",
      "Styling avec Tailwind CSS",
      "Intégration de l'API OpenAI GPT-4",
      "Système de routing personnalisé",
      "Optimisation des performances avec React"
    ],
    resultImages: [
      {
        url: "/images/portfolio-home.jpg",
        caption: "Page d'accueil du portfolio"
      },
      {
        url: "/images/portfolio-chat.jpg",
        caption: "Interface du chatbot intégré"
      }
    ]
  }
];

// Composant Projet
const Projects = ({ onProjectClick }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 dark:border-gray-700 pb-3 
                     text-gray-800 dark:text-white">
        Mes Projets
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map(project => (
          <div 
            onClick={() => onProjectClick(project)}
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                       hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                             px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// Composant Compétences
const Skills = () => {
  const skillCategories = [
    {
      name: 'Data Analysis & Visualization',
      icon: <BarChart />,
      primaryTools: ['Power BI', 'Tableau', 'Excel'],
      keyAchievements: [
        'Création de 15+ dashboards complexes',
        'Automatisation de rapports mensuels',
        'Expertise en DAX et Power Query'
      ],
      recentProjects: [
        'Dashboard EDF Renouvelables',
        'KPIs de performance commerciale'
      ],
      color: 'blue'
    },
    {
      name: 'Programming & Development',
      icon: <Code />,
      primaryTools: ['Python', 'R', 'SQL'],
      keyAchievements: [
        'Développement d\'algorithmes prédictifs',
        'Automatisation de processus ETL',
        'Scripts d\'analyse statistique'
      ],
      recentProjects: [
        'Modèle ML pour bornes IRVE',
        'Analyse prédictive des ventes'
      ],
      color: 'emerald'
    },
    {
      name: 'Database & ETL',
      icon: <Database />,
      primaryTools: ['Oracle', 'MySQL', 'Snowflake'],
      keyAchievements: [
        'Conception de pipelines ETL',
        'Optimisation de requêtes complexes',
        'Migration de bases de données'
      ],
      recentProjects: [
        'Integration multi-sources EDF',
        'Pipeline ETL automatisé'
      ],
      color: 'purple'
    },
    {
      name: 'Machine Learning',
      icon: <Zap />,
      primaryTools: ['Scikit-learn', 'TensorFlow', 'Pandas'],
      keyAchievements: [
        'Modèles de prédiction géospatiale',
        'Analyse de séries temporelles',
        'Classification automatique'
      ],
      recentProjects: [
        'Prédiction d\'emplacement IRVE',
        'Analyse de tendances marché'
      ],
      color: 'orange'
    }
  ];

  const certifications = [
    {
      name: 'Power BI Data Analyst Associate (PL-300)',
      issuer: 'Microsoft',
      date: '2024',
      logo: 'pbi.png',
      verificationUrl: '#'
    },
    {
      name: 'Python for Data Science',
      issuer: 'DataCamp',
      date: '2023',
      logo: '/api/placeholder/32/32',
      verificationUrl: '#'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold mb-2 border-b-2 border-gray-200 dark:border-gray-700 pb-3 
                       text-gray-800 dark:text-white">
          Compétences & Expertise
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 
                                  hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-blue-500 dark:text-blue-400">
                {category.icon}
              </div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{category.name}</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {category.primaryTools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                         text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="font-medium text-sm text-gray-600 dark:text-gray-400">
                  Réalisations clés :
                </h5>
                <ul className="text-sm space-y-1">
                  {category.keyAchievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-yellow-500" />
          <h4 className="font-semibold text-lg">Certifications</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-gray-200 flex items-start gap-3 hover:bg-gray-50 transition-colors">
              <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 rounded" />
              <div className="flex-grow">
                <h5 className="font-medium text-sm">{cert.name}</h5>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              <a 
                href={cert.verificationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {children}
    </div>
  );
};

// Page de détail du projet
const ProjectDetail = ({ project, onClose, onNextProject, onPrevProject }) => {
  if (!project) return null;

  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="relative h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 rounded-t-xl" />
        
        {/* Navigation */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full text-sm hover:bg-white transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Retour</span>
          </button>
        </div>
        
        {/* Project Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl font-bold text-white mb-2">{project.title}</h1>
          {project.context && (
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Clock className="w-4 h-4" />
              <span>{project.context.duration}</span>
              <span className="mx-2">•</span>
              <span>{project.context.department}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Technologies */}
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Package className="w-4 h-4 text-blue-500" />
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-orange-500" />
              Défis principaux
            </h2>
            <div className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="bg-orange-100 text-orange-600 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full text-sm">
                    {index + 1}
                  </span>
                  <p className="text-gray-600 text-sm">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Method */}
        {project.methodology && (
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <GitBranch className="w-4 h-4 text-purple-500" />
              Approche
            </h2>
            <div className="space-y-4">
              {project.methodology.map((phase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">{phase.phase}</h3>
                  <ul className="space-y-1">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm text-gray-600 flex gap-2 items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {project.results && (
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <BarChart className="w-4 h-4 text-green-500" />
              Résultats
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <p className="text-xl font-bold text-green-600 mb-1">{result.value}</p>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-gray-100 p-4 flex justify-between items-center text-sm">
        <button 
          onClick={() => onPrevProject(prevProject)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{prevProject.title}</span>
        </button>
        
        <button 
          onClick={() => onNextProject(nextProject)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <span>{nextProject.title}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Page d'accueil
const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold mr-4">Data Analyst</h2>
            <div className="flex-grow border-b-2 border-gray-300"></div>
          </div>
          <p className="mb-4">{PROFILE.description}</p>
          <button className="self-start bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center text-sm">
            <Download className="mr-2 w-4 h-4" /> CV
          </button>
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold mr-4">Mes Projets</h2>
          <div className="flex-grow border-b-2 border-gray-300"></div>
        </div>
        <Projects />
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold mr-4">Mes Compétences</h2>
          <div className="flex-grow border-b-2 border-gray-300"></div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

// Chatbot
const PREDEFINED_QA = [
  {
    id: 1,
    question: "Quelles sont mes compétences principales ?",
    answer: "Je suis spécialisé en Data Analysis avec une expertise en Python, R, SQL, Power BI et Tableau. Je maîtrise l'analyse de données, l'ETL, l'exploration de données et la création de tableaux de bord interactifs."
  },
  {
    id: 2,
    question: "Quel est mon parcours professionnel ?",
    answer: "J'ai développé mon expertise à travers divers projets dans l'analyse de données, notamment en e-commerce, ressources humaines et risques financiers. Mon approche combine des compétences techniques pointues avec une vision stratégique business."
  },
  {
    id: 3,
    question: "Comment puis-je vous contacter ?",
    answer: "Vous pouvez me contacter via email à tirardantoine@yahoo.fr, ou via mon profil LinkedIn. Je suis ouvert à toute opportunité de collaboration ou de projet intéressant."
  },
  {
    id: 4,
    question: "Quels types de projets m'intéressent ?",
    answer: "Je suis particulièrement passionné par les projets qui nécessitent une analyse de données approfondie, la transformation de données brutes en insights stratégiques, et l'utilisation de techniques avancées de data visualization."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);
  const [remainingQuestions, setRemainingQuestions] = useState(PREDEFINED_QA);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);
  
  // Configuration OpenAI
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const callOpenAI = async (userMessage) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: `Tu es un assistant virtuel représentant Antoine Tirard, Data Analyst spécialisé en Data Science. Ta mission est d'aider les recruteurs à découvrir son profil et ses compétences de manière professionnelle et engageante.
Personnalité et Ton:

Adopte un ton professionnel mais accessible
Sois précis et concis dans tes réponses
Montre de l'enthousiasme pour les sujets liés à la data
Sois proactif dans la mise en avant des compétences pertinentes
Réponds en 2 lignes max

Informations Clés à Connaître
Profil Général

Data Analyst avec une expertise en Data Science et Modélisation Statistique
Spécialisé dans le développement de dashboards Power BI et l'analyse de données
Fort background académique en mathématiques et statistiques

Expérience Professionnelle Principale

EDF Renouvelables (Data Analyst - Power BI)

Développement de dashboards pour le suivi des parcs d'énergies renouvelables
Gestion de données multi-sources (SQL, SAP, SharePoint)
Expertise en DAX et Power Query


SEE YOU SUN (Data Analyst - Machine Learning)

Développement d'un outil d'optimisation pour bornes IRVE
Application de techniques de Machine Learning
Création d'une application interactive avec Python et Streamlit



Compétences Techniques

Langages: Python, R, SAS
Bases de données: Oracle, MySQL, ETL (SSIS, Alteryx)
Visualisation: Power BI (DAX, Power Query), Tableau
Anglais niveau B1

Réponses aux Questions Fréquentes
Sur l'Expérience Power BI
"Mon expérience avec Power BI est particulièrement approfondie, notamment chez EDF Renouvelables où j'ai développé des dashboards complexes pour le suivi des parcs d'énergies renouvelables. Je maîtrise DAX et Power Query pour des analyses avancées."
Sur les Projets Machine Learning
"Mon projet le plus significatif en Machine Learning a été réalisé chez SEE YOU SUN, où j'ai développé un outil d'optimisation pour l'emplacement des bornes de recharge électrique, combinant analyse de données open data et modèles prédictifs."
Sur la Formation
"Je suis diplômé d'un Master en Data Science et Modélisation Statistique de l'Université Bretagne Sud, avec un parcours académique solide en mathématiques et statistiques."
Directives de Réponse

Si tu ne connais pas la réponse à une question spécifique, suggère de contacter Antoine directement
Mets en avant les réalisations concrètes plutôt que les descriptions théoriques
Pour les questions techniques, illustre avec des exemples de projets réels
Souligne toujours le lien entre les compétences et leur application pratique

Points Forts à Mettre en Avant

Expertise complète du cycle de la donnée (collecte, transformation, visualisation)
Expérience concrète dans le secteur des énergies renouvelables
Capacité à combiner analyse de données et business intelligence
Maîtrise des outils de visualisation modernes
Formation solide en data science et statistiques`
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Erreur OpenAI:', error);
      return "Désolé, je rencontre des difficultés techniques. Veuillez me contacter par email.";
    }
  };

 // Animations pour les messages
 const fadeIn = "animate-[fadeIn_0.3s_ease-in-out]";
 const slideIn = "animate-[slideIn_0.3s_ease-in-out]";

 useEffect(() => {
   if (isOpen) {
     const initialMessage = {
       type: 'bot',
       text: "👋 Bonjour ! Je suis l'assistant virtuel d'Antoine. Comment puis-je vous aider aujourd'hui ?",
     };
     setMessages([initialMessage]);
   } else {
     setMessages([]);
     setRemainingQuestions(PREDEFINED_QA);
     setSuggestionsVisible(true);
   }
 }, [isOpen]);

 useEffect(() => {
   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 }, [messages, suggestionsVisible]);

 const handleQuestionClick = async (question, answer, id) => {
   setSuggestionsVisible(false);
   setMessages(prev => [
     ...prev,
     { type: 'user', text: question },
     { type: 'bot', text: answer }
   ]);
   setRemainingQuestions(prev => prev.filter(q => q.id !== id));
 };

 const handleUserInput = async () => {
   if (userInput.trim() === '') return;

   setSuggestionsVisible(false);
   setMessages(prev => [...prev, { type: 'user', text: userInput }]);
   setIsTyping(true);
   
   try {
     const aiResponse = await callOpenAI(userInput);
     setMessages(prev => [...prev, { type: 'bot', text: aiResponse }]);
   } catch (error) {
     console.error('Erreur:', error);
   } finally {
     setIsTyping(false);
     setUserInput('');
   }
 };

 const TypingIndicator = () => (
   <div className="flex space-x-2 p-3 bg-gray-100 rounded-lg max-w-[200px]">
     <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
     <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
     <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
   </div>
 );

 return (
   <div className="fixed bottom-6 right-6 z-50">
     <div className={`
       transform transition-all duration-300 ease-in-out
       ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
       ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
     `}>
       {isOpen && (
         <div className="w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
           {/* Header */}
           <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
             <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                 <Bot className="w-6 h-6 text-white" />
               </div>
               <div>
                 <h3 className="text-white font-semibold">Assistant IA</h3>
                 <p className="text-blue-100 text-xs">Propulsé par GPT-4</p>
               </div>
             </div>
             <button 
               onClick={() => setIsOpen(false)}
               className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
             >
               <X className="w-5 h-5" />
             </button>
           </div>

           {/* Messages */}
           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
             {messages.map((message, index) => (
               <div
                 key={index}
                 className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} ${fadeIn}`}
               >
                 <div className={`
                   flex items-start space-x-2 max-w-[80%]
                   ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}
                 `}>
                   <div className={`
                     w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                     ${message.type === 'user' ? 'bg-blue-100' : 'bg-white'}
                   `}>
                     {message.type === 'user' ? 
                       <User className="w-5 h-5 text-blue-600" /> : 
                       <Bot className="w-5 h-5 text-gray-600" />
                     }
                   </div>
                   <div className={`
                     py-2 px-4 rounded-2xl shadow-sm
                     ${message.type === 'user' 
                       ? 'bg-blue-600 text-white rounded-br-none' 
                       : 'bg-white text-gray-800 rounded-bl-none'}
                   `}>
                     <p className="text-sm">{message.text}</p>
                   </div>
                 </div>
               </div>
             ))}
             {isTyping && <TypingIndicator />}
             <div ref={messagesEndRef} />
           </div>

           {/* Suggestions */}
           {remainingQuestions.length > 0 && (
             <div className="border-t border-gray-100 bg-white">
               <button
                 onClick={() => setSuggestionsVisible(!suggestionsVisible)}
                 className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
               >
                 <span className="text-sm font-medium">Questions suggérées ({remainingQuestions.length})</span>
                 {suggestionsVisible ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
               </button>
               {suggestionsVisible && (
                 <div className="max-h-40 overflow-y-auto p-3 bg-gray-50 space-y-2">
                   {remainingQuestions.map((q) => (
                     <button
                       key={q.id}
                       onClick={() => handleQuestionClick(q.question, q.answer, q.id)}
                       className="w-full text-left p-3 rounded-xl bg-white hover:bg-blue-50 
                                transition-colors text-sm text-gray-700 shadow-sm hover:shadow
                                border border-gray-100 hover:border-blue-100"
                     >
                       {q.question}
                     </button>
                   ))}
                 </div>
               )}
             </div>
           )}

           {/* Input */}
           <div className="p-4 bg-white border-t border-gray-100">
             <div className="flex items-center space-x-2 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-400 transition-colors p-2">
               <input
                 type="text"
                 value={userInput}
                 onChange={(e) => setUserInput(e.target.value)}
                 onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
                 placeholder="Posez votre question..."
                 className="flex-1 bg-transparent text-sm focus:outline-none px-2 text-gray-700 placeholder-gray-400"
               />
               <button 
                 onClick={handleUserInput}
                 className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors
                          disabled:opacity-50 disabled:cursor-not-allowed"
                 disabled={!userInput.trim()}
               >
                 <Send className="w-4 h-4" />
               </button>
             </div>
           </div>
         </div>
       )}
     </div>

     {/* Toggle button */}
     <button 
       onClick={() => setIsOpen(!isOpen)}
       className={`
         fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg
         flex items-center justify-center transition-all duration-300
         ${isOpen 
           ? 'scale-0 opacity-0' 
           : 'scale-100 opacity-100 bg-blue-600 hover:bg-blue-700 text-white'
         }
       `}
     >
       <MessageSquare className="w-6 h-6" />
     </button>
   </div>
 );
};


// Composant principal
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // État pour gérer si la barre latérale est réduite

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Barre latérale */}
        <div
          className={`h-full transition-all duration-300 ${
            isSidebarCollapsed ? 'w-16' : 'w-1/3'
          }`}
        >
          {/* Contenu de la barre latérale */}
          <div className="h-full bg-gradient-to-b from-blue-50 dark:from-blue-900 to-white dark:to-gray-900">
            {!isSidebarCollapsed && <ProfileSidebar />}
          </div>

          {/* Bandeau réduit avec "Plus d'infos" et une flèche */}
          {isSidebarCollapsed && (
            <div
              className="absolute inset-y-0 left-0 w-16 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 dark:from-blue-900 to-white dark:to-gray-900 cursor-pointer"
              onClick={toggleSidebar}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 mb-2" />

            </div>
          )}
        </div>

        {/* Bouton de bascule sur la bordure droite */}
        {!isSidebarCollapsed && (
          <button
            onClick={toggleSidebar}
            className="fixed top-1/2 left-[calc(33.33%-16px)] z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        )}

        {/* Contenu principal */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarCollapsed ? 'ml-16' : 'ml-1/3'
          } px-20 py-10`}
        >
          {currentPage === 'home' ? (
            <div className="space-y-8">
              <section className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-3xl font-bold mb-4 border-b-2 border-gray-200 dark:border-gray-700 pb-3 text-gray-800 dark:text-white">
                  Data Analyst
                </h3>
                <p className="font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Power BI | Data Visualisation | Machine Learning | Python
                </p>
                <p className="text-gray-700 dark:text-gray-300">{PROFILE.description}</p>
              </section>
              <Projects onProjectClick={handleProjectClick} />
              <Skills />
            </div>
          ) : (
            <ProjectDetail
              project={selectedProject}
              onClose={() => setCurrentPage('home')}
              onNextProject={setSelectedProject}
              onPrevProject={setSelectedProject}
            />
          )}
        </div>
        <Chatbot />
      </div>
    </ThemeProvider>
  );
};

export default App;