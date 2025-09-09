export interface ICup {
  name: string
  color: string
  size: 'sm' | 'md' | 'lg'
  material: 'glass' | 'metal' | 'plastic'
  type: 'tea' | 'coffee' | 'water'
  price: number
}

class Cup implements ICup {
  name!: string
  color!: string
  size!: 'sm' | 'md' | 'lg'
  material!: 'glass' | 'metal' | 'plastic'
  type!: 'tea' | 'coffee' | 'water'
  price!: number
}

interface ICupBuilder {
  setName(val: string): void
  setColor(val: string): void
  setSize(val: ICup['size']): void
  setMaterial(val: ICup['material']): void
  setType(val: ICup['type']): void
  setPrice(val: number): void
  getResult(): ICup
}

class CupBuilder implements ICupBuilder {
  cup!: ICup
  constructor() {
    this.cup = new Cup()
  }
  setName(val: string): void {
    this.cup.name = val
  }
  setColor(val: string): void {
    this.cup.color = val
  }
  setSize(val: ICup['size']): void {
    this.cup.size = val
  }
  setMaterial(val: ICup['material']): void {
    this.cup.material = val
  }
  setType(val: ICup['type']): void {
    this.cup.type = val
  }
  setPrice(val: number): void {
    this.cup.price = val
  }

  getResult() {
    return this.cup
  }
}

class SmallTeaGlassDirector {
  static construct(): ICup {
    const builder = new CupBuilder()
    builder.setName('small glass cup')
    builder.setColor('transparent')
    builder.setMaterial('glass')
    builder.setPrice(5)
    builder.setSize('sm')
    builder.setType('tea')

    return builder.getResult()
  }
}
class BlackLargeCoffeeGlassDirector {
  static construct(): ICup {
    const builder = new CupBuilder()
    builder.setName('black coffee cup')
    builder.setColor('black')
    builder.setMaterial('glass')
    builder.setPrice(25)
    builder.setSize('lg')
    builder.setType('coffee')
    return builder.getResult()
  }
}
class YellowMediumWaterGlassDirector {
  static construct(): ICup {
    const builder = new CupBuilder()
    builder.setName('yellow water cup')
    builder.setColor('yellow')
    builder.setMaterial('plastic')
    builder.setPrice(3)
    builder.setSize('md')
    builder.setType('water')
    return builder.getResult()
  }
}
class SmallWaterMetalDirector {
  static construct(): ICup {
    const builder = new CupBuilder()
    builder.setName('metal water cup')
    builder.setMaterial('metal')
    builder.setPrice(7)
    builder.setSize('sm')
    builder.setType('water')
    return builder.getResult()
  }
}

export { SmallTeaGlassDirector, BlackLargeCoffeeGlassDirector, YellowMediumWaterGlassDirector, SmallWaterMetalDirector }
