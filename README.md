# Kitten-Bridge

A SAMD51 based arduino compatible mainboard for multiple purposes.

![image](https://user-images.githubusercontent.com/3390845/68564131-b2346e80-048a-11ea-9a24-f42172c13b44.png)



## Feature

* MCU: ATSAMD51J19 
* Dimension: 77.8 x 53.3 x 13mm
* Arduino IO compatible
* Microbit compatible edge connector
* On board components:
  * Light sensor
  * Temperature sensor
  * MPU6050 (accelerator and gyro)
  * 1bit RGB neopixel
  * SD card slot
  * 2M byte spi flash
* Power input
  * USB: 5v, max 1A for peripherals
  * DC socket: 6~12V, max 3A for peripherals
* GPIO:
  * Digital IO: D0~D13, A0~A5
  * Analog IO: A0~A5
  * 20 way PWM output
  * 1 SPI interface
  * 1 SD slot
  * 1 SWD debug interface
  * 1 common bluetooth/ wifi socket


## License

MIT

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)

```package
nanobit=github:Kittenbot/pxt-bridgeio
```