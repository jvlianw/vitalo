// Language translations
const translations = {
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über uns',
            membership: 'Mitgliedschaft',
            tennis: 'Tennis',
            classes: 'Kurse',
            team: 'Team',
            physiotherapy: 'Physiotherapie',
            nutrition: 'Ernährung',
            contact: 'Kontakt'
        },
        hero: {
            subtitle: 'Therapie | Training | Gesundheit',
            cta: 'Jetzt starten'
        },
        about: {
            title: 'Willkommen bei VITALO',
            subtitle: 'Wo Fitness auf Wellness trifft',
            location: {
                title: 'Standort',
                address: 'Schallfelderstraße 48<br>97447 Gerolzhofen'
            },
            hours: {
                title: 'Öffnungszeiten',
                schedule: 'Montag - Donnerstag: 08:30 - 22:00<br>Freitag: 08:30 - 21:00<br>Samstag: 14:00 - 19:00<br>Sonntag: 09:00 - 14:00'
            },
            contact: {
                title: 'Kontakt'
            }
        },
        map: {
            title: 'Besuche uns',
            subtitle: 'Finde uns in Gerolzhofen',
            parking: {
                title: 'Parken',
                description: 'Kostenlose Parkplätze direkt am Eingang verfügbar'
            },
            transit: {
                title: 'Öffentliche Verkehrsmittel',
                description: 'Bushaltestelle 200m entfernt'
            },
            accessibility: {
                title: 'Barrierefreiheit',
                description: 'Vollständig barrierefrei zugänglich'
            }
        },
        membership: {
            title: 'Mitgliedschaftspläne',
            subtitle: 'Wähle den perfekten Plan für deine Fitnessziele',
            period: '/Monat',
            popular: 'Am beliebtesten',
            selectButton: 'Plan wählen',
            basic: {
                title: 'Basic',
                feature1: '✓ Fitnessstudio-Zugang',
                feature2: '✓ Umkleideraum & Duschen',
                feature3: '✓ Kostenlose Parkplätze',
                feature4: '✓ 2 Gästepässe/Monat'
            },
            premium: {
                title: 'Premium',
                feature1: '✓ Alle Basic-Funktionen',
                feature2: '✓ Unbegrenzte Kurse',
                feature3: '✓ Tennisplatz-Zugang',
                feature4: '✓ Sauna & Spa',
                feature5: '✓ 5 Gästepässe/Monat'
            },
            elite: {
                title: 'Elite',
                feature1: '✓ Alle Premium-Funktionen',
                feature2: '✓ Personaltraining (2x/Monat)',
                feature3: '✓ Physiotherapie-Rabatt',
                feature4: '✓ Ernährungsberatung',
                feature5: '✓ Prioritätsbuchung',
                feature6: '✓ Unbegrenzte Gästepässe'
            }
        },
        tennis: {
            title: 'Tennisplätze',
            subtitle: 'Buche deine Platzzeit online',
            info: {
                title: 'Premium Indoor-Plätze',
                description: 'Wir verfügen über 2 hochmoderne Indoor-Tennisplätze mit professionellen Belägen, perfekter Beleuchtung und Klimatisierung für ganzjähriges Spiel.'
            },
            amenities: {
                surface: '✓ Professioneller Hartplatzbelag',
                lighting: '✓ LED-Beleuchtungssystem',
                climate: '✓ Klimatisierte Umgebung',
                rental: '✓ Ausrüstungsverleih verfügbar',
                coaching: '✓ Private Trainerstunden'
            },
            booking: {
                title: 'Platz buchen',
                description: 'Sieh dir die Verfügbarkeit in Echtzeit an und buche deinen Tennisplatz direkt online.',
                court: 'Platz auswählen',
                court1: 'Platz 1',
                court2: 'Platz 2',
                date: 'Datum',
                time: 'Zeitfenster',
                button: 'Jetzt buchen',
                note: 'Mitglieder: Kostenlos | Nicht-Mitglieder: 25€/Stunde'
            }
        },
        classes: {
            title: 'Kursplan',
            subtitle: 'Von Experten geleitete Kurse für alle Fitnesslevel',
            hyrox: {
                description: 'Hochintensives funktionelles Fitness-Training mit Laufen und Workout-Stationen',
                days: 'Mo, Mi, Fr'
            },
            crossfit: {
                description: 'Ständig variierende funktionelle Bewegungen mit hoher Intensität',
                days: 'Mo - Sa'
            },
            yoga: {
                description: 'Achtsame Bewegung und Atemarbeit für Flexibilität und inneren Frieden',
                days: 'Di, Do, Sa'
            },
            stretching: {
                description: 'Geführte Flexibilitäts- und Mobilitätseinheiten für Erholung und Leistung',
                days: 'Täglich'
            },
            spinning: {
                description: 'Energiegeladene Cycling-Kurse mit motivierender Musik und Anleitung',
                days: 'Mo, Mi, Fr, So'
            }
        },
        team: {
            title: 'Lerne unser Team kennen',
            subtitle: 'Engagierte Profis, die sich deinem Erfolg verschrieben haben',
            maria: {
                role: 'General Manager',
                bio: 'Leitet das gesamte VITALO-Team und sorgt für einen reibungslosen Ablauf aller Bereiche. Ansprechpartnerin für Mitgliedschaften und strategische Planung.'
            },
            luca: {
                role: 'Corporate & Student Training',
                bio: 'Spezialisiert auf betriebliche Gesundheitsprogramme und Studentenbetreuung. Entwickelt maßgeschneiderte Trainingspläne für Firmen und junge Sportler.'
            },
            samira: {
                role: 'Rezeption',
                bio: 'Erste Anlaufstelle für alle Fragen und Anliegen. Kümmert sich um Check-ins, Terminbuchungen und sorgt für eine herzliche Atmosphäre.'
            },
            rainer: {
                role: 'Rezeption',
                bio: 'Unterstützt das Empfangsteam und hilft bei allen organisatorischen Fragen. Koordiniert Kursbuchungen und Mitgliederbetreuung.'
            },
            katalin: {
                role: 'CrossFit Coach',
                bio: 'Zertifizierte CrossFit-Trainerin mit Leidenschaft für funktionelles Training. Motiviert und fordert dich in jedem Workout heraus.'
            },
            katha: {
                role: 'Stretching & Yoga',
                bio: 'Expertin für Beweglichkeit und Körperbewusstsein. Leitet entspannende Yoga- und intensive Stretching-Sessions für optimale Regeneration.'
            },
            kristina: {
                role: 'Ernährungsberaterin',
                bio: 'Dr. rer. nat. mit Postdoc am Institut für Ernährungsmedizin. Spezialisiert auf klinische Ernährung, Sportmedizin und Leistungsoptimierung mit wissenschaftlich fundierter Beratung.'
            },
            dominik: {
                role: 'Tennis Coach',
                bio: 'Professioneller Tennistrainer für alle Spielstärken. Bietet Einzeltraining und Gruppenunterricht auf höchstem Niveau.'
            }
        },
        physio: {
            title: 'Physiotherapie-Leistungen',
            subtitle: 'Fachkundige Betreuung zur Verletzungsprävention und Genesung',
            sports: {
                title: 'Sportverletzungs-Rehabilitation',
                description: 'Umfassende Behandlungspläne für akute und chronische Sportverletzungen, um dir zu helfen, sicher zu Höchstleistungen zurückzukehren.'
            },
            manual: {
                title: 'Manuelle Therapie',
                description: 'Hands-on-Techniken einschließlich Massage, Gelenkmobilisation und Weichteiltherapie zur Schmerzlinderung und verbesserten Beweglichkeit.'
            },
            movement: {
                title: 'Bewegungsanalyse',
                description: 'Detaillierte Bewertung deiner Bewegungsmuster zur Identifikation und Korrektur von Ungleichgewichten, bevor sie zu Verletzungen führen.'
            },
            surgery: {
                title: 'Postoperative Genesung',
                description: 'Strukturierte Rehabilitationsprogramme zur Wiederherstellung von Funktion und Kraft nach orthopädischen Operationen.'
            },
            booking: {
                title: 'Termin buchen',
                description: 'Unsere Physiotherapie-Leistungen stehen sowohl Mitgliedern als auch Nicht-Mitgliedern zur Verfügung.',
                initial: 'Erstbeurteilung (60 Min): 120€',
                followup: 'Folgesitzung (45 Min): 90€',
                package: '5er-Paket: 400€',
                discount: 'Elite-Mitglieder: 20% Rabatt',
                button: 'Beratung vereinbaren'
            }
        },
        nutrition: {
            title: 'Sporternährung',
            subtitle: 'Personalisierte Ernährungsstrategien für optimale Leistung',
            info: {
                title: 'Tanke Energie für deine Leistung',
                description: 'Unser registrierter Sporternährungsberater bietet evidenzbasierte Beratung, um dir zu helfen, deine Fitnessziele durch richtige Ernährung zu erreichen.'
            },
            assessment: {
                title: 'Ernährungsbewertung',
                description: 'Umfassende Bewertung deiner aktuellen Ernährung, Ziele und Lebensweise zur Erstellung eines personalisierten Plans.'
            },
            meal: {
                title: 'Essensplanung',
                description: 'Maßgeschneiderte Essenspläne, angepasst an deinen Trainingsplan, Vorlieben und Ernährungsbedürfnisse.'
            },
            performance: {
                title: 'Leistungsoptimierung',
                description: 'Strategisches Ernährungs-Timing und Nahrungsergänzungsberatung für verbesserte sportliche Leistung.'
            },
            composition: {
                title: 'Körperzusammensetzung',
                description: 'Evidenzbasierte Ansätze für gesundes Gewichtsmanagement und Körperzusammensetzungsziele.'
            },
            booking: {
                title: 'Beratung buchen',
                service: 'Leistung auswählen',
                initial: 'Erstberatung (90 Min) - 150€',
                followup: 'Folgesitzung (60 Min) - 100€',
                quick: 'Schnell-Check (30 Min) - 60€',
                date: 'Bevorzugtes Datum',
                time: 'Bevorzugte Zeit',
                button: 'Termin anfragen',
                note: 'Elite-Mitglieder erhalten eine kostenlose Beratung pro Monat'
            }
        },
        footer: {
            description: 'Deine erstklassige Destination für Fitness, Wellness und sportliche Leistung.',
            quicklinks: {
                title: 'Schnellzugriff',
                membership: 'Mitgliedschaft',
                classes: 'Kurse',
                tennis: 'Tennis',
                team: 'Team'
            },
            services: {
                title: 'Leistungen',
                physio: 'Physiotherapie',
                nutrition: 'Ernährung',
                personal: 'Personal Training',
                corporate: 'Betriebliches Gesundheitsmanagement'
            },
            contact: {
                title: 'Kontakt'
            },
            copyright: '© 2026 VITALO Fitness & Health Club. Alle Rechte vorbehalten.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            membership: 'Membership',
            tennis: 'Tennis',
            classes: 'Classes',
            team: 'Team',
            physiotherapy: 'Physiotherapy',
            nutrition: 'Nutrition',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Therapy | Training | Health',
            cta: 'Start Today'
        },
        about: {
            title: 'Welcome to VITALO',
            subtitle: 'Where fitness meets wellness',
            location: {
                title: 'Location',
                address: 'Schallfelderstraße 48<br>97447 Gerolzhofen'
            },
            hours: {
                title: 'Opening Hours',
                schedule: 'Monday - Thursday: 08:30 - 22:00<br>Friday: 08:30 - 21:00<br>Saturday: 14:00 - 19:00<br>Sunday: 09:00 - 14:00'
            },
            contact: {
                title: 'Contact'
            }
        },
        map: {
            title: 'Visit Us',
            subtitle: 'Find us in Gerolzhofen',
            parking: {
                title: 'Parking',
                description: 'Free parking available right at the entrance'
            },
            transit: {
                title: 'Public Transport',
                description: 'Bus stop 200m away'
            },
            accessibility: {
                title: 'Accessibility',
                description: 'Fully wheelchair accessible'
            }
        },
        membership: {
            title: 'Membership Plans',
            subtitle: 'Choose the perfect plan for your fitness goals',
            period: '/month',
            popular: 'Most Popular',
            selectButton: 'Select Plan',
            basic: {
                title: 'Basic',
                feature1: '✓ Gym access',
                feature2: '✓ Locker room & showers',
                feature3: '✓ Free parking',
                feature4: '✓ 2 guest passes/month'
            },
            premium: {
                title: 'Premium',
                feature1: '✓ All Basic features',
                feature2: '✓ Unlimited classes',
                feature3: '✓ Tennis court access',
                feature4: '✓ Sauna & spa',
                feature5: '✓ 5 guest passes/month'
            },
            elite: {
                title: 'Elite',
                feature1: '✓ All Premium features',
                feature2: '✓ Personal training (2x/month)',
                feature3: '✓ Physiotherapy discount',
                feature4: '✓ Nutrition consultation',
                feature5: '✓ Priority booking',
                feature6: '✓ Unlimited guest passes'
            }
        },
        tennis: {
            title: 'Tennis Courts',
            subtitle: 'Book your court time online',
            info: {
                title: 'Premium Indoor Courts',
                description: 'We feature 2 state-of-the-art indoor tennis courts with professional-grade surfaces, perfect lighting, and climate control for year-round play.'
            },
            amenities: {
                surface: '✓ Professional hard court surface',
                lighting: '✓ LED lighting system',
                climate: '✓ Climate controlled environment',
                rental: '✓ Equipment rental available',
                coaching: '✓ Private coaching sessions'
            },
            booking: {
                title: 'Book a Court',
                description: 'View real-time availability and book your tennis court directly online.',
                court: 'Select Court',
                court1: 'Court 1',
                court2: 'Court 2',
                date: 'Date',
                time: 'Time Slot',
                button: 'Book Now',
                note: 'Members: Free | Non-members: $25/hour'
            }
        },
        classes: {
            title: 'Class Schedule',
            subtitle: 'Expert-led classes for all fitness levels',
            hyrox: {
                description: 'High-intensity functional fitness combining running and workout stations',
                days: 'Mon, Wed, Fri'
            },
            crossfit: {
                description: 'Constantly varied functional movements performed at high intensity',
                days: 'Mon - Sat'
            },
            yoga: {
                description: 'Mindful movement and breathwork for flexibility and inner peace',
                days: 'Tue, Thu, Sat'
            },
            stretching: {
                description: 'Guided flexibility and mobility sessions for recovery and performance',
                days: 'Daily'
            },
            spinning: {
                description: 'High-energy cycling classes with motivating music and instruction',
                days: 'Mon, Wed, Fri, Sun'
            }
        },
        team: {
            title: 'Meet Our Team',
            subtitle: 'Dedicated professionals committed to your success',
            maria: {
                role: 'General Manager',
                bio: 'Leads the entire VITALO team and ensures smooth operations across all areas. Your contact for memberships and strategic planning.'
            },
            luca: {
                role: 'Corporate & Student Training',
                bio: 'Specializes in corporate wellness programs and student support. Develops customized training plans for companies and young athletes.'
            },
            samira: {
                role: 'Reception',
                bio: 'First point of contact for all questions and concerns. Takes care of check-ins, appointment bookings, and creates a welcoming atmosphere.'
            },
            rainer: {
                role: 'Reception',
                bio: 'Supports the reception team and helps with all organizational matters. Coordinates class bookings and member services.'
            },
            katalin: {
                role: 'CrossFit Coach',
                bio: 'Certified CrossFit trainer with passion for functional training. Motivates and challenges you in every workout.'
            },
            katha: {
                role: 'Stretching & Yoga',
                bio: 'Expert in flexibility and body awareness. Leads relaxing yoga and intensive stretching sessions for optimal recovery.'
            },
            kristina: {
                role: 'Nutritionist',
                bio: 'Dr. rer. nat. with postdoctoral research at Institute for Nutritional Medicine. Specializes in clinical nutrition, sports medicine, and performance optimization with evidence-based guidance.'
            },
            dominik: {
                role: 'Tennis Coach',
                bio: 'Professional tennis coach for all skill levels. Offers individual training and group lessons at the highest level.'
            }
        },
        physio: {
            title: 'Physiotherapy Services',
            subtitle: 'Expert care for injury prevention and recovery',
            sports: {
                title: 'Sports Injury Rehabilitation',
                description: 'Comprehensive treatment plans for acute and chronic sports injuries, helping you return to peak performance safely.'
            },
            manual: {
                title: 'Manual Therapy',
                description: 'Hands-on techniques including massage, joint mobilization, and soft tissue therapy for pain relief and improved mobility.'
            },
            movement: {
                title: 'Movement Analysis',
                description: 'Detailed assessment of your movement patterns to identify and correct imbalances before they lead to injury.'
            },
            surgery: {
                title: 'Post-Surgical Recovery',
                description: 'Structured rehabilitation programs designed to restore function and strength after orthopedic surgery.'
            },
            booking: {
                title: 'Book an Appointment',
                description: 'Our physiotherapy services are available to both members and non-members.',
                initial: 'Initial Assessment (60 min): $120',
                followup: 'Follow-up Session (45 min): $90',
                package: 'Package of 5 sessions: $400',
                discount: 'Elite Members: 20% discount',
                button: 'Schedule Consultation'
            }
        },
        nutrition: {
            title: 'Sports Nutrition',
            subtitle: 'Personalized nutrition strategies for optimal performance',
            info: {
                title: 'Fuel Your Performance',
                description: 'Our registered sports nutritionist provides evidence-based guidance to help you achieve your fitness goals through proper nutrition.'
            },
            assessment: {
                title: 'Nutrition Assessment',
                description: 'Comprehensive evaluation of your current diet, goals, and lifestyle to create a personalized plan.'
            },
            meal: {
                title: 'Meal Planning',
                description: 'Custom meal plans tailored to your training schedule, preferences, and nutritional needs.'
            },
            performance: {
                title: 'Performance Optimization',
                description: 'Strategic nutrition timing and supplementation guidance for enhanced athletic performance.'
            },
            composition: {
                title: 'Body Composition',
                description: 'Evidence-based approaches to healthy weight management and body composition goals.'
            },
            booking: {
                title: 'Book a Consultation',
                service: 'Select Service',
                initial: 'Initial Consultation (90 min) - $150',
                followup: 'Follow-up Session (60 min) - $100',
                quick: 'Quick Check-in (30 min) - $60',
                date: 'Preferred Date',
                time: 'Preferred Time',
                button: 'Request Appointment',
                note: 'Elite members receive one complimentary consultation per month'
            }
        },
        footer: {
            description: 'Your premier destination for fitness, wellness, and athletic performance.',
            quicklinks: {
                title: 'Quick Links',
                membership: 'Membership',
                classes: 'Classes',
                tennis: 'Tennis',
                team: 'Team'
            },
            services: {
                title: 'Services',
                physio: 'Physiotherapy',
                nutrition: 'Nutrition',
                personal: 'Personal Training',
                corporate: 'Corporate Wellness'
            },
            contact: {
                title: 'Contact'
            },
            copyright: '© 2026 VITALO Fitness & Health Club. All rights reserved.'
        }
    }
};

