import '@testing-library/jest-dom'
import { mockMatchMedia } from './__mocks__/mockWindow'
import 'whatwg-fetch'

jest.mock('@cbhq/cca', () => ({
  __esModule: true,
  ...jest.requireActual('@cbhq/cca'),
  logEvent: jest.fn(),
}))

beforeAll(() => {
  mockMatchMedia(window, jest.fn())
})
