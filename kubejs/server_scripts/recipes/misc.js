ServerEvents.recipes(event => {
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

    event.shapeless(
        Item.of("draconicevolution:creative_capacitor").withCount(4),
        "draconicevolution:creative_op_capacitor"
    )
})