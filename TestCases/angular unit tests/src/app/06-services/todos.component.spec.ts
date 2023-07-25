import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { EMPTY, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
	let component: TodosComponent;
	let service: TodoService;

	beforeEach(() => {
		service = new TodoService(null);
		component = new TodosComponent(service);
	});

	it('should set todos property with the items returned from the server', () => {
		const todos = [
			{ id: 1, title: 'a' },
			{ id: 2, title: 'b' },
			{ id: 3, title: 'c' }
		] as any;
		spyOn(service, 'getTodos').and.returnValue(of(todos));

		component.ngOnInit();

		expect(component.todos).toEqual(todos);
	});

	fit('should call the server to save the changes when a new todo item is added', () => {
		const spy = spyOn(service, 'add').and.callFake(() => {
			return of();
		});

		component.add();

		expect(spy).toHaveBeenCalled();
	});

	xit('should add the new todo returned from the server',  async() => {
		const todos = { id: 1 } as any;
		const spy = spyOn(service, 'add').and.returnValue(of(todos));

		component.add();

		expect(component.todos.findIndex(todo => todo.id == 1)).toBeGreaterThan(-1);
	});

	it('should set the message property when server returns an error when adding a new todo', () => {
		const error = 'error from the server';
		const spy = spyOn(service, 'add').and.returnValue(throwError(error));

		component.add();

		expect(component.message).toBe(error);
	});

	it('should call the server to delete a todo item if the user confirms', () => {
		spyOn(window, 'confirm').and.returnValue(true);
		const spy = spyOn(service, 'delete').and.returnValue(EMPTY);

		component.delete(1);

		expect(spy).toHaveBeenCalledWith(1);
	});

	it('should NOT call the server to delete a todo item if the user cancels', () => {
		spyOn(window, 'confirm').and.returnValue(false);
		const spy = spyOn(service, 'delete').and.returnValue(EMPTY);

		component.delete(1);

		expect(spy).not.toHaveBeenCalled();
	});
});
