ServerEvents.recipes(event => {
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "draconicevolution:wyvern_core"
        },
        "ingredients": [
            {
                "item": "draconicevolution:draconium_ingot"
            },
            {
                "item": "draconicevolution:wyvern_energy_core"
            },
            {
                "item": "draconicevolution:draconium_ingot"
            },
            {
                "item": "draconicevolution:wyvern_energy_core"
            },
            {
                "item": "draconicevolution:wyvern_energy_core"
            },
            {
                "item": "draconicevolution:draconium_ingot"
            },
            {
                "item": "draconicevolution:wyvern_energy_core"
            },
            {
                "item": "draconicevolution:draconium_ingot"
            }
        ],
        "result": {
            "item": "kubejs:wyvern_capacitor_core"
        },
        "tier": "WYVERN",
        "total_energy": 8000000
    })

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "kubejs:wyvern_capacitor_core"
        },
        "ingredients": [
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            {
                "item": "draconicevolution:awakened_core"
            },
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            {
                "item": "draconicevolution:draconic_energy_core"
            },
            {
                "item": "draconicevolution:draconic_energy_core"
            },
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            {
                "item": "draconicevolution:draconic_energy_core"
            },
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            }
        ],
        "result": {
            "item": "kubejs:draconic_capacitor_core"
        },
        "tier": "DRACONIC",
        "total_energy": 32000000
    })

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "kubejs:draconic_capacitor_core"
        },
        "ingredients": [
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            {
                "item": "draconicevolution:chaotic_core"
            },
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            {
                "item": "draconicevolution:chaotic_energy_core"
            },
            {
                "item": "draconicevolution:chaotic_energy_core"
            },
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            {
                "item": "draconicevolution:chaotic_energy_core"
            },
            {
                "item": "draconicevolution:awakened_draconium_ingot"
            }
        ],
        "result": {
            "item": "kubejs:chaotic_capacitor_core"
        },
        "tier": "CHAOTIC",
        "total_energy": 128000000
    })

    event.shapeless("draconicevolution:wyvern_capacitor", "kubejs:wyvern_capacitor_core")
    event.shapeless("draconicevolution:draconic_capacitor", "kubejs:draconic_capacitor_core")
    event.shapeless("draconicevolution:chaotic_capacitor", "kubejs:chaotic_capacitor_core")
    event.shapeless("draconicevolution:creative_capacitor", "kubejs:creative_capacitor_core")
    event.shapeless("kubejs:wyvern_capacitor_core", "draconicevolution:wyvern_capacitor")
    event.shapeless("kubejs:draconic_capacitor_core", "draconicevolution:draconic_capacitor")
    event.shapeless("kubejs:chaotic_capacitor_core", "draconicevolution:chaotic_capacitor")
    event.shapeless("kubejs:creative_capacitor_core", "draconicevolution:creative_capacitor")

    event.remove("draconicevolution:tools/wyvern_capacitor")
    event.remove("draconicevolution:tools/draconic_capacitor")
    event.remove("draconicevolution:tools/chaotic_capacitor")
})