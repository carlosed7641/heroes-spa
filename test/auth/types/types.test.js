import { types } from "../../../src/auth/types/types"

describe('Pruebas en "Types.js" ', () => {
  test('debe de regresar estos types', () => {
        const typesTest = types;
        expect(typesTest.login).toBe('[Auth] Login')
  })
  
})
