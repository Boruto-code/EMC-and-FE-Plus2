ServerEvents.recipes(event => {
    const create = event.recipes.create

    create.sequenced_assembly(
        "kubejs:pink_slime",
        "minecraft:slime_ball",
        [
            create.filling(
                "kubejs:incomplete_pink_slime",
                [Fluid.of("mekanism:nutritional_paste"), "kubejs:incomplete_pink_slime"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_pink_slime").loops(1145)

    create.mechanical_crafting(
        "createaddition:creative_energy",
        [
            "AAAAAAAAA",
            "AAAAAAAAA",
            "AABBBBBAA",
            "AABBBBBAA",
            "AABBCBBAA",
            "AABBBBBAA",
            "AABBBBBAA",
            "AAAAAAAAA",
            "AAAAAAAAA"
        ],
        {
            A: "avaritia:infinity",
            B: "rainbowcompound:netherstar_ingot",
            C: "draconicevolution:creative_op_capacitor"
        }
    )

    create.mechanical_crafting(
        "create:creative_crate",
        [
            "AAAAAAAAA",
            "ACBBBBBCA",
            "ACBBBBBCA",
            "ACBBBBBCA",
            "ACCCDCCCA",
            "ACCCCCCCA",
            "ACCCCCCCA",
            "ACCCCCCCA",
            "AAAAAAAAA"
        ],
        {
            A: "create:experience_block",
            B: "rainbowcompound:netherstar_ingot",
            C: "mekanism:pellet_antimatter",
            D: "projecte:tome"
        }
    )

    create.mechanical_crafting(
        "create:creative_fluid_tank",
        [
            "AAAAAAAAA",
            "ACBDDDBCA",
            "ACBDDDBCA",
            "ACBDDDBCA",
            "ACCCCCCCA",
            "ACCCCCCCA",
            "ACCCCCCCA",
            "ACCCCCCCA",
            "AAAAAAAAA"
        ],
        {
            A: "create:experience_block",
            B: "mekanism:creative_fluid_tank",
            C: "rainbowcompound:netherstar_ingot",
            D: "create:fluid_tank"
        }
    )

    create.mechanical_crafting(
        "create:creative_motor",
        [
            "AAAAAAAAA",
            "ACCCECCCA",
            "ACCDDDCCA",
            "ACFDDDFCA",
            "ACCDDDCCA",
            "ACCBBBCCA",
            "ACCBBBCCA",
            "ACCBBBCCA",
            "AAAAAAAAA"
        ],
        {
            A: "create:experience_block",
            B: "create:blaze_burner",
            C: "rainbowcompound:netherstar_ingot",
            D: "create:fluid_tank",
            E: "create:creative_blaze_cake",
            F: "create:steam_engine"
        }
    )
    
    create.deploying(
        "create:creative_blaze_cake",
        ["create:creative_fluid_tank","mekanism:pellet_antimatter"]
    )

    create.compacting(
        Item.of("mekanism:pellet_antimatter"),
        Fluid.of("kubejs:liquid_antimatter").withAmount(1000)
    )
})