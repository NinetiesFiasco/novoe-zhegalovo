import createBuildingPlacemark from "./createBuildingPlacemark"
import {
  busRoute,
  pedestrianBusRoute,
  pedestrianTrainRoute,
  trainRoute,
} from "./createRoutes"
import { createPedestrianPlacemark } from "./pedestrianPlacemark"
import { createBus } from "./busPlacemark"
import { createTrain } from "./trainPlacemark"
import { createMetro } from "./metroPlacemark"
import { createYarick } from "./yarickPlacemark"

const createYaMapObjects = (): any => {
  const mapObjects = []

  mapObjects.push(createBuildingPlacemark())

  mapObjects.push(
    pedestrianTrainRoute(),
    trainRoute(),
    pedestrianBusRoute(),
    busRoute(),
  )

  mapObjects.push(...createPedestrianPlacemark())

  mapObjects.push(createBus())
  mapObjects.push(createTrain())
  mapObjects.push(createMetro())
  mapObjects.push(createYarick())

  return mapObjects
}

export { createYaMapObjects }