// Language switching functionality
let currentLanguage = localStorage.getItem('vitalo-language') || 'de';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('vitalo-language', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-lang attributes
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-switch') === lang);
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);

    // Language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-switch');
            setLanguage(lang);
        });
    });
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Form submission handlers (placeholder - connect to backend)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form type
        const formType = form.classList.contains('booking-form') ?
            (currentLanguage === 'de' ? 'Tennisplatz-Buchung' : 'Tennis Court Booking') :
            form.classList.contains('consultation-form') ?
            (currentLanguage === 'de' ? 'Ernährungsberatung' : 'Nutrition Consultation') :
            (currentLanguage === 'de' ? 'Formular' : 'Form');

        const successMessage = currentLanguage === 'de' ?
            `${formType}-Anfrage eingereicht! Wir werden uns in Kürze mit dir in Verbindung setzen, um zu bestätigen.` :
            `${formType} request submitted! We'll contact you shortly to confirm.`;

        alert(successMessage);

        // Reset form
        form.reset();
    });
});

// Pricing card selection
document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = e.target.closest('.pricing-card').querySelector('h3').textContent;

        const message = currentLanguage === 'de' ?
            `Du hast den ${planName}-Plan ausgewählt! Unser Team wird sich mit dir in Verbindung setzen, um deine Mitgliedschaft einzurichten.` :
            `You've selected the ${planName} plan! Our team will contact you to complete your membership setup.`;

        alert(message);
    });
});

