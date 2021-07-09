import { getTodos, getAddTodoButton } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should((t) => expect(t.length).equal(0));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(1));
  });
});
