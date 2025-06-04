Platform.mods.kubejs.name = "EMC & FE ++"


StartupEvents.registry("item", event => {
    event.create("kubejs:sun_star", "basic")
    event.create("kubejs:charged_sun_star", "basic")
    event.create("kubejs:incomplete_charged_sun_star", "basic")

    event.create("kubejs:copper_coin","basic")
    event.create("kubejs:iron_coin","basic")
    event.create("kubejs:gold_coin","basic")
    event.create("kubejs:diamond_coin","basic")
    event.create("kubejs:netherite_coin","basic")

    event.create("kubejs:incomplete_shadow_steel","basic")
    event.create("kubejs:incomplete_creative_blaze_cake","basic")
})