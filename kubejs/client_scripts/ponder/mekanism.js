Ponder.registry(event => {
    event.create("mekanismgenerators:fission_reactor_casing")
        .scene(
            "kubejs:fission_reactor",
            "裂变反应堆的使用",
            "kubejs:mek_ponder",
            (scene,utils) => {
                scene.showBasePlate()
                scene.idle(20)

                scene.world.setBlocks([2,1,2,4,1,4],"mekanismgenerators:fission_reactor_casing")
            }
        )
})