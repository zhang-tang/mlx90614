


//% block="Non-contact IR Temperature Sensor"
//% weight=100 color=#5b3fe8 icon="\uf022"
namespace mlx90614 {
    
    export enum DataType {
        //% block="Object"
        Object = 1,
        //% block="Environment"
        Environment = 2,
    }

    export enum Unit {
        //% block="℃"
        Celsius = 1,
        //% block="F"
        Fahrenheit = 2,
    }
    
    /**
     * ...
     * @param addr to addr ,eg: 0x5A
     */

    //% block="Initialize MLX90614 address as %addr"
    //% weight=90
    export function init(addr: number) {
        
    }

    /**
     * ...
     * @param factor to factor ,eg: 1
     */

    //% block="Set the emissivity calibration coefficient %factor within the range of 0-1"
    //% factor.min=0 factor.max=1 factor.defl=1
    //% weight=80
    export function setCalibration(factor: number) {
         
    }

    /**
     * ...
     * @param type to type ,eg: DataType.Object
     * @param unit to unit ,eg: Unit.Celsius
     */

    //% block="MLX90614 measurement %type %unit"
    //% weight=70
    export function measureValue(type: DataType, unit: Unit): number {
        return 0;
    }

}
