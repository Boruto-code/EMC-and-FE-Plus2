ServerEvents.recipes(event => {
    const create = event.recipes.create
    const avaritia = event.recipes.avaritia
    const enderio = event.recipes.enderio
    const mekanism = event.recipes.mekanism


    create.sequenced_assembly(
        Item.of("kubejs:charged_sun_star").withChance(1),
        "kubejs:sun_star",
        [
            create.deploying("kubejs:incomplete_charged_sun_star",["kubejs:incomplete_charged_sun_star","projectexpansion:compact_sun"]),
            create.deploying("kubejs:incomplete_charged_sun_star",["kubejs:incomplete_charged_sun_star","rainbowcompound:netherstar_ingot"])
        ]
    ).transitionalItem("kubejs:incomplete_charged_sun_star").loops(128)

    create.sequenced_assembly(
        Item.of("create:shadow_steel").withChance(1),
        "create:chromatic_compound",
        [
            create.deploying("kubejs:incomplete_shadow_steel",["kubejs:incomplete_shadow_steel","draconicevolution:chaos_shard"]),
            create.deploying("kubejs:incomplete_shadow_steel",["kubejs:incomplete_shadow_steel","mekanism:ingot_steel"])
        ]
    ).transitionalItem("kubejs:incomplete_shadow_steel").loops(3)

    create.sequenced_assembly(
        Item.of("create:creative_blaze_cake").withChance(1),
        "create:creative_fluid_tank",
        [
            create.filling("kubejs:incomplete_creative_blaze_cake",
                [Fluid.of("kubejs:liquid_antimatter").withAmount(100),Item.of("kubejs:incomplete_creative_blaze_cake")])
        ]
    ).transitionalItem("kubejs:incomplete_creative_blaze_cake").loops(100)

    create.mixing(
        Fluid.of("kubejs:liquid_antimatter").withAmount(1000),
        Item.of("mekanism:pellet_antimatter")
    )

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


    avaritia
        .compressor("projecte:watch_of_flowing_time", Item.of('tiab:time_in_a_bottle',{storedTime:100000*3600}))
        .timeCost(240)
        .inputCount(128)

    avaritia.shaped_table(
        4,
        "projecte:tome",
        [
            "ABCCDCCBA",
            "BFGGJGGFB",
            "CGINONPGC",
            "CGLTRQLGC",
            "EHMRSRMHE",
            "CGLQRTLGC",
            "CGINONPGC",
            "BFGGKGGFB",
            "ABCCDCCBA"
        ],
        {
            A: "projectexpansion:compact_sun",
            B: "projectexpansion:gargantuan_star_omega",
            C: "mekanism:pellet_antimatter",
            D: "create:creative_blaze_cake",
            E: "create:creative_motor",
            F: "create:creative_fluid_tank",
            G: "bigreactors:insanite_block",
            H: "createaddition:creative_energy",
            I: "refinedstorage:creative_controller",
            J: "refinedstorage:creative_fluid_storage_disk",
            K: "refinedstorage:creative_storage_disk",
            L: "ae2:creative_energy_cell",
            M: "mekanism:creative_fluid_tank",
            N: "integrateddynamics:energy_battery_creative",
            O: "mekanism:creative_chemical_tank",
            P: "mekanism:creative_energy_cube",
            Q: "botania:creative_pool",
            R: "draconicevolution:creative_capacitor",
            S: "draconicevolution:creative_op_capacitor",
            T: "mythicbotany:mjoellnir"
        }
    )

    avaritia.shaped_table(
        4,
        "kubejs:sun_star",
        [
            "    S    ",
            "    S    ",
            "   SAS   ",
            "  SAAAS  ",
            "SSAAAAASS",
            "  SAAAS",
            "   SAS   ",
            "    S    ",
            "    S    "
        ],
        {
            S: "projectexpansion:compact_sun",
            A: "mekanism:pellet_antimatter"
        }
    )

    avaritia.shaped_table(
        4,
        "mekanism:creative_bin",
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
            A: "mekanism:ultimate_bin",
            B: "mekanism:pellet_antimatter",
            C: "projecte:tome"
        }
    )

    avaritia.shaped_table(
        4,
        Item.of("mekanism:creative_energy_cube",
            {mekData:
                {componentConfig:{config0:{side2:4,side4:4,side5:4,side0:4,side1:4,side3:4}},
                EnergyContainers:[{Container:0,stored:"18446744073709551615.9999"}]}
            }),
        [
            "AAABDBAAA",
            "ACCCFCCCA",
            "ACECFCECA",
            "BCCCGCCCB",
            "DFFGHGFFD",
            "BCCCGCCCB",
            "ACECFCECA",
            "ACCCFCCCA",
            "AAABDBAAA"
        ],
        {
            A: "mekanism:induction_casing",
            B: "mekanism:induction_port",
            C: "mekanism:ultimate_induction_cell",
            D: "mekanism:ultimate_induction_provider",
            E: "avaritia:infinity_catalyst",
            F: "mekanism:ultimate_energy_cube",
            G: "avaritia:infinity_ingot",
            H: "draconicevolution:creative_op_capacitor"
        }
    )

    avaritia.shaped_table(
        4,
        Item.of("draconicevolution:creative_op_capacitor").withCount(2),
        [
            "AAABDBAAA",
            "ACCCFCCCA",
            "ACECFCECA",
            "BCCCGCCCB",
            "DFFGHGFFD",
            "BCCCGCCCB",
            "ACECFCECA",
            "ACCCFCCCA",
            "AAABDBAAA"
        ],
        {
            A: "mekanism:induction_casing",
            B: "mekanism:induction_port",
            C: "mekanism:ultimate_induction_cell",
            D: "mekanism:ultimate_induction_provider",
            E: "mekanism:pellet_antimatter",
            F: "mekanism:ultimate_energy_cube",
            G: "avaritia:infinity_ingot",
            H: "draconicevolution:creative_op_capacitor"
        }
    )

    avaritia.shaped_table(
        4,
        "functionalstorage:max_storage_upgrade",
        [
            "AAAAAAAAA",
            "AAAABAAAA",
            "AAABABAAA",
            "AABAAABAA",
            "AAAABAAAA",
            "AAABABAAA",
            "AABAAABAA",
            "AAAAAAAAA",
            "AAAAAAAAA"
        ],
        {
            A: "#functionalstorage:drawer",
            B: "functionalstorage:netherite_upgrade"
        }
    )

    avaritia.shaped_table(
        4,
        "functionalstorage:creative_vending_upgrade",
        [
            "AAAAAAAAA",
            "AAACCCAAA",
            "AACAAACAA",
            "AACAAACAA",
            "AACABAAAA",
            "AACAAACAA",
            "AACAAACAA",
            "AAACCCAAA",
            "AAAAAAAAA"
        ],
        {
            A: "functionalstorage:max_storage_upgrade",
            B: "projecte:tome",
            C: "mekanism:pellet_antimatter"
        }
    )


    enderio.alloy_smelting(
        Item.of("draconicevolution:awakened_core"),
        [
            "4x draconicevolution:wyvern_core",
            "minecraft:nether_star",
            "4x draconicevolution:awakened_draconium_ingot"
        ]
    ).energy(1000000).experience(3)

    enderio.alloy_smelting(
        Item.of("draconicevolution:awakened_draconium_block").withCount(4),
        [
            "6x draconicevolution:draconium_core",
            "draconicevolution:dragon_heart",
            "4x draconicevolution:draconium_block"
        ]
    ).energy(2000000).experience(3)


    event.shaped(
        "bigreactors:energycore",
        [
            "ABA",
            "CDC",
            "ABA"
        ],
        {
            A: "bigreactors:anglesite_crystal",
            B: "minecraft:redstone_block",
            C: "minecraft:ender_eye",
            D: "mekanism:block_refined_obsidian"
        }
    )
    event.shaped(
        "integrateddynamics:energy_battery_creative",
        [
            "III",
            "IDI",
            "III"
        ],
        {
            D: "draconicevolution:creative_op_capacitor",
            I: "integrateddynamics:energy_battery"
        }
    )
    event.shaped(
        "ae2:creative_energy_cell",
        [
            "AAA",
            "ADA",
            "AAA"
        ],
        {
            D: "draconicevolution:creative_op_capacitor",
            A: "megacells:mega_energy_cell"
        }
    )
    event.shaped(
        "ae2:creative_item_cell",
        [
            " A ",
            "BCD",
            " E "
        ],
        {
            A: "projecte:tome",
            B: "functionalstorage:creative_vending_upgrade",
            C: "ae2_mega_things:item_disk_drive_256m",
            D: "create:creative_crate",
            E: "mekanism:creative_bin"
        }
    )

    event.remove({id: "avaritia:mek_creative_bin"})
    event.remove({id: "avaritia:ae2_creative_energy_cell"})
    event.remove({id: "avaritia:mek_creative_energy_cube"})
})