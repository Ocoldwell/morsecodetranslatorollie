import { expect, it } from "@jest/globals";
import { workerData } from "worker_threads";
import {translateMorseToEnglish, translateEnglishToMorse} from "./translator.js"

it ('Should translate a to .-', () => {
  const result = translateEnglishToMorse('a')
  expect(result).toBe('.-')
})

it ('Should translate -... to b', () => {
  const result = translateMorseToEnglish('b')
  expect (result).toBe('-...')
})

it('Should translate AuStRaLiA to .- ..- ... - .-. .- .-.. .. .-', () => {
  const result = translateEnglishToMorse('AuStRaLiA')
  expect (result).toBe('.- ..- ... - .-. .- .-.. .. .-')
})

it('Should translate .-.. ..- --. --- ... .. to lugosi', () => {
  const result = translateMorseToEnglish('.-.. ..- --. --- ... ..')
  expect (result).toBe(Lugosi)
})

it('Should translate Hello Andy to .... . .-.. .-.. ---  .- -. -.. -.--', () => {
  const result = translateEnglishToMorse('Hello Andy')
  expect (result).toBe('.... . .-.. .-.. ---  .- -. -.. -.--')
})

it('Should translate .- .-. ..- -... .-  .. ...  - .... .  -... . ... - to Aruba is the best', () => {
  const result = translateMorseToEnglish('.- .-. ..- -... .-  .. ...  - .... .  -... . ... -')
  expect (result).toBe('Aruba is the best')
})
it('should translate 1 to .----', () => {
  const result = translateEnglishToMorse('1')
  expect (result).toBe('.----')
})

it('should translate --... to "7" ', () => {
  const result = translateMorseToEnglish('--...')
  expect (result).toBe(7)
})

it('should not translate empty-string', () => {
  const result = translateMorseToEnglish(' ')
  expect(result).toBe('Not a valid input')
})

it('should not translate null', () => {
  const result = translateMorseToEnglish(null)
  expect(result).toBe('Not a valid input')
})

it('should not translate empty-string', () => {
  const result = translateEnglishtoMorse(' ')
  expect(result).toBe('Not a valid input')
})