// Contact buttons
document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const message = currentLanguage === 'de' ?
            'Vielen Dank für dein Interesse! Bitte rufe uns an unter 09382 4718 oder schreibe an info@vitalo.fit, um deinen Termin zu vereinbaren.' :
            'Thank you for your interest! Please call us at 09382 4718 or email info@vitalo.fit to schedule your appointment.';

        alert(message);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.info-card, .pricing-card, .class-card, .team-member, .service-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Set minimum date for booking forms to today
const dateInputs = document.querySelectorAll('input[type="date"]');
const today = new Date().toISOString().split('T')[0];
dateInputs.forEach(input => {
    input.setAttribute('min', today);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroContent.style.transform = `translateY(${parallax}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// Dynamic current year in footer
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    const copyrightText = footerYear.getAttribute('data-lang');
    if (copyrightText) {
        const translation = getNestedTranslation(translations[currentLanguage], copyrightText);
        if (translation) {
            footerYear.textContent = translation.replace('2026', currentYear);
        }
    }
}

// Slideshow functionality
let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0) return;

    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Add active class to current slide and dot
    slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }

    // Change slide every 5 seconds
    slideTimer = setTimeout(showSlides, 5000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1;
    showSlides();
}

// Start slideshow when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    showSlides();
});

console.log('VITALO website loaded successfully! Language: ' + currentLanguage);