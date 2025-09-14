Ponder.registry(event => {
    event.create([
        "mekanism:creative_chemical_tank",
        "mekanism:creative_fluid_tank"])//为创造化学品储罐,创造流体储罐加入本思索
        .scene(
            "kubejs:chuguan",//场景ID
            "创造储罐的使用",//左侧名称
            "kubejs:mek_chuguan",//场景文件
            (scene) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection([3,1,4,3,1,4],Direction.DOWN)
                scene.idle(10)
                scene.world.showSection([5,1,4,5,1,4],Direction.DOWN)
            }
        )
})