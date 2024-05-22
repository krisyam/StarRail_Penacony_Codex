export const characterData = [
    {
        name: 'Acheron',
        rarity: 'fiveStar',
        path: 'Nihility',
        element: 'Lightning',
        faction: "Self-Annihilators",
        intro: `A drifter claiming to be a Galaxy Ranger. She walks the cosmos alone, carrying with her a long sword.
Though aloof and taciturn, her blade flicks out like lashing lightning. And yet, she always strikes with her scabbard, never drawing the sword free.
`,
        videos: {
            trailer: "IQQPDPAvxTg",
            showcase: "Y9vz34wximk"
        },
        skills: {
            basicAtk: {
                name: "Trilateral Wiltcross",
                energyGeneration: 0,
                toughnessDamage: 30,
                description: "Deals Lightning DMG to a single target enemy."
            },
            skill: {
                name: "Octobolt Flash",
                energyGeneration: 0,
                toughnessDamage: 60,
                description: "Gains 1 point of Slashed Dream. Inflicts 1 stack of Crimson Knot on a single target enemy, dealing Lightning DMG to this target, and to adjacent targets."
            },
            ultimate: {
                name: "Slashed Dream Cries in Red",
                energyCost: 0,
                energyGeneration: 0,
                toughnessDamage: 105,
                description: `Sequentially unleash Rainblade 3 times and Stygian Resurge 1 time, dealing Lightning DMG to a single target enemy, as well as Lightning DMG to other targets.
Rainblade: Deals Lightning DMG to a single target enemy and removes up to 3 stacks of Crimson Knot from the target. When Crimson Knot is removed, immediately deals Lightning DMG to all enemies. For every stack of Crimson Knot removed, this DMG Multiplier is additionally increased.
Stygian Resurge: Deals Lightning DMG to all enemies and remove all Crimson Knots.
Crimson Knot cannot be applied to enemies during the Ultimate.
`
            },
            talent: {
                name: "Atop Rainleaf Hangs Oneness",
                description: `When Slashed Dream reaches 9 points, the Ultimate can be activated.
During the Ultimate, reduces enemies' Toughness regardless of Weakness Types and reduces all enemies' All-Type RES, lasting until the end of the Ultimate.
When any unit inflicts debuffs on an enemy target while using their ability, Acheron gains 1 point of Slashed Dream and inflicts 1 stack of Crimson Knot on the target. If debuffs are inflicted on multiple targets, then the 1 stack of
Crimson Knot will be inflicted on the enemy target with the most Crimson Knot stacks. This effect can only trigger once per every ability usage.
After an enemy target exits the field or gets defeated by any unit while Acheron is on the field, their Crimson Knot stacks will be transferred to the enemy target with the most Crimson Knot stacks on the whole field.`
            },
            technique: {
                name: "Quadrivalent Ascendance",
                description: `Immediately attacks the enemy. At the start of each wave, gains
Quadrivalent Ascendance, dealing Lightning DMG to all enemies and reducing
Toughness of all enemies irrespective of Weakness Types.
When Weakness is broken, triggers the Lightning Weakness Break effect.
Quadrivalent Ascendance: After using the Ultimate, Acheron gains 1 point of
Slashed Dream and inflicts 1 stack of Crimson Knot on a single random enemy.
If attacking a normal enemy, immediately defeats them without entering combat.
When not hitting enemies, no Technique Points are consumed.`
            }
        },
        traces: [
            {
                name: "Red Oni",
                description: `When battle starts, immediately gains 5 points of Slashed Dream
and applies 5 stacks of Crimson Knot to a random enemy.
When Slashed Dream reaches its upper limit, for every point of Slashed Dream
that exceeds the limit, gains 1 stack of Quadrivalent Ascendance.
Increases the maximum stackable count for Quadrivalent Ascendance to 3.`
            },
            {
                name: "The Abyss",
                description: `When there are 1 or 2 Nihility characters other than Acheron in the team,
the DMG dealt by Acheron's Basic ATK, Skill, and Ultimate increases to 115%
or 160% of the original DMG respectively.`
            },
            {
                name: "Thunder Core",
                description: `When the Rainblade from Acheron's Ultimate hits enemy targets with Crimson Knot,
her DMG increases by 30%, stacking up to 3 times and lasting for 3 turns.
And when Stygian Resurge triggers, additionally deals DMG for 6 times.
Each time deals Lightning DMG equal to 25% of Acheron's ATK to
a single random enemy and is viewed as part of the Ultimate DMG.`
            }
        ],
        eidolons: [
            {
                name: "Silenced Sky Spake Sooth",
                description: "CRIT Rate increases by 18% when dealing DMG to debuffed enemies."
            },
            {
                name: "Mute Thunder in Still Tempest",
                description: "The number of Nihility characters required for the Trace 'The Abyss' to achieve its highest possible effect is reduced by 1. When this unit's turn starts, gains 1 point of Slashed Dream and inflicts 1 stack of Crimson Knot on the enemy with the most Crimson Knot stacks."
            },
            {
                name: "Frost Bites in Death",
                description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10."
            },
            {
                name: "Shrined Fire for Mirrored Soul",
                description: "When enemy targets enter combat, afflict them with the Ultimate DMG Vulnerable Vulnerability state, increasing the amount of Ultimate DMG they take by 8%."
            },
            {
                name: "Strewn Souls on Erased Earths",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "Apocalypse, the Emancipator",
                description: "Increases the All-Type RES PEN for the Ultimate DMG dealt by Acheron by 20%. The DMG dealt by Basic ATK and Skill will also be considered as Ultimate DMG and can reduce enemy toughness regardless of Weakness Types. When Weakness is broken, triggers the Lightning Weakness Break effect."
            }
        ]
    }, {
        name: 'Aventurine',
        rarity: 'fiveStar',
        path: 'Preservation',
        element: 'Imaginary',
        faction: "Interastral Peace Corporation, Strategic Investment Department, Ten Stonehearts",
        videos: {
            trailer: "kKj16KPl0jg",
            showcase: "2wMuR2Mrwt0"
        },
        intro:  `A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts. His Cornerstone is 'Aventurine of stratagems.' He possesses an air of frivolity and doesn't shy away from taking risks. His constant smile makes it difficult for people to discern his true feelings. 
He won his current position by wagering against fate itself. He views life as a high-stakes, high-return investment, and he plays this particular gamble with masterful ease.`,
        skills: {
            basicAtk: {
                name: "Straight Bet",
                energyGeneration: 20,
                toughnessDamage: 30,
                description: "Deals Imaginary DMG to a single target enemy."
            },
            skill: {
                name: "Cornerstone Deluxe",
                energyGeneration: 30,
                description: "Provides all allies with a Fortified Wager shield that can block DMG, lasting for 3 turns. When repeatedly gaining Fortified Wager, the Shield effect can stack, up to 200% of the Shield provided by the current Skill."
            },
            ultimate: {
                name: "Roulette Shark",
                energyCost: 110,
                energyGeneration: 5,
                toughnessDamage: 90,
                description: "Randomly gains 1 to 7 points of Blind Bet. Then inflicts Unnerved on a single target enemy, lasting for 3 turns, and deals Imaginary DMG to the single target enemy. When an ally hits an Unnerved enemy target, the CRIT DMG dealt increases."
            },
            talent: {
                name: "Shot Loaded Right",
                generation: 1,
                toughnessDamage: 10,
                description: "For any single ally with Fortified Wager, their Effect RES increases, and when they get attacked, Aventurine gains 1 point of Blind Bet. When Aventurine has Fortified Wager, he can resist Crowd Control debuffs. This effect can trigger again after 2 turns. Aventurine additionally gains 1 point of Blind Bet after getting attacked. Upon reaching 7 points of Blind Bet, Aventurine consumes the 7 points to launch a 7-hit follow-up attack, with each hit dealing Imaginary DMG to a single random enemy. Blind Bet is capped at 10 points."
            },
            technique: {
                name: "The Red or the Black",
                description: "1 of the following effects will be granted: There is a chance for DEF to increase by 24%. There is a high chance for DEF to increase by 36%. There is a small chance for DEF to increase by 60%. When this Technique is used repeatedly, the acquired effect with the highest buff value is retained. When the next battle starts, increases all allies' DEF by the corresponding value, lasting for 3 turns."
            }
        },
        traces: [
            {
                name: "Leverage",
                description: "For every 100 of Aventurine's DEF that exceeds 1600, increases his own CRIT Rate by 2%, up to a maximum increase of 48%."
            },
            {
                name: "Hot Hand",
                description: "When battle starts, grants all allies a Fortified Wager shield, whose Shield effect is equal to 100% of the one provided by the Skill, lasting for 3 turns."
            },
            {
                name: "Bingo!",
                description: "After an ally with Fortified Wager launches a follow-up attack, Aventurine accumulates 1 Blind Bet point. This effect can trigger up to 3 times, and its trigger count resets at the start of Aventurine's turn. After Aventurine launches his Talent's follow-up attack, provides all allies with a Fortified Wager that can block DMG equal to 7.2% of Aventurine's DEF plus 96, and additionally grants a Fortified Wager that can block DMG equal to 7.2% of Aventurine's DEF plus 96 to the ally with the lowest Shield effect, lasting for 3 turns."
            }
        ],
        eidolons: [
            {
                name: "Seven Pillars of Wisdom",
                description: "While Black Swan is active in battle, enemies afflicted with Wind Shear, Bleed, Burn, or Shock will have their corresponding Wind, Physical, Fire, or Lightning RES respectively reduced by 25%."
            },
            {
                name: "Weep Not For Me, My Lamb",
                description: "When an enemy target afflicted with Arcana is defeated, there is a 100% base chance of inflicting 6 stack(s) of Arcana on adjacent targets."
            },
            {
                name: "As Above, So Below",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "In Tears We Gift",
                description: "While in the Epiphany state, enemy targets have their Effect RES reduced by 10%. And at the start of their turn or when they get defeated, Black Swan regenerates 8 Energy. This Energy Regeneration effect can only trigger up to 1 time while Epiphany lasts. And this trigger count resets after the enemy gets inflicted with Epiphany again."
            },
            {
                name: "Linnutee Flyway",
                description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10."
            },
            {
                name: "Pantheon Merciful, Masses Pitiful",
                description: "When enemy targets get attacked by Black Swan's allies, Black Swan has a 65% base chance of inflicting 1 stack of Arcana on the target. Each time Black Swan inflicts Arcana on an enemy target, there is a 50% fixed chance to additionally increase the number of Arcana stacks afflicted this time by 1."
            }
        ]

    }, {    // change
        name: 'Black Swan',
        rarity: 'fiveStar',
        path: 'Nihility',
        element: 'Wind',
        faction: "Garden of Recollection",
        intro: `A Memokeeper from the Garden of Recollection. A mysterious and elegant soothsayer.
Bears a warm smile and is willing to patiently heed the words of another, and thus uses such means as a pretext to enter "memories" and gain a comprehension over the flow of all information. Feels strongly about collecting unique memories, yet the thoughts that guide her are hard to glean.`,
        videos: {
            trailer: "oz3AOWxq8KY",
            showcase: "CCef9QT8Tvc"
        },
        skills: {
            basicAtk: {
                name: "Percipience, Silent Dawn",
                energyGeneration: 20,
                toughnessDamage: 30,
                description: `Deals Wind DMG to a single target enemy, with a chance of inflicting 1 stack of Arcana. If the target already has Wind Shear, Bleed, Burn or Shock, each of them has a chance of inflicting 1 extra stack of Arcana to that target.`
            },
            skill: {
                name: "Decadence, False Twilight",
                energyGeneration: 30,
                toughnessDamage: 60,
                description: `Deals Wind DMG to a single target enemy and any adjacent targets. Inflicts 1 stack of Arcana on the enemy and the adjacent targets, and reducing their DEF that lasts for 3 turns.`
            },
            ultimate: {
                name: "Bliss of Otherworld's Embrace",
                energyCost: 120,
                energyGeneration: 5,
                toughnessDamage: 60,
                description: `Deals Wind DMG to all enemies. Inflicts Epiphany on all enemies for 2 turns. Enemies affected by Epiphany take more DMG in their turn, and their Arcana effect is regarded as Wind Shear, Bleed, Burn and Shock effects. Additionally, when their Arcana effect is triggered at the beginning of the next turn, the Arcana stacks are not resetted, and this effect can be triggered up to 1 time in Epiphany's duration. Its charges are replenished when Epiphany is applied again.`
            },
            talent: {
                name: "Loom of Fate's Caprice",
                description: `Every time an enemy target receives DoT at the start of each turn, there's a chance for it to be inflicted with Arcana. Enemy targets with Arcana receive Wind DoT equal to Black Swan's ATK at the start of each turn. Each stack of Arcana increases the Dot DMG Multiplier. Then Arcana resets to 1 stack. This can stack up to 50 times.
Black Swan triggers additional effects based on the number of Arcana stacks inflicted on the target:
3 or more - deals Wind Dot equal to Black Swan's ATK to adjacent targets, with a chance to inflict 1 stack of Arcana on said targets.
7 or more - enables the current DoT dealt this time to ignore 20% of the target's and the adjacent targets' DEF
`
            },
            technique: {
                name: "From Façade to Vérité",
                description: `When this Technique is used, there is a 150% base chance for each enemy to be inflicted with 1 stack of Arcana at the start of the next battle. Each successful application of Arcana on a target inflicts another stack of Arcana on the same target, and this repeats until the Arcana applied fails. Each successful application of Arcana is equal to 50% of the base chance of the previous successful application of Arcana of that target.`
            }
        },
        traces: [
            {
                name: "Viscera's Disquiet",
                description: `After using the Skill to hit an enemy that has Wind Shear, Bleed, Burn or Shock, each of these debuffs has a chance of inflicting 1 extra stack of Arcana.`
            },
            {
                name: "Goblet's Dredges",
                description: `There is a chance to inflict 1 stack of Arcana when a target enters battle. Every time an enemy target receives DoT during a single attack by an ally, there is a chance for the target to be inflicted with 1 stack of Arcana, stacking up to 3 times during 1 single attack.`
            },
            {
                name: "Candeflame's Portent",
                description: `Increases this unit's DMG by an amount equal to their Effect Hit Rate up to a certain maximum DMG increase.`
            }
        ],
        eidolons: [
            {
                name: "Seven Pillars of Wisdom",
                description: "While Black Swan is active in battle, enemies afflicted with Wind Shear, Bleed, Burn, or Shock will have their corresponding Wind, Physical, Fire, or Lightning RES respectively reduced by 25%."
            },
            {
                name: "Weep Not For Me, My Lamb",
                description: "When an enemy target afflicted with Arcana is defeated, there is a 100% base chance of inflicting 6 stack(s) of Arcana on adjacent targets."
            },
            {
                name: "As Above, So Below",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "In Tears We Gift",
                description: "While in the Epiphany state, enemy targets have their Effect RES reduced by 10%. And at the start of their turn or when they get defeated, Black Swan regenerates 8 Energy. This Energy Regeneration effect can only trigger up to 1 time while Epiphany lasts. And this trigger count resets after the enemy gets inflicted with Epiphany again."
            },
            {
                name: "Linnutee Flyway",
                description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10."
            },
            {
                name: "Pantheon Merciful, Masses Pitiful",
                description: "When enemy targets get attacked by Black Swan's allies, Black Swan has a 65% base chance of inflicting 1 stack of Arcana on the target. Each time Black Swan inflicts Arcana on an enemy target, there is a 50% fixed chance to additionally increase the number of Arcana stacks afflicted this time by 1."
            }
        ]
    }, {
        name: "Robin",
        rarity: 'fiveStar',
        element: "Physical",
        path: "Harmony",
        faction: "Penacony, The Family",
        intro: "A Halovian singer born in Penacony and rose to cosmic fame. An elegant and demure young lady. This time, she has been invited home by The Family to grace everyone with a song at the Charmony Festival. She can use the power of Harmony to broadcast her music, manifesting 'resonance' among not only her fans but all manner of lifeforms.",
        videos: {
            trailer: "QbPtrnmGlZ8",
            showcase: "i2YXaozZ6qg"
        },
        skills: {
            basicAtk: {
                name: "Wingflip White Noise",
                energyGeneration: 20,
                toughnessDamage: 30,
                description: "Deals Physical DMG to a single target enemy."
            },
            skill: {
                name: "Pinion's Aria",
                energyGeneration: 30,
                description: "Increase DMG dealt by all allies, lasting for 3 turns. This duration reduces by 1 at the start of Robin's every turn."
            },
            ultimate: {
                name: "Vox Harmonique, Opus Cosmique",
                energyCost: 160,
                energyGeneration: 5,
                description: "Robin enters the Concerto state and makes all other allies immediately take action. While in the Concerto state, increase all allies' ATK. Moreover, after every attack by allies, Robin deals Additional Physical DMG for 1 time, with a fixed CRIT Rate for this damage set at 100% and fixed CRIT DMG set at 150%. While in the Concerto state, Robin is immune to Crowd Control debuffs and cannot enter her turn or take action until the Concerto state ends. A Concerto countdown appears on the Action Order bar. When the countdown's turn begins, Robin exits the Concerto state and immediately takes action. The countdown has its own fixed SPD of 90."
            },
            talent: {
                name: "Tonal Resonance",
                description: "Increase all allies' CRIT DMG. Moreover, after allies attack enemy targets, Robin additionally regenerates 2 Energy for herself."
            },
            technique: {
                name: "Overture of Inebriation",
                description: "After using Technique, creates a special dimension around the character that lasts for 15 seconds. Enemies within this dimension will not attack Robin and will follow Robin while the dimension is active. After entering battle while the dimension is active, Robin regenerates 5 Energy at the start of each wave. Only 1 dimension created by allies can exist at the same time."
            }
        },
        traces: [
            {
                name: "Coloratura Cadenza",
                description: "When the battle begins, this character's action is Advanced Forward by 25%."
            },
            {
                name: "Impromptu Flourish",
                description: "While the Concerto state is active, the CRIT DMG dealt when all allies launch follow-up attacks increases by 25%."
            },
            {
                name: "Sequential Passage",
                description: "When using Skill, additionally regenerates 5 Energy."
            }
        ],
        eidolons: [
            {
                name: "Land of Smiles",
                description: "While the Concerto state is active, all allies' All-Type RES PEN increases by 24%."
            },
            {
                name: "Afternoon Tea For Two",
                description: "While the Concerto state is active, all allies' SPD increases by 16%. The Talent's Energy Regeneration effect additionally increases by 1."
            },
            {
                name: "Inverted Tuning",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Ultimate Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "Raindrop Key",
                description: "When using the Ultimate, dispels Crowd Control debuffs from all allies. While Robin is in the Concerto state, increases the Effect RES of all allies by 50%."
            },
            {
                name: "Lonestar's Lament",
                description: "Basic ATK Lv. +1, up to a maximum of Lv. 10. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "Moonless Midnight",
                description: "While the Concerto state is active, the CRIT DMG of the Additional Physical DMG caused by the Ultimate increases by 450%. The effect of Moonless Midnight can trigger up to 8 times. And the trigger count resets each time the Ultimate is used."
            }
        ]
    }, {
        name: 'Gallagher',
        rarity: 'fourStar',
        path: 'Abundance',
        element: 'Fire',
        faction: 'Penacony, Bloodhound Family, History Fictionologists',
        intro: "A security officer of the Bloodhound Family at Penacony. He was also a slovenly and indolent mixologist. Though unorganized in apparel and casual in how he made his drinks, he was always courteous toward guests but kept his vigilance about him.",
        videos: {
            trailer: null,
            showcase: "rb6lbyYZ2AQ"
        },
        skills: {
            basicAtk: {
                name: "Corkage Fee",
                energyGeneration: 20,
                toughnessDamage: 30,
                description: "Deals Fire DMG to a single target enemy."
            },
            enhancedBasicAtk: {
                name: "Nectar Blitz",
                energyGeneration: 20,
                toughnessDamage: 90,
                description: "Deals Fire DMG to a single target enemy."
            },
            skill: {
                name: "Special Brew",
                energyGeneration: 30,
                description: "Immediately heals a target ally."
            },
            ultimate: {
                name: "Champagne Etiquette",
                energyCost: 110,
                energyGeneration: 5,
                toughnessDamage: 60,
                description: "Inflicts Besotted on all enemies, lasting for 2 turns. At the same time, deals Fire DMG to all enemies, and enhances this unit's next Basic ATK to Nectar Blitz."
            },
            talent: {
                name: "Tipsy Tussle",
                restore: true,
                description: "The Besotted state increases the Break DMG that targets receive. Every time a Besotted target is attacked by an ally, the attacker's HP gets restored."
            },
            technique: {
                name: "Artisan Elixir",
                toughnessDamage: 60,
                description: "Immediately attacks the enemy. Upon entering battle, inflicts Besotted on all enemies, lasting for 2 turns, and deals Fire DMG to all enemies."
            }
        },
        traces: [
            {
                name: "Novel Concoction",
                description: "Increases this unit's Outgoing Healing by an amount equal to 50% of Break Effect, up to a maximum Outgoing Healing increase of 75%."
            },
            {
                name: "Organic Yeast",
                description: "After using the Ultimate, immediately Advances Forward this unit's Action by 100%."
            },
            {
                name: "Bottoms Up",
                description: "When Gallagher uses Nectar Blitz to attack Besotted enemies, the HP Restore effect of his Talent will also apply to other allies for this time."
            }
        ],
        eidolons: [
            {
                name: "Salty Dog",
                description: "When Gallagher enters the battle, regenerates 20 Energy and increases Effect RES by 50%."
            },
            {
                name: "Lion's Tail",
                description: "When using the Skill, removes 1 debuff from a target ally. At the same time, increases their Effect RES by 30%, lasting for 2 turns."
            },
            {
                name: "Corpse Reviver",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10."
            },
            {
                name: "Last Word",
                description: "Extends the duration of the Besotted state inflicted by Gallagher's Ultimate by 1 turn."
            },
            {
                name: "Death in the Afternoon",
                description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "Blood and Sand",
                description: "Increases Gallagher's Break Effect by 20% and Weakness Break Efficiency by 20%."
            }
        ]
    }, {
        name: 'Misha',
        rarity: 'fourStar',
        path: 'Destruction',
        element: 'Ice',
        faction: 'Penacony, The Nameless',
        intro: "A lovable and thoughtful bellboy of The Reverie Hotel. He wished to become an intergalactic adventurer like his grandfather. He was extremely hardworking and was skilled at fixing a variety of machines. He also had a fondness for sharing interstellar rumors with guests. He hoped he could grow up faster and looked forward to embarking on his own star-treading journey.",
        videos: {
            trailer: null,
            showcase: "9aqel3hHRgk"
        },
        skills: {
            basicAtk: {
                name: "E—Excuse Me, Please!",
                energyGeneration: 20,
                toughnessDamage: 30,
                description: "Deals Ice DMG to a single target enemy."
            },
            skill: {
                name: "R—Room Service",
                energyGeneration: 30,
                toughnessDamage: 60,
                description: "Increases the Hits Per Action for Misha's next Ultimate by 1 hit. Deals Ice DMG to a single target enemy, and to adjacent targets."
            },
            ultimate: {
                name: "G—Gonna Be Late!",
                energyCost: 100,
                energyGeneration: 5,
                toughnessDamage: 30,
                maxHitsPerAction: 10,
                description: "Has 3 Hits Per Action by default. First, uses 1 hit to deal Ice DMG to a single target enemy. Then, the rest of the hits each deals Ice to a single random enemy. Just before each hit lands, there is a chance to Freeze the target, lasting for 1 turn. While Frozen, enemy targets cannot take any actions, and at the start of their turn, they receive Additional Ice DMG equal to Misha's ATK. This Ultimate can possess up to 10 Hits Per Action. After the Ultimate is used, its Hits Per Action will be reset to the default level."
            },
            talent: {
                name: "Horological Escapement",
                description: "Whenever any ally consumes 1 Skill Point, Misha's next Ultimate delivers 1 more Hit Per Action and Misha regenerates Energy."
            },
            technique: {
                name: "Wait, You Are So Beautiful!",
                description: "Creates a dimension that lasts for 15 seconds. Enemies caught in the dimension are inflicted with Dream Prison and stop all their actions. Upon entering battle against enemies afflicted with Dream Prison, increases the Hits Per Action for Misha's next Ultimate by 2 hits. Only 1 dimension created by allies can exist at the same time."
            }
        },
        traces: [
            {
                name: "Release",
                description: "Before the Ultimate's first hit lands, increases the base chance of Freezing the target by 80%."
            },
            {
                name: "Interlock",
                description: "When using the Ultimate, increases the Effect Hit Rate by 60%, lasting until the end of the Ultimate's current action."
            },
            {
                name: "Transmission",
                description: "When dealing DMG to Frozen enemies, increases CRIT DMG by 30%."
            }
        ],
        eidolons: [
            {
                name: "Whimsicality of Fancy",
                description: "When using the Ultimate, for every enemy on the field, additionally increases the Hits Per Action for the Ultimate by 1 hit, up to a maximum increase of 5 hits."
            },
            {
                name: "Yearning of Youth",
                description: "Before each hit of the Ultimate lands, there is a 24% base chance of reducing the target's DEF by 16% for 3 turns."
            },
            {
                name: "Vestige of Happiness",
                description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10."
            },
            {
                name: "Visage of Kinship",
                description: "Increases the DMG multiplier for each hit of the Ultimate by 6%."
            },
            {
                name: "Genesis of First Love",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "Estrangement of Dream",
                description: "When using the Ultimate, increases own DMG by 30%, lasting until the end of the turn. In addition, the next time the Skill is used, recovers 1 Skill Point(s) for the team."
            }
        ]
    }, {
        name: 'Sparkle',
        rarity: 'fiveStar',
        path: 'Harmony',
        element: 'Quantum',
        faction: "Masked Fools",
        intro: "A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous master of theatrics engrossed in playing roles. A woman of countless masks and many faces. Wealth, status, power... None of this matters to Sparkle. The only thing that can lure her interest is 'amusement.'",
        videos: {
            trailer: "RC6wQ-75uQU",
            showcase: "TC-kqoR7lUE"
        },
        skills: {
            basicAtk: {
                name: "Monodrama",
                energyGeneration: 20,
                toughnessDamage: 30,
                description: "Deals Quantum DMG to a single target enemy."
            },
            skill: {
                name: "Dreamdiver",
                energyGeneration: 30,
                description: "Increases the CRIT DMG of a single ally based on Sparkle's CRIT DMG plus, lasting for 1 turn. Advances Forward this ally's action by 50%. When Sparkle uses this ability on herself, the Action Advance effect will not trigger."
            },
            ultimate: {
                name: "The Hero with a Thousand Faces",
                energyCost: 110,
                energyGeneration: 5,
                description: "Recovers 4 Skill Points for the team and grants all allies Cipher. When allies with Cipher trigger the DMG Boost effect provided by Sparkle's Talent, each stack additionally increases its effect, lasting for 2 turns."
            },
            talent: {
                name: "Red Herring",
                description: "While Sparkle is on the battlefield, additionally increases the max number of Skill Points by 2. Whenever an ally consumes 1 Skill Point, all allies' DMG increases. This effect lasts for 2 turns and can stack up to 3 times."
            },
            technique: {
                name: "Unreliable Narrator",
                description: "Grants all allies Misdirect for 20 seconds. Characters with Misdirect will not be detected by enemies, and entering battle in the Misdirect state recovers 3 Skill Points for the team."
            }
        },
        traces: [
            {
                name: "Almanac",
                description: "When using Basic ATK, additionally regenerates 10 Energy."
            },
            {
                name: "Artificial Flower",
                description: "The CRIT DMG Boost effect provided by the Skill will extend to last until the start of the target's next turn."
            },
            {
                name: "Nocturne",
                description: "Increases all allies' ATK by 15%. When there are 1/2/3 Quantum allies in your team, increases Quantum-Type allies' ATK by 5%/15%/30%."
            }
        ],
        eidolons: [
            {
                name: "Suspension of Disbelief",
                description: "The Cipher effect applied by the Ultimate lasts for 1 extra turn. All allies affected by Cipher have their ATK increased by 40%."
            },
            {
                name: "Purely Fictitious",
                description: "Each Talent stack allows allies to ignore 8% of the enemy target's DEF when dealing DMG to enemies."
            },
            {
                name: "Pipedream",
                description: "Skill Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10."
            },
            {
                name: "Life Is a Gamble",
                description: "The Ultimate recovers 1 more Skill Point. The Talent additionally increases Max Skill Points by 1."
            },
            {
                name: "Parallax Truth",
                description: "Ultimate Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
            },
            {
                name: "Narrative Polysemy",
                description: "The CRIT DMG Boost effect of Sparkle's Skill  additionally increases by 30% of Sparkle's CRIT DMG, and when she uses her Skill, the CRIT DMG Boost effect will apply to all allies currently with Cipher. When Sparkle uses her Ultimate, this effect will spread to all allies with Cipher should the allied target have the CRIT DMG increase effect provided by the Skill active on them."
            }
        ]
    }
];
