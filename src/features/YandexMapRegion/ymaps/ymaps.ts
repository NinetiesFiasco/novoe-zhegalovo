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

const createYaMapObjects = (zoom: number): any => {
  const mapObjects = []

  let buildingSize = zoom === 11 ? 96 : zoom === 10 ? 64 : 32
  mapObjects.push(createBuildingPlacemark(zoom, buildingSize))

  mapObjects.push(
    pedestrianTrainRoute(),
    trainRoute(),
    pedestrianBusRoute(),
    busRoute(),
  )

  if (zoom !== 9) {
    mapObjects.push(...createPedestrianPlacemark(zoom))
  }

  mapObjects.push(createBus(zoom))
  mapObjects.push(createTrain(zoom))

  return mapObjects
}

export { createYaMapObjects }
