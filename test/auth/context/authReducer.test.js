import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"


describe('Pruebas en authReducer', () => {
  test('debe de retornar  el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('debe de (login) llamar el login autenticar y estblecer el usuario', () => {

    const state = authReducer({ logged: false }, 
      {type: types.login,
      payload: {
          id: 'ABC',
          name: 'Carlos'
      }})

      expect(state).toEqual( {logged: true, user: {id: 'ABC', name: 'Carlos'} })

  })


})
