/**
 * Serviço responsável por executar operações da calculadora.
 * 
 * @author Nilson Lacerda <onillacerda.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // Define as constantes utilizadas para identificar as operações
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }


calcular(num1: number, num2: number, operacao: string): number {
  let resultado: number; // armazena o resultado da operação

  switch(operacao) {
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
    break;
    case CalculadoraService.SUBTRACAO:
      resultado = num1 - num2;
    break;
    case CalculadoraService.DIVISAO:
      resultado = num1 / num2;
    break;
    case CalculadoraService.MULTIPLICACAO:
      resultado = num1 * num2;
    break;
    default:
      resultado = 0;
  }
  return resultado;
}
}
