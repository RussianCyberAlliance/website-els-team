new Vue({
    el: '#app',
    data: {
        commands: [
            { 
                name: {
                    ru: 'Fake Utility',
                    en: 'Fake Utility',
                    uk: 'Fake Utility',
                    de: 'Fake Utility'
                },
                command: 'help',
                prefix: '!',
                description: {
                    ru: 'Показать все команды бота',
                    en: 'Show all bot commands',
                    uk: 'Показати всі команди бота',
                    de: 'Zeige alle Bot-Befehle'
                },
                icon: 'fas fa-question-circle'
            },
            { 
                name: {
                    ru: 'Server Nuke',
                    en: 'Server Nuke',
                    uk: 'Server Nuke',
                    de: 'Server Nuke'
                },
                command: 'nuke52',
                prefix: '!',
                description: {
                    ru: 'Краш сервер',
                    en: 'Nuke Server',
                    uk: 'Зламати сервер',
                    de: 'Server zum Absturz bringen'
                },
                icon: 'fas fa-bomb'
            },
            { 
                name: {
                    ru: 'Kick All',
                    en: 'Kick All',
                    uk: 'Kick All',
                    de: 'Kick All'
                },
                command: 'kickall52',
                prefix: '!',
                description: {
                    ru: 'Кик всех участников',
                    en: 'Kick all members',
                    uk: 'Кикнути всіх учасників',
                    de: 'Alle Mitglieder kicken'
                },
                icon: 'fas fa-user-slash'
            },
            { 
                name: {
                    ru: 'Soon',
                    en: 'Soon',
                    uk: 'Soon',
                    de: 'Soon'
                },
                command: 'Soon',
                prefix: ' ',
                description: {
                    ru: 'Soon',
                    en: 'Soon',
                    uk: 'Soon',
                    de: 'Soon'
                },
                icon: 'fas fa-shield-alt'
            }
        ],
        translations: {
            title: {
                ru: 'Команды бота',
                en: 'Bot Commands',
                uk: 'Команди бота',
                de: 'Bot Befehle'
            },
            subtitle: {
                ru: 'Используйте эти команды для взаимодействия с нашим ботом',
                en: 'Use these commands to interact with our bot',
                uk: 'Використовуйте ці команди для взаємодії з нашим ботом',
                de: 'Verwenden Sie diese Befehle, um mit unserem Bot zu interagieren'
            },
            addBot: {
                ru: 'Добавить бота',
                en: 'Add bot',
                uk: 'Додати бота',
                de: 'Bot hinzufügen'
            },
            copyLink: {
                ru: 'Скопировать ссылку',
                en: 'Copy link',
                uk: 'Скопіювати посилання',
                de: 'Link kopieren'
            },
            copied: {
                ru: 'Скопировано!',
                en: 'Copied!',
                uk: 'Скопійовано!',
                de: 'Kopiert!'
            }
        },
        languages: {
            ru: {
                name: 'Русский',
                flag: 'https://flagcdn.com/w20/ru.png'
            },
            en: {
                name: 'English',
                flag: 'https://flagcdn.com/w20/gb.png'
            },
            uk: {
                name: 'Українська',
                flag: 'https://flagcdn.com/w20/ua.png'
            },
            de: {
                name: 'Deutsch',
                flag: 'https://flagcdn.com/w20/de.png'
            }
        },
        botLink: 'https://discord.com/oauth2/authorize?client_id=1297558702844411924&permissions=8&scope=bot ',
        copied: false,
        currentLanguage: 'ru',
        activeCommand: null,
        languageDropdownOpen: false
    },
    methods: {
        copyLink() {
            navigator.clipboard.writeText(this.botLink)
                .then(() => {
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                })
                .catch(err => {
                    console.error(' ', err);
                });
        },
        scrollToCommand(index) {
            this.activeCommand = index;
            const element = document.getElementById('command-'+index);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                element.style.transform = 'scale(1.03)';
                element.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.4)';
                setTimeout(() => {
                    element.style.transform = '';
                    element.style.boxShadow = '';
                }, 800);
            }
        },
        changeLanguage(code) {
            this.currentLanguage = code;
            this.languageDropdownOpen = false;
        }
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.command-card').forEach(card => {
            observer.observe(card);
        });
        
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.languageDropdownOpen = false;
            }
        });
    }
});