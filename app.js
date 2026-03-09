const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            education: 'Education',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I am',
            downloadResume: 'Download Resume',
            contactMe: 'Contact Me'
        },
        sections: {
            about: 'About Me',
            skills: 'My Skills',
            experience: 'Work Experience',
            projects: 'Selected Projects',
            education: 'Education',
            contact: 'Contact Me'
        },
        contact: {
            getInTouch: 'Get In Touch',
            feelFree: 'Feel free to reach out to me for any inquiries or opportunities.',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            sendMessage: 'Send Message',
            nameLabel: 'Name',
            emailLabel: 'Email',
            subjectLabel: 'Subject',
            messageLabel: 'Message',
            sendBtn: 'Send Message',
            successMsg: 'Thank you for your message! I will get back to you soon.'
        },
        resume: {
            name: 'Azizbek Khursanov',
            title: 'Frontend Engineer | React • Next.js • TypeScript',
            bio: 'Frontend engineer specializing in React, Next.js, and TypeScript with experience building production-grade business systems including POS platforms, ERP dashboards, and mobile employee engagement applications. Focused on performance, scalable architecture, and modern UI/UX using technologies such as Tailwind CSS, Framer Motion, and Firebase. Passionate about building startup-oriented SaaS products and high-performance web applications.',
            location: 'Tashkent, Uzbekistan',
            email: 'azizbek04xursanov@gmail.com',
            github: 'https://www.linkedin.com/in/azizbek-khursanov',
            linkedin: 'https://www.linkedin.com/in/azizbek-khursanov',
            telegram: 'https://t.me/abduuaziz',
        },
        skills: [
            {
                category: 'Languages',
                items: [
                    { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain colored', level: 'Proficient' },
                    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 'Proficient' },
                    { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 'Proficient' },
                    { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 'Proficient' }
                ]
            },
            {
                category: 'Frontend',
                items: [
                    { name: 'React', icon: 'devicon-react-original colored', level: 'Proficient' },
                    { name: 'Next.js', icon: 'devicon-nextjs-original', level: 'Proficient' },
                    { name: 'React Native', icon: 'devicon-react-original colored', level: 'Proficient' },
                    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 'Proficient' },
                    { name: 'Material UI', icon: 'devicon-materialui-plain colored', level: 'Proficient' }
                ]
            },
            {
                category: 'Backend & Tools',
                items: [
                    { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 'Proficient' },
                    { name: 'Express.js', icon: 'devicon-express-original', level: 'Basic' },
                    { name: 'REST APIs', icon: 'fas fa-network-wired', level: 'Proficient' },
                    { name: 'Git & GitHub', icon: 'devicon-github-original', level: 'Proficient' },
                    { name: 'Framer Motion', icon: 'fas fa-magic', level: 'Proficient' }
                ]
            }
        ],
        experience: [
            {
                position: 'Frontend Engineer',
                company: 'Vakil Gold Uchkuprik',
                companyLink: 'https://v0-vakil-gold-uchkuprik.vercel.app/',
                period: '2023 - Present',
                description: 'Developed a robust, high-performance e-commerce platform and business website for a premium jewelry brand from scratch.',
                achievements: [
                    'Led the frontend architecture and implementation using React, Next.js, and Tailwind CSS.',
                    'Developed a comprehensive POS system enabling inventory management, sales tracking, and seamless invoice generation.',
                    'Implemented responsive admin dashboards with optimized data fetching and reusable component architecture.',
                    'Collaborated directly with business stakeholders to translate complex operational workflows into scalable digital tools.'
                ]
            }
        ],
        projects: [
            {
                title: 'Vakil Gold Uchkuprik',
                description: 'Developed a robust e-commerce platform and business website for a premium jewelry brand.',
                images: [
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.04.47.png',
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.05.29.png',
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.05.43.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'React', 'Tailwind CSS'],
                demoLink: 'https://v0-vakil-gold-uchkuprik.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'Chess Forge',
                description: 'An advanced chess analysis application integrating Stockfish and Leela engines for deep game evaluation.',
                images: [
                    'assets/chess/Screenshot 2026-03-09 at 12.11.08.png',
                    'assets/chess/Screenshot 2026-03-09 at 12.11.36.png'
                ],
                currentImageIndex: 0,
                tags: ['React', 'Stockfish', 'Zustand'],
                demoLink: 'https://chessforge-app.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'Textile Flow SaaS',
                description: 'A comprehensive B2B SaaS platform for textile manufacturers to manage production workflow and resources.',
                images: [
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.15.png',
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.24.png',
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.32.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'TypeScript', 'SaaS'],
                demoLink: 'https://textile-flow-saa-s-build.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'CS2 Skin Changer',
                description: 'A sleek, internationalized web service offering catalog management and localization for a gaming platform.',
                images: [
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.15.58.png',
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.16.16.png',
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.16.47.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'Tailwind', 'i18n'],
                demoLink: 'https://cs2-skin-changer-and-more.vercel.app/en',
                codeLink: '#'
            },
            {
                title: 'Flow Catalog',
                description: 'A beautifully designed, interactive product catalog with smooth scrolling and Framer Motion animations.',
                images: [
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.01.png',
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.22.png',
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.32.png'
                ],
                currentImageIndex: 0,
                tags: ['React', 'UI/UX', 'Framer Motion'],
                demoLink: 'https://flow-catalog.vercel.app/',
                codeLink: '#'
            }
        ],
        education: [
            {
                degree: 'Bachelor\'s Degree, Business & Financial Management',
                institution: 'Management Development Institute of Singapore in Tashkent (MDIST) — University of Sunderland',
                period: 'Graduated',
                description: 'Focused on business management and financial principles, developing strong analytical and professional skills.'
            }
        ]
    },
    ru: {
        nav: {
            about: 'Обо мне',
            skills: 'Навыки',
            experience: 'Опыт',
            projects: 'Проекты',
            education: 'Образование',
            contact: 'Контакты'
        },
        hero: {
            greeting: 'Привет, я',
            downloadResume: 'Скачать резюме',
            contactMe: 'Связаться со мной'
        },
        sections: {
            about: 'Обо мне',
            skills: 'Мои навыки',
            experience: 'Опыт работы',
            projects: 'Избранные проекты',
            education: 'Образование',
            contact: 'Свяжитесь со мной'
        },
        contact: {
            getInTouch: 'На связи',
            feelFree: 'Не стесняйтесь обращаться ко мне по любым вопросам или предложениям сотрудничества.',
            phone: 'Телефон',
            email: 'Email',
            location: 'Локация',
            sendMessage: 'Отправить сообщение',
            nameLabel: 'Имя',
            emailLabel: 'Email',
            subjectLabel: 'Тема',
            messageLabel: 'Сообщение',
            sendBtn: 'Отправить сообщение',
            successMsg: 'Спасибо за ваше сообщение! Я скоро с вами свяжусь.'
        },
        resume: {
            name: 'Азизбек Хурсанов',
            title: 'Frontend Инженер | React • Next.js • TypeScript',
            bio: 'Frontend-инженер, специализирующийся на React, Next.js и TypeScript. Имею опыт создания бизнес-систем производственного уровня, включая POS-платформы, ERP-дашборды и мобильные приложения для взаимодействия сотрудников. Ориентирован на производительность, масштабируемую архитектуру и современный UI/UX с использованием технологий, таких как Tailwind CSS, Framer Motion и Firebase. Увлечен созданием стартап-ориентированных SaaS-продуктов и высокопроизводительных веб-приложений.',
            location: 'Ташкент, Узбекистан',
            email: 'azizbek04xursanov@gmail.com',
            github: 'https://www.linkedin.com/in/azizbek-khursanov',
            linkedin: 'https://www.linkedin.com/in/azizbek-khursanov',
            telegram: 'https://t.me/abduuaziz',
            portfolio: 'yourportfolio.dev'
        },
        skills: [
            {
                category: 'Языки программирования',
                items: [
                    { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain colored', level: 'Опытный' },
                    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 'Опытный' },
                    { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 'Опытный' },
                    { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 'Опытный' }
                ]
            },
            {
                category: 'Frontend',
                items: [
                    { name: 'React', icon: 'devicon-react-original colored', level: 'Опытный' },
                    { name: 'Next.js', icon: 'devicon-nextjs-original', level: 'Опытный' },
                    { name: 'React Native', icon: 'devicon-react-original colored', level: 'Опытный' },
                    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 'Опытный' },
                    { name: 'Material UI', icon: 'devicon-materialui-plain colored', level: 'Опытный' }
                ]
            },
            {
                category: 'Backend и Инструменты',
                items: [
                    { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 'Опытный' },
                    { name: 'Express.js', icon: 'devicon-express-original', level: 'Базовый' },
                    { name: 'REST APIs', icon: 'fas fa-network-wired', level: 'Опытный' },
                    { name: 'Git & GitHub', icon: 'devicon-github-original', level: 'Опытный' },
                    { name: 'Framer Motion', icon: 'fas fa-magic', level: 'Опытный' }
                ]
            }
        ],
        experience: [
            {
                position: 'Frontend Engineer',
                company: 'Vakil Gold Uchkuprik',
                companyLink: 'https://v0-vakil-gold-uchkuprik.vercel.app/',
                period: '2023 - Настоящее время',
                description: 'С нуля разработал надежную высокопроизводительную платформу электронной коммерции и бизнес-сайт для премиального ювелирного бренда.',
                achievements: [
                    'Руководил архитектурой и реализацией фронтенда с использованием React, Next.js и Tailwind CSS.',
                    'Разработал комплексную POS-систему, обеспечивающую управление запасами, отслеживание продаж и бесперебойное создание счетов.',
                    'Внедрил адаптивные панели администратора с оптимизированной загрузкой данных и архитектурой повторно используемых компонентов.',
                    'Тесно сотрудничал со стейкхолдерами для перевода сложных операционных процессов в масштабируемые цифровые инструменты.'
                ]
            }
        ],
        projects: [
            {
                title: 'Vakil Gold Uchkuprik',
                description: 'Разработал надежную платформу электронной коммерции и бизнес-сайт для премиального ювелирного бренда.',
                images: [
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.04.47.png',
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.05.29.png',
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.05.43.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'React', 'Tailwind CSS'],
                demoLink: 'https://v0-vakil-gold-uchkuprik.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'Chess Forge',
                description: 'Продвинутое приложение для анализа шахматных партий с интеграцией движков Stockfish и Leela.',
                images: [
                    'assets/chess/Screenshot 2026-03-09 at 12.11.08.png',
                    'assets/chess/Screenshot 2026-03-09 at 12.11.36.png'
                ],
                currentImageIndex: 0,
                tags: ['React', 'Stockfish', 'Zustand'],
                demoLink: 'https://chessforge-app.vercel.app/settings',
                codeLink: '#'
            },
            {
                title: 'Textile Flow SaaS',
                description: 'Комплексная B2B SaaS-платформа для управления производственными процессами текстильных предприятий.',
                images: [
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.15.png',
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.24.png',
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.32.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'TypeScript', 'SaaS'],
                demoLink: 'https://textile-flow-saa-s-build.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'CS2 Skin Changer',
                description: 'Стильный международный веб-сервис с управлением каталогом и локализацией для игровой платформы.',
                images: [
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.15.58.png',
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.16.16.png',
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.16.47.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'Tailwind', 'i18n'],
                demoLink: 'https://cs2-skin-changer-and-more.vercel.app/en',
                codeLink: '#'
            },
            {
                title: 'Flow Catalog',
                description: 'Красиво оформленный интерактивный каталог продуктов с плавным скроллингом и анимациями Framer Motion.',
                images: [
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.01.png',
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.22.png',
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.32.png'
                ],
                currentImageIndex: 0,
                tags: ['React', 'UI/UX', 'Framer Motion'],
                demoLink: 'https://flow-catalog.vercel.app/',
                codeLink: '#'
            }
        ],
        education: [
            {
                degree: 'Бакалавр, Бизнес и Финансовый Менеджмент',
                institution: 'Сингапурский институт развития менеджмента в Ташкенте (MDIST) — Университет Сандерленда',
                period: 'Окончил',
                description: 'Специализация на управлении бизнесом и финансовых принципах, развитие сильных аналитических и профессиональных навыков.'
            }
        ]
    },
    uz: {
        nav: {
            about: 'Men haqimda',
            skills: 'Ko\'nikmalar',
            experience: 'Tajriba',
            projects: 'Loyihalar',
            education: 'Ta\'lim',
            contact: 'Aloqa'
        },
        hero: {
            greeting: 'Salom, men',
            downloadResume: 'Rezyumeni yuklab olish',
            contactMe: 'Men bilan bog\'lanish'
        },
        sections: {
            about: 'Men haqimda',
            skills: 'Mening ko\'nikmalarim',
            experience: 'Ish tajribasi',
            projects: 'Tanlangan loyihalar',
            education: 'Ta\'lim',
            contact: 'Men bilan bog\'lanish'
        },
        contact: {
            getInTouch: 'Aloqada bo\'ling',
            feelFree: 'Har qanday savol yoki hamkorlik bo\'yicha men bilan bog\'lanishingiz mumkin.',
            phone: 'Telefon',
            email: 'Elektron pochta',
            location: 'Manzil',
            sendMessage: 'Xabar yuborish',
            nameLabel: 'Ismingiz',
            emailLabel: 'Elektron pochta',
            subjectLabel: 'Mavzu',
            messageLabel: 'Xabar',
            sendBtn: 'Xabar yuborish',
            successMsg: 'Xabaringiz uchun tashakkur! Tez orada siz bilan bog\'lanaman.'
        },
        resume: {
            name: 'Azizbek Xursanov',
            title: 'Frontend Muhandis | React • Next.js • TypeScript',
            bio: 'React, Next.js va TypeScript-ga ixtisoslashgan frontend muhandisi. POS platformalari, ERP boshqaruv panellari va xodimlar uchun mobil ilovalar kabi biznes tizimlarini yaratish tajribasiga ega. Tailwind CSS, Framer Motion va Firebase kabi texnologiyalardan foydalangan holda yuqori unumdorlik, masshtablanadigan arxitektura va zamonaviy UI/UX yaratishga yo\'naltirilgan.',
            location: 'Toshkent, O\'zbekiston',
            email: 'azizbek04xursanov@gmail.com',
            github: 'https://www.linkedin.com/in/azizbek-khursanov',
            linkedin: 'https://www.linkedin.com/in/azizbek-khursanov',
            telegram: 'https://t.me/abduuaziz',
            portfolio: 'yourportfolio.dev'
        },
        skills: [
            {
                category: 'Dasturlash tillari',
                items: [
                    { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain colored', level: 'Tajribali' },
                    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 'Tajribali' },
                    { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 'Tajribali' },
                    { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 'Tajribali' }
                ]
            },
            {
                category: 'Frontend',
                items: [
                    { name: 'React', icon: 'devicon-react-original colored', level: 'Tajribali' },
                    { name: 'Next.js', icon: 'devicon-nextjs-original', level: 'Tajribali' },
                    { name: 'React Native', icon: 'devicon-react-original colored', level: 'Tajribali' },
                    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 'Tajribali' },
                    { name: 'Material UI', icon: 'devicon-materialui-plain colored', level: 'Tajribali' }
                ]
            },
            {
                category: 'Backend va Vositalar',
                items: [
                    { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 'Tajribali' },
                    { name: 'Express.js', icon: 'devicon-express-original', level: 'Boshlang\'ich' },
                    { name: 'REST APIs', icon: 'fas fa-network-wired', level: 'Tajribali' },
                    { name: 'Git & GitHub', icon: 'devicon-github-original', level: 'Tajribali' },
                    { name: 'Framer Motion', icon: 'fas fa-magic', level: 'Tajribali' }
                ]
            }
        ],
        experience: [
            {
                position: 'Frontend Engineer',
                company: 'Vakil Gold Uchkuprik',
                companyLink: 'https://v0-vakil-gold-uchkuprik.vercel.app/',
                period: '2023 - Hozirgi vaqtgacha',
                description: 'Premium zargarlik brendi uchun noldan boshlab yuqori unumdorlikdagi elektron tijorat platformasi va biznes veb-saytini ishlab chiqdi.',
                achievements: [
                    'React, Next.js va Tailwind CSS yordamida frontend arxitekturasiga boshchilik qildi.',
                    'Inventarizatsiyani boshqarish, sotuvlarni kuzatish va schyot-fakturalarni muttasil yaratish imkonini beruvchi keng qamrovli POS-tizimni ishlab chiqdi.',
                    'Optimallashtirilgan ma\'lumotlar tahlili va qayta foydalaniladigan komponent arxitekturasi bilan moslashuvchan admin boshqaruv panellarini joriy etdi.',
                    'Murakkab operatsion jarayonlarni kengaytiriladigan raqamli vositalarga aylantirish uchun biznes egalari bilan bevosita ishladi.'
                ]
            }
        ],
        projects: [
            {
                title: 'Vakil Gold Uchkuprik',
                description: 'Premium zargarlik brendi uchun mustahkam elektron tijorat platformasi va biznes veb-sayti ishlab chiqildi.',
                images: [
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.04.47.png',
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.05.29.png',
                    'assets/Vakil-gold/Screenshot 2026-03-09 at 12.05.43.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'React', 'Tailwind CSS'],
                demoLink: 'https://v0-vakil-gold-uchkuprik.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'Chess Forge',
                description: 'Stockfish va Leela dvigatellarini integratsiyalashgan shaxmat o\'yinlarini chuqur tahlil qilish uchun ilg\'or dastur.',
                images: [
                    'assets/chess/Screenshot 2026-03-09 at 12.11.08.png',
                    'assets/chess/Screenshot 2026-03-09 at 12.11.36.png'
                ],
                currentImageIndex: 0,
                tags: ['React', 'Stockfish', 'Zustand'],
                demoLink: 'https://chessforge-app.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'Textile Flow SaaS',
                description: 'To\'qimachilik korxonalari uchun ishlab chiqarish jarayonlarini boshqarish uchun keng qamrovli B2B SaaS platformasi.',
                images: [
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.15.png',
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.24.png',
                    'assets/saas-for-textile/Screenshot 2026-03-09 at 12.14.32.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'TypeScript', 'SaaS'],
                demoLink: 'https://textile-flow-saa-s-build.vercel.app/',
                codeLink: '#'
            },
            {
                title: 'CS2 Skin Changer',
                description: 'O\'yin platformasi uchun kataloglarni boshqarish va mahalliylashtirishni o\'z ichiga olgan xalqaro veb-xizmat.',
                images: [
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.15.58.png',
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.16.16.png',
                    'assets/CS2-project/Screenshot 2026-03-09 at 12.16.47.png'
                ],
                currentImageIndex: 0,
                tags: ['Next.js', 'Tailwind', 'i18n'],
                demoLink: 'https://cs2-skin-changer-and-more.vercel.app/en',
                codeLink: '#'
            },
            {
                title: 'Flow Catalog',
                description: 'Silliq harakatlanish va Framer Motion animatsiyalari bilan go\'zal ishlangan interaktiv mahsulotlar katalogi.',
                images: [
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.01.png',
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.22.png',
                    'assets/catalog/Screenshot 2026-03-09 at 12.19.32.png'
                ],
                currentImageIndex: 0,
                tags: ['React', 'UI/UX', 'Framer Motion'],
                demoLink: 'https://flow-catalog.vercel.app/',
                codeLink: '#'
            }
        ],
        education: [
            {
                degree: 'Bakalavr, Biznes va Moliya Menejmenti',
                institution: 'Toshkentdagi Singapur Menejmentni Rivojlantirish Instituti (MDIST) — Sunderland Universiteti',
                period: 'Bitirgan',
                description: 'Biznesni boshqarish va moliya tamoyillariga yo\'naltirilgan, kuchli tahliliy va kasbiy ko\'nikmalarni rivojlantirgan.'
            }
        ]
    }
};

