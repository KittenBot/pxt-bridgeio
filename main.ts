/*
Riven
load dependency
"bridgeio": "file:../pxt-bridgeio"
*/

//% color="#31C7D5" weight=10 icon="\uf1e6"
namespace bridgeio {

    export enum ArduinoDigi {
        D0 = 150,
        D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13,
        A0 = 100,
        A1, A2, A3, A4, A5
    }

    export enum ArduinoAnalog {
        A0 = 100,
        A1,A2,A3,A4,A5
    }
    
    //% blockId=_digiwrite block="%pin Digital Write %value"
    //% weight=100
    export function DigiWrite(pin: ArduinoDigi, value: boolean): void {
        pins.pinByCfg(pin).digitalWrite(value);
    }

    //% blockId=iobit_digiread block="%pin Digital Read"
    //% weight=98
    export function DigiRead(pin: ArduinoDigi): boolean {
        return pins.pinByCfg(pin).digitalRead();
    }

    //% blockId=iobit_analogrd block="%pin Analog Read"
    //% weight=97
    export function AnalogRead(pin: ArduinoAnalog): number {
        const p = pins.pinByCfg(pin) as AnalogInPin;
        if (p)
            return p.analogRead();
        else
            return 0;
    }

    //% blockId=iobit_analogwr block="%pin Analog Write %value"
    //% weight=96
    export function AnalogWrite(pin: ArduinoAnalog, value: number): void {
        const p = pins.pinByCfg(pin) as AnalogOutPin;
        if (p) p.analogWrite(value);
    }

    
}
