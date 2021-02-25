import { expect, it } from "@jest/globals";
import { workerData } from "worker_threads";
import {translator} from "./translator.js"

it ('Should translate a to .-', () => {
  const result = translator('a')
  expect(result).toBe('.-')
})

it ('Should translate -... to B', () => {
  const result = translator('-...')
  expect (result).toBe('B')
})

it('Should translate AuStRaLiA to .- ..- ... - .-. .- .-.. .. .-', () => {
  const result = translator('AuStRaLiA')
  expect (result).toBe('.- ..- ... - .-. .- .-.. .. .-')
})

it('Should translate .-.. ..- --. --- ... .. to lugosi', () => {
  const result = translator('.-.. ..- --. --- ... ..')
  expect (result).toBe("Lugosi")
})

it('Should translate Hello Andy to .... . .-.. .-.. ---  .- -. -.. -.--', () => {
  const result = translator('Hello Andy')
  expect (result).toBe('.... . .-.. .-.. ---  .- -. -.. -.--')
})

it('Should translate .- .-. ..- -... .-   .. ...   - .... .   -... . ... - to Aruba is the best', () => {
  const result = translator('.- .-. ..- -... .-   .. ...   - .... .   -... . ... -')
  expect (result).toBe('Aruba is the best')
})
it('should translate 1 to .----', () => {
  const result = translator('1')
  expect (result).toBe('.----')
})

it('should translate --... to "7" ', () => {
  const result = translator('--...')
  expect (result).toBe("7")
})

it('should not translate empty-string', () => {
  const result = translator(' ')
  expect(result).toBe('Not a valid input')
})

it('should not translate null', () => {
  const result = translator(null)
  expect(result).toBe('Not a valid input')
})