const { createApp, ref, computed, onMounted, watch, reactive } = Vue;

const app = createApp({
    setup() {
        const isDark = ref(false);
        const lang = ref('en');

        // Initialize from local storage
        onMounted(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                isDark.value = true;
            }
            document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');

            const savedLang = localStorage.getItem('lang');
            if (savedLang && ['en', 'ru', 'uz'].includes(savedLang)) {
                lang.value = savedLang;
            }
        });

        watch(isDark, (newVal) => {
            document.documentElement.setAttribute('data-theme', newVal ? 'dark' : 'light');
            localStorage.setItem('theme', newVal ? 'dark' : 'light');
        });

        watch(lang, (newVal) => {
            localStorage.setItem('lang', newVal);
            document.documentElement.setAttribute('lang', newVal);
        });

        const toggleTheme = () => {
            isDark.value = !isDark.value;
        };

        const changeLanguage = (newLang) => {
            lang.value = newLang;
        };

        const t = (path) => {
            return path.split('.').reduce((obj, key) => obj?.[key], translations[lang.value]) || '';
        };

        const form = ref({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        const submitForm = () => {
            console.log('Form submitted:', form.value);
            alert(t('contact.successMsg'));
            form.value = { name: '', email: '', subject: '', message: '' };
        };

        const scrollToSection = (sectionId) => {
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Make state directly reactive so the template uses the current language automatically
        const navItems = computed(() => [
            { text: t('nav.about'), link: '#about' },
            { text: t('nav.skills'), link: '#skills' },
            { text: t('nav.experience'), link: '#experience' },
            { text: t('nav.projects'), link: '#projects' },
            { text: t('nav.education'), link: '#education' },
            { text: t('nav.contact'), link: '#contact' }
        ]);

        // Make translations reactive so project image carousels work interactively
        const reactiveTranslations = reactive(translations);

        return {
            isDark,
            lang,
            toggleTheme,
            changeLanguage,
            t,
            form,
            submitForm,
            scrollToSection,
            navItems,
            translations: reactiveTranslations
        };
    }
});

app.mount('#app');
