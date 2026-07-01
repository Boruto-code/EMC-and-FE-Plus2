ServerEvents.recipes(event => {
    const avaritia = event.recipes.avaritia

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
            "CGINLNPGC",
            "CGORQRUGC",
            "EHMTSTMHE",
            "CGORQRUGC",
            "CGINLNPGC",
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
            M: "kubejs:pink_slime",
            N: "integrateddynamics:energy_battery_creative",
            O: "refinedstorage:creative_wireless_crafting_monitor",
            P: "mekanism:creative_energy_cube",
            Q: "botania:creative_pool",
            R: "kubejs:creative_capacitor_core",
            S: "draconicevolution:creative_op_capacitor",
            T: "mythicbotany:mjoellnir",
            U: "refinedstorage:creative_wireless_grid"
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
        "kubejs:creative_capacitor_core"
        [
            "AAAACAAAA",
            "AEEBCBEEA",
            "AEBFCFBEA",
            "ABFFCFFBA",
            "CCCCDCCCC",
            "ABFFCFFBA",
            "AEBFCFBEA",
            "AEEBCBEEA",
            "AAAACAAAA"
        ],
        {
            A: "kubejs:compressed_awakened_draconium_block",
            B: "draconicevolution:chaotic_crafting_injector",
            C: "draconicevolution:reactor_stabilizer",
            D: "draconicevolution:reactor_core",
            E: "draconicevolution:chaotic_core",
            F: "kubejs:chaotic_capacitor_core"
        }
    )

    avaritia.shaped_table(
        4,
        "draconicevolution:creative_op_capacitor"
        [
            "BBCCCCCBB",
            "BBBBBBBBB",
            "CBAAAAABC",
            "CBACECABC",
            "CBAEDEABC",
            "CBACECABC",
            "CBAAAAABC",
            "BBBBBBBBB",
            "BBCCCCCBB"
        ],
        {
            A: "draconicevolution:awakened_draconium_block",
            B: "kubejs:compressed_awakened_draconium_block",
            C: "draconicevolution:reactor_stabilizer",
            D: "draconicevolution:reactor_core",
            E: "kubejs:creative_capacitor_core"
        }
    )

    avaritia.shaped_table(
        4,
        "refinedstorage:creative_wireless_crafting_monitor",
        [
            "HH     HH",
            "H       H",
            " BCCCCCB ",
            " CDDFEEC ",
            " CGFAFGC ",
            " CDDFEEC ",
            " BCCCCCB ",
            "H       H",
            "HH     HH"
        ],
        {
            A: "avaritia:endest_pearl",
            B: "refinedstorage:range_upgrade",
            C: "refinedstorage:wireless_transmitter",
            D: "refinedstorage:destruction_core",
            E: "refinedstorage:construction_core",
            F: "refinedstorage:wireless_crafting_monitor",
            G: "refinedstorage:network_receiver",
            H: "refinedstorage:storage_housing"
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
            "AAAACAAAA",
            "AAABABAAA",
            "AABAAABAA",
            "AAAAAAAAA",
            "AAAAAAAAA"
        ],
        {
            A: "#functionalstorage:drawer",
            B: "functionalstorage:netherite_upgrade",
            C: "projecte:tome"
        }
    )

    avaritia.shaped_table(
        4,
        "functionalstorage:creative_vending_upgrade",
        [
            "         ",
            "   BBB   ",
            "  B   B  ",
            "  B   B  ",
            "  B A    ",
            "  B   B  ",
            "  B   B  ",
            "   BBB   ",
            "         "
        ],
        {
            A: "functionalstorage:max_storage_upgrade",
            B: "mekanism:pellet_antimatter"
        }
    )

    event.remove({id: "avaritia:ae2_creative_energy_cell"})
    event.remove({id: "avaritia:mek_creative_bin"})
    event.remove({id: "avaritia:mek_creative_energy_cube"})
    event.remove({id: "avaritia:mek_creative_fluid_tank"})
    event.remove({id: "avaritia:mek_creative_chemical_tank"})
    event.remove({id: "avaritia:de_creative_capacitor"})
    event.remove({id: "avaritia:de_creative_op_capacitor"})
})