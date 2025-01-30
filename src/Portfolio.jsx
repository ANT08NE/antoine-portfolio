import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Mail, Linkedin, Phone, Code, Database, BarChart, FileText, Zap, ChevronDown,ChevronUp,
  Download, Send, ChevronRight, ChevronLeft, MapPin, Circle, MessageSquare, X, Bot,
  Home, Target, Calendar, CheckCircle, ArrowRight, ExternalLink, Clock, Users, GitBranch,Package,Award

} from 'lucide-react';

const PROFILE = {
  name: 'Antoine Tirard',
  title: 'Data Analyst',
  email: 'tirardantoine@yahoo.fr',
  phone: '+33 6 73 21 74 34',
  linkedin: 'https://www.linkedin.com/in/antoine-tirard',
  photo: '/profile-pic.png',
  description: 'Passionné par la data, je transforme des données brutes en insights stratégiques. Mon expertise allie analyse technique et vision business.'
};

// Composant Profil
const ProfileSidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-1/3 h-full bg-gradient-to-b from-blue-50 flex items-center justify-center shadow-[5px_0_5px_-5px_rgba(0,0,0,0.1)]">
      <div className="text-center ">
        <img 
          src={PROFILE.photo} 
          alt={PROFILE.name} 
          className="rounded-full w-48 h-48 object-cover mb-6 mx-auto shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800">{PROFILE.name}</h1>
        <p className="text-xl text-gray-600 mb-2">{PROFILE.title}</p>
        
        {/* Localisation */}
        <p className="text-gray-600 mb-2 flex justify-center items-center">
          <MapPin size={16} className="mr-2" /> France
        </p>
        
        {/* Availability status */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute animate-ping w-3 h-3 rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <p className="text-sm text-green-600">Disponible</p>
        </div>
        
        {/* Contact icons */}
        <div className="flex justify-center space-x-4 mb-2">
          <a href={`mailto:${PROFILE.email}`} className="text-blue-500 hover:text-blue-600 transition-colors">
            <Mail size={24} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`tel:${PROFILE.phone}`} className="text-blue-500 hover:text-blue-600 transition-colors">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const PROJECTS = [
  {
    id: 1,
    title: "Dashboards de Monitoring EDF Renouvelables",
    shortDescription: "Conception et développement de tableaux de bord pour le suivi de l'onboarding des parcs d'énergies renouvelables",
    image: "projet1.png",
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
    image: "projetseeyousun.png",
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
      image: "projet_build.png",
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
    image: "portfolio.png",
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
      <h3 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-3">Mes Projets</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map(project => (
          <div 
            onClick={() => onProjectClick(project)}
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
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
  <h3 className="text-3xl font-bold mb-2 border-b-2 border-gray-200 pb-3">Compétences & Expertise</h3>
</div>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gray-50 text-blue-500">
                {category.icon}
              </div>
              <h4 className="font-semibold text-lg">{category.name}</h4>
            </div>
            
            <div className="space-y-4">
              {/* Technologies principales */}
              <div className="flex flex-wrap gap-2">
                {category.primaryTools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Réalisations clés */}
              <div className="space-y-2">
                <h5 className="font-medium text-sm text-gray-600">Réalisations clés :</h5>
                <ul className="text-sm space-y-1">
                  {category.keyAchievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projets récents */}
              <div className="space-y-2">
                <h5 className="font-medium text-sm text-gray-600">Projets récents :</h5>
                <ul className="text-sm space-y-1">
                  {category.recentProjects.map((project, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                      <span>{project}</span>
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

  useEffect(() => {
    if (isOpen) {
      const initialMessage = {
        id: 0,
        type: 'bot',
        text: 'Bonjour! Voici quelques questions suggérées, ou posez-moi directement votre question :',
        withDelay: false
      };
      setMessages([
        initialMessage,
        { type: 'suggestion', questions: PREDEFINED_QA }
      ]);
    } else {
      setMessages([]);
      setRemainingQuestions(PREDEFINED_QA);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const initialMessage = {
        id: 0,
        type: 'bot',
        text: 'Bonjour! Je suis là pour répondre à vos questions sur mon profil et mes compétences.',
        withDelay: false
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
      { type: 'user', text: question, withDelay: false },
      { type: 'bot', text: answer, withDelay: true }
    ]);
    setRemainingQuestions(prev => prev.filter(q => q.id !== id));
  };

  const handleUserInput = async () => {
    if (userInput.trim() === '') return;

    setSuggestionsVisible(false);
    setMessages(prev => [...prev, { type: 'user', text: userInput, withDelay: false }]);
    setIsTyping(true);
    
    try {
      const aiResponse = await callOpenAI(userInput);
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: aiResponse, withDelay: true, aiGenerated: true }
      ]);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsTyping(false);
      setUserInput('');
    }
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 bg-gray-100 p-2 rounded-lg self-start">
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`
        relative transition-all duration-300 ease-in-out
        ${isOpen ? 'w-[380px] h-[500px]' : 'w-14 h-14'}
      `}>
        {/* Bouton chatbot fermé */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="absolute bottom-0 right-0 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        )}

        {/* Chatbot ouvert */}
        {isOpen && (
          <div className="absolute bottom-0 right-0 w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <h3 className="font-bold text-sm">Assistant IA</h3>
                </div>
                <p className="text-xs text-blue-100 mt-1">Propulsé par GPT-4</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-600/50 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zone de messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-2 items-start ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {message.type === 'user' ? 
                      <User className="w-4 h-4 text-blue-600" /> : 
                      <Bot className="w-4 h-4 text-gray-600" />
                    }
                  </div>
                  <div className={`
                    max-w-[70%] p-3 rounded-lg text-sm
                    ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}
                    ${message.withDelay ? 'animate-fade-in' : ''}
                  `}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions suggérées rétractables */}
            {remainingQuestions.length > 0 && (
              <div className="border-t border-gray-100">
                <button
                  onClick={() => setSuggestionsVisible(!suggestionsVisible)}
                  className="w-full flex items-center justify-between p-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  <span>Questions suggérées ({remainingQuestions.length})</span>
                  {suggestionsVisible ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>
                {suggestionsVisible && (
                  <div className="max-h-32 overflow-y-auto p-2 bg-gray-50">
                    <div className="grid grid-cols-1 gap-2">
                      {remainingQuestions.map((q) => (
                        <button
                          key={q.id}
                          onClick={() => handleQuestionClick(q.question, q.answer, q.id)}
                          className="text-left bg-white text-gray-700 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-xs border border-gray-100"
                        >
                          {q.question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Input utilisateur */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
                  placeholder="Posez votre question..."
                  className="flex-grow bg-transparent text-sm focus:outline-none px-2"
                />
                <button 
                  onClick={handleUserInput}
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// Composant principal
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
  };

  const handleNextProject = (project) => {
    setSelectedProject(project);
  };

  const handlePrevProject = (project) => {
    setSelectedProject(project);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-8">
            <section className="mb-12 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-3xl font-bold mb-4 border-b-2 border-gray-200 pb-3">Data Analyst</h3>
              <p className="font-bold text-gray-800 mb-4">Power BI | Data Visualisation | Machine Learning | Python</p>
              <p className="text-gray-700">{PROFILE.description}</p>
            </section>
            
            <Projects onProjectClick={handleProjectClick} />
            <Skills />
          </div>
        );
  
      case 'project-detail':
        return (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setCurrentPage('home')}
            onNextProject={handleNextProject}
            onPrevProject={handlePrevProject}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="fixed left-0 top-0 w-1/3 h-full">
        <ProfileSidebar />
      </div>
      
      <div className="w-2/3 ml-auto px-20 py-10">
        {renderContent()}
      </div>
      <Chatbot />
    </div>
  );
};

export default App;