ServerEvents.recipes(events => {
    const create = events.recipes.create


    create.compacting(
        Item.of("mekanism:pellet_antimatter"),
        Fluid.of("kubejs:liquid_antimatter").withAmount(1000)
    )
})