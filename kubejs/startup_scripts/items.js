Platform.mods.kubejs.name = "EMC & FE ++"


StartupEvents.registry("item", event => {
    event.create("kubejs:copper_coin")
    event.create("kubejs:iron_coin")
    event.create("kubejs:gold_coin")
    event.create("kubejs:diamond_coin")
    event.create("kubejs:netherite_coin")

    event.create("kubejs:pink_slime")

    event.create("kubejs:wyvern_capacitor_core")
    event.create("kubejs:draconic_capacitor_core")
    event.create("kubejs:chaotic_capacitor_core")
    event.create("kubejs:creative_capacitor_core")

    event.create("kubejs:incomplete_pink_slime", "create:sequenced_assembly")
    event.create("kubejs:incomplete_creative_blaze_cake", "create:sequenced_assembly")
})