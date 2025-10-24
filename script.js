// Surreal GenAI Video Ideas Generator
class VideoIdeasGenerator {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.ideaDatabase = this.buildIdeaDatabase();
    }

    initializeElements() {
        this.promptInput = document.getElementById('promptInput');
        this.generateBtn = document.getElementById('generateBtn');
        this.ideasContainer = document.getElementById('ideasContainer');
    }

    setupEventListeners() {
        this.generateBtn.addEventListener('click', () => this.generateIdeas());
        this.promptInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.generateIdeas();
            }
        });
    }

    buildIdeaDatabase() {
        return {
            // Surreal concepts
            surreal: [
                'a tape recorder that records your dreams and creates a matching mixtape when you wake up',
                'a vending machine that dispenses memories instead of snacks',
                'a mirror that shows you dancing in a parallel disco dimension',
                'a telephone booth that connects to your childhood bedroom',
                'a washing machine that cleanses your soul while spinning to italodisco',
                'a clock that ticks backwards through your most nostalgic moments',
                'a elevator that travels through different decades of your life',
                'a radio that only plays songs from parallel universes',
                'a door that opens to the same room but in different time periods',
                'a car that drives itself through your subconscious mind'
            ],
            
            // Liminal spaces
            liminal: [
                'an empty shopping mall at 3 AM with disco balls hanging from the ceiling',
                'a gas station in the middle of nowhere playing italodisco classics',
                'a hotel corridor that stretches infinitely with neon lights',
                'a parking garage where each level represents a different decade',
                'a train station where the trains only arrive in your dreams',
                'a hospital waiting room filled with dancing holograms',
                'a library where the books contain moving images of disco parties',
                'a airport terminal where everyone is frozen in dance poses',
                'a school hallway that leads to a secret disco in the basement',
                'a office building where the elevators play different eras of music'
            ],
            
            // Nostalgic elements
            nostalgic: [
                'your grandmother\'s living room transformed into a sci-fi disco',
                'a childhood bedroom that morphs into a spaceship control room',
                'a family photo album where everyone is dancing in zero gravity',
                'a school playground with futuristic equipment and disco lights',
                'a family dinner table where the food glows and pulses to the beat',
                'a childhood toy box that contains miniature disco scenes',
                'a family car that transforms into a time-traveling dance floor',
                'a childhood treehouse that becomes a space station',
                'a family pet that turns into a disco-dancing robot',
                'a childhood friend who appears as a holographic dance partner'
            ],
            
            // Italodisco elements
            italodisco: [
                'synthesizers that create visible sound waves in the air',
                'disco balls that project holographic dancers',
                'mirror balls that reflect scenes from parallel universes',
                'dance floors that light up with each step in neon patterns',
                'DJ booths that float in mid-air with pulsing lights',
                'speakers that emit colorful smoke with each bass drop',
                'dance moves that create temporary portals to other dimensions',
                'disco lights that reveal hidden messages in the darkness',
                'synthesizer keyboards that play themselves in perfect harmony',
                'disco dancers who move in perfect synchronization across time'
            ],
            
            // Sci-fi elements
            scifi: [
                'androids with human emotions dancing to italodisco',
                'holographic projections of disco parties from the future',
                'time machines disguised as disco balls',
                'alien beings who communicate through dance moves',
                'spaceships with disco floors and neon lighting',
                'robots that learn to dance by watching disco videos',
                'virtual reality headsets that transport you to disco dimensions',
                'cybernetic implants that make you dance involuntarily',
                'teleportation devices that work through disco dance moves',
                'artificial intelligence that creates the perfect disco playlist'
            ],
            
            // Kitsch elements
            kitsch: [
                'oversized disco balls that serve as planets in a miniature solar system',
                'plastic flamingos that dance in formation to italodisco',
                'neon palm trees that sway to the rhythm of synthesizers',
                'inflatable furniture that pulses with the beat',
                'plastic flowers that bloom in time with the music',
                'ceramic figurines that come to life and start dancing',
                'vintage lamps that project disco patterns on the walls',
                'plastic fruit that glows and pulses with neon colors',
                'toy cars that transform into miniature disco venues',
                'stuffed animals that become disco dance instructors'
            ],
            
            // Camp elements
            camp: [
                'drag queens performing disco routines in space suits',
                'over-the-top costumes that light up and play music',
                'dramatic dance moves performed in zero gravity',
                'exaggerated facial expressions synchronized to the beat',
                'theatrical lighting that changes colors with each dance move',
                'campy dialogue delivered while dancing to italodisco',
                'over-the-top makeup that glows in the dark',
                'dramatic poses held for impossibly long periods',
                'theatrical gestures that create visual effects',
                'campy sound effects that accompany every dance move'
            ],
            
            // Characters
            characters: [
                'old ladies dating muscular android gigolos',
                'disco-dancing robots with human emotions',
                'time-traveling DJs from the future',
                'alien beings who crash-land at a disco party',
                'ghostly dancers from past decades',
                'cybernetic beings who communicate through dance',
                'holographic performers who materialize from thin air',
                'android bartenders who serve glowing cocktails',
                'robot security guards who dance instead of patrol',
                'alien tourists who visit Earth specifically for disco'
            ],
            
            // Settings
            settings: [
                'a neon-lit diner in the middle of a desert',
                'a spaceship interior designed like a 1970s disco',
                'a underwater disco with glowing sea creatures',
                'a mountaintop observatory that transforms into a dance floor',
                'a abandoned shopping mall with disco lighting',
                'a space station with a zero-gravity dance floor',
                'a time-traveling disco that visits different eras',
                'a parallel universe where everything is made of disco balls',
                'a dreamscape where thoughts become dance moves',
                'a liminal space between dimensions where music never stops'
            ]
        };
    }

    generateIdeas() {
        const prompt = this.promptInput.value.trim();
        
        // Show loading state
        this.showLoading();
        
        // Simulate processing time for better UX
        setTimeout(() => {
            const ideas = this.createIdeas(prompt);
            this.displayIdeas(ideas);
        }, 1500);
    }

    createIdeas(prompt) {
        const ideas = [];
        
        if (prompt) {
            // Generate ideas based on the prompt
            ideas.push(...this.generatePromptBasedIdeas(prompt));
        } else {
            // Generate random ideas
            ideas.push(...this.generateRandomIdeas());
        }
        
        // Ensure we have exactly 5 ideas
        while (ideas.length < 5) {
            ideas.push(this.generateRandomIdea());
        }
        
        return ideas.slice(0, 5);
    }

    generatePromptBasedIdeas(prompt) {
        const ideas = [];
        const promptLower = prompt.toLowerCase();
        
        // Try to match prompt with existing concepts
        for (const category in this.ideaDatabase) {
            if (category === 'characters' || category === 'settings') continue;
            
            this.ideaDatabase[category].forEach(concept => {
                if (concept.toLowerCase().includes(promptLower) || 
                    promptLower.includes(concept.toLowerCase().split(' ')[0])) {
                    ideas.push(this.createIdeaFromConcept(concept, prompt));
                }
            });
        }
        
        // If no matches found, create custom ideas based on prompt
        if (ideas.length === 0) {
            ideas.push(this.createCustomIdea(prompt));
        }
        
        return ideas;
    }

    generateRandomIdeas() {
        const ideas = [];
        
        // Mix different types of ideas
        ideas.push(this.generateRandomIdea());
        ideas.push(this.generateCharacterBasedIdea());
        ideas.push(this.generateSettingBasedIdea());
        ideas.push(this.generateConceptBasedIdea());
        ideas.push(this.generateRandomIdea());
        
        return ideas;
    }

    generateRandomIdea() {
        const categories = Object.keys(this.ideaDatabase);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomConcept = this.ideaDatabase[randomCategory][
            Math.floor(Math.random() * this.ideaDatabase[randomCategory].length)
        ];
        
        return this.createIdeaFromConcept(randomConcept);
    }

    generateCharacterBasedIdea() {
        const character = this.ideaDatabase.characters[
            Math.floor(Math.random() * this.ideaDatabase.characters.length)
        ];
        const setting = this.ideaDatabase.settings[
            Math.floor(Math.random() * this.ideaDatabase.settings.length)
        ];
        
        return {
            title: `"${character}"`,
            description: `${character} in ${setting}, where the music never stops and reality bends to the rhythm of italodisco. The scene unfolds in a surreal dance of neon lights and nostalgic memories.`,
            duration: this.getRandomDuration()
        };
    }

    generateSettingBasedIdea() {
        const setting = this.ideaDatabase.settings[
            Math.floor(Math.random() * this.ideaDatabase.settings.length)
        ];
        const surreal = this.ideaDatabase.surreal[
            Math.floor(Math.random() * this.ideaDatabase.surreal.length)
        ];
        
        return {
            title: `"${setting}"`,
            description: `In ${setting}, ${surreal}. The atmosphere is thick with nostalgia and the air shimmers with disco lights as reality itself begins to dance.`,
            duration: this.getRandomDuration()
        };
    }

    generateConceptBasedIdea() {
        const surreal = this.ideaDatabase.surreal[
            Math.floor(Math.random() * this.ideaDatabase.surreal.length)
        ];
        const scifi = this.ideaDatabase.scifi[
            Math.floor(Math.random() * this.ideaDatabase.scifi.length)
        ];
        
        return {
            title: `"${surreal.split(',')[0]}"`,
            description: `${surreal}, but with a sci-fi twist: ${scifi}. The result is a mesmerizing blend of nostalgia and futuristic wonder.`,
            duration: this.getRandomDuration()
        };
    }

    createIdeaFromConcept(concept, prompt = '') {
        const title = `"${concept}"`;
        let description = concept;
        
        // Add atmospheric details
        const atmospheres = [
            'The scene is bathed in neon lights that pulse to an invisible italodisco beat.',
            'Nostalgic memories swirl around like disco balls in zero gravity.',
            'The air shimmers with the promise of forgotten dreams and future possibilities.',
            'Liminal spaces stretch infinitely, each one more surreal than the last.',
            'The atmosphere crackles with electric energy and nostalgic longing.'
        ];
        
        const randomAtmosphere = atmospheres[Math.floor(Math.random() * atmospheres.length)];
        description += ` ${randomAtmosphere}`;
        
        if (prompt) {
            description += ` This concept explores the intersection of "${prompt}" with surreal, liminal, and nostalgic themes.`;
        }
        
        return {
            title,
            description,
            duration: this.getRandomDuration()
        };
    }

    createCustomIdea(prompt) {
        const themes = ['surreal', 'liminal', 'nostalgic'];
        const aesthetics = ['italodisco', 'sci-fi', 'kitsch', 'camp'];
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        const randomAesthetic = aesthetics[Math.floor(Math.random() * aesthetics.length)];
        
        return {
            title: `"${prompt} - ${randomTheme} ${randomAesthetic} Edition"`,
            description: `A ${randomTheme} exploration of "${prompt}" through the lens of ${randomAesthetic} aesthetics. The scene unfolds in a dreamlike state where reality bends to the rhythm of italodisco and nostalgia flows like liquid light.`,
            duration: this.getRandomDuration()
        };
    }

    getRandomDuration() {
        const durations = ['30-45 seconds', '45-60 seconds', '30-60 seconds'];
        return durations[Math.floor(Math.random() * durations.length)];
    }

    showLoading() {
        this.ideasContainer.innerHTML = `
            <div class="loading">
                Generating surreal video ideas...
            </div>
        `;
    }

    displayIdeas(ideas) {
        const ideasHTML = ideas.map((idea, index) => `
            <div class="idea-card">
                <div class="idea-number">IDEA ${index + 1}</div>
                <div class="idea-title">${idea.title}</div>
                <div class="idea-description">${idea.description}</div>
                <div class="idea-duration">Duration: ${idea.duration}</div>
            </div>
        `).join('');
        
        this.ideasContainer.innerHTML = ideasHTML;
        
        // Add animation to cards
        const cards = this.ideasContainer.querySelectorAll('.idea-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoIdeasGenerator();
});